const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

module.exports = {
    context: path.resolve(__dirname, 'app/src'),
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'app/dist/assets'),
        publicPath: '/assets',
    },
    devServer: {
        contentBase: path.join(__dirname, 'app/src'),
        //open: true,
        hot: true,
        compress: true

    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader",
                    options: { presets: ['react', 'es2015'] }
                }],
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader?sourceMap',
                            // options: {
                            //     modules: true,
                            //     importLoaders: 1
                            // }
                        },
                        {
                            loader: 'postcss-loader?sourceMap',
                            options: {
                                plugins: () => [
                                    autoprefixer({
                                        browsers: ['last 3 versions']
                                    })
                                ]
                            }
                        },
                        { 
                            loader: 'sass-loader?sourceMap'
                        }
                    ]
                })



            },
            {
                test: /\.(jpe|jpg|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                use: 'url-loader?limit=100000'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true
        })
    ]

};

