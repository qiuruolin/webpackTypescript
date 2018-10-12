const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './build',
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
})