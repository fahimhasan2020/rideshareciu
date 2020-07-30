(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inc_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../inc/Layout */ "./resources/js/Pages/inc/Layout.vue");
/* harmony import */ var _Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Mixins/Dashboard */ "./resources/js/Mixins/Dashboard.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      importFileName: '',
      importFile: '',
      selectedPermissions: [],
      multiplePermissions: [],
      customConCat: '',
      customAllConCat: '',
      finalPermissions: [],
      allPermissions: [],
      roleForm: {
        id: '',
        name: '',
        slug: '',
        permissions: [],
        alls: []
      },
      roleFormError: {
        name: '',
        slug: ''
      }
    };
  },
  props: {
    permissions: Array,
    name: String,
    slug: String,
    selectedP: Array,
    id: Number
  },
  computed: {
    replaced: function replaced() {
      var changed = this.roleForm.name.toLowerCase();
      this.roleForm.slug = changed.split(" ").join('_');
      return this.roleForm.slug;
    }
  },
  created: function created() {//
  },
  mounted: function mounted() {
    this.roleForm.id = this.id;
    this.roleForm.name = this.name;
    this.roleForm.slug = this.slug;
    this.selectedPermissions = this.selectedP;
    this.checkParentAll();
  },
  methods: {
    deleteRole: function deleteRole() {
      var _this = this;

      this.$confirm("Are you sure to delete the role?", "Warning", "warning").then(function () {
        _this.$inertia["delete"]('/admins/admin-roles/' + _this.id).then(function () {//
        });
      });
    },
    checkParentAll: function checkParentAll() {
      for (var mo = 0; mo < this.permissions.length; mo++) {
        if (this.permissions[mo].type === 'resource') {
          if (this.selectedPermissions.includes(this.permissions[mo].name + '.add') && this.selectedPermissions.includes(this.permissions[mo].name + '.edit') && this.selectedPermissions.includes(this.permissions[mo].name + '.view') && this.selectedPermissions.includes(this.permissions[mo].name + '.delete')) {
            this.multiplePermissions.push(this.permissions[mo].name);
          }
        }

        if (this.permissions[mo].type === 'custom') {
          var arraya = this.permissions[mo].custom.split(', ');
          var tessa = [];

          for (var ii = 0; ii < arraya.length; ii++) {
            if (this.selectedPermissions.includes(this.permissions[mo].name + '.' + arraya[ii])) {
              tessa.push(1);
            } else {
              tessa.push(-1);
            }
          }

          if (tessa.indexOf(-1) === -1) {
            this.multiplePermissions.push(this.permissions[mo].name);
          }
        }
      }
    },
    customLoopAdd: function customLoopAdd(value, index, array) {
      if (!this.selectedPermissions.includes(this.customConCat + '.' + value)) {
        this.selectedPermissions.push(this.customConCat + '.' + value);
      }
    },
    customLoopRemove: function customLoopRemove(value, index, array) {
      var customIndex = this.selectedPermissions.indexOf(this.customConCat + '.' + value);

      if (customIndex !== -1) {
        this.selectedPermissions.splice(customIndex, 1);
      }
    },
    customAllAppend: function customAllAppend(value, index, array) {
      this.allPermissions.push(this.customAllConCat + '.' + value);
    },
    listAll: function listAll(value, index, array) {
      if (value.type === 'single') {
        this.allPermissions.push(value.name);
      } else if (value.type === 'resource') {
        this.allPermissions.push(value.name + '.view');
        this.allPermissions.push(value.name + '.add');
        this.allPermissions.push(value.name + '.edit');
        this.allPermissions.push(value.name + '.delete');
      } else {
        var tryOut = value.custom.split(", ");
        this.customAllConCat = value.name;
        tryOut.forEach(this.customAllAppend);
        this.customAllConCat = '';
      }
    },
    checkType: function checkType(per) {
      if (per.type === 'resource') {
        if (this.multiplePermissions.includes(per.name)) {
          if (!this.selectedPermissions.includes(per.name + '.' + 'view')) {
            this.selectedPermissions.push(per.name + '.' + 'view');
          }

          if (!this.selectedPermissions.includes(per.name + '.' + 'add')) {
            this.selectedPermissions.push(per.name + '.' + 'add');
          }

          if (!this.selectedPermissions.includes(per.name + '.' + 'edit')) {
            this.selectedPermissions.push(per.name + '.' + 'edit');
          }

          if (!this.selectedPermissions.includes(per.name + '.' + 'delete')) {
            this.selectedPermissions.push(per.name + '.' + 'delete');
          }
        } else {
          var view = this.selectedPermissions.indexOf(per.name + '.' + 'view');
          this.selectedPermissions.splice(view, 1);
          var add = this.selectedPermissions.indexOf(per.name + '.' + 'add');
          this.selectedPermissions.splice(add, 1);
          var edit = this.selectedPermissions.indexOf(per.name + '.' + 'edit');
          this.selectedPermissions.splice(edit, 1);
          var del = this.selectedPermissions.indexOf(per.name + '.' + 'delete');
          this.selectedPermissions.splice(del, 1);
        }
      } else {
        if (this.multiplePermissions.includes(per.name)) {
          this.customConCat = per.name;
          var aara = per.custom.split(', ');
          aara.forEach(this.customLoopAdd);
          this.customConCat = '';
        } else {
          this.customConCat = per.name;
          aara = per.custom.split(', ');
          aara.forEach(this.customLoopRemove);
          this.customConCat = '';
        }
      }
    },
    roleAdd: function roleAdd() {
      if (this.roleForm.name === '' || this.roleForm.slug === '') {
        if (this.roleForm.name === '') {
          this.roleFormError.name = 'Name required';
        } else {
          this.roleFormError.name = '';
        }

        if (this.roleForm.slug === '') {
          this.roleFormError.slug = 'Slug required';
        } else {
          this.roleFormError.slug = '';
        }
      } else {
        this.roleForm.permissions = this.selectedPermissions;
        this.permissions.forEach(this.listAll);
        this.roleForm.alls = this.allPermissions;
        this.$inertia.put('/admins/admin-roles/' + this.roleForm.id, this.roleForm).then(function () {//
        });
      }
    },
    getImportFile: function getImportFile(e) {
      this.importFile = e.target.files[0];
      this.importFileName = 'Selected file: ' + e.target.files[0].name;
    },
    importSubmit: function importSubmit() {
      var _this2 = this;

      var formData = new FormData();
      formData.append('file', this.importFile);
      this.$inertia.post('/admins/admin-roles/excel/import', formData).then(function () {
        _this2.importFile = '';
        var input = _this2.$refs.fileupload;
        input.type = 'text';
        input.type = 'file';
        _this2.importFileName = '';
      });
    },
    childToMother: function childToMother(name) {
      if (this.selectedPermissions.includes(name + '.view') && this.selectedPermissions.includes(name + '.add') && this.selectedPermissions.includes(name + '.edit') && this.selectedPermissions.includes(name + '.delete')) {
        if (!this.multiplePermissions.includes(name)) {
          this.multiplePermissions.push(name);
        }
      } else {
        var mother = this.multiplePermissions.indexOf(name);

        if (mother !== -1) {
          this.multiplePermissions.splice(mother, 1);
        }
      }
    },
    childToMotherCustom: function childToMotherCustom(element) {
      var array = element.custom.split(', ');

      for (var i = 0; i < array.length; i++) {
        if (this.selectedPermissions.indexOf(element.name + '.' + array[i]) === -1) {
          var position = this.multiplePermissions.indexOf(element.name);

          if (position !== -1) {
            this.multiplePermissions.splice(position, 1);
          }

          array = [];
          return;
        }
      }

      if (!this.multiplePermissions.includes(element.name)) {
        array = [];
        this.multiplePermissions.push(element.name);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=file][data-v-b0b769a0] {\n    cursor: pointer;\n    width: 100%;\n    height: 58px;\n    overflow: hidden;\n}\ninput[type=file][data-v-b0b769a0]:before {\n    width: 100%;\n    height: 60px;\n    font-size: 16px;\n    line-height: 32px;\n    content: 'Select your file';\n    display: inline-block;\n    background: white;\n    border: 1px solid #000;\n    padding: 0 10px;\n    text-align: center;\n    font-family: Helvetica, Arial, sans-serif;\n}\ninput[type=file][data-v-b0b769a0]::-webkit-file-upload-button {\n    visibility: hidden;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Admin | Role Edit" } }, [
    _c("div", { staticClass: "content-page" }, [
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c("div", { staticClass: "page-title-box" }, [
                _c("h4", { staticClass: "page-title" }, [_vm._v("Dashboard")]),
                _vm._v(" "),
                _c("ol", { staticClass: "breadcrumb p-0 m-0" }, [
                  _c(
                    "li",
                    [
                      _c(
                        "inertia-link",
                        { attrs: { href: "/admins/dashboard" } },
                        [_vm._v("Dashboard")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    [
                      _c("inertia-link", { attrs: { href: "/admins/admin" } }, [
                        _vm._v("Admin")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", { attrs: { CLASS: "active" } }, [
                    _vm._v(
                      "\n                                    Role Add\n                                "
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
            _c("div", { staticClass: "col-md-4" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "header-title m-t-0 m-b-30" }, [
                  _vm._v("Deletes Role")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-lg btn-block btn-danger",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.deleteRole($event)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fa fa-trash" }),
                        _vm._v("Delete")
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "header-title m-t-0 m-b-30" }, [
                  _vm._v("Edit Role")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.roleForm.name,
                              expression: "roleForm.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Add Name"
                          },
                          domProps: { value: _vm.roleForm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.roleForm,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.roleFormError.name))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.replaced,
                            expression: "replaced"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "slug",
                          placeholder: "Add Slug"
                        },
                        domProps: { value: _vm.replaced },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.replaced = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.roleFormError.slug))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.permissions, function(p) {
                      return _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "div",
                              { staticClass: "checkbox checkbox-success" },
                              [
                                p.type !== "single"
                                  ? _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.multiplePermissions,
                                          expression: "multiplePermissions"
                                        }
                                      ],
                                      attrs: { id: p.name, type: "checkbox" },
                                      domProps: {
                                        value: p.name,
                                        checked: Array.isArray(
                                          _vm.multiplePermissions
                                        )
                                          ? _vm._i(
                                              _vm.multiplePermissions,
                                              p.name
                                            ) > -1
                                          : _vm.multiplePermissions
                                      },
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$a = _vm.multiplePermissions,
                                              $$el = $event.target,
                                              $$c = $$el.checked ? true : false
                                            if (Array.isArray($$a)) {
                                              var $$v = p.name,
                                                $$i = _vm._i($$a, $$v)
                                              if ($$el.checked) {
                                                $$i < 0 &&
                                                  (_vm.multiplePermissions = $$a.concat(
                                                    [$$v]
                                                  ))
                                              } else {
                                                $$i > -1 &&
                                                  (_vm.multiplePermissions = $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1)))
                                              }
                                            } else {
                                              _vm.multiplePermissions = $$c
                                            }
                                          },
                                          function($event) {
                                            return _vm.checkType(p)
                                          }
                                        ]
                                      }
                                    })
                                  : _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.selectedPermissions,
                                          expression: "selectedPermissions"
                                        }
                                      ],
                                      attrs: { id: p.name, type: "checkbox" },
                                      domProps: {
                                        value: p.name,
                                        checked: Array.isArray(
                                          _vm.selectedPermissions
                                        )
                                          ? _vm._i(
                                              _vm.selectedPermissions,
                                              p.name
                                            ) > -1
                                          : _vm.selectedPermissions
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.selectedPermissions,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = p.name,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                (_vm.selectedPermissions = $$a.concat(
                                                  [$$v]
                                                ))
                                            } else {
                                              $$i > -1 &&
                                                (_vm.selectedPermissions = $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1)))
                                            }
                                          } else {
                                            _vm.selectedPermissions = $$c
                                          }
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                p.type !== "single"
                                  ? _c("label", { attrs: { for: p.name } }, [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(p.name) +
                                          "\n                                                "
                                      )
                                    ])
                                  : _c("label", { attrs: { for: p.name } }, [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(p.name) +
                                          "\n                                                "
                                      )
                                    ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }),
                          _vm._v(" "),
                          p.type === "resource"
                            ? _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "checkbox checkbox-success"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.selectedPermissions,
                                            expression: "selectedPermissions"
                                          }
                                        ],
                                        attrs: {
                                          id: p.name + "view",
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          value: p.name + "." + "view",
                                          checked: Array.isArray(
                                            _vm.selectedPermissions
                                          )
                                            ? _vm._i(
                                                _vm.selectedPermissions,
                                                p.name + "." + "view"
                                              ) > -1
                                            : _vm.selectedPermissions
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$a = _vm.selectedPermissions,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = p.name + "." + "view",
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.selectedPermissions = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.selectedPermissions = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.selectedPermissions = $$c
                                              }
                                            },
                                            function($event) {
                                              return _vm.childToMother(p.name)
                                            }
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: p.name + "view" } },
                                        [
                                          _vm._v(
                                            "\n                                                        View\n                                                    "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "checkbox checkbox-success"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.selectedPermissions,
                                            expression: "selectedPermissions"
                                          }
                                        ],
                                        attrs: {
                                          id: p.name + "add",
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          value: p.name + "." + "add",
                                          checked: Array.isArray(
                                            _vm.selectedPermissions
                                          )
                                            ? _vm._i(
                                                _vm.selectedPermissions,
                                                p.name + "." + "add"
                                              ) > -1
                                            : _vm.selectedPermissions
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$a = _vm.selectedPermissions,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = p.name + "." + "add",
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.selectedPermissions = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.selectedPermissions = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.selectedPermissions = $$c
                                              }
                                            },
                                            function($event) {
                                              return _vm.childToMother(p.name)
                                            }
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: p.name + "add" } },
                                        [
                                          _vm._v(
                                            "\n                                                        Add\n                                                    "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "checkbox checkbox-success"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.selectedPermissions,
                                            expression: "selectedPermissions"
                                          }
                                        ],
                                        attrs: {
                                          id: p.name + "edit",
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          value: p.name + "." + "edit",
                                          checked: Array.isArray(
                                            _vm.selectedPermissions
                                          )
                                            ? _vm._i(
                                                _vm.selectedPermissions,
                                                p.name + "." + "edit"
                                              ) > -1
                                            : _vm.selectedPermissions
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$a = _vm.selectedPermissions,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = p.name + "." + "edit",
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.selectedPermissions = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.selectedPermissions = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.selectedPermissions = $$c
                                              }
                                            },
                                            function($event) {
                                              return _vm.childToMother(p.name)
                                            }
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: p.name + "edit" } },
                                        [
                                          _vm._v(
                                            "\n                                                        Update\n                                                    "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "checkbox checkbox-success"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.selectedPermissions,
                                            expression: "selectedPermissions"
                                          }
                                        ],
                                        attrs: {
                                          id: p.name + "delete",
                                          type: "checkbox"
                                        },
                                        domProps: {
                                          value: p.name + "." + "delete",
                                          checked: Array.isArray(
                                            _vm.selectedPermissions
                                          )
                                            ? _vm._i(
                                                _vm.selectedPermissions,
                                                p.name + "." + "delete"
                                              ) > -1
                                            : _vm.selectedPermissions
                                        },
                                        on: {
                                          change: [
                                            function($event) {
                                              var $$a = _vm.selectedPermissions,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v =
                                                    p.name + "." + "delete",
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.selectedPermissions = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.selectedPermissions = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.selectedPermissions = $$c
                                              }
                                            },
                                            function($event) {
                                              return _vm.childToMother(p.name)
                                            }
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        { attrs: { for: p.name + "delete" } },
                                        [
                                          _vm._v(
                                            "\n                                                        Delete\n                                                    "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            : p.type === "custom"
                            ? _c("div", { staticClass: "col-md-6" }, [
                                p.custom !== null
                                  ? _c(
                                      "div",
                                      { staticClass: "col-md-12" },
                                      _vm._l(p.custom.split(", "), function(
                                        pc
                                      ) {
                                        return _c(
                                          "div",
                                          {
                                            staticClass:
                                              "checkbox checkbox-success"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.selectedPermissions,
                                                  expression:
                                                    "selectedPermissions"
                                                }
                                              ],
                                              attrs: {
                                                id: p.name + pc,
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                value: p.name + "." + pc,
                                                checked: Array.isArray(
                                                  _vm.selectedPermissions
                                                )
                                                  ? _vm._i(
                                                      _vm.selectedPermissions,
                                                      p.name + "." + pc
                                                    ) > -1
                                                  : _vm.selectedPermissions
                                              },
                                              on: {
                                                change: [
                                                  function($event) {
                                                    var $$a =
                                                        _vm.selectedPermissions,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v =
                                                          p.name + "." + pc,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          (_vm.selectedPermissions = $$a.concat(
                                                            [$$v]
                                                          ))
                                                      } else {
                                                        $$i > -1 &&
                                                          (_vm.selectedPermissions = $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            ))
                                                      }
                                                    } else {
                                                      _vm.selectedPermissions = $$c
                                                    }
                                                  },
                                                  function($event) {
                                                    return _vm.childToMotherCustom(
                                                      p
                                                    )
                                                  }
                                                ]
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              { attrs: { for: p.name + pc } },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(pc) +
                                                    "\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("hr")
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-block btn-lg",
                          attrs: { type: "button" },
                          on: { click: _vm.roleAdd }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Save role")
                        ]
                      )
                    ])
                  ],
                  2
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

/***/ "./resources/js/Pages/Users/Admin/RoleEdit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Users/Admin/RoleEdit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleEdit_vue_vue_type_template_id_b0b769a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true& */ "./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true&");
/* harmony import */ var _RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleEdit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css& */ "./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleEdit_vue_vue_type_template_id_b0b769a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleEdit_vue_vue_type_template_id_b0b769a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b0b769a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Admin/RoleEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=style&index=0&id=b0b769a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_style_index_0_id_b0b769a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_template_id_b0b769a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Users/Admin/RoleEdit.vue?vue&type=template&id=b0b769a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_template_id_b0b769a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleEdit_vue_vue_type_template_id_b0b769a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);