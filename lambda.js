const webpack = require('webpack')

const webpackConfig = require('./webpack.config.js')

module.exports.build = async (event) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error('Webpack build failed:', err)
    } else {
      console.log('Webpack build succeeded:', stats)
    }
  })
}