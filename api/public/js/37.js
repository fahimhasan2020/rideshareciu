(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  mixins: [],
  data: function data() {
    return {
      path: '/admins/mail'
    };
  },
  props: {//
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {
    this.path = window.location.pathname;
  },
  methods: {//
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=template&id=9a180038&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=template&id=9a180038& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "table-detail" }, [
    _c(
      "div",
      { staticClass: "p-20" },
      [
        _c(
          "inertia-link",
          {
            staticClass:
              "btn btn-danger btn-rounded btn-custom w-lg waves-effect waves-light",
            attrs: { href: "/admins/email/compose" }
          },
          [_vm._v("Compose")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "list-group mail-list  m-t-20" },
          [
            _c(
              "inertia-link",
              {
                staticClass: "list-group-item b-0",
                class: [_vm.path === "/admins/mail" ? "text-success" : ""],
                attrs: { href: "/admins/mail" }
              },
              [
                _c("i", { staticClass: "fa fa-download m-r-10" }),
                _vm._v("Inbox "),
                _c("b", [_vm._v("(8)")])
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass: "list-group-item b-0",
                class: [
                  _vm.path === "/admins/email/draft" ? "text-success" : ""
                ],
                attrs: { href: "/admins/email/draft" }
              },
              [
                _c("i", { staticClass: "fa fa-file-text-o m-r-10" }),
                _vm._v("Draft "),
                _c("b", [_vm._v("(20)")])
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass: "list-group-item b-0",
                class: [
                  _vm.path === "/admins/email/sent" ? "text-success" : ""
                ],
                attrs: { href: "/admins/email/sent" }
              },
              [
                _c("i", { staticClass: "fa fa-paper-plane-o m-r-10" }),
                _vm._v("Sent Mail")
              ]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass: "list-group-item b-0",
                class: [
                  _vm.path === "/admins/email/spam" ? "text-success" : ""
                ],
                attrs: { href: "/admins/email/spam" }
              },
              [_c("i", { staticClass: "fa fa-ban m-r-10" }), _vm._v("Spam")]
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              {
                staticClass: "list-group-item b-0",
                class: [
                  _vm.path === "/admins/email/trashed" ? "text-success" : ""
                ],
                attrs: { href: "/admins/email/trashed" }
              },
              [
                _c("i", { staticClass: "fa fa-trash-o m-r-10" }),
                _vm._v("Trash "),
                _c("b", [_vm._v("(354)")])
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Mail/Inc/Navigation.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Mail/Inc/Navigation.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_9a180038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=9a180038& */ "./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=template&id=9a180038&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_9a180038___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_9a180038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Mail/Inc/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=template&id=9a180038&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=template&id=9a180038& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_9a180038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=9a180038& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Mail/Inc/Navigation.vue?vue&type=template&id=9a180038&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_9a180038___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_9a180038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);