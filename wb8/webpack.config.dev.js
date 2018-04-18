const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template : './src/index.html'
        })
    ],
    module : {
        rules: [
            {
                test : /\.js$/,
                use: [
                    {
                    loader : "babel-loader",
                    options: {
                            presets : ['react']
                        }
                    }
                ]
            },
            //[path]-[name]-[local]-[hash:base64:6]
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    {
                        loader : 'css-loader',
                        options: {
                            module : true,
                            localIdentName : '[name]-[local]_[hash:base64:6]'
                        }
                    }
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader'],
                include : [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')

                ]
            },
            {
                test : /\.scss$/,
                use: [
                    'style-loader' ,
                    {
                        loader : 'css-loader',
                        options: {
                            module : true,
                            localIdentName : '[name]-[local]_[hash:base64:6]'
                        }
                    } ,
                    'sass-loader'
                ],
                exclude : [
                    path.resolve(__dirname, 'node-modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test : /\.scss$/,
                use : ['style-loader', 'css-loader', 'sass-loader'],
                include : [
                    path.resolve(__dirname, 'node-modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test : /\.(jpg|png|gif|jpeg)$/,
                use : [{
                    loader: "url-loader",
                    options: {
                        limit : 60000
                    }
                }]
            },
            {
                test : /\.(otf|eot|svg|ttf|woff|woff2)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        open : true,
        port : 9123
    }
}