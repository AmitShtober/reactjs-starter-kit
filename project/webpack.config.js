var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: "./app/index.js",
    node: {
        fs: "empty"
    },
    output: {
        path: __dirname + '/dist', // this path is mandotry for the html to be in same folder!!
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                loader: "file-loader?images/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader?publicPath=/&name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            config: path.join(__dirname, 'config', "default.js")
        }
    },
    plugins: [HtmlWebpackPluginConfig]
};
