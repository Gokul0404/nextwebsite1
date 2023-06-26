/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGOOSE_URL: "mongodb+srv://gokul332020:sample@cluster0.aoyk9fm.mongodb.net/?retryWrites=true&w=majority",
    appPassword:"wolpusamfqefupqc"
    // MONGOOSE_URL: process.env.MONGOOSE_URL,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    // GOOGLE_SECRET_ID: process.env.GOOGLE_SECRET_ID,

    // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // NEXTAUTH_URL: process.env.NEXTAUTH_URL
  },
};

module.exports = nextConfig;
