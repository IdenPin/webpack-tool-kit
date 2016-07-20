var webpack = require('webpack');
var path = require('path');
//有了它就可以将你的样式提取到单独的css文件里，妈妈再也不用担心样式会被打包到js文件里了。
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: './index.js',
        news: './news.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 's1.service.zhigaokao.cn',
        filename: '[name].bundle.js',
        chunkFilename: 'build/[id].chunk.js'
    },
    plugins: [
        function() {
            this.plugin("done", function(stats) {
                require("fs").writeFileSync(
                    path.join(__dirname, "", "stats.json"),
                    JSON.stringify(stats.toJson()));
            });
        },

        //提取共用部分
        new webpack.optimize.CommonsChunkPlugin('common.js'),

        ////单独使用link标签加载css并设置路径，相对于output配置中的publickPath
        new ExtractTextPlugin('[name].css'),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": 'jquery'
        }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader!css-loader')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass-loader')
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=./fonts/[name].[ext]'
        }]
    },
    resolve: {
        extension: ['', '.js', '.json',  '.scss']
    }
}
