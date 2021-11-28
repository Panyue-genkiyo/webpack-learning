function test() {
    //对象:模块映射
    var __webpack_modules__ = ({

        "./src/js/add.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            //记录是一个esModule {value: true}
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__,
                //definition
                {
                    "add": function () {
                        return /* binding */ add;
                    }
                });
            const add = (n1, n2) => n1 + n2;
        })
    });


    //缓存
    var __webpack_module_cache__ = {};

    //加载模块的函数
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        // Create a new module (and put it into the cache)
        var module = __webpack_module_cache__[moduleId] = {
            // no module.id needed
            // no module.loaded needed
            exports: {}
        };

        // Execute the module function
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

        // Return the exports of the module
        return module.exports;
    }

    //lift function
    !function () {
        //给函数添加属性
        __webpack_require__.d = function (exports, definition) {
            for (var key in definition) {
                //模块的exports不包含该键为key的属性 并且definition[key]不是从原型上获得的
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    //给exports添加了一个代理
                    //exports[key] => definition[key] 代理
                    Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
                }
            }
        };
    }();

    /* webpack/runtime/hasOwnProperty shorthand */
    !function () {
        //o
        __webpack_require__.o = function (obj, prop) {
            //判断props是否属于该obj 且不是原型链上的属性
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
    }();

    /* webpack/runtime/make namespace object */
    !function () {
        // define __esModule on exports
        __webpack_require__.r = function (exports) {
            ///如果支持symbol就给exports打上symbol.toStringTag标记{value:Module}
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            }
            //esModule 打标记
            //exports = {} = {_esModule:{ value: true  }}
            Object.defineProperty(exports, '__esModule', {value: true});
        };
    }();

    var __webpack_exports__ = {};
    //立即执行函数
    !function () {
        //打上esModule的标记 表明是一个es6模块
        __webpack_require__.r(__webpack_exports__);
        var _js_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/add.js */ "./src/js/add.js");

        console.log( _js_add_js__WEBPACK_IMPORTED_MODULE_0__.add(2, 3));
    }();
}