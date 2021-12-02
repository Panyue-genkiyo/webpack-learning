const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const resolveApp = require('./path');

const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  //context:path.resolve(__dirname, "../"), context默认当前目录为该工程目录
  //entry写上相对路径时，并不是相对文件所在的路径,而是相对于context配置的路径
  // watch: true, // 开启监听 监听到文件变化直接重新打包
  //相较于content-base
  entry: {
    //第一个分离打包代码的方式
    // main:{
    //   import: './src/main.js',
    //   dependOn: "shared",
    // },
    // index: {
    //   import: './src/index.js',
    //   dependOn: "shared",
    // },
    // shared: ["lodash", "dayjs"]
    main:'./src/main.js',
    index:'./src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolveApp('./build'),
    publicPath: "./",
    //异步加载的打包为[name].chunk.js
    chunkFilename: '[name].chunk.js'
  },
  resolve:{
    extensions: ['.vue', '.ts', '.js', '.json', '.jsx', '.mjs', '.wasm'], //自动解析确定的扩展
    //路径别名
    alias:{
      '@': resolveApp('./src'),
      'pages': resolveApp('./src/pages')
    }
  },
  optimization:{
    //优化代码压缩
     minimizer:[
        new TerserPlugin({
          extractComments: false,
        })
     ],
     //natural自然数
     //named使用包所在目录所在的模块名称(开发环境推荐)
     //deterministic:生成id针对相同文件生成的id是不变的(生产环境推荐)
     splitChunks:{
       //异步的代码分离
       //initial同步导入
       //all:initial和async都会被代码分离
       chunks: "all",
       minSize: 200,  //拆分出来的包最小的文件大小也是20000b(字节)
       //将大于maxSize的包拆分成不小于minSize的包
       maxSize: 200,
       //minchunks表示引入的包至少被导入了几次 超过这个此时才会被分离打包
       minChunks:1,
       cacheGroups:{
         vendors:{
           //来自node_modules的包都打包到[id]_vendors.js中
           test:/[\\/]node_modules[\\/]/,
           filename:'[id]_vendors.js',
           //name:"vendor-chunks.js", //打包之后固定的包名无法使用占位符placeholder
           priority:-10,
         },
         // bar:{
         //   test:/bar/,
         //   filename:'[id]_bar.js',
         // }
         default:{
           //一旦你这个包被引入了两次以上且满足上述minSize和maxSize的条件，就会被拆分成一个新的包
           minChunks: 2,
           filename:"common_[id].js",
           priority: -20
         }
       }
     },
     //true === 'multiple'
     //single
     // runtimeChunk: 'single'
     runtimeChunk: {
        name: (entrypoint) => `runtime~${entrypoint.name}`,
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
    new VueLoaderPlugin()
  ]
}

module.exports = function(env){
  const isProduction = env.production;
  // console.log(isProduction);
  //console.log(isProduction, typeof isProduction);
  process.env.NODE_ENV = isProduction ? 'production':'development';
  //console.log(process.env.production, typeof process.env.production); //注意这里process.env.production的类型string
  return isProduction ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig)
}