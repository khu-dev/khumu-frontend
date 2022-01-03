module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    MODE: process.env.MODE === 'dev' ? 'dev' : 'prod',
  },
}
