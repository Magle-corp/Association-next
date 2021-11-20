/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  env: {
    BASE_URL: 'http://association-strapi.magle-staging.ovh:1337',
  },
  images: {
    domains: ['localhost', 'association-strapi.magle-staging.ovh'],
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
});
