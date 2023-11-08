/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_API: "https://api.abarpetshop.com/api/v1"
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.abarpetshop.com',
            },
        ]
    }
}

module.exports = nextConfig
