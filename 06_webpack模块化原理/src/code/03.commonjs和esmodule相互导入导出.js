var __webpack_modules__ = ({

    "./src/js/add.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        //es_module导出的源码
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            "add": function () {
                return /* binding */ add;
            }
        });
        const add = (n1, n2) => n1 + n2;
    }),

    "./src/js/hello.js": (function (module) {
        //common js导出的源码
        const hello = (name) => `Hello, ${name}!!!`;
        module.exports = {
            hello
        }
    })

});


//缓存
var __webpack_module_cache__ = {};

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
    //调用上面的函数
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
}


/* webpack/runtime/compat get default export */
!function () {
    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function (module) {
        //判断你是不是es module
        var getter = module && module.__esModule ?
            function () {
                return module['default'];
            } :
            function () {
                return module;
            };
        __webpack_require__.d(getter, {a: getter});
        return getter;
    };
}();

!function () {
    // define getter functions for harmony exports
    __webpack_require__.d = function (exports, definition) {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
            }
        }
    };
}();

/* webpack/runtime/hasOwnProperty shorthand */
!function () {
    __webpack_require__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
}();

/* webpack/runtime/make namespace object */
!function () {
    // define __esModule on exports
    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
        }
        Object.defineProperty(exports, '__esModule', {value: true});
    };
}();


var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function () {
    "use strict";
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    __webpack_require__.r(__webpack_exports__);
    var _js_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/hello */ "./src/js/hello.js");
    var _js_hello__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_hello__WEBPACK_IMPORTED_MODULE_0__);
//采用commonjs的方式导入esmodule导出的模块
    const {add} = __webpack_require__(/*! ./js/add.js */ "./src/js/add.js");
//commonjs导出内容 esmodule导入内容

    console.log(add(1, 2));
    console.log( _js_hello__WEBPACK_IMPORTED_MODULE_0__.hello('py'));
}();
//# sourceMappingURL=bundle.js.map