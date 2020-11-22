const webpack = require('webpack')

const webpackConfig = require('./webpack.config.js')

module.exports.build = async (event) => {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        console.error('Webpack build failed:', err)
        reject('Webpack build failed!')
      } else {
        console.log('Webpack build succeeded:', stats)
        resolve('Webpack build succeeded!')
      }
    })
  })
}