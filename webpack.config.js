const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
const {
  HOST,
  IMG_DEMO_PORT,
} = process.env
module.exports = {
  entry: [
    '@babel/polyfill', 
    `${__dirname}/index.js`
  ],
  output: {
    path: `${__dirname}`,
    filename: 'dist.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/(node_modules)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-regenerator'
            ],
          },
        },
      }, 
    ],
  },
  devServer: {
    host: HOST,
    port: IMG_DEMO_PORT,
  },
}