/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      console.log("Using Webpack");
      return config;
    },
  };
  
  export default nextConfig;
  