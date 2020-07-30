(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inc_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inc/Layout */ "./resources/js/Pages/inc/Layout.vue");
/* harmony import */ var _Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mixins/Dashboard */ "./resources/js/Mixins/Dashboard.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mostVisitedPagesTodayClass: 'btn-success',
      mostVisitedPagesWeeklyClass: 'btn-success',
      mostVisitedPagesMonthlyClass: 'btn-success',
      mostVisitedCountriesTodayClass: 'btn-success',
      mostVisitedCountriesWeeklyClass: 'btn-success',
      mostVisitedCountriesMonthlyClass: 'btn-success',
      mostVisitedCountries: [],
      mapVisitors: [],
      mostVisitedPages: [],
      subscribedChartData: [0, 4, 7],
      subscribedChartDate: ['data', 'data', 'data'],
      todayMapClass: 'btn-success',
      weekMapClass: 'btn-success',
      monthMapClass: 'btn-success',
      modalActive: false,
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
      },
      todayVisited: null,
      yesterdayVisited: null,
      weeklyVisited: null,
      lastWeekVisited: null,
      monthlyVisited: null,
      lastMonthVisited: null,
      newlyRegistered: null,
      yesterdayRegistered: null,
      newlySubscribed: null,
      yesterdaySubscribed: null,
      subscriptionCanceled: null,
      yesterdaySubscriptionCanceled: null
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

    this.initializedMarkers();
    setTimeout(function () {
      var name = localStorage.getItem("name_checked");

      if (name === null) {
        localStorage.setItem("name_checked", "pending");

        if (_this.$page.auth.user.first_name === null || _this.$page.auth.user.last_name === null) {
          _this.modalActive = true;
        }
      } else if (name === 'pending') {
        if (_this.$page.auth.user.first_name === null || _this.$page.auth.user.last_name === null) {
          _this.modalActive = true;
        }
      }
    }, 5000);
    axios.get('/admins/todays/visitors').then(function (response) {
      _this.todayVisited = response.data;
    });
    axios.get('/admins/yesterday/visitors').then(function (response) {
      _this.yesterdayVisited = response.data;
    });
    axios.get('/admins/weekly/visitors').then(function (response) {
      _this.weeklyVisited = response.data;
    });
    axios.get('/admins/last/weekly/visitors').then(function (response) {
      _this.lastWeekVisited = response.data;
    });
    axios.get('/admins/monthly/visitors').then(function (response) {
      _this.monthlyVisited = response.data;
    });
    axios.get('/admins/last/monthly/visitors').then(function (response) {
      _this.lastMonthVisited = response.data;
    });
    axios.get('/admins/todays/registered').then(function (response) {
      _this.newlyRegistered = response.data;
    });
    axios.get('/admins/yesterday/registered').then(function (response) {
      _this.yesterdayRegistered = response.data;
    });
    axios.get('/admins/todays/subscribed').then(function (response) {
      _this.newlySubscribed = response.data;
    });
    axios.get('/admins/yesterday/subscribed').then(function (response) {
      _this.yesterdaySubscribed = response.data;
    });
    axios.get('/admins/today/unsubscribed').then(function (response) {
      _this.subscriptionCanceled = response.data;
    });
    axios.get('/admins/yesterday/unsubscribed').then(function (response) {
      _this.yesterdaySubscriptionCanceled = response.data;
    });
    this.initializedMostVisitedPage();
    this.initializedMostVisitedCountry();
    this.subscriberChartLoader();
  },
  methods: {
    getRandomInt: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    hideModal: function hideModal() {
      localStorage.setItem("name_checked", "checked");
      this.modalActive = false;
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

          _this2.hideModal();
        });
      }
    },
    getDataForMap: function getDataForMap(data) {
      var _this3 = this;

      if (data === 'today') {
        this.weekMapClass = 'btn-success';
        this.monthMapClass = 'btn-success';
        this.initializedMarkers();
      } else if (data === 'week') {
        this.weekMapClass = 'btn-info';
        this.todayMapClass = 'btn-success';
        this.monthMapClass = 'btn-success';
        axios.get('/admins/weekly/visitor-markers').then(function (response) {
          _this3.mapVisitors = response.data;
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 0.000,
              lng: 0.000
            },
            zoom: 2,
            styles: [{
              elementType: 'geometry',
              stylers: [{
                color: '#242f3e'
              }]
            }, {
              elementType: 'labels.text.stroke',
              stylers: [{
                color: '#242f3e'
              }]
            }, {
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#746855'
              }]
            }, {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#d59563'
              }]
            }, {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#d59563'
              }]
            }, {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{
                color: '#263c3f'
              }]
            }, {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#6b9a76'
              }]
            }, {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{
                color: '#38414e'
              }]
            }, {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{
                color: '#212a37'
              }]
            }, {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#9ca5b3'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{
                color: '#746855'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{
                color: '#1f2835'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#f3d19c'
              }]
            }, {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{
                color: '#2f3948'
              }]
            }, {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#d59563'
              }]
            }, {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{
                color: '#17263c'
              }]
            }, {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#515c6d'
              }]
            }, {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{
                color: '#17263c'
              }]
            }]
          });
          var infowindow = new google.maps.InfoWindow();
          var marker, i;

          for (i = 0; i < _this3.mapVisitors.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(_this3.mapVisitors[i].lat, _this3.mapVisitors[i].lng),
              icon: '../../../../images/pin.png',
              map: map
            });

            _this3.contentMessage(marker, _this3.mapVisitors[i].ip);
          }
        });
      } else if (data === 'month') {
        this.monthMapClass = 'btn-info';
        this.todayMapClass = 'btn-success';
        this.weekMapClass = 'btn-success';
        axios.get('/admins/monthly/visitor-markers').then(function (response) {
          _this3.mapVisitors = response.data;
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 0.000,
              lng: 0.000
            },
            zoom: 2,
            styles: [{
              elementType: 'geometry',
              stylers: [{
                color: '#242f3e'
              }]
            }, {
              elementType: 'labels.text.stroke',
              stylers: [{
                color: '#242f3e'
              }]
            }, {
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#746855'
              }]
            }, {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#d59563'
              }]
            }, {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#d59563'
              }]
            }, {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{
                color: '#263c3f'
              }]
            }, {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#6b9a76'
              }]
            }, {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{
                color: '#38414e'
              }]
            }, {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{
                color: '#212a37'
              }]
            }, {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#9ca5b3'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{
                color: '#746855'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{
                color: '#1f2835'
              }]
            }, {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#f3d19c'
              }]
            }, {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{
                color: '#2f3948'
              }]
            }, {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#d59563'
              }]
            }, {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{
                color: '#17263c'
              }]
            }, {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{
                color: '#515c6d'
              }]
            }, {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{
                color: '#17263c'
              }]
            }]
          });
          var infowindow = new google.maps.InfoWindow();
          var marker, i;

          for (i = 0; i < _this3.mapVisitors.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(_this3.mapVisitors[i].lat, _this3.mapVisitors[i].lng),
              map: map,
              icon: '../../../../images/pin.png'
            });

            _this3.contentMessage(marker, _this3.mapVisitors[i].ip);
          }
        });
      }
    },
    initializedMarkers: function initializedMarkers() {
      var _this4 = this;

      this.todayMapClass = 'btn-info';
      axios.get('/admins/todays/visitor-markers').then(function (response) {
        _this4.mapVisitors = response.data;
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: 0.000,
            lng: 0.000
          },
          zoom: 2,
          styles: [{
            elementType: 'geometry',
            stylers: [{
              color: '#242f3e'
            }]
          }, {
            elementType: 'labels.text.stroke',
            stylers: [{
              color: '#242f3e'
            }]
          }, {
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#746855'
            }]
          }, {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#d59563'
            }]
          }, {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#d59563'
            }]
          }, {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
              color: '#263c3f'
            }]
          }, {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#6b9a76'
            }]
          }, {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
              color: '#38414e'
            }]
          }, {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
              color: '#212a37'
            }]
          }, {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#9ca5b3'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
              color: '#746855'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
              color: '#1f2835'
            }]
          }, {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#f3d19c'
            }]
          }, {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
              color: '#2f3948'
            }]
          }, {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#d59563'
            }]
          }, {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
              color: '#17263c'
            }]
          }, {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
              color: '#515c6d'
            }]
          }, {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
              color: '#17263c'
            }]
          }]
        });
        var infowindow = new google.maps.InfoWindow();
        var marker, i;

        for (i = 0; i < _this4.mapVisitors.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(_this4.mapVisitors[i].lat, _this4.mapVisitors[i].lng),
            map: map,
            icon: '../../../../images/pin.png'
          });

          _this4.contentMessage(marker, _this4.mapVisitors[i].ip);
        }
      });
    },
    contentMessage: function contentMessage(marker, message) {
      var infowindow = new google.maps.InfoWindow({
        content: message
      });
      marker.addListener('click', function () {
        infowindow.open(marker.get('map'), marker);
      });
    },
    initializedMostVisitedPage: function initializedMostVisitedPage() {
      var _this5 = this;

      axios.get('/admins/visitors/pages/list').then(function (response) {
        _this5.mostVisitedPagesTodayClass = 'btn-info';
        _this5.mostVisitedPagesWeeklyClass = 'btn-success';
        _this5.mostVisitedPagesMonthlyClass = 'btn-success';
        _this5.mostVisitedPages = response.data;
      });
    },
    initializedMostVisitedCountry: function initializedMostVisitedCountry() {
      var _this6 = this;

      axios.get('/admins/most-visitor-country/today').then(function (response) {
        _this6.mostVisitedCountriesTodayClass = 'btn-info';
        _this6.mostVisitedCountriesWeeklyClass = 'btn-success';
        _this6.mostVisitedCountriesMonthlyClass = 'btn-success';
        _this6.mostVisitedCountries = response.data;
      });
    },
    getDataForMostVisitedPages: function getDataForMostVisitedPages(data) {
      var _this7 = this;

      if (data === 'today') {
        this.initializedMostVisitedPage();
      } else if (data === 'week') {
        axios.get('/admins/visitors/weekly/pages/list').then(function (response) {
          _this7.mostVisitedPagesTodayClass = 'btn-success';
          _this7.mostVisitedPagesWeeklyClass = 'btn-info';
          _this7.mostVisitedPagesMonthlyClass = 'btn-success';
          _this7.mostVisitedPages = response.data;
        });
      } else {
        axios.get('/admins/visitors/monthly/pages/list').then(function (response) {
          _this7.mostVisitedPagesTodayClass = 'btn-success';
          _this7.mostVisitedPagesWeeklyClass = 'btn-success';
          _this7.mostVisitedPagesMonthlyClass = 'btn-info';
          _this7.mostVisitedPages = response.data;
        });
      }
    },
    getDataForMostVisitedCountries: function getDataForMostVisitedCountries(data) {
      var _this8 = this;

      if (data === 'today') {
        this.initializedMostVisitedCountry();
      } else if (data === 'week') {
        axios.get('/admins/most-visitor-country/weekly').then(function (response) {
          _this8.mostVisitedCountriesTodayClass = 'btn-success';
          _this8.mostVisitedCountriesWeeklyClass = 'btn-info';
          _this8.mostVisitedCountriesMonthlyClass = 'btn-success';
          _this8.mostVisitedCountries = response.data;
        });
      } else {
        axios.get('/admins/most-visitor-country/monthly').then(function (response) {
          _this8.mostVisitedCountriesTodayClass = 'btn-success';
          _this8.mostVisitedCountriesWeeklyClass = 'btn-success';
          _this8.mostVisitedCountriesMonthlyClass = 'btn-info';
          _this8.mostVisitedCountries = response.data;
        });
      }
    },
    subscriberChartLoader: function subscriberChartLoader() {
      var _this9 = this;

      axios.get('/admins/subscribers/monthly/count').then(function (response) {
        var i;
        var datas = [];
        var lebels = [];

        for (i = 0; i < response.data.length; i++) {
          datas.push(response.data[i].views);
          lebels.push(response.data[i].date);
        }

        _this9.subscribedChartData = datas;
        _this9.subscribedChartDate = lebels;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-active[data-v-097ba13b]{\n    display:block;\n}\n.red[data-v-097ba13b]{\n border: 1px solid red;\n}\n.widget-box-one[data-v-097ba13b]{\n    height: 140px;\n}\n.selection[data-v-097ba13b]{\n    box-sizing: border-box;\n    position: absolute;\n    top: 15px;\n    right: 70px;\n}\n@media screen and (max-width: 600px) {\n.selection[data-v-097ba13b]{\n        box-sizing: border-box;\n        position: absolute;\n        top: 60px;\n        left: 20px;\n        right: auto;\n}\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Admin | Dashboard" } }, [
    _c("div", { staticClass: "content-page" }, [
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c("div", { staticClass: "page-title-box" }, [
                _c("h4", { staticClass: "page-title" }, [_vm._v("Dashboard")]),
                _vm._v(" "),
                _c("ol", { staticClass: "breadcrumb p-0 m-0" }, [
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])
                  ]),
                  _vm._v(" "),
                  _c("li", { attrs: { CLASS: "active" } }, [
                    _vm._v(
                      "\n                                    Dashboard\n                                "
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
            _c("div", { staticClass: "col-lg-2 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "card-box widget-box-one" }, [
                _c("i", {
                  staticClass: "mdi mdi-chart-areaspline widget-one-icon"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wigdet-one-content" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "m-0 text-uppercase font-600 font-secondary text-overflow",
                      attrs: { title: "Statistics" }
                    },
                    [_vm._v("Today visited")]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm.todayVisited || _vm.todayVisited === 0
                      ? _c("span", [_vm._v(_vm._s(_vm.todayVisited))])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-refresh fa-spin" })
                        ]),
                    _vm._v(" "),
                    _c("small", [
                      _vm.todayVisited > _vm.yesterdayVisited
                        ? _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-up text-success"
                            })
                          ])
                        : _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down text-danger"
                            })
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted m-0" }, [
                    _c("b", [_vm._v("Last:")]),
                    _vm._v(" " + _vm._s(_vm.yesterdayVisited))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "card-box widget-box-one" }, [
                _c("i", {
                  staticClass: "mdi mdi-account-convert widget-one-icon"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wigdet-one-content" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "m-0 text-uppercase font-600 font-secondary text-overflow",
                      attrs: { title: "User Today" }
                    },
                    [_vm._v("Weekly visitor")]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm.weeklyVisited || _vm.weeklyVisited === 0
                      ? _c("span", [_vm._v(_vm._s(_vm.weeklyVisited))])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-refresh fa-spin" })
                        ]),
                    _vm._v(" "),
                    _c("small", [
                      _vm.weeklyVisited > _vm.lastWeekVisited
                        ? _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-up text-success"
                            })
                          ])
                        : _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down text-danger"
                            })
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted m-0" }, [
                    _c("b", [_vm._v("Last:")]),
                    _vm._v(" " + _vm._s(_vm.lastWeekVisited))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "card-box widget-box-one" }, [
                _c("i", { staticClass: "mdi mdi-layers widget-one-icon" }),
                _vm._v(" "),
                _c("div", { staticClass: "wigdet-one-content" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "m-0 text-uppercase font-600 font-secondary text-overflow",
                      attrs: { title: "User This Month" }
                    },
                    [_vm._v("Monthly visitor")]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm.monthlyVisited || _vm.monthlyVisited === 0
                      ? _c("span", [_vm._v(_vm._s(_vm.monthlyVisited))])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-refresh fa-spin" })
                        ]),
                    _vm._v(" "),
                    _c("small", [
                      _vm.monthlyVisited > _vm.lastMonthVisited
                        ? _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-up text-success"
                            })
                          ])
                        : _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down text-danger"
                            })
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted m-0" }, [
                    _c("b", [_vm._v("Last:")]),
                    _vm._v(" " + _vm._s(_vm.lastMonthVisited))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "card-box widget-box-one" }, [
                _c("i", { staticClass: "mdi mdi-av-timer widget-one-icon" }),
                _vm._v(" "),
                _c("div", { staticClass: "wigdet-one-content" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "m-0 text-uppercase font-600 font-secondary text-overflow",
                      attrs: { title: "Request Per Minute" }
                    },
                    [_vm._v("Newly registered")]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm.newlyRegistered || _vm.newlyRegistered === 0
                      ? _c("span", [_vm._v(_vm._s(_vm.newlyRegistered))])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-refresh fa-spin" })
                        ]),
                    _vm._v(" "),
                    _c("small", [
                      _vm.newlyRegistered > _vm.yesterdayRegistered
                        ? _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-up text-success"
                            })
                          ])
                        : _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down text-danger"
                            })
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted m-0" }, [
                    _c("b", [_vm._v("Last:")]),
                    _vm._v(" " + _vm._s(_vm.yesterdayRegistered))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "card-box widget-box-one" }, [
                _c("i", {
                  staticClass: "mdi mdi-account-multiple widget-one-icon"
                }),
                _vm._v(" "),
                _c("div", { staticClass: "wigdet-one-content" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "m-0 text-uppercase font-600 font-secondary text-overflow",
                      attrs: { title: "Total Users" }
                    },
                    [_vm._v("Newly subscribed")]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm.newlySubscribed || _vm.newlySubscribed === 0
                      ? _c("span", [_vm._v(_vm._s(_vm.newlySubscribed))])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-refresh fa-spin" })
                        ]),
                    _vm._v(" "),
                    _c("small", [
                      _vm.newlySubscribed > _vm.yesterdaySubscribed
                        ? _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-up text-success"
                            })
                          ])
                        : _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down text-danger"
                            })
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted m-0" }, [
                    _c("b", [_vm._v("Last:")]),
                    _vm._v(" " + _vm._s(_vm.yesterdaySubscribed))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-2 col-md-4 col-sm-6" }, [
              _c("div", { staticClass: "card-box widget-box-one" }, [
                _c("i", { staticClass: "mdi mdi-download widget-one-icon" }),
                _vm._v(" "),
                _c("div", { staticClass: "wigdet-one-content" }, [
                  _c(
                    "p",
                    {
                      staticClass:
                        "m-0 text-uppercase font-600 font-secondary text-overflow",
                      attrs: { title: "New Downloads" }
                    },
                    [_vm._v("Subscription canceled")]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm.subscriptionCanceled || _vm.subscriptionCanceled === 0
                      ? _c("span", [_vm._v(_vm._s(_vm.subscriptionCanceled))])
                      : _c("span", [
                          _c("i", { staticClass: "fa fa-refresh fa-spin" })
                        ]),
                    _vm._v(" "),
                    _c("small", [
                      _vm.subscriptionCanceled >
                      _vm.yesterdaySubscriptionCanceled
                        ? _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-up text-success"
                            })
                          ])
                        : _c("span", [
                            _c("i", {
                              staticClass: "mdi mdi-arrow-down text-danger"
                            })
                          ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-muted m-0" }, [
                    _c("b", [_vm._v("Last:")]),
                    _vm._v(" " + _vm._s(_vm.yesterdaySubscriptionCanceled))
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", {
                staticStyle: {
                  height: "500px",
                  width: "100%",
                  "background-color": "#000",
                  "margin-bottom": "20px"
                },
                attrs: { id: "map" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "selection" }, [
                _c(
                  "div",
                  {
                    staticClass: "btn-group btn-group-sm",
                    attrs: { role: "group", "aria-label": "Basic example" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn",
                        class: _vm.todayMapClass,
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.getDataForMap("today")
                          }
                        }
                      },
                      [_vm._v("Today")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn",
                        class: _vm.weekMapClass,
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.getDataForMap("week")
                          }
                        }
                      },
                      [_vm._v("This week")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn",
                        class: _vm.monthMapClass,
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.getDataForMap("month")
                          }
                        }
                      },
                      [_vm._v("This month")]
                    )
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "header-title m-t-0 m-b-30" }, [
                  _vm._v("Mostly visited pages")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "btn-group btn-group-sm",
                      attrs: { role: "group", "aria-label": "Basic example" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.mostVisitedPagesTodayClass,
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.getDataForMostVisitedPages("today")
                            }
                          }
                        },
                        [_vm._v("Today")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.mostVisitedPagesWeeklyClass,
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.getDataForMostVisitedPages("week")
                            }
                          }
                        },
                        [_vm._v("This week")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.mostVisitedPagesMonthlyClass,
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.getDataForMostVisitedPages("month")
                            }
                          }
                        },
                        [_vm._v("This month")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table table-hover m-0" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("No")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Page name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Visited")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.mostVisitedPages, function(p) {
                        return _c("tr", [
                          _c("td", [_vm._v("1")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(p.page_title))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(p.count))])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "header-title m-t-0 m-b-30" }, [
                  _vm._v("Most visitor countries")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "btn-group btn-group-sm",
                      attrs: { role: "group", "aria-label": "Basic example" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.mostVisitedCountriesTodayClass,
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.getDataForMostVisitedCountries("today")
                            }
                          }
                        },
                        [_vm._v("Today")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.mostVisitedCountriesWeeklyClass,
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.getDataForMostVisitedCountries("week")
                            }
                          }
                        },
                        [_vm._v("This week")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.mostVisitedCountriesMonthlyClass,
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.getDataForMostVisitedCountries("month")
                            }
                          }
                        },
                        [_vm._v("This month")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table table-hover m-0" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("No")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Country")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Visited")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.mostVisitedCountries, function(p) {
                        return _c("tr", [
                          _c("td", [_vm._v("1")]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(p.country_code))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(p.count))])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c(
                "div",
                { staticClass: "card-box" },
                [
                  _c("h1", [_vm._v("Google Analytics reports of visitors")]),
                  _vm._v(" "),
                  _c("TrendChart", {
                    attrs: {
                      datasets: [
                        {
                          data: [10, 50, 20, 100, 40, 60, 80],
                          smooth: true,
                          fill: true
                        }
                      ],
                      grid: {
                        verticalLines: true,
                        horizontalLines: true
                      },
                      labels: {
                        xLabels: [
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat",
                          "Sun"
                        ],
                        yLabels: 5
                      },
                      min: 0
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c(
                "div",
                { staticClass: "card-box" },
                [
                  _c("h1", [_vm._v("Site Analytics reports of subscribers")]),
                  _vm._v(" "),
                  _c("TrendChart", {
                    attrs: {
                      datasets: [
                        {
                          data: _vm.subscribedChartData,
                          smooth: true,
                          fill: true
                        }
                      ],
                      grid: {
                        verticalLines: true,
                        horizontalLines: true
                      },
                      labels: {
                        xLabels: _vm.subscribedChartDate,
                        yLabels: 5
                      },
                      min: 0
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm.modalActive
            ? _c(
                "div",
                {
                  staticClass: "modal modal-active",
                  attrs: {
                    id: "exampleModalScrollable",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "exampleModalScrollableTitle",
                    "aria-hidden": "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog modal-dialog-scrollable",
                      attrs: { role: "document" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-content",
                          staticStyle: {
                            "box-shadow": "0px 1px 82px 16px #ccc"
                          }
                        },
                        [
                          _c("div", { staticClass: "modal-header" }, [
                            _c(
                              "h5",
                              {
                                staticClass: "modal-title",
                                attrs: { id: "exampleModalScrollableTitle" }
                              },
                              [_vm._v("Setup Info")]
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
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "input-group" }, [
                                  _c(
                                    "span",
                                    { staticClass: "input-group-addon" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-user-plus"
                                      })
                                    ]
                                  ),
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
                                      id: "example-input1-group3",
                                      name: "example-input1-group3",
                                      placeholder: "First Name"
                                    },
                                    domProps: {
                                      value: _vm.infoForm.first_name
                                    },
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
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-6" }, [
                                _c("div", { staticClass: "input-group" }, [
                                  _c(
                                    "span",
                                    { staticClass: "input-group-addon" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-user-plus"
                                      })
                                    ]
                                  ),
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
                                ])
                              ])
                            ])
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
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.hideModal($event)
                                  }
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
                                on: { click: _vm.saveName }
                              },
                              [_vm._v("Save changes")]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css& */ "./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "097ba13b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=style&index=0&id=097ba13b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_097ba13b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);