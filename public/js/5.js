webpackJsonp([5],{

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Fourth_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Fourth_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Fourth_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Fourth_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Fourth_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_249b0976_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_Fourth_vue__ = __webpack_require__(216);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(82)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-249b0976"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_script_index_0_Fourth_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_7_3_vue_loader_lib_template_compiler_index_id_data_v_249b0976_hasScoped_true_buble_transforms_node_modules_vue_loader_13_7_3_vue_loader_lib_selector_type_template_index_0_Fourth_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Fourth.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-249b0976", Component.options)
  } else {
    hotAPI.reload("data-v-249b0976", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            input: '',
            dialogVisible: false
        };
    },
    mounted: function mounted() {
        window.addEventListener('keydown', this.onClick);
        document.oncontextmenu = function () {
            return false;
        };
    },

    methods: {
        commit: function commit() {
            var _this = this;
            var input_key = _this.input;
            if (input_key == "6512bd43d9caa6e02c990b0a82652dca") {
                this.$message({
                    message: '恭喜你，过了第四关',
                    type: 'success'
                });
                this.$router.push({ path: '/Fifth' });
            } else {
                this.$message({
                    message: '菜鸡，错了',
                    type: 'warning'
                });
            }
        },
        getkey: function getkey() {
            this.$message('我觉得你应该找到规律了？');
        }
    }
};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "\n.el-input[data-v-249b0976]{\n    width: 300px;\n    margin-left: 35%;\n    margin-top: 20%;\n}\n.el-row[data-v-249b0976]{\n    align:center\n}\n", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-main",
    [
      _c(
        "el-row",
        { attrs: { direction: "horizontal" } },
        [
          _c("el-input", {
            attrs: { placeholder: "请输入秘钥" },
            model: {
              value: _vm.input,
              callback: function($$v) {
                _vm.input = $$v
              },
              expression: "input"
            }
          }),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.commit } },
            [_vm._v("提交密钥")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "success" }, on: { click: _vm.getkey } },
            [_vm._v("获取密钥")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-249b0976", esExports)
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(83)("4a785558", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-249b0976\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Fourth.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.25.0@css-loader/index.js!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-249b0976\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./Fourth.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});