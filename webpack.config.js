/**
 * Created by Manish on 8/3/2017.
 */
var path = require('path');
var webpack = require('webpack');

module.exports={
    devtool : 'inline-source-map',
    entry : [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './client/client.js'],
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPath : '/'
    },
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        historyApiFallback: true
    },
    module : {
        loaders :[
            {
                test: /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query :{
                    presets :['react', 'es2015', 'react-hmre'],
                    plugins : ["transform-object-rest-spread"]
                }

            }
        ]
    }
}