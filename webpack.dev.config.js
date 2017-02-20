/**
 * Created by khizh on 8/23/2016.
 */
const CommonsPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin');
const webpack = require('webpack');
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
                NODE_ENV: JSON.stringify('dev'),
            },
        }),
    ],
};
