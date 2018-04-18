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
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            },
            {
                test : /\.jpg$/,
                use : ['file-loader']
            },
            {
                test : /\.png$/,
                use : ['file-loader']
            }
        ]
    },
    devServer: {
        open : true,
        port : 9123
    }
}