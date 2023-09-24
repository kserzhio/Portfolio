/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  i18n,
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
