/**
 * Created by khizh on 8/23/2016.
 */
const CommonsPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');
const webpack = require('webpack');
process.env.NODE_ENV = 'production';
module.exports = {
    devtool: 'source-map',
    entry: {
        generic: './static/src/index.jsx',
    },
    output: {
        path: 'static/dist',
        publicPath: '/dist/',
        filename: '[name]Bundle.js',
        chunkFilename: '[name]_[id]_[chunkhash:20].js',
    },
    resolve: {
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
            React: path.join(__dirname, 'node_modules', 'react'),
        },
        extensions: ['', '.js'],
    },
    module: {
        loaders: [{
            test: /(\.js|\.jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'es2016', 'react', 'react-app'],
                plugins: ['transform-class-properties', 'transform-runtime', 'transform-object-assign'],
            },
        },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ],
    },
    plugins: [
        new CommonsPlugin({
            minChunks: 2,
            name: 'common',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
};
