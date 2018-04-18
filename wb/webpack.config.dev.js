const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'abc.html',
            template:'./src/index.html'
        })
    ],
    module : {
        rules : [{
            test : /\.js$/,
            use : [{
                loader: "babel-loader",
                options: {
                    presets : ['react']
                }
            }]
        }]
    }
}
