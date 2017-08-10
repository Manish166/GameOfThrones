var express = require("express");
var app = express();
var path = require("path");
var port =3000;
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware =  require('webpack-dev-middleware');
var webpackHotMiddleware =  require('webpack-hot-middleware');
var compiler =webpack(config);

app.use(webpackDevMiddleware(compiler,{noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./dist'));

app.use("/*", function(req, res){
    res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, function(error){
    if (error) throw error;
});