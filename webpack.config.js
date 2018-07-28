var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';


module.exports = {
    //Content
    entry: './src/index.js',
    // A SourceMap without column-mappings ignoring loaded Source Maps.
    devtool: 'cheap-module-source-map',
    plugins: [
        //Auto replacement of page when i save some file, even css
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map',
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        //Be possible go back pressing the "back" button at chrome
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        //hotmodulereplacementeplugin
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', "sass-loader"],
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?importLoaders=1"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
}