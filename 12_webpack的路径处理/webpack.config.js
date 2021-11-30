const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); //热更新react的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //处理vue文件所需要的vue-loader的插件
module.exports = {
    // watch: true, // 开启监听 监听到文件变化直接重新打包
    entry: './src/index.js',
    mode: 'development',
    // watchContentBase: true, // 开启监听 监听到静态文件变化
    devtool: 'cheap-module-source-map',
    output: {
      filename: 'bundle.js',
      //path:打包后文件的输出目录
      path: path.resolve(__dirname, 'dist'),
      //publicPath在打包之后的静态资源前面进行一个路径的拼接
      //publicPath: "/",
      //打开本地文件不部署在服务器上用./开头(相对路径) 部署到服务器上的话就是用/开头
      //publicPath: './', //js/bundle.js => ./js/bundle.j
      publicPath: "/", //js/bundle.js => /abc/js/bundle.js
    },
    //为webpack-dev-server提供配置项
    //devServer是为开发过程而服务的，开启一个本地服务
    //生产环境下是不需要devServer这个配置项的
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
      static: path.resolve(__dirname, 'test'), //静态资源目录 代替之前的contentBase 为在模板文件中直接引入的静态资源提供路径服务 自动开启监听，文件变化自动刷新浏览器
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
      // historyApiFallback:{
      //   rewrites: [
      //     { from: /abc/, to: "index.html" }
      //   ]
      // }
    },
    resolve:{
      extensions: ['.vue', '.ts', '.js', '.json', '.jsx', '.mjs', '.wasm'], //自动解析确定的扩展
      //路径别名
      alias:{
        '@': path.resolve(__dirname, 'src'),
        'pages': path.resolve(__dirname, 'src/pages')
      }
    },
    module:{
      rules:[
        {
          test:/\.css$/i,
          //注意顺序 从上到下依次使用loader执行
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.vue$/i,
          use: 'vue-loader'
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new ReactRefreshPlugin(), //开发环境下使用(development)
      new VueLoaderPlugin()
    ]
}