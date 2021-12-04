const isProduction = false;
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const resolveApp = require('./path');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  // compress: true, //开发时开启gizp压缩
  optimization:{
    chunkIds:'named',
  },
  devServer:{
    // hot:true, //hmr热更新 不再采用live reloading
    hot: "only",
    // host: '0.0.0.0',
    port:3000,
    open: true, //编译成功自动打开浏览器
    // compress: true, //gzip压缩 使得压缩的体积变小方便传输
    devMiddleware: {
      //在开发环境下devServer中的publicPath和output中的publicPath要保持一致的
      //publicPath: '/abc', //服务的目录为http://localhost:8080/abc
      publicPath: '/'
    },
    //static: resolveApp('./test'), //静态资源目录 代替之前的contentBase 为在模板文件中直接引入的静态资源提供路径服务 自动开启监听，文件变化自动刷新浏览器
    proxy:{
      //"/api": 'http://localhost:2333'  //开发阶段解决跨域问题 映射
      "/api":{
        target: "http://localhost:2333",
        pathRewrite: {
          //把api筛掉
          "^/api": ""
        },
        secure:false,
        changeOrigin:true //改变源 防止服务器做验证不给其他域名返回数据
      }
    },
    historyApiFallback: true, //碰到404的请求我就给你返回index.html
  },
  plugins: [
    new ReactRefreshPlugin(), //开发环境下使用(development)
  ]
}