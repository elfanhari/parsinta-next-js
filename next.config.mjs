/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    appName: "Learn Next.js with Parsinta",
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  }
};

export default nextConfig;
