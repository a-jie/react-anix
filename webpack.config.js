var webpack = require('webpack');
var path = require('path');


var config = {
    devtool: 'sourcemap',
    entry: {
        index: './src/index'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'build/',
        filename: 'index.js',
        library: 'ReactAnix',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'anix': {
            root: 'AniX',
            commonjs2: 'anix',
            commonjs: 'anix',
            amd: 'anix'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },
};

module.exports = config;