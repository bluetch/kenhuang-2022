/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  turbopack: {}, // 啟用 Turbopack
  webpack(config) {
    // Exclude .svg from Next.js default asset handling so we can use @svgr/webpack
    const assetRule = config.module.rules.find((rule) => {
      return rule && rule.test && rule.test.test && rule.test.test('.svg');
    });
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;