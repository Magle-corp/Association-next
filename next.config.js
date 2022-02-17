/** @type {import('next').NextConfig} */

const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  env: {
    BASE_URL: 'http://association-strapi-staging.magle.fr',
  },
  images: {
    domains: ['localhost', 'association-strapi-staging.magle.fr'],
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
});
