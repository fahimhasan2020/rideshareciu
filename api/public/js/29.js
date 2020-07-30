(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
  components: {},
  mixins: [],
  data: function data() {
    return {
      errorMsg: '',
      loads: false,
      accept: false,
      type: 'password',
      registerForm: {
        first_name: '',
        last_name: '',
        email: this.email,
        password: '',
        confirm_password: '',
        slug: this.slug
      },
      registerFormError: {
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: ''
      },
      registerFormClassError: {
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: ''
      }
    };
  },
  watch: {
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
  props: {
    email: String,
    slug: String
  },
  computed: {
    success: function success() {
      return this.$page.success;
    },
    errors: function errors() {
      if (Object.keys(this.errors).length > 0) {
        this.errorMsg = this.errors[Object.keys(this.errors)[0]][0];
      }

      return this.$page.errors;
    },
    fault: function fault() {
      if (this.$page.fault != null) {
        this.errorMsg = this.$page.fault;
      }

      return this.$page.fault;
    }
  },
  created: function created() {//
  },
  mounted: function mounted() {
    document.title = 'Admin | Register';
  },
  methods: {
    saveRegister: function saveRegister() {
      var _this = this;

      this.loads = true;

      if (this.registerForm.first_name === '' || this.registerForm.last_name === '' || this.registerForm.password === '' || this.registerForm.confirm_password !== this.registerForm.password) {
        if (this.registerForm.first_name === '') {
          this.registerFormError.first_name = 'First name field required';
          this.registerFormClassError.first_name = 'red';
        } else {
          this.registerFormError.first_name = '';
          this.registerFormClassError.first_name = '';
        }

        if (this.registerForm.last_name === '') {
          this.registerFormError.last_name = 'Last name field required';
          this.registerFormClassError.last_name = 'red';
        } else {
          this.registerFormError.last_name = '';
          this.registerFormClassError.last_name = '';
        }

        if (this.registerForm.password === '') {
          this.registerFormError.password = 'Password field required';
          this.registerFormClassError.password = 'red';
        } else {
          this.registerFormError.password = '';
          this.registerFormClassError.password = '';
        }

        if (this.registerForm.confirm_password !== this.registerForm.password) {
          this.registerFormError.confirm_password = 'Didn\'t match with password';
          this.registerFormClassError.confirm_password = 'red';
        } else {
          this.registerFormError.confirm_password = '';
          this.registerFormClassError.confirm_password = '';
        }

        this.loads = false;
      } else {
        this.$inertia.post('/admins/admin-resource/invite/accept', this.registerForm).then(function () {
          _this.loads = false;
          _this.registerForm.first_name = '';
          _this.registerForm.last_name = '';
          _this.registerForm.password = '';
          _this.registerForm.confirm_password = '';
          _this.registerFormError.first_name = '';
          _this.registerFormError.last_name = '';
          _this.registerFormError.password = '';
          _this.registerFormError.confirm_password = '';
          _this.registerFormClassError.first_name = '';
          _this.registerFormClassError.last_name = '';
          _this.registerFormClassError.password = '';
          _this.registerFormClassError.confirm_password = '';
        });
      }
    },
    show: function show() {
      if (this.type === 'password') {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.posta[data-v-b7e42868]{\n    position: absolute;\n    right: 30px;\n    top: 10px;\n    cursor: pointer;\n}\n.red[data-v-b7e42868]{\n    border: 1px solid red !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=template&id=b7e42868&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Register.vue?vue&type=template&id=b7e42868&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                  _c(
                    "form",
                    { staticClass: "form-horizontal", attrs: { action: "#" } },
                    [
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
                      _c("div", { staticClass: "form-group " }, [
                        _c("div", { staticClass: "col-xs-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "email", disabled: "" },
                            domProps: { value: _vm.email }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group " }, [
                        _c("div", { staticClass: "col-xs-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.registerForm.first_name,
                                expression: "registerForm.first_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: _vm.registerFormClassError.first_name,
                            attrs: {
                              type: "text",
                              required: "",
                              placeholder: "First name"
                            },
                            domProps: { value: _vm.registerForm.first_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.registerForm,
                                  "first_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.registerFormError.first_name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group " }, [
                        _c("div", { staticClass: "col-xs-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.registerForm.last_name,
                                expression: "registerForm.last_name"
                              }
                            ],
                            staticClass: "form-control",
                            class: _vm.registerFormClassError.last_name,
                            attrs: {
                              type: "text",
                              required: "",
                              placeholder: "Last name"
                            },
                            domProps: { value: _vm.registerForm.last_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.registerForm,
                                  "last_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.registerFormError.last_name))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "col-xs-12" }, [
                          _vm.type === "checkbox"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.registerForm.password,
                                    expression: "registerForm.password"
                                  }
                                ],
                                staticClass: "form-control",
                                class: _vm.registerFormClassError.password,
                                attrs: {
                                  required: "",
                                  placeholder: "Password",
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    _vm.registerForm.password
                                  )
                                    ? _vm._i(_vm.registerForm.password, null) >
                                      -1
                                    : _vm.registerForm.password
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.registerForm.password,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.registerForm,
                                            "password",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.registerForm,
                                            "password",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.registerForm,
                                        "password",
                                        $$c
                                      )
                                    }
                                  }
                                }
                              })
                            : _vm.type === "radio"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.registerForm.password,
                                    expression: "registerForm.password"
                                  }
                                ],
                                staticClass: "form-control",
                                class: _vm.registerFormClassError.password,
                                attrs: {
                                  required: "",
                                  placeholder: "Password",
                                  type: "radio"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.registerForm.password,
                                    null
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.registerForm,
                                      "password",
                                      null
                                    )
                                  }
                                }
                              })
                            : _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.registerForm.password,
                                    expression: "registerForm.password"
                                  }
                                ],
                                staticClass: "form-control",
                                class: _vm.registerFormClassError.password,
                                attrs: {
                                  required: "",
                                  placeholder: "Password",
                                  type: _vm.type
                                },
                                domProps: { value: _vm.registerForm.password },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.registerForm,
                                      "password",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                          _vm._v(" "),
                          _vm.type === "password"
                            ? _c("i", {
                                staticClass: "fa fa-eye posta",
                                on: { click: _vm.show }
                              })
                            : _c("i", {
                                staticClass: "fa fa-eye-slash posta",
                                on: { click: _vm.show }
                              }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.registerFormError.password))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "col-xs-12" }, [
                          _vm.type === "checkbox"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.registerForm.confirm_password,
                                    expression: "registerForm.confirm_password"
                                  }
                                ],
                                staticClass: "form-control",
                                class:
                                  _vm.registerFormClassError.confirm_password,
                                attrs: {
                                  placeholder: "Confirm password",
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(
                                    _vm.registerForm.confirm_password
                                  )
                                    ? _vm._i(
                                        _vm.registerForm.confirm_password,
                                        null
                                      ) > -1
                                    : _vm.registerForm.confirm_password
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.registerForm.confirm_password,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.registerForm,
                                            "confirm_password",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.registerForm,
                                            "confirm_password",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(
                                        _vm.registerForm,
                                        "confirm_password",
                                        $$c
                                      )
                                    }
                                  }
                                }
                              })
                            : _vm.type === "radio"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.registerForm.confirm_password,
                                    expression: "registerForm.confirm_password"
                                  }
                                ],
                                staticClass: "form-control",
                                class:
                                  _vm.registerFormClassError.confirm_password,
                                attrs: {
                                  placeholder: "Confirm password",
                                  type: "radio"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.registerForm.confirm_password,
                                    null
                                  )
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(
                                      _vm.registerForm,
                                      "confirm_password",
                                      null
                                    )
                                  }
                                }
                              })
                            : _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.registerForm.confirm_password,
                                    expression: "registerForm.confirm_password"
                                  }
                                ],
                                staticClass: "form-control",
                                class:
                                  _vm.registerFormClassError.confirm_password,
                                attrs: {
                                  placeholder: "Confirm password",
                                  type: _vm.type
                                },
                                domProps: {
                                  value: _vm.registerForm.confirm_password
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.registerForm,
                                      "confirm_password",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                          _vm._v(" "),
                          _vm._m(1),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.registerFormError.confirm_password)
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "col-xs-12" }, [
                          _c(
                            "div",
                            { staticClass: "checkbox checkbox-success" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.accept,
                                    expression: "accept"
                                  }
                                ],
                                attrs: {
                                  id: "checkbox-signup",
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.accept)
                                    ? _vm._i(_vm.accept, null) > -1
                                    : _vm.accept
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.accept,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.accept = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.accept = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.accept = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _vm._m(2)
                            ]
                          )
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
                            _vm.accept
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn w-md btn-danger btn-bordered waves-effect waves-light",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.saveRegister($event)
                                      }
                                    }
                                  },
                                  [
                                    _vm.loads
                                      ? _c("span", [
                                          _c("i", {
                                            staticClass: "fa fa-refresh fa-spin"
                                          })
                                        ])
                                      : _c("span", [_vm._v("Register")])
                                  ]
                                )
                              : _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn w-md btn-danger btn-bordered waves-effect waves-light",
                                    attrs: { type: "button", disabled: "" }
                                  },
                                  [_vm._v("Register")]
                                )
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "clearfix" })
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(3)
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
          _c("span", [_vm._v("Sign In")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "help-block" }, [
      _c("small", [
        _vm._v(
          "Password should be at least 9 character . Password field should contain at least one uppercase one lowercase and one regular expression"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "checkbox-signup" } }, [
      _vm._v("I accept "),
      _c(
        "a",
        {
          attrs: {
            "data-toggle": "modal",
            "data-target": "#registerControl",
            href: "javascript:void(0)"
          }
        },
        [_vm._v("Terms and Conditions")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade ",
        attrs: {
          id: "registerControl",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog model-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [_vm._v("Terms & Conditions")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._v(
                  "\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eaque eius, ex excepturi explicabo facere iure iusto mollitia natus numquam omnis rerum temporibus vel vero. A cumque nihil obcaecati!\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_b7e42868_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=b7e42868&scoped=true& */ "./resources/js/Pages/Register.vue?vue&type=template&id=b7e42868&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css& */ "./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_b7e42868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_b7e42868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b7e42868",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=style&index=0&id=b7e42868&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_b7e42868_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Register.vue?vue&type=template&id=b7e42868&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Register.vue?vue&type=template&id=b7e42868&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_b7e42868_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=b7e42868&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Register.vue?vue&type=template&id=b7e42868&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_b7e42868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_b7e42868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);