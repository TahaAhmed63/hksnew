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
};

export default nextConfig;
