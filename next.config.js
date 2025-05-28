/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // THIS IS THE LINE YOU NEED TO ADD/ENSURE IS PRESENT
    unoptimized: true,
  },
};

module.exports = nextConfig;