module.exports = {
  trailingSlash: true,
  env: {
    MODE: process.env.MODE === 'dev' ? 'dev' : 'prod'
  }
};
