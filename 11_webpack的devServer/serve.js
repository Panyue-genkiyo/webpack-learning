//自己实现本地服务 webpack-dev-middleware
const express = require('express');
const webpack = require('webpack');
//加载配置信息
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
//传入配置信息,webpack根据配置信息进行编译
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler);

app.use(middleware);

app.listen(3000, () => {
    console.log('server is running at port 3000');
});