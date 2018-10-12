const path = require('path')

module.exports = {
    entry: './src/ts/main.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    }
}