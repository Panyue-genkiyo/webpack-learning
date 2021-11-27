import '../css/index.css';
import '../css/component.less';
import nanase from '../img/nanase.jpg';


function component(){
    const el = document.createElement('div');
    el.innerHTML = ['Hello', 'Webpack'].join(' ');
    el.className = 'content';

    // 引入图片
    const imgElement = new Image();
    //require返回的是一个对象 这个对象的default属性对应着资源
    //imgElement.src = require('../img/shiori.jpg').default; //加载该资源
    imgElement.src = nanase;
    el.append(imgElement);

    //创建一个i元素，设置一个字体图标
    const i = document.createElement('i');
    i.className = "iconfont icon-girl py_icont";
    el.append(i);

    //创建div设置背景图片
    const div = document.createElement('div');
    div.style.width = 200 + 'px';
    div.style.height = 200 + 'px';
    // div.style.backgroundImage = 'url(' + shiori + ')';
    div.className = 'bg-image';
    el.append(div);

    return el;
}

document.body.append(component());

