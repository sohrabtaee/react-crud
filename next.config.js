const path = require('path')
const webpack = require('webpack')
const withOffline = require('next-offline')

module.exports = withOffline({
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
})
