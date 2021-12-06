//官方
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
//社区
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";
import replace from "rollup-plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from  "rollup-plugin-livereload"; //插件browser-live-reload

console.log(process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  commonjs(),
  resolve(),  //引入第三方包(node_modules)需要将其打包的话需要用到该插件
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) //打包注入process.env.NODE_ENV环境变量
  }),
  babel({
    exclude:'node_modules/**', //排除node_modules下的文件
    babelHelpers:"bundled",
  }),
  vue(), //打包vue文件
  postcss(), //打包css文件
]

if(isProduction){
  plugins.push(terser()); //打包压缩js文件
}else {
  const devPlugins = [
    serve({
      open:true,
      port:3002,
      contentBase:'.' //服务哪一个文件夹
    }),
    livereload()
  ]
  plugins.push(...devPlugins);
}

export default {
  input: './src/main.js',
  output: {
    format: "umd", //输出格式
    name: "pyUtils", //输出的模块名
    file:'./dist/pyUtils.umd.js', //导出位置
    globals:{
      lodash: "_" //lodash对应的全局变量是_
    }
  },
  external: ['lodash'], //排斥外部依赖不打包
  plugins,
}