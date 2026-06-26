/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress the Google Fonts lint warning — fonts are loaded via CSS @import in globals.css
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
