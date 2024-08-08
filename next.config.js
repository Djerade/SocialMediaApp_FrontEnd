// next.config.js
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_API : "http://localhost:5000/graphql",
  },
};

module.exports = nextConfig;
