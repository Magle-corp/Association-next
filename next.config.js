/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  env: {
    BASE_URL: 'http://localhost:1337',
  },
  images: {
    domains: ['localhost'],
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
});