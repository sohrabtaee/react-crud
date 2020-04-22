const path = require('path')
const webpack = require('webpack')
const withPWA = require('next-pwa')

module.exports = withPWA({
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
  pwa: {
    dest: 'public',
  },
})
