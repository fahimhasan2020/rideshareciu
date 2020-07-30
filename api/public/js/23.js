(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Messages.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _inc_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      firstChat: '',
      messageText: '',
      conversation: []
    };
  },
  props: {
    users: Array
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {
    var _this = this;

    if (this.users.length > 1) {
      this.openChat(this.users[0]);
    }

    Echo.channel("admin-chat.".concat(this.$page.auth.user.id)).listen('AdminChatMessage', function (e) {
      _this.handleMessage(e);
    });
  },
  methods: {
    openChat: function openChat(value) {
      var _this2 = this;

      this.firstChat = value;
      var uri = '/admins/message/get/' + value.id;
      this.$loading(true);
      axios.get(uri).then(function (response) {
        _this2.$loading(false);

        _this2.conversation = response.data.data;
        setTimeout(function () {
          _this2.$refs.convrs.scrollTop = _this2.$refs.convrs.scrollHeight - _this2.$refs.convrs.clientHeight;
        }, 50);
      });
    },
    sendMessage: function sendMessage() {
      var _this3 = this;

      axios.post('/admins/message', {
        from: this.$page.auth.user.id,
        to: this.firstChat.id,
        message: this.messageText
      }).then(function (response) {
        _this3.messageText = '';

        _this3.conversation.push(response.data);

        setTimeout(function () {
          _this3.$refs.convrs.scrollTop = _this3.$refs.convrs.scrollHeight - _this3.$refs.convrs.clientHeight;
        }, 50);
      });
    },
    trigger: function trigger() {
      this.$refs.messageSent.click();
    },
    handleMessage: function handleMessage(message) {
      var _this4 = this;

      if (message.message.from === this.firstChat.id) {
        this.conversation.push(message.message);
        setTimeout(function () {
          _this4.$refs.convrs.scrollTop = _this4.$refs.convrs.scrollHeight - _this4.$refs.convrs.clientHeight;
        }, 50);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search-contact[data-v-c063508a]{\n    width: 95%;\n    padding: 5px;\n    border-radius: 15px;\n    background-color: #eee;\n    border: 1px solid #ccc;\n    padding-left: 10px;\n}\n.posi-search[data-v-c063508a]{\n    position: absolute;\n    top: 30px;\n    right: 42px;\n}\n.contact-name-box[data-v-c063508a]{\n    display: flex;\n}\n.info-box[data-v-c063508a]{\n    position: relative;\n    box-shadow: 3px 2px 4px 2px #ccc;\n    padding: 5px;\n    margin-bottom: 15px;\n}\n.message-compose-box[data-v-c063508a]{\n    z-index: 100;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: white;\n    box-shadow: 1px 1px 5px 1px #ccc;\n    padding: 15px;\n    display: flex;\n}\n.message-deactivate-box[data-v-c063508a]{\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    background-color: blue;\n    z-index: 100;\n    box-shadow: 2px -3px 2px 1px #ccc;\n    padding: 15px;\n}\n.input-box[data-v-c063508a]{\n    width: 60%;\n    position: relative;\n}\n.message-input[data-v-c063508a]{\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    background-color: #ebebeb;\n    border-radius: 15px;\n    padding-right: 45px;\n}\n.grab-box[data-v-c063508a]{\n    position: relative;\n    display: flex;\n    padding:5px;\n    width: 40%;\n}\n.grab-box i[data-v-c063508a]{\n    margin-right: 15px;\n}\ni[data-v-c063508a]{\n    cursor: pointer;\n}\n.inbox-item[data-v-c063508a]:hover{\n    background-color: #dcdfdf;\n    cursor: pointer;\n}\n@media only screen and (max-width: 500px) {\n.pc-only[data-v-c063508a] {\n        display: none !important;\n}\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=template&id=c063508a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/Messages.vue?vue&type=template&id=c063508a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Admin | Messages" } }, [
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
                      "\n                                    Messages\n                                "
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
            _c("div", { staticClass: "card-box" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-md-3 pc-only",
                    staticStyle: {
                      "padding-top": "20px",
                      "box-shadow": "2px 2px 7px 2px #ccc"
                    }
                  },
                  [
                    _c("div", { staticClass: "contact" }, [
                      _c("input", {
                        staticClass: "search-contact",
                        attrs: { type: "text", placeholder: "Find contact" }
                      }),
                      _vm._v(" "),
                      _c("i", { staticClass: "fa fa-search posi-search" })
                    ]),
                    _vm._v(" "),
                    _c("hr", { staticClass: "m-t-10" }),
                    _vm._v(" "),
                    _c("h4", [_vm._v("Contacts")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        ref: "convrs",
                        staticClass: "inbox-widget slimscroll-alt",
                        staticStyle: {
                          "max-height": "500px",
                          "min-height": "400px!important"
                        }
                      },
                      _vm._l(_vm.users, function(user) {
                        return _c("div", { key: user.id }, [
                          _c(
                            "div",
                            {
                              staticClass: "inbox-item",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.openChat(user)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "inbox-item-img" }, [
                                user.profile_picture
                                  ? _c("img", {
                                      staticClass: "img-circle",
                                      attrs: {
                                        src: user.profile_picture,
                                        alt: ""
                                      }
                                    })
                                  : _c("img", {
                                      staticClass: "img-circle",
                                      attrs: {
                                        src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                                        alt: ""
                                      }
                                    })
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "inbox-item-author" }, [
                                _vm._v(_vm._s(user.first_name))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "inbox-item-text" }, [
                                _vm._v("I've finished it! See you so...")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "inbox-item-date" }, [
                                _c("span", { staticClass: "text-muted" }, [
                                  _vm._v("12:28 pm")
                                ])
                              ])
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-9",
                    staticStyle: { "min-height": "600px" }
                  },
                  [
                    _c("div", { staticClass: "info-box" }, [
                      _c("div", { staticClass: "contact-name-box" }, [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              height: "50px",
                              width: "50px",
                              "border-radius": "20px"
                            }
                          },
                          [
                            _vm.firstChat.profile_picture
                              ? _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: _vm.firstChat.profile_picture,
                                    height: "50px",
                                    width: "50px",
                                    alt: ""
                                  }
                                })
                              : _c("img", {
                                  staticClass: "img-circle",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                                    alt: ""
                                  }
                                })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticStyle: {
                              "line-height": "50px",
                              "padding-left": "15px",
                              "font-family": "inherit",
                              "font-size": "20px"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.firstChat.first_name) +
                                " " +
                                _vm._s(_vm.firstChat.last_name)
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", [
                          _c("i", {
                            staticClass: "fa fa-dot-circle-o text-success",
                            staticStyle: {
                              position: "absolute",
                              top: "40%",
                              right: "40px"
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chat-conversation" }, [
                      _vm.conversation.length > 0
                        ? _c(
                            "ul",
                            {
                              ref: "convrs",
                              staticClass: "conversation-list slimscroll-alt",
                              staticStyle: {
                                "min-height": "452px !important",
                                "max-height": "500px",
                                "overflow-x": "scroll",
                                "padding-bottom": "50px"
                              }
                            },
                            _vm._l(_vm.conversation, function(cn) {
                              return _c(
                                "li",
                                {
                                  staticClass: "clearfix",
                                  class:
                                    cn.from === _vm.firstChat.id ? "" : "odd"
                                },
                                [
                                  _c("div", { staticClass: "chat-avatar" }, [
                                    _vm.firstChat.profile_picture &&
                                    cn.from === _vm.firstChat.id
                                      ? _c("img", {
                                          attrs: {
                                            src: _vm.firstChat.profile_picture,
                                            alt: "male"
                                          }
                                        })
                                      : !_vm.firstChat.profile_picture &&
                                        cn.from === _vm.firstChat.id
                                      ? _c("img", {
                                          attrs: {
                                            src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                                            alt: "male"
                                          }
                                        })
                                      : _vm.$page.auth.user.profile_picture &&
                                        cn.from !== _vm.firstChat.id
                                      ? _c("img", {
                                          attrs: {
                                            src:
                                              _vm.$page.auth.user
                                                .profile_picture,
                                            alt: "male"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.$page.auth.user.profile_picture &&
                                    cn.from !== _vm.firstChat.id
                                      ? _c("img", {
                                          attrs: {
                                            src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                                            alt: "male"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("i", [_vm._v("10:00")])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "conversation-text" },
                                    [
                                      _c("div", { staticClass: "ctext-wrap" }, [
                                        cn.from === _vm.firstChat.id
                                          ? _c("i", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.firstChat.first_name
                                                ) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.firstChat.last_name
                                                  )
                                              )
                                            ])
                                          : _c("i", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$page.auth.user.first_name
                                                ) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.$page.auth.user
                                                      .last_name
                                                  )
                                              )
                                            ]),
                                        _vm._v(" "),
                                        _c("p", [
                                          _vm._v(
                                            "\n                                                        " +
                                              _vm._s(cn.message) +
                                              "\n                                                    "
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _c(
                            "ul",
                            {
                              staticClass: "conversation-list slimscroll-alt",
                              staticStyle: {
                                "min-height": "452px !important",
                                "max-height": "500px",
                                "overflow-x": "scroll",
                                "padding-bottom": "50px"
                              }
                            },
                            [
                              _c(
                                "li",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    "margin-top": "20px",
                                    "margin-bottom": "20px"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-info-circle text-primary"
                                  }),
                                  _vm._v(" No message")
                                ]
                              )
                            ]
                          )
                    ]),
                    _vm._v(" "),
                    _vm.firstChat.deactivated === "0"
                      ? _c("div", { staticClass: "message-compose-box" }, [
                          _c("div", { staticClass: "grab-box" }, [
                            _c("i", {
                              staticClass: "fa fa-2x fa-clipboard text-primary"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass:
                                "fa fa-2x fa-file-image-o text-primary"
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "input-box" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.messageText,
                                  expression: "messageText"
                                }
                              ],
                              staticClass: "message-input",
                              attrs: {
                                type: "text",
                                placeholder: "Type here message"
                              },
                              domProps: { value: _vm.messageText },
                              on: {
                                keyup: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.trigger($event)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.messageText = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              ref: "messageSent",
                              staticClass: "fa fa-2x fa-send text-info",
                              staticStyle: {
                                position: "absolute",
                                top: "9px",
                                right: "18px",
                                "font-size": "22px"
                              },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.sendMessage($event)
                                }
                              }
                            })
                          ])
                        ])
                      : _c("div", { staticClass: "message-deactivate-box" }, [
                          _c(
                            "p",
                            {
                              staticClass: "text-center",
                              staticStyle: { color: "white" }
                            },
                            [_vm._v("This account is being deactivated.")]
                          )
                        ])
                  ]
                )
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

/***/ "./resources/js/Pages/Profile/Messages.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Profile/Messages.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Messages_vue_vue_type_template_id_c063508a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messages.vue?vue&type=template&id=c063508a&scoped=true& */ "./resources/js/Pages/Profile/Messages.vue?vue&type=template&id=c063508a&scoped=true&");
/* harmony import */ var _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css& */ "./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Messages_vue_vue_type_template_id_c063508a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Messages_vue_vue_type_template_id_c063508a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c063508a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/Messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/Messages.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Messages.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=style&index=0&id=c063508a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_style_index_0_id_c063508a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Profile/Messages.vue?vue&type=template&id=c063508a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/Messages.vue?vue&type=template&id=c063508a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_c063508a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Messages.vue?vue&type=template&id=c063508a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/Messages.vue?vue&type=template&id=c063508a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_c063508a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messages_vue_vue_type_template_id_c063508a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);