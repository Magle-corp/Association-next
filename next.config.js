/** @type {import('next').NextConfig} */

// Use the appropriate .env file according to the environment.
require('dotenv').config({ path: `env/.env.${process.env.ENVIRONMENT}` });

const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_POST_URL: process.env.BASE_POST_URL,
  },
  images: {
    domains: [process.env.BASE_IMAGE_URL],
  },
  eslint: {
    dirs: ['pages', 'src'],
  },
});
