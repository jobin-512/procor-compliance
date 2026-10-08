from common import *
from reportlab.pdfgen import canvas as cv
import io
from pypdf import PdfReader, PdfWriter
P=lambda t,s='cell':Paragraph(t,ST[s])
OUT='../public/downloads/procor-payroll-compliance-health-check.pdf'
SECTIONS=[
 ('A. EPF and ESIC',[
  'You are registered under EPF and ESIC wherever they apply to you (EPF typically from 20 employees; ESIC typically from 10 employees in notified areas).',
  'Every eligible employee, including new joiners and contract staff, is enrolled (UAN / ESIC number) in the month they join.',
  'EPF ECR and ESIC contributions have been paid by the 15th of every month for the last 12 months.',
  "Contributions are calculated on the correct wage base, and your salary structure has been reviewed against the Labour Codes' definition of wages.",
  'Each month, EPF and ESIC challans are reconciled against the payroll register.']),
 ('B. Professional tax and Labour Welfare Fund',[
  'You hold professional tax registrations in every state that levies it and where you have employees.',
  "Professional tax is deducted using each state's own slabs, and deposits and returns follow each state's frequency.",
  'Labour Welfare Fund contributions are made on time in every state where they apply.',
  "You apply the rules of the state where each employee works, not only your head office's state.",
  'When you start employing people in a new state, registrations are completed before the first payroll there.']),
 ('C. TDS on salary',[
  'Employee investment declarations (Form 124, formerly Form 12BB) are collected and proofs verified before the final quarter.',
  'TDS on salary is deposited by the 7th of the following month (30 April for March).',
  'Quarterly salary TDS returns are filed on time on the new Form 138 (formerly 24Q), and your software has been updated for the Income-tax Act, 2025.',
  'Annual salary TDS certificates (Form 130, formerly Form 16) reach employees by 15 June.',
  'Defaults and mismatches shown on TRACES are reviewed and corrected every quarter.']),
 ('D. Labour-law records',[
  'Every office and establishment has a current Shops & Establishments (or equivalent) registration.',
  'Wages are checked against minimum wages every time the applicable rates are revised.',
  'Statutory registers (wages, attendance, leave and others that apply) are maintained and can be produced on request.',
  'Where applicable, statutory bonus is computed and paid within 8 months of the financial year-end.',
  'Gratuity liability is tracked, and gratuity is paid within 30 days of becoming payable.',
  'Your maternity benefit policy and practice meet current legal requirements.']),
 ('E. Payroll controls',[
  'There is a fixed monthly cut-off for payroll inputs, with documented approvals for changes.',
  'Payroll is computed by one person and independently reviewed by another before salaries are paid.',
  'Full & final settlements are paid within the timelines required under the Code on Wages, 2019 and your own policy.',
  'Payroll runs from a written SOP, so it can be completed on time if the usual person is unavailable.']),
 ('F. Governance and notices',[
  'One statutory calendar covers every payroll-related filing, with a named owner for each.',
  'Every notice received is logged, responded to on time and tracked to closure.',
  'Challans, returns and registers are stored so they can be retrieved quickly during an inspection or audit.',
  "Contractors' EPF and ESIC compliance for workers deployed with you is verified regularly.",
  'Applicability is reviewed at least once a year, or whenever headcount or locations change significantly.']),
]
assert sum(len(q) for _,q in SECTIONS)==30, sum(len(q) for _,q in SECTIONS)
W2=W-2*M; box='☐'
story=[P('How to use this checklist','kick'),P('Payroll compliance health check','h1'),
 P('Answer each of the 30 statements with <b>Yes</b>, <b>No</b> or <b>Not sure</b>. Be strict: if you can\'t show evidence for a "Yes" today, mark it "Not sure". It takes about 15 minutes, and works best when HR and finance fill it in together.','p'),
 P('Thresholds and requirements vary by state, industry and headcount, and India\'s Labour Codes and the Income-tax Act, 2025 are changing several details. Treat any "Not sure" as something to check, not a finding.','small'),Spacer(1,6)]
n=0
for title,qs in SECTIONS:
    rows=[hdr(['#','Statement','Yes','No','Not sure'])]
    for q in qs:
        n+=1; rows.append([P(str(n),'cellb'),P(q),P(box),P(box),P(box)])
    story+=[KeepTogether([P(title,'h2'),table(rows,[10*mm,W2-10*mm-3*16*mm,16*mm,16*mm,16*mm])])]
story+=[PageBreak(),P('Your score','kick'),P('What your answers mean','h1'),
 P('Count every <b>No</b> and every <b>Not sure</b>. Together, they are your number of open items.','p'),
 table([hdr(['Open items','Where you stand','What to do next'])]+[[P(a,'cellb'),P(b),P(c)] for a,b,c in [
  ('0 – 3','Well controlled','Keep the calendar current and re-run this check every six months or after any big change in headcount or locations.'),
  ('4 – 9','Exposed in places','Prioritise items in sections A and C first: late EPF, ESIC and TDS carry interest and penalties that grow every month.'),
  ('10 or more','High risk','Payroll compliance likely depends on individuals rather than a process. Consider a full review of registrations, filings and records.')]],[28*mm,40*mm,W2-68*mm]),
 Spacer(1,14),P('Where to start','h2'),
 P('1. Fix anything that affects money leaving your account late (sections A and C). 2. Close registration gaps (items 1, 6 and 16). 3. Put the calendar and SOP in place (items 22, 25 and 26) so the same gaps don\'t reopen.','p'),
 Spacer(1,14),
 Table([[P('<font color="white"><b>Want a second opinion?</b><br/>Procor reviews payroll compliance for Indian businesses and runs EPF, ESIC, PT, LWF, TDS on salary and labour-law registers on a fixed monthly calendar. Share your completed checklist in a free 30-minute consultation.<br/><br/><b>procor.co.in/contact</b>  ·  +91 99999 54416  ·  info@procor.co.in</font>','p')]],
       colWidths=[W2],style=[('BACKGROUND',(0,0),(-1,-1),NAVY),('LEFTPADDING',(0,0),(-1,-1),14),('RIGHTPADDING',(0,0),(-1,-1),14),('TOPPADDING',(0,0),(-1,-1),14),('BOTTOMPADDING',(0,0),(-1,-1),14)]),
 Spacer(1,16),P('Disclaimer: This checklist is general information prepared by Procor Compliance Solutions LLP as of 23 September 2026. It is not legal or tax advice, and it does not cover every obligation that may apply to your business.','small')]
d=doc(OUT,'Payroll Compliance Health Check','Payroll compliance health check · 30 points')
d.build(story)
cbuf=io.BytesIO(); c=cv.Canvas(cbuf,pagesize=A4)
cover(c,['Payroll Compliance','Health Check'],['A 30-point self-assessment for Indian employers','EPF · ESIC · PT & LWF · TDS on salary · Labour-law records · Controls'],['Takes about 15 minutes · Updated September 2026','Prepared by Procor Compliance Solutions LLP · procor.co.in'])
c.save()
w=PdfWriter(); [w.add_page(p) for p in PdfReader(cbuf).pages]; [w.add_page(p) for p in PdfReader(OUT).pages]
w.add_metadata({'/Title':'Payroll Compliance Health Check','/Author':'Procor Compliance Solutions LLP'})
with open(OUT,'wb') as f: w.write(f)
print('pages',len(PdfReader(OUT).pages))
