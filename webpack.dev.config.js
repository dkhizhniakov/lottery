/**
 * Created by khizh on 8/23/2016.
 */
const CommonsPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin');
const webpack = require('webpack');
process.env.NODE_ENV = 'development';
module.exports = {
    devtool: 'source-map',
    entry: {
        generic: './static/src/index.jsx',
    },
    output: {
        path: 'static/dist',
        publicPath: '/dist/',
        filename: '[name]Bundle.js',
        chunkFilename: '[name]_chunk.js',
    },
    watch: true,
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
            { test: /(\.css|\.scss)$/, loader: 'style-loader!css-loader!sass-loader' },
            {
                test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg|\.gif)$/,
                loader: 'url',
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new CommonsPlugin({
            minChunks: 2,
            name: 'common',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev'),
            },
        }),
    ],
};
