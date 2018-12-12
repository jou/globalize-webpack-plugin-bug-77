const path = require('path');

const GlobalizePlugin = require('globalize-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        main: ['./src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    optimization: {
        namedChunks: true,
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new GlobalizePlugin({
            production: process.env.NODE_ENV === 'production',
            developmentLocale: 'en',
            supportedLocales: ['de', 'en'],
        }),
    ]
};
