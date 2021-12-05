//用gulp打包文件(不支持模块化)
const { src, dest, series, parallel, watch } = require('gulp');
const minhtml = require('gulp-htmlmin');

const babel = require('gulp-babel');
const terser = require('gulp-terser');

const less = require('gulp-less');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');

const inject = require('gulp-inject');

const browserSync = require('browser-sync');

const del = require('del');

///搭建本地服务
const serverObj = browserSync.create();
const server = () => {
    //监听文件改变重新打包注入
    watch('src/*.html', series(htmlTask, injectHtmlTask))
    watch('src/js/**.js', series(jsTask, injectHtmlTask));
    watch('src/css/**.less', series(lessTask, injectHtmlTask));
    serverObj.init({
       open:true,
       port:3002,
       files: 'dist/**/*', //监听的文件 当dist文件下所有的文件改变时重新刷新
        server: {
            baseDir: './dist', //要服务的是哪个文件夹
        }
    });
};

//处理html文件
const htmlTask = () => {
  //读入流 -> 转换流 -> 写入流
  return src('./src/index.html',)
    //压缩html
    .pipe(minhtml({
      collapseWhitespace: true,
      // removeComments: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(dest('./dist'));
}


//处理js文件
const jsTask = () => {
  //对照基本
  return src('./src/js/**.js', { base: './src' })
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }))
    .pipe(terser({
       mangle:{
         toplevel: true
       }
    }))
    .pipe(dest('./dist'));
}


//处理less文件
const lessTask = () => {
  //把less文件转换为css文件
  return src('./src/css/*.less', { base: './src' })
    .pipe(less())
    //前缀
    .pipe(postcss([
       postcssPresetEnv()
    ]))
    .pipe(dest('./dist'));
}


const injectHtmlTask = () => {
  return src('./dist/*.html')
    .pipe(inject(
      src(['./dist/js/*.js', './dist/css/*.css']),
      {
        relative:true, //相对路径
      }
    ))
    .pipe(dest('./dist'));
}

//清空上一次打包的文件
const clean = () => {
  return del(['./dist']);
}

const buildTask = series(clean, parallel(htmlTask, jsTask, lessTask), injectHtmlTask)
//清空上一次打包的文件并并行打包，打包完成后注入html文件开启本地服务
const serveTask = series(buildTask, server);

module.exports = {
   buildTask,
   serveTask
}