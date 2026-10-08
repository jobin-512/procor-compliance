/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: static export removed — /api/contact (Resend) needs a Node server
  // (Vercel / VPS). Static `out/` hosting on Apache can't run API routes.
  trailingSlash: true,       // /services/payroll-processing/ -> matches .htaccess canonical form
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
