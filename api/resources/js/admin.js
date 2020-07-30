import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import VueSimpleAlert from "vue-simple-alert";
import VueLoading from 'vuejs-loading-plugin'
import VueTelInput from 'vue-tel-input'
import Editor from 'v-markdown-editor'
import 'v-markdown-editor/dist/v-markdown-editor.css';
import ImageUploader from 'vue-image-upload-resize';
import TrendChart from "vue-trend-chart";
import MaterialDesignTransition from 'vue-router-md-transition';

Vue.component('md-transition', MaterialDesignTransition);
Vue.use(TrendChart);
require('./bootstrap');
Vue.use(ImageUploader);
Vue.use(Editor);
Vue.use(VueTelInput)
Vue.use(VueLoading)
Vue.use(VueSimpleAlert);
window.$ = require('jquery');
window.JQuery = require('jquery');
window.axios = require('axios');
Vue.use(InertiaApp);
Vue.mixin(require('./base'));
Vue.use(VueToast);
const app = document.getElementById('app');
new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);
