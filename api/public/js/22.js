(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/EditProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inc_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inc/Layout */ "./resources/js/Pages/inc/Layout.vue");
/* harmony import */ var _Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Mixins/Dashboard */ "./resources/js/Mixins/Dashboard.js");
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
  components: {
    Layout: _inc_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      selectedPhoto: undefined,
      path: this.$page.app.url + 'admin/profilepicture/',
      avatarLibrary: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
      options: {//
      },
      bio: '',
      socialForm: {
        facebook_link: '',
        twitter_link: '',
        linkdin_link: ''
      },
      passwordResetForm: {
        old_password: '',
        new_password: '',
        confirm_new_password: ''
      },
      passwordResetFormError: {
        old_password: '',
        new_password: '',
        confirm_new_password: '',
        relog: false
      },
      passwordResetFormErrorClass: {
        old_password: '',
        new_password: '',
        confirm_new_password: ''
      },
      type: 'password',
      emailOtp: false,
      emailOtpSent: {
        code: '',
        type: ''
      },
      emailOtpSentError: {
        code: '',
        type: ''
      },
      emailOtpSentErrorClass: {
        code: '',
        type: ''
      },
      email: {
        email: '',
        password: '',
        type: 'email'
      },
      emailError: {
        email: '',
        password: ''
      },
      emailErrorClass: {
        email: '',
        password: ''
      },
      otpSent: false,
      phone: {
        number: '',
        type: 'phone'
      },
      phoneError: {
        number: ''
      },
      phoneClass: {
        number: ''
      },
      otp: {
        code: '',
        type: 'phone'
      },
      otpError: {
        code: ''
      },
      otpErrorClass: {
        code: ''
      },
      infoForm: {
        first_name: '',
        last_name: ''
      },
      infoFormError: {
        first_name: '',
        last_name: ''
      },
      infoFormErrorClass: {
        first_name: '',
        last_name: ''
      }
    };
  },
  props: {//
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {
    this.infoForm.first_name = this.$page.auth.user.first_name;
    this.infoForm.last_name = this.$page.auth.user.last_name;
    this.phone.number = this.$page.auth.user.phone_number;
    this.socialForm.facebook_link = this.$page.auth.user.facebook_link;
    this.socialForm.twitter_link = this.$page.auth.user.twitter_link;
    this.socialForm.linkdin_link = this.$page.auth.user.linkdin_link;
    this.bio = this.$page.auth.user.bio;
  },
  methods: {
    updateProfilePicture: function updateProfilePicture() {
      var _this = this;

      if (this.selectedPhoto === undefined) {
        return this.$toast.open({
          message: 'No photo selected',
          type: "error",
          position: "top-right",
          duration: 5000,
          dismissible: true
        });
      }

      this.$inertia.post('/admins/update/profile-picture', {
        profilePicture: this.path + this.selectedPhoto + '.png'
      }).then(function () {
        _this.selectedPhoto = undefined;
        $("[data-dismiss=modal]").trigger({
          type: "click"
        });
      });
    },
    saveName: function saveName() {
      var _this2 = this;

      if (this.infoForm.first_name === '' || this.infoForm.last_name === '') {
        if (this.infoForm.first_name === '') {
          this.infoFormError.first_name = 'First name required';
          this.infoFormErrorClass.first_name = 'red';
        } else {
          this.infoFormError.first_name = '';
          this.infoFormErrorClass.first_name = '';
        }

        if (this.infoForm.last_name === '') {
          this.infoFormError.last_name = 'Last name required';
          this.infoFormErrorClass.last_name = 'red';
        } else {
          this.infoFormError.last_name = '';
          this.infoFormErrorClass.last_name = '';
        }
      } else {
        this.$inertia.post('/admins/save/name', this.infoForm).then(function () {
          _this2.infoFormError.first_name = '';
          _this2.infoFormErrorClass.first_name = '';
          _this2.infoFormError.last_name = '';
          _this2.infoFormErrorClass.last_name = '';
        });
      }
    },
    sentUpdateMobile: function sentUpdateMobile() {
      var _this3 = this;

      if (this.phone.number === '') {
        this.phoneError.number = 'Phone Number required';
        this.phoneClass.number = 'red';
      } else {
        this.phoneError.number = '';
        this.phoneClass.number = '';
        this.$inertia.post('/admins/verify/otp', this.phone, {
          preserveScroll: true
        }).then(function () {
          _this3.otpSent = true;
          _this3.phone.number = _this3.$page.auth.user.phone_number;
        });
      }
    },
    verifyOtpPhone: function verifyOtpPhone() {
      var _this4 = this;

      if (this.otp.code === '') {
        this.otpError.code = 'OTP code required';
        this.otpErrorClass.code = 'red';
      } else {
        this.otpError.code = '';
        this.otpErrorClass.code = '';
        this.$inertia.post('/admins/verify/otp/code', this.otp, {
          preserveScroll: true
        }).then(function () {
          _this4.otpSent = false;
          _this4.otp.code = '';
          _this4.phone.number = _this4.$page.auth.user.phone_number;
        });
      }
    },
    saveNewMail: function saveNewMail() {
      var _this5 = this;

      if (this.email.password === '' || this.email.email === '') {
        if (this.email.password === '') {
          this.emailError.password = 'Password required';
          this.emailErrorClass.password = 'red';
        } else {
          this.emailError.password = '';
          this.emailErrorClass.password = '';
        }

        if (this.email.email === '') {
          this.emailError.email = 'Email required';
          this.emailErrorClass.email = 'red';
        } else {
          this.emailError.email = '';
          this.emailErrorClass.email = '';
        }
      } else {
        this.emailError.email = '';
        this.emailError.password = '';
        this.emailErrorClass.email = '';
        this.emailErrorClass.password = '';
        this.$inertia.post('/admins/verify/otp', this.email, {
          preserveScroll: true
        }).then(function () {
          _this5.emailOtp = true;
          _this5.email.email = _this5.$page.auth.user.email;
        });
      }
    },
    verifyOtpEmail: function verifyOtpEmail() {
      var _this6 = this;

      if (this.emailOtpSent.code === '') {
        this.otpError.code = 'OTP code required';
        this.otpErrorClass.code = 'red';
      } else {
        this.emailOtpSentError.code = '';
        this.emailOtpSentErrorClass.code = '';
        this.$inertia.post('/admins/verify/otp/code', this.emailOtpSent, {
          preserveScroll: true
        }).then(function () {
          _this6.emailOtp = false;
          _this6.emailOtpSent.code = '';
          _this6.email.email = _this6.$page.auth.user.email;
        });
      }
    },
    show: function show() {
      if (this.type === 'password') {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    },
    setNewPassword: function setNewPassword() {
      var _this7 = this;

      if (this.passwordResetForm.old_password === '' || this.passwordResetForm.old_password === '' || this.passwordResetForm.confirm_new_password !== this.passwordResetForm.new_password) {
        if (this.passwordResetForm.old_password === '') {
          this.passwordResetFormError.old_password = 'Password required';
          this.passwordResetFormErrorClass.old_password = 'red';
        } else {
          this.passwordResetFormError.old_password = '';
          this.passwordResetFormErrorClass.old_password = '';
        }

        if (this.passwordResetForm.new_password === '') {
          this.passwordResetFormError.new_password = 'Password required';
          this.passwordResetFormErrorClass.new_password = 'red';
        } else {
          this.passwordResetFormError.new_password = '';
          this.passwordResetFormErrorClass.new_password = '';
        }

        if (this.passwordResetForm.confirm_new_password !== this.passwordResetForm.new_password) {
          this.passwordResetFormError.confirm_new_password = 'Password not matched';
          this.passwordResetFormErrorClass.confirm_new_password = 'red';
        } else {
          this.passwordResetFormError.confirm_new_password = '';
          this.passwordResetFormErrorClass.confirm_new_password = '';
        }
      } else {
        this.$inertia.post('/admins/savepasswords', this.passwordResetForm, {
          preserveScroll: true
        }).then(function () {
          _this7.passwordResetFormError.old_password = '';
          _this7.passwordResetFormErrorClass.old_password = '';
          _this7.passwordResetFormError.new_password = '';
          _this7.passwordResetFormErrorClass.new_password = '';
          _this7.passwordResetFormError.confirm_new_password = '';
          _this7.passwordResetFormErrorClass.confirm_new_password = '';
        });
      }
    },
    saveSocialForm: function saveSocialForm() {
      var _this8 = this;

      this.$inertia.post('/admins/social/save', this.socialForm).then(function () {
        is.socialForm.facebook_link = _this8.$page.auth.user.facebook_link;
        _this8.socialForm.twitter_link = _this8.$page.auth.user.twitter_link;
        _this8.socialForm.linkdin_link = _this8.$page.auth.user.linkdin_link;
      });
    },
    saveBio: function saveBio() {
      var _this9 = this;

      this.$inertia.post('/admins/save/bio', {
        bio: this.bio
      }).then(function () {
        _this9.bio = _this9.$page.auth.user.bio;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.posta[data-v-12692220]{\n    position: absolute;\n    right: 30px;\n    top: 10px;\n    cursor: pointer;\n}\n.red[data-v-12692220]{\n    border: 1px solid red !important;\n}\n.avatar-images[data-v-12692220]{\n    padding: 10px;\n    margin: 10px;\n    box-shadow: 2px 2px 2px 2px #ccc;\n    height: 120px;\n    width: 120px;\n    display: inline-block;\n}\n.selects[data-v-12692220]{\n    background-color: blueviolet;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-toast-notification/dist/theme-default.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-toast-notification/dist/theme-default.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity 150ms ease-out}.fade-enter,.fade-leave-to{opacity:0}.notices{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1052;pointer-events:none}.notices .toast{display:inline-flex;align-items:center;animation-duration:150ms;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:.25em;pointer-events:auto;opacity:.92;color:#fff;min-height:3em;cursor:pointer}.notices .toast .toast-text{margin:0;padding:.5em 1em;word-break:break-all}.notices .toast .toast-icon{display:none}.notices .toast-success{background-color:#28a745}.notices .toast-info{background-color:#17a2b8}.notices .toast-warning{background-color:#ffc107}.notices .toast-error{background-color:#dc3545}.notices .toast-default{background-color:#343a40}.notices .toast.is-top,.notices .toast.is-bottom{align-self:center}.notices .toast.is-top-right,.notices .toast.is-bottom-right{align-self:flex-end}.notices .toast.is-top-left,.notices .toast.is-bottom-left{align-self:flex-start}.notices.is-top{flex-direction:column}.notices.is-bottom{flex-direction:column-reverse}.notices.is-custom-parent{position:absolute}@media screen and (max-width: 768px){.notices{padding:0;position:fixed !important}}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=template&id=12692220&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/EditProfile.vue?vue&type=template&id=12692220&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Admin | Edit Profile" } }, [
    _c("div", { staticClass: "content-page" }, [
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c("div", { staticClass: "page-title-box" }, [
                _c("h4", { staticClass: "page-title" }, [_vm._v("Dashboard")]),
                _vm._v(" "),
                _c("ol", { staticClass: "breadcrumb p-0 m-0" }, [
                  _c("li", { attrs: { CLASS: "active" } }, [
                    _vm._v(
                      "\n                                    Edit Profile\n                                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-4" }, [
                    _vm.$page.auth.user.profile_picture
                      ? _c("img", {
                          staticClass: "img-circle img-thumbnail",
                          attrs: {
                            src: _vm.$page.auth.user.profile_picture,
                            height: "150px",
                            width: "150px",
                            alt: "profile-image"
                          }
                        })
                      : _c("img", {
                          staticClass: "img-circle img-thumbnail",
                          attrs: {
                            src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                            height: "150px",
                            width: "150px",
                            alt: "profile-image"
                          }
                        })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: {
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#exampleModal"
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-file-image-o" }),
                        _vm._v(
                          " Change Avatar\n                                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "modal fade",
                        attrs: {
                          id: "exampleModal",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "exampleModalLabel",
                          "aria-hidden": "true"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "modal-dialog modal-lg",
                            attrs: { role: "document" }
                          },
                          [
                            _c("div", { staticClass: "modal-content" }, [
                              _c("div", { staticClass: "modal-header" }, [
                                _c(
                                  "h5",
                                  {
                                    staticClass: "modal-title",
                                    attrs: { id: "exampleModalLabel" }
                                  },
                                  [_vm._v("Avatar gallery")]
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
                                    _c(
                                      "span",
                                      { attrs: { "aria-hidden": "true" } },
                                      [_vm._v("×")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-body" }, [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      display: "block",
                                      position: "relative"
                                    }
                                  },
                                  _vm._l(_vm.avatarLibrary, function(av) {
                                    return _c(
                                      "div",
                                      {
                                        staticClass: "avatar-images",
                                        class: {
                                          selects: av == _vm.selectedPhoto
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.selectedPhoto = av
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: _vm.path + av + ".png",
                                            height: "100px",
                                            width: "100px",
                                            alt: "one"
                                          }
                                        })
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-footer" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-secondary",
                                    attrs: {
                                      type: "button",
                                      "data-dismiss": "modal"
                                    }
                                  },
                                  [_vm._v("Close")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.updateProfilePicture($event)
                                      }
                                    }
                                  },
                                  [_vm._v("Update photo")]
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _vm.otpSent
                  ? _c("div", [
                      _c("h4", { staticClass: "text-center text-primary" }, [
                        _vm._v("Enter verification code")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: {
                            "margin-bottom": "15px",
                            "margin-top": "15px"
                          }
                        },
                        [
                          _c("span", { staticClass: "input-group-addon" }, [
                            _c("i", { staticClass: "fa fa-pie-chart" })
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.otp.code,
                                expression: "otp.code"
                              }
                            ],
                            staticClass: "form-control",
                            class: _vm.otpErrorClass.code,
                            attrs: {
                              type: "number",
                              id: "example-input1-group10",
                              name: "example-input1-group10",
                              placeholder: "Otp code sent to your email"
                            },
                            domProps: { value: _vm.otp.code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.otp, "code", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.otpError.code))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.verifyOtpPhone($event)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Verify")
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { height: "50px" } })
                    ])
                  : _c(
                      "div",
                      [
                        _c("h4", { staticClass: "text-center text-primary" }, [
                          _vm._v("Update phone number")
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("vue-tel-input", {
                          class: _vm.phoneClass.number,
                          staticStyle: {
                            height: "50px",
                            "margin-top": "15px",
                            "margin-bottom": "15px",
                            border: "2px solid #E3E3E3"
                          },
                          model: {
                            value: _vm.phone.number,
                            callback: function($$v) {
                              _vm.$set(_vm.phone, "number", $$v)
                            },
                            expression: "phone.number"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.phoneError.number))
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.sentUpdateMobile($event)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-save" }),
                            _vm._v(" Save changes")
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { height: "40px" } })
                      ],
                      1
                    )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _vm.emailOtp
                  ? _c("div", [
                      _c("h4", { staticClass: "text-center text-primary" }, [
                        _vm._v("Enter verification code")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: {
                            "margin-bottom": "15px",
                            "margin-top": "15px"
                          }
                        },
                        [
                          _c("span", { staticClass: "input-group-addon" }, [
                            _c("i", { staticClass: "fa fa-pie-chart" })
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.emailOtpSent.code,
                                expression: "emailOtpSent.code"
                              }
                            ],
                            staticClass: "form-control",
                            class: _vm.emailOtpSentErrorClass.code,
                            attrs: {
                              type: "number",
                              id: "example-input1-group11",
                              name: "example-input1-group11",
                              placeholder: "Otp code sent to your email"
                            },
                            domProps: { value: _vm.emailOtpSent.code },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.emailOtpSent,
                                  "code",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.emailOtpSentError.code))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.verifyOtpEmail($event)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Verify")
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { height: "50px" } })
                    ])
                  : _c("div", [
                      _c("h4", { staticClass: "text-center text-primary" }, [
                        _vm._v("Change Email")
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: {
                            "margin-bottom": "15px",
                            "margin-top": "15px"
                          }
                        },
                        [
                          _c("span", { staticClass: "input-group-addon" }, [
                            _c("i", { staticClass: "fa fa-key" })
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email.password,
                                expression: "email.password"
                              }
                            ],
                            staticClass: "form-control",
                            class: _vm.emailErrorClass.password,
                            attrs: {
                              type: "password",
                              id: "example-input1-group8",
                              name: "example-input1-group8",
                              placeholder: "Enter password"
                            },
                            domProps: { value: _vm.email.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.email,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.emailError.password))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "input-group",
                          staticStyle: {
                            "margin-bottom": "15px",
                            "margin-top": "15px"
                          }
                        },
                        [
                          _c("span", { staticClass: "input-group-addon" }, [
                            _c("i", { staticClass: "fa fa-key" })
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email.email,
                                expression: "email.email"
                              }
                            ],
                            staticClass: "form-control",
                            class: _vm.emailErrorClass.email,
                            attrs: {
                              type: "email",
                              id: "example-input1-group9",
                              name: "example-input1-group9",
                              placeholder: "Enter new email"
                            },
                            domProps: { value: _vm.email.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.email,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.emailError.email))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveNewMail($event)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Save changes")
                        ]
                      )
                    ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Change Info")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _c("i", { staticClass: "fa fa-user" })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.infoForm.first_name,
                          expression: "infoForm.first_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: _vm.infoFormErrorClass.first_name,
                      attrs: {
                        type: "text",
                        id: "example-input1-group1",
                        name: "example-input1-group1",
                        placeholder: "First Name"
                      },
                      domProps: { value: _vm.infoForm.first_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.infoForm,
                            "first_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.infoFormError.first_name))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _c("i", { staticClass: "fa fa-user" })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.infoForm.last_name,
                          expression: "infoForm.last_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: _vm.infoFormErrorClass.last_name,
                      attrs: {
                        type: "text",
                        id: "example-input1-group2",
                        name: "example-input1-group2",
                        placeholder: "Last Name"
                      },
                      domProps: { value: _vm.infoForm.last_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.infoForm,
                            "last_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.infoFormError.last_name))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveName($event)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-save" }),
                    _vm._v(" Save changes")
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticStyle: { height: "51px" } })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Change Password")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _vm.type !== "password"
                        ? _c("i", {
                            staticClass: "fa fa-eye",
                            on: { click: _vm.show }
                          })
                        : _c("i", {
                            staticClass: "fa fa-eye-slash",
                            on: { click: _vm.show }
                          })
                    ]),
                    _vm._v(" "),
                    _vm.type === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.passwordResetForm.old_password,
                              expression: "passwordResetForm.old_password"
                            }
                          ],
                          staticClass: "form-control",
                          class: _vm.passwordResetFormErrorClass.old_password,
                          attrs: {
                            id: "example-input1-group3",
                            name: "example-input1-group3",
                            placeholder: "Enter old password",
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.passwordResetForm.old_password
                            )
                              ? _vm._i(
                                  _vm.passwordResetForm.old_password,
                                  null
                                ) > -1
                              : _vm.passwordResetForm.old_password
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.passwordResetForm.old_password,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.passwordResetForm,
                                      "old_password",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.passwordResetForm,
                                      "old_password",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.passwordResetForm,
                                  "old_password",
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
                              value: _vm.passwordResetForm.old_password,
                              expression: "passwordResetForm.old_password"
                            }
                          ],
                          staticClass: "form-control",
                          class: _vm.passwordResetFormErrorClass.old_password,
                          attrs: {
                            id: "example-input1-group3",
                            name: "example-input1-group3",
                            placeholder: "Enter old password",
                            type: "radio"
                          },
                          domProps: {
                            checked: _vm._q(
                              _vm.passwordResetForm.old_password,
                              null
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.passwordResetForm,
                                "old_password",
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
                              value: _vm.passwordResetForm.old_password,
                              expression: "passwordResetForm.old_password"
                            }
                          ],
                          staticClass: "form-control",
                          class: _vm.passwordResetFormErrorClass.old_password,
                          attrs: {
                            id: "example-input1-group3",
                            name: "example-input1-group3",
                            placeholder: "Enter old password",
                            type: _vm.type
                          },
                          domProps: {
                            value: _vm.passwordResetForm.old_password
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.passwordResetForm,
                                "old_password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.passwordResetFormError.old_password))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _vm.type !== "password"
                        ? _c("i", {
                            staticClass: "fa fa-eye",
                            on: { click: _vm.show }
                          })
                        : _c("i", {
                            staticClass: "fa fa-eye-slash",
                            on: { click: _vm.show }
                          })
                    ]),
                    _vm._v(" "),
                    _vm.type === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.passwordResetForm.new_password,
                              expression: "passwordResetForm.new_password"
                            }
                          ],
                          staticClass: "form-control",
                          class: _vm.passwordResetFormErrorClass.new_password,
                          attrs: {
                            id: "example-input1-group4",
                            name: "example-input1-group3",
                            placeholder: "Enter new password",
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.passwordResetForm.new_password
                            )
                              ? _vm._i(
                                  _vm.passwordResetForm.new_password,
                                  null
                                ) > -1
                              : _vm.passwordResetForm.new_password
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.passwordResetForm.new_password,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.passwordResetForm,
                                      "new_password",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.passwordResetForm,
                                      "new_password",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.passwordResetForm,
                                  "new_password",
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
                              value: _vm.passwordResetForm.new_password,
                              expression: "passwordResetForm.new_password"
                            }
                          ],
                          staticClass: "form-control",
                          class: _vm.passwordResetFormErrorClass.new_password,
                          attrs: {
                            id: "example-input1-group4",
                            name: "example-input1-group3",
                            placeholder: "Enter new password",
                            type: "radio"
                          },
                          domProps: {
                            checked: _vm._q(
                              _vm.passwordResetForm.new_password,
                              null
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.passwordResetForm,
                                "new_password",
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
                              value: _vm.passwordResetForm.new_password,
                              expression: "passwordResetForm.new_password"
                            }
                          ],
                          staticClass: "form-control",
                          class: _vm.passwordResetFormErrorClass.new_password,
                          attrs: {
                            id: "example-input1-group4",
                            name: "example-input1-group3",
                            placeholder: "Enter new password",
                            type: _vm.type
                          },
                          domProps: {
                            value: _vm.passwordResetForm.new_password
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.passwordResetForm,
                                "new_password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.passwordResetFormError.new_password))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _vm.type !== "password"
                        ? _c("i", {
                            staticClass: "fa fa-eye",
                            on: { click: _vm.show }
                          })
                        : _c("i", {
                            staticClass: "fa fa-eye-slash",
                            on: { click: _vm.show }
                          })
                    ]),
                    _vm._v(" "),
                    _vm.type === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.passwordResetForm.confirm_new_password,
                              expression:
                                "passwordResetForm.confirm_new_password"
                            }
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.passwordResetFormErrorClass
                              .confirm_new_password,
                          attrs: {
                            id: "example-input1-group5",
                            name: "example-input1-group3",
                            placeholder: "Confirm new password",
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.passwordResetForm.confirm_new_password
                            )
                              ? _vm._i(
                                  _vm.passwordResetForm.confirm_new_password,
                                  null
                                ) > -1
                              : _vm.passwordResetForm.confirm_new_password
                          },
                          on: {
                            change: function($event) {
                              var $$a =
                                  _vm.passwordResetForm.confirm_new_password,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.passwordResetForm,
                                      "confirm_new_password",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.passwordResetForm,
                                      "confirm_new_password",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.passwordResetForm,
                                  "confirm_new_password",
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
                              value: _vm.passwordResetForm.confirm_new_password,
                              expression:
                                "passwordResetForm.confirm_new_password"
                            }
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.passwordResetFormErrorClass
                              .confirm_new_password,
                          attrs: {
                            id: "example-input1-group5",
                            name: "example-input1-group3",
                            placeholder: "Confirm new password",
                            type: "radio"
                          },
                          domProps: {
                            checked: _vm._q(
                              _vm.passwordResetForm.confirm_new_password,
                              null
                            )
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(
                                _vm.passwordResetForm,
                                "confirm_new_password",
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
                              value: _vm.passwordResetForm.confirm_new_password,
                              expression:
                                "passwordResetForm.confirm_new_password"
                            }
                          ],
                          staticClass: "form-control",
                          class:
                            _vm.passwordResetFormErrorClass
                              .confirm_new_password,
                          attrs: {
                            id: "example-input1-group5",
                            name: "example-input1-group3",
                            placeholder: "Confirm new password",
                            type: _vm.type
                          },
                          domProps: {
                            value: _vm.passwordResetForm.confirm_new_password
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.passwordResetForm,
                                "confirm_new_password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v(
                        _vm._s(_vm.passwordResetFormError.confirm_new_password)
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.passwordResetForm.relog,
                      expression: "passwordResetForm.relog"
                    }
                  ],
                  attrs: { type: "checkbox", id: "vehicle1", value: "reset" },
                  domProps: {
                    checked: Array.isArray(_vm.passwordResetForm.relog)
                      ? _vm._i(_vm.passwordResetForm.relog, "reset") > -1
                      : _vm.passwordResetForm.relog
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.passwordResetForm.relog,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = "reset",
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(
                              _vm.passwordResetForm,
                              "relog",
                              $$a.concat([$$v])
                            )
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.passwordResetForm,
                              "relog",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.passwordResetForm, "relog", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "vehicle1" } }, [
                  _vm._v("Logged out from all other devices")
                ]),
                _c("br"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.setNewPassword($event)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-save" }),
                    _vm._v(" Save changes")
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Social info Info")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _c("i", { staticClass: "fa fa-facebook" })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.socialForm.facebook_link,
                          expression: "socialForm.facebook_link"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "example-input1-group12",
                        name: "example-input1-group12",
                        placeholder: "Facebook link"
                      },
                      domProps: { value: _vm.socialForm.facebook_link },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.socialForm,
                            "facebook_link",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _c("i", { staticClass: "fa fa-twitter" })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.socialForm.twitter_link,
                          expression: "socialForm.twitter_link"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "example-input1-group13",
                        name: "example-input1-group13",
                        placeholder: "Twitter link"
                      },
                      domProps: { value: _vm.socialForm.twitter_link },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.socialForm,
                            "twitter_link",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "input-group",
                    staticStyle: {
                      "margin-bottom": "15px",
                      "margin-top": "15px"
                    }
                  },
                  [
                    _c("span", { staticClass: "input-group-addon" }, [
                      _c("i", { staticClass: "fa fa-linkedin" })
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.socialForm.linkdin_link,
                          expression: "socialForm.linkdin_link"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "example-input1-group14",
                        name: "example-input1-group14",
                        placeholder: "Linkdin link"
                      },
                      domProps: { value: _vm.socialForm.linkdin_link },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.socialForm,
                            "linkdin_link",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveSocialForm($event)
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-save" }),
                    _vm._v(" Save changes")
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticStyle: { height: "51px" } })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "card-box" },
                [
                  _c("markdown-editor", {
                    attrs: { options: _vm.options },
                    model: {
                      value: _vm.bio,
                      callback: function($$v) {
                        _vm.bio = $$v
                      },
                      expression: "bio"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-block btn-primary",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveBio($event)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v("  Save Bio")
                    ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/EditProfile.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Profile/EditProfile.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfile_vue_vue_type_template_id_12692220_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=template&id=12692220&scoped=true& */ "./resources/js/Pages/Profile/EditProfile.vue?vue&type=template&id=12692220&scoped=true&");
/* harmony import */ var _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css& */ "./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfile_vue_vue_type_template_id_12692220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfile_vue_vue_type_template_id_12692220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12692220",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/EditProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/EditProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Profile/EditProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=style&index=0&id=12692220&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_style_index_0_id_12692220_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Profile/EditProfile.vue?vue&type=template&id=12692220&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/EditProfile.vue?vue&type=template&id=12692220&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_12692220_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=template&id=12692220&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/EditProfile.vue?vue&type=template&id=12692220&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_12692220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_12692220_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);