/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://http2.mlstatic.com/",
        port: "",
        pathname: "",
      },
    ],
  },
  swcMinify: true,
};

export default nextConfig;
