/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
        FRONTEND_SERVER: 'http://localhost:3000/'
    }
}

module.exports = nextConfig
