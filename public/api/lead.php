<?php
// Procor lead endpoint for (1) consultation/callback requests and (2) free-resource downloads.
// LEGACY fallback for the old Apache/static host. The Next.js app now posts JSON to
// /api/contact (Resend via Node). This file is kept so existing static deployments keep working.
//
// If RESEND_API_KEY + CONTACT_FROM_EMAIL + CONTACT_TO_EMAIL are set in the environment
// (.htaccess SetEnv, vhost config, or exported vars), mail is sent via the Resend API.
// Otherwise it falls back to PHP mail() and always appends to the CSV backup.
header('Content-Type: application/json');
header('X-Robots-Tag: noindex');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false]); exit; }

// Accept both JSON (new form) and classic form posts
$in = [];
$ct = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($ct, 'application/json') !== false) {
  $raw = file_get_contents('php://input');
  $decoded = json_decode($raw ?: '{}', true);
  if (is_array($decoded)) $in = $decoded;
} else {
  $in = $_POST;
}
if (!empty($in['website'])) { echo json_encode(['ok'=>true]); exit; } // honeypot: silently drop bots

function f($k,$max=500){ global $in; return trim(mb_substr(strip_tags($in[$k] ?? ''),0,$max)); }
$type = f('type',20) === 'resource' ? 'resource' : 'consultation';
$d = ['type'=>$type,'name'=>f('name',120),'email'=>f('email',160),'company'=>f('company',160),'phone'=>f('phone',30),
      'service'=>f('service',80),'resource'=>f('resource',80),'message'=>f('message',2000),
      'updates_consent'=>(f('updates',5)==='yes'?'yes':'no')];

$errors = [];
if (mb_strlen($d['name']) < 2) $errors[] = 'name';
if (!filter_var($d['email'], FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if (mb_strlen($d['company']) < 2) $errors[] = 'company';
if ($type === 'consultation' && strlen(preg_replace('/\D/','',$d['phone'])) < 10) $errors[] = 'phone';
if ($errors) { http_response_code(422); echo json_encode(['ok'=>false,'errors'=>$errors]); exit; }

$subject = $type === 'resource'
  ? 'Resource download: '.$d['resource'].' – '.$d['company']
  : 'Consultation request: '.$d['company'];
$body = ($type === 'resource' ? "New resource download" : "New consultation request")." from procor.co.in\n\n";
foreach ($d as $k=>$v) if ($v !== '') $body .= ucfirst($k).": ".$v."\n";
$body .= "\nPage: ".($_SERVER['HTTP_REFERER'] ?? '-')."\nTime: ".date('c')."\n";

$resendKey = getenv('RESEND_API_KEY') ?: '';
$resendFrom = getenv('CONTACT_FROM_EMAIL') ?: '';
$resendTo = getenv('CONTACT_TO_EMAIL') ?: '';
$sent = false;

if ($resendKey && $resendFrom && $resendTo) {
  // Send via Resend HTTP API
  $payload = json_encode([
    'from' => $resendFrom,
    'to' => [$resendTo],
    'reply_to' => $d['email'],
    'subject' => $subject,
    'text' => $body,
  ]);
  $ch = curl_init('https://api.resend.com/emails');
  curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer '.$resendKey],
    CURLOPT_TIMEOUT => 15,
  ]);
  $resp = curl_exec($ch);
  $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  $sent = ($code >= 200 && $code < 300);
} else {
  $headers = "From: Procor Website <no-reply@procor.co.in>\r\nReply-To: ".$d['email']."\r\nContent-Type: text/plain; charset=UTF-8";
  $sent = @mail($resendTo ?: 'info@procor.co.in', $subject, $body, $headers);
}

$row = array_merge([date('c')], array_values($d));
@file_put_contents(__DIR__.'/../../procor-leads.csv',
  implode(',', array_map(fn($v)=>'"'.str_replace('"','""',$v).'"', $row))."\n", FILE_APPEND|LOCK_EX);
echo json_encode(['ok'=>(bool)$sent]);
