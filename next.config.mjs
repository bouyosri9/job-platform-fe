/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
  devtools: { enabled: true },
  css: ["./src/globals.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  async exportPathMap() {
    return {
      '/': { page: '/index' }, // Set the default route to src/index.js
    };
  },
};

export default nextConfig;
