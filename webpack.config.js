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

// var debug = process.env.NODE_ENV !== "production";
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var autoprefixer = require('autoprefixer');

    // devtool: debug ? 'inline-source-map' : null,
    // watch: true,
    // module: {
    //     rules: [
    //         {
    //             test: /\.js?$/,
    //             exclude: [/node_modules/],
    //             use: [{
    //                 loader: "babel-loader",
    //                 options: {
    //                     presets: ['react', 'es2015']
    //                 }
    //             }]
    //         },
            // {
            //   test: /\.(sass|scss)$/,
            //   loader: ExtractTextPlugin.extract({
    //         //       loader:'css!postcss-loader!sass'
    //         //   })
    //         // }
    //     ]
    // },

    //     loaders: [{
    //             test: /\.js?$/,
    //             exclude: /node_modules/,
    //             loader: "babel-loader",
    //             query: {
    //                 presets: ['react', 'es2015']
    //             }
    //         }, {
    //             test: /\.scss$/,
    //             loader: ExtractTextPlugin.extract('style-loader','css!postcss-loader!sass')
    //         },

    //         {
    //             test: /\.(jpe|jpg|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
    //             loader: 'url-loader?limit=100000'
    //         }


    //     ]
    // },
    // postcss: [autoprefixer({
    //     browsers: ['last 3 versions']
    // })],
    // plugins: [
    //     new ExtractTextPlugin( {
    //         filename: '[name].bundle.css',
    //         allChunks: true
    //     })
    // ]


