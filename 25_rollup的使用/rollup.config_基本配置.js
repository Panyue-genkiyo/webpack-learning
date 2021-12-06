//rollup的配置文件
export default {
  input: './src/main.js', //入口文件
  output:[
    {
      format: "umd", //输出格式
      name: "pyUtils", //输出的模块名
      file: './dist/pyUtils.umd.js' //输出文件
    },
    {
      format: "cjs", //输出格式
      file: './dist/pyUtils.cjs.js' //输出文件
    },
    {
      format: "es", //输出格式
      file: './dist/pyUtils.es.js' //输出文件
    },
    {
      format: "iife", //输出格式
      name:'pyUtils', //输出的模块名
      file: './dist/pyUtils.browser.js' //输出文件
    },
    {
      format: "amd",
      file: './dist/pyUtils.amd.js'
    }
  ]
}