const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
  });
  
  const nextConfig = withPWA({
    reactStrictMode: true,
  });
  
  module.exports = nextConfig;

  module.exports = {
    images: {
      domains: ['lively-flan-c48ed1.netlify.app'], // Add your Netlify domain
    },
  }
  module.exports = {
    experimental: {
      runtime: "nodejs",
    },
  };
  