import _ from 'loadsh';
import dayjs from "dayjs";
import './bar01';
console.log('hello index.js');
console.log(dayjs(), 'index.js');

const button = document.createElement('button');
button.innerHTML = 'load the element';
button.addEventListener('click', function(e){
    //prefetch(提前获取某个文件) magic-comments 空闲时间加载优化下一次的访问
    //preload(预加载) 父chunks页面加载所需的重要文件例如js文件css文件字体等等，提高下载权重，优化打开速度 用于当下使用
    import(
      /* webpackChunkName: 'element' */
      /* webpackPreload: true */
      /* webpackPrefetch: true*/
      './component').then(({default: el}) => {
        document.body.append(el);
    });
});
document.body.append(button);