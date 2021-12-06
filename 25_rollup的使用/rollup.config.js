import commonjs from "@rollup/plugin-commonjs";
// import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
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
  plugins:[
    commonjs(),
    //resolve(),  //引入第三方包(node_modules)需要将其打包的话需要用到该插件
    babel({
      exclude:'node_modules/**', //排除node_modules下的文件
      babelHelpers:"bundled",
    }),
    terser()
  ]
}