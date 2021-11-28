function test() {
    //定义一个对象
    //模块路径作为key
    //模块内容作为value function
    var __webpack_modules__ = ({

        "./src/js/hello.js": (function (module) {

            const hello = (name) => `Hello, ${name}!!!`;

            //将要导出的变量放到module.exports中
            module.exports = {
                hello
            }
        })
    });
    //缓存 加载模块的缓存
    var __webpack_module_cache__ = {};

    //通过路径获取模块内容的缓存函数
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            //如果缓存中存在模块，则直接返回
            return cachedModule.exports;
        }
        //没有缓存，则创建一个模块
        //module和_webpack_module_cache_赋值为同一个对象
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };

        //获取模块内容 并执行该函数
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        return module.exports;
    }

    var __webpack_exports__ = {};
    //立即执行函数 将function变为可执行的表达式所以可以直接在后面跟上小括号
    !function () {
        //执行函数逻辑
        const {hello} = __webpack_require__(/*! ./js/hello.js */ "./src/js/hello.js");
        console.log(hello('panyue'));
    }();
}