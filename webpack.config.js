const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  }
}
