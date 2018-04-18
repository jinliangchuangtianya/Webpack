const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'dist/'),
        filename: 'assets/js/main.js',
        //所有资源的基础路径，一定要以 / 结尾
        publicPath: "/"
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template : './src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    module : {
        rules: [
            {
                test : /\.js$/,
                use: [
                    {
                        loader : "babel-loader"
                    }
                ],
                exclude : [
                    path.resolve(__dirname, 'node_modules')
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
                        limit : 60000,
                        name : "assets/img/[name]_[hash:6].[ext]"
                    }
                }]
            },
            {
                test : /\.(otf|eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name : 'assets/fonts/[name]_[hash:6].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        open : true,
        port : 9123,
        contentBase : "./src/common",
        //服务器打包资源后的输出路径
        publicPath : "/"
    }
}