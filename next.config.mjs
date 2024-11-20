/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Optional: You can add SVGR options here
          },
        },
      ],
    });
    return config;
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
    'import/no-unresolved': [2, { caseSensitive: true }],


  },
  
};

export default nextConfig;
