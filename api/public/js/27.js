(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BrowserDetect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_pincode_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-pincode-input */ "./node_modules/vue-pincode-input/PincodeInput.min.js");
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
  components: {
    PincodeInput: vue_pincode_input__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [],
  data: function data() {
    return {
      otp: null,
      sent: false,
      via: null,
      viaError: '',
      isLoading: false,
      successMsg: '',
      errorMsg: '',
      otpError: ''
    };
  },
  props: {//
  },
  computed: {
    success: function success() {
      return this.$page.success;
    },
    errors: function errors() {
      return this.$page.errors;
    },
    fault: function fault() {
      return this.$page.fault;
    }
  },
  watch: {
    success: function success() {
      if (this.$page.success != null) {
        this.successMsg = this.$page.success;
      }
    },
    errors: function errors() {
      if (Object.keys(this.errors).length > 0) {
        this.errorMsg = this.errors[Object.keys(this.errors)[0]][0];
      }
    },
    fault: function fault() {
      if (this.$page.fault != null) {
        this.errorMsg = this.$page.fault;
      }
    }
  },
  created: function created() {//
  },
  mounted: function mounted() {
    document.title = 'Admin | Unknown browser';
  },
  methods: {
    verifyBrowser: function verifyBrowser() {
      var _this = this;

      this.isLoading = true;

      if (this.via === null || this.via === '') {
        this.isLoading = false;
        this.viaError = 'You haven\'t selected any method';
      } else {
        this.viaError = '';
        axios.post('/admins/verify/trusted/browser', {
          via: this.via
        }).then(function () {
          _this.isLoading = false;
          _this.sent = true;
        })["catch"](function (e) {
          console.log(e);
          _this.isLoading = false;
        });
      }
    },
    logout: function logout() {
      this.$inertia.post('/admins/logout/lock');
    },
    verifyOtp: function verifyOtp() {
      var _this2 = this;

      this.isLoading = true;

      if (this.otp.length < 6) {
        this.otpError = 'Incomplete sections';
      } else {
        this.otpError = '';
        this.$inertia.post('/admins/post/verify/trusted/browser', {
          otp: this.otp
        }, {
          preserveState: true,
          preserveScroll: true
        }).then(function () {
          _this2.sent = false;
          _this2.isLoading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.red[data-v-772058dc]{\n    border: 1px solid red !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "account-content" }, [
                  _vm.sent
                    ? _c("div", [
                        _vm._m(1),
                        _vm._v(" "),
                        _vm.errorMsg !== ""
                          ? _c(
                              "div",
                              {
                                staticClass: "alert alert-danger",
                                attrs: { role: "alert" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.errorMsg) +
                                    "\n                                    "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.successMsg !== ""
                          ? _c(
                              "div",
                              {
                                staticClass: "alert alert-success",
                                attrs: { role: "alert" }
                              },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.successMsg) +
                                    "\n                                    "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            staticClass: "form-horizontal",
                            attrs: { action: "#" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group text-center" },
                              [
                                _c("PincodeInput", {
                                  attrs: { placeholder: "0", length: "6" },
                                  model: {
                                    value: _vm.otp,
                                    callback: function($$v) {
                                      _vm.otp = $$v
                                    },
                                    expression: "otp"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.otpError
                                  ? _c(
                                      "span",
                                      {
                                        staticClass: "text-center text-danger"
                                      },
                                      [_vm._v(_vm._s(_vm.otpError))]
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group account-btn text-center m-t-10"
                              },
                              [
                                _c("div", { staticClass: "col-xs-12" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn w-md btn-bordered btn-danger waves-effect waves-light",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.verifyOtp($event)
                                        }
                                      }
                                    },
                                    [
                                      _vm.isLoading
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-refresh fa-spin"
                                            })
                                          ])
                                        : _c("span", [_vm._v("Verify")])
                                    ]
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      ])
                    : _c(
                        "form",
                        {
                          staticClass: "form-horizontal",
                          attrs: { action: "#" }
                        },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _vm.errorMsg !== ""
                            ? _c(
                                "div",
                                {
                                  staticClass: "alert alert-danger",
                                  attrs: { role: "alert" }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.errorMsg) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.successMsg !== ""
                            ? _c(
                                "div",
                                {
                                  staticClass: "alert alert-success",
                                  attrs: { role: "alert" }
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.successMsg) +
                                      "\n                                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("div", { staticClass: "col-xs-12" }, [
                              _vm.$page.auth.user.email
                                ? _c("div", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.via,
                                          expression: "via"
                                        }
                                      ],
                                      attrs: {
                                        type: "radio",
                                        id: "male",
                                        name: "option",
                                        value: "email"
                                      },
                                      domProps: {
                                        checked: _vm._q(_vm.via, "email")
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.via = "email"
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: "male" } }, [
                                      _vm._v(
                                        "Send OTP to " +
                                          _vm._s(_vm.$page.auth.user.email)
                                      )
                                    ]),
                                    _c("br")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.$page.auth.user.phone_number
                                ? _c("div", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.via,
                                          expression: "via"
                                        }
                                      ],
                                      attrs: {
                                        type: "radio",
                                        id: "female",
                                        name: "option",
                                        value: "phone"
                                      },
                                      domProps: {
                                        checked: _vm._q(_vm.via, "phone")
                                      },
                                      on: {
                                        change: function($event) {
                                          _vm.via = "phone"
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: "female" } }, [
                                      _vm._v(
                                        "Send OTP to " +
                                          _vm._s(
                                            _vm.$page.auth.user.phone_number
                                          )
                                      )
                                    ]),
                                    _c("br")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.viaError
                                ? _c(
                                    "span",
                                    { staticClass: "text-center text-danger" },
                                    [_vm._v(_vm._s(_vm.viaError))]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "form-group account-btn text-center m-t-10"
                            },
                            [
                              _c("div", { staticClass: "col-xs-12" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn w-md btn-bordered btn-danger waves-effect waves-light",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.verifyBrowser($event)
                                      }
                                    }
                                  },
                                  [
                                    _vm.isLoading
                                      ? _c("span", [
                                          _c("i", {
                                            staticClass: "fa fa-refresh fa-spin"
                                          })
                                        ])
                                      : _c("span", [_vm._v("Send OTP")])
                                  ]
                                )
                              ])
                            ]
                          )
                        ]
                      ),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row m-t-50" }, [
                _c("div", { staticClass: "col-sm-12 text-center" }, [
                  _c(
                    "p",
                    { staticClass: "text-muted" },
                    [
                      _vm._v("Want to access another account?"),
                      _c(
                        "inertia-link",
                        {
                          staticClass: "text-primary m-l-5",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.logout($event)
                            }
                          }
                        },
                        [_c("b", [_vm._v("Logout")])]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center account-logo-box" }, [
      _c("h2", { staticClass: "text-uppercase" }, [
        _c("a", { staticClass: "text-success", attrs: { href: "/" } }, [
          _c("span", [_vm._v("Unknown browser")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center m-b-20" }, [
      _c("p", { staticClass: "text-muted m-b-0 font-13" }, [
        _vm._v(
          "\n                                            Otp has been sent to your email/phone number . Put the otp here.\n                                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center m-b-20" }, [
      _c("p", { staticClass: "text-muted m-b-0 font-13" }, [
        _vm._v(
          "If you have access to your email or phone number then we shall send the otp to your email"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/BrowserDetect.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/BrowserDetect.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowserDetect_vue_vue_type_template_id_772058dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true& */ "./resources/js/Pages/BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true&");
/* harmony import */ var _BrowserDetect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserDetect.vue?vue&type=script&lang=js& */ "./resources/js/Pages/BrowserDetect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css& */ "./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BrowserDetect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrowserDetect_vue_vue_type_template_id_772058dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrowserDetect_vue_vue_type_template_id_772058dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "772058dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/BrowserDetect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/BrowserDetect.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/BrowserDetect.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BrowserDetect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=style&index=0&id=772058dc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_style_index_0_id_772058dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_template_id_772058dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BrowserDetect.vue?vue&type=template&id=772058dc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_template_id_772058dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BrowserDetect_vue_vue_type_template_id_772058dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);