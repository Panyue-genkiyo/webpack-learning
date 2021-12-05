//文件读取
const { src, dest, watch } = require("gulp");
const babel = require("gulp-babel");
// const uglify = require("gulp-uglify");
const terser = require("gulp-terser");

const jsTask = () => {
  //从src中读取文件输出到dist文件夹中
  //stream是一个流，可以被多个插件调用
  return src("./src/**/*.js")
    .pipe(babel({
      //es6++ => es5
      presets: ["@babel/preset-env"]
    }))
    .pipe(terser({
      mangle: {
        toplevel: true //压缩顶层变量
      }
    }))
    .pipe(dest("./dist"));
  //返回一个stream 代表任务执行结束
};


watch("./src/**/*.js", jsTask); //监听文件变化，自动执行任务jsTask

module.exports = {
  jsTask
};