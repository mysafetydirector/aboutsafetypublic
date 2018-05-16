const webpack = require('webpack');

const env = Object.keys(process.env).reduce((o, k) => {
  o[`process.env.${k}`] = JSON.stringify(process.env[k]);
  return o;
}, {});

module.exports = {
  webpack: config => {
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
  exportPathMap() {
    return {
      '/': { page: '/' }
    };
  }
};
