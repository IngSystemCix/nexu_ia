/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Export the site as static files. Required for Next.js >=16 where `next export` was removed.
  output: "export",
};

export default nextConfig;
