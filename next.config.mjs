/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: "mongodb://localhost:27017/buyitnow",
  },
};

export default nextConfig;
