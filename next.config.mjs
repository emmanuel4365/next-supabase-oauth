/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://mxmchxjtqoqsqfxwfhqj.supabase.co/ http://localhost:3000/_next/static/css/app/layout.css?v=1731002920858 ;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://mxmchxjtqoqsqfxwfhqj.supabase.co/ http://localhost:3000/_next/static/css/app/layout.css?v=1731002920858 ;
    style-src 'self''unsafe-eval' 'unsafe-inline' https://js.stripe.com https://mxmchxjtqoqsqfxwfhqj.supabase.co/ http://localhost:3000/_next/static/css/app/layout.css?v=1731002920858 ;
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
