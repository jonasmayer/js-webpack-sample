const path = require('path')

module.exports = {
    entry: [
        '@babel/polyfill',
        'whatwg-fetch',
        './src/index.js'
    ],
    module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader' 
         }
      ]
    },
    output: {
        path: path.resolve('build'),
        filename: 'index.js'
    }
}
