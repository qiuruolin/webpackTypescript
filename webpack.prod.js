const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const uglifyJsPlugin = new UglifyJsPlugin()

const babelOptions = {
    "presets": "babel-preset-env"
}

module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }]
    },
    devtool: 'cheap-module-source-map',
    plugins: [uglifyJsPlugin]
})