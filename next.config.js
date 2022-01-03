module.exports = {
  reactStrictMode: false,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    MODE: process.env.MODE === 'dev' ? 'dev' : 'prod',
  },
}
