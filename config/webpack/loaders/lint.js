const { resolve } = require('path')

module.exports = {
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: resolve('app/javascript'),
  options: {
    formatter: require('eslint-friendly-formatter')
  }
}
