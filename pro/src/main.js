// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
//import 'lib-flexible'
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
//图标库
import "vant/lib/icon/local.css";
import $ from "zepto";
// Vue.use(Icon);
Vue.config.productionTip = false;

import Vue from "vue";
import App from "./App";
import router from "./router";
// import router1 from "./router/login";
import Vant from "vant";
import "vant/lib/index.css";
import VueTap from "v-tap";
import Share from "vue-social-share";
import "vue-social-share/dist/client.css";
import { Toast } from "vant";
import "./data/loginData.js";
import "./data/registerData.js";
import store from "./store";
import { Lazyload } from "vant";

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueTap);
Vue.use(Share);
Vue.use(Toast);
Vue.use(store);
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
});
