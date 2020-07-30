(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HoldScreen.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HoldScreen.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  mixins: [],
  data: function data() {
    return {//
    };
  },
  props: {//
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {
    document.title = 'Blocked !!!';
  },
  methods: {
    logout: function logout() {
      this.$inertia.post('/admins/logout/lock');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HoldScreen.vue?vue&type=template&id=2705def4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/HoldScreen.vue?vue&type=template&id=2705def4& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-transparent" }, [
    _c("section", [
      _c("div", { staticClass: "container-alt" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-12" }, [
            _c("div", { staticClass: "wrapper-page" }, [
              _c("div", { staticClass: "m-t-40 account-pages" }, [
                _c("div", { staticClass: "text-center account-logo-box" }, [
                  _c("h2", { staticClass: "text-uppercase" }, [
                    _c(
                      "a",
                      { staticClass: "text-success", attrs: { href: "/" } },
                      [_c("span", [_vm._v(_vm._s(_vm.__("blocked")))])]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "account-content" }, [
                  _c("div", { staticClass: "text-center m-b-20" }, [
                    _c("p", { staticClass: "text-muted m-b-0 font-13" }, [
                      _vm._v(_vm._s(_vm.__("accountHasBeenBlocked")))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row m-t-50" }, [
                _c("div", { staticClass: "col-sm-12 text-center" }, [
                  _c("p", { staticClass: "text-muted" }, [
                    _vm._v(_vm._s(_vm.__("wantToLogIn"))),
                    _c(
                      "a",
                      {
                        staticClass: "text-primary m-l-5",
                        attrs: { href: "javascript:void(0);" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.logout($event)
                          }
                        }
                      },
                      [_c("b", [_vm._v(_vm._s(_vm.__("logout")))])]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/HoldScreen.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/HoldScreen.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HoldScreen_vue_vue_type_template_id_2705def4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoldScreen.vue?vue&type=template&id=2705def4& */ "./resources/js/Pages/HoldScreen.vue?vue&type=template&id=2705def4&");
/* harmony import */ var _HoldScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HoldScreen.vue?vue&type=script&lang=js& */ "./resources/js/Pages/HoldScreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HoldScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HoldScreen_vue_vue_type_template_id_2705def4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HoldScreen_vue_vue_type_template_id_2705def4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/HoldScreen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/HoldScreen.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/HoldScreen.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoldScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HoldScreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HoldScreen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HoldScreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/HoldScreen.vue?vue&type=template&id=2705def4&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/HoldScreen.vue?vue&type=template&id=2705def4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoldScreen_vue_vue_type_template_id_2705def4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HoldScreen.vue?vue&type=template&id=2705def4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/HoldScreen.vue?vue&type=template&id=2705def4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoldScreen_vue_vue_type_template_id_2705def4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoldScreen_vue_vue_type_template_id_2705def4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);