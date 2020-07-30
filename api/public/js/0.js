(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/inc/TopNavBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/inc/TopNavBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      timeoutInMiliseconds: 1800000,
      timeoutId: null,
      notifications: [],
      unreadNotifications: null,
      unreadMessages: '',
      messages: []
    };
  },
  props: {//
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {
    var _this = this;

    this.setupTimers();
    axios.get('/admins/get/notifications').then(function (response) {
      _this.notifications = response.data.notifications;
      _this.unreadNotifications = response.data.counter;
    });
    Echo.channel('admin.notifications.' + this.$page.auth.user.id).listen('AdminNotifications', function (e) {
      _this.notifications.push({
        'data': e
      });

      var src = '/admin/assets/audio/notification.mp3';
      var audio = new Audio(src);
      audio.play();
      _this.unreadNotifications = _this.unreadNotifications + 1;
    });
  },
  methods: {
    logout: function logout() {
      this.$inertia.post('/admins/logout');
    },
    screenLock: function screenLock() {
      this.$inertia.post('/admins/lock');
    },
    startTimer: function startTimer() {
      this.timeoutId = window.setTimeout(this.screenLock, this.timeoutInMiliseconds);
    },
    resetTimer: function resetTimer() {
      window.clearTimeout(this.timeoutId);
      this.startTimer();
    },
    setupTimers: function setupTimers() {
      document.addEventListener("mousemove", this.resetTimer, false);
      document.addEventListener("mousedown", this.resetTimer, false);
      document.addEventListener("keypress", this.resetTimer, false);
      document.addEventListener("touchmove", this.resetTimer, false);
      this.startTimer();
    },
    markAsReadNotifications: function markAsReadNotifications() {
      this.unreadNotifications = null;
      return axios.post('/admins/mark-as-read/notifications');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/inc/TopNavBar.vue?vue&type=template&id=5190584a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/inc/TopNavBar.vue?vue&type=template&id=5190584a& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "topbar" }, [
    _c(
      "div",
      { staticClass: "topbar-left" },
      [
        _c(
          "inertia-link",
          { staticClass: "logo", attrs: { href: "/admin/dashboard" } },
          [
            _c("span", [_vm._v("Ad"), _c("span", [_vm._v("min")])]),
            _c("i", { staticClass: "mdi mdi-layers" })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "navbar navbar-default", attrs: { role: "navigation" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("ul", { staticClass: "nav navbar-nav navbar-left" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("li", { staticClass: "dropdown hidden-xs" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle menu-item",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    "aria-expanded": "false"
                  }
                },
                [
                  _vm.$page.locale === "en"
                    ? _c("span", [_vm._v("English")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$page.locale === "bd"
                    ? _c("span", [_vm._v("বাংলা")])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "caret" })
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "dropdown-menu", attrs: { role: "menu" } },
                [
                  _c(
                    "li",
                    [
                      _c(
                        "inertia-link",
                        { attrs: { href: "/admins/language/en" } },
                        [_vm._v("English")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "inertia-link",
                        { attrs: { href: "/admins/language/bd" } },
                        [_vm._v("বাংলা")]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "nav navbar-nav navbar-right" }, [
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "right-menu-item dropdown-toggle",
                  attrs: { href: "#", "data-toggle": "dropdown" },
                  on: { click: _vm.markAsReadNotifications }
                },
                [
                  _c("i", { staticClass: "mdi mdi-bell" }),
                  _vm._v(" "),
                  _vm.unreadNotifications
                    ? _c("span", { staticClass: "badge up bg-success" }, [
                        _vm._v(_vm._s(_vm.unreadNotifications))
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list"
                },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._l(_vm.notifications, function(noty) {
                    return _vm.notifications.length > 0
                      ? _c(
                          "li",
                          [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "user-list-item",
                                attrs: { href: noty.data.link }
                              },
                              [
                                _c("div", { staticClass: "icon bg-info" }, [
                                  _c("i", { staticClass: "mdi mdi-account" })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "user-desc" }, [
                                  _c("span", { staticClass: "name" }, [
                                    _vm._v(_vm._s(noty.data.data))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "time" }, [
                                    _vm._v(_vm._s(noty.created_at))
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _c("li", { staticClass: "all-msgs text-center" }, [
                    _c(
                      "p",
                      { staticClass: "m-0" },
                      [
                        _c(
                          "inertia-link",
                          { attrs: { href: "/admins/notifications" } },
                          [_vm._v("See all Notification")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "right-menu-item dropdown-toggle",
                  attrs: { href: "#", "data-toggle": "dropdown" }
                },
                [
                  _c("i", { staticClass: "mdi mdi-email" }),
                  _vm._v(" "),
                  _vm.unreadMessages
                    ? _c("span", { staticClass: "badge up bg-danger" }, [
                        _vm._v(_vm._s(_vm.unreadMessages))
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right dropdown-lg user-list notify-list"
                },
                [
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._l(_vm.messages, function(msg) {
                    return _vm.messages.length > 0
                      ? _c(
                          "li",
                          [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "user-list-item",
                                attrs: {
                                  href: "/admins/messages?user=" + msg.id
                                }
                              },
                              [
                                _c("div", { staticClass: "avatar" }, [
                                  msg.profile_picture
                                    ? _c("img", {
                                        attrs: {
                                          src: msg.profile_picture,
                                          alt: ""
                                        }
                                      })
                                    : _c("img", {
                                        attrs: {
                                          src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                                          alt: ""
                                        }
                                      })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "user-desc" }, [
                                  _c("span", { staticClass: "name" }, [
                                    _vm._v(
                                      _vm._s(msg.first_name) +
                                        " " +
                                        _vm._s(msg.last_name)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "desc" }, [
                                    _vm._v(_vm._s(msg.message))
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "time" }, [
                                    _vm._v("2 hours ago")
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _c("li", { staticClass: "all-msgs text-center" }, [
                    _c(
                      "p",
                      { staticClass: "m-0" },
                      [
                        _c(
                          "inertia-link",
                          { attrs: { href: "/admins/messages" } },
                          [_vm._v("See all Messages")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "dropdown user-box" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-toggle waves-effect user-link",
                  attrs: {
                    href: "",
                    "data-toggle": "dropdown",
                    "aria-expanded": "true"
                  }
                },
                [
                  _vm.$page.auth.user.profile_picture
                    ? _c("img", {
                        staticClass: "iimg-circle user-img",
                        attrs: {
                          src: _vm.$page.auth.user.profile_picture,
                          alt: "user-img"
                        }
                      })
                    : _c("img", {
                        staticClass: "img-circle user-img",
                        attrs: {
                          src: __webpack_require__(/*! ../../../../public/admin/assets/images/icons/assistant.svg */ "./public/admin/assets/images/icons/assistant.svg"),
                          alt: "user-img"
                        }
                      })
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                {
                  staticClass:
                    "dropdown-menu dropdown-menu-right arrow-dropdown-menu arrow-menu-right user-list notify-list"
                },
                [
                  _c("li", [
                    _c("h5", [
                      _vm._v("Hi, " + _vm._s(_vm.$page.auth.user.first_name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "inertia-link",
                        { attrs: { href: "/admins/profile" } },
                        [
                          _c("i", { staticClass: "ti-user m-r-5" }),
                          _vm._v(" Profile")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c(
                        "inertia-link",
                        { attrs: { href: "/admins/settings" } },
                        [
                          _c("i", { staticClass: "ti-settings m-r-5" }),
                          _vm._v(" Settings")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.screenLock($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "ti-lock m-r-5" }),
                        _vm._v(" Lock screen")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: { click: _vm.logout }
                      },
                      [
                        _c("i", { staticClass: "ti-power-off m-r-5" }),
                        _vm._v(" Logout")
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "button",
        { staticClass: "button-menu-mobile open-left waves-effect" },
        [_c("i", { staticClass: "mdi mdi-menu" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "hidden-xs" }, [
      _c("form", { staticClass: "app-search", attrs: { role: "search" } }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search..." }
        }),
        _vm._v(" "),
        _c("a", { attrs: { href: "" } }, [
          _c("i", { staticClass: "fa fa-search" })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown hidden-xs" }, [
      _c(
        "a",
        {
          staticClass: "dropdown-toggle menu-item",
          attrs: {
            "data-toggle": "dropdown",
            href: "#",
            "aria-expanded": "false"
          }
        },
        [
          _vm._v("New\n                        "),
          _c("span", { staticClass: "caret" })
        ]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "dropdown-menu", attrs: { role: "menu" } }, [
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("User")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Task")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Schedule")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Work")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h5", [_vm._v("Notifications")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("h5", [_vm._v("Messages")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/admin/assets/images/icons/assistant.svg":
/*!********************************************************!*\
  !*** ./public/admin/assets/images/icons/assistant.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/assistant.svg?e89591e44ab6760c13f0ede9220082b4";

/***/ }),

/***/ "./resources/js/Pages/inc/TopNavBar.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/inc/TopNavBar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNavBar_vue_vue_type_template_id_5190584a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavBar.vue?vue&type=template&id=5190584a& */ "./resources/js/Pages/inc/TopNavBar.vue?vue&type=template&id=5190584a&");
/* harmony import */ var _TopNavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavBar.vue?vue&type=script&lang=js& */ "./resources/js/Pages/inc/TopNavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavBar_vue_vue_type_template_id_5190584a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNavBar_vue_vue_type_template_id_5190584a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/inc/TopNavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/inc/TopNavBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/inc/TopNavBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/inc/TopNavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/inc/TopNavBar.vue?vue&type=template&id=5190584a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/inc/TopNavBar.vue?vue&type=template&id=5190584a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavBar_vue_vue_type_template_id_5190584a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavBar.vue?vue&type=template&id=5190584a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/inc/TopNavBar.vue?vue&type=template&id=5190584a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavBar_vue_vue_type_template_id_5190584a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavBar_vue_vue_type_template_id_5190584a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);