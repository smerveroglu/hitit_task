// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store";
import Vuex from "vuex";
import Toasted from "vue-toasted";
Vue.use(Toasted, {
  duration: 5000,

  position: "top-right",
  type: "success",
  action: {
    text: "Okay",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  }
});

Vue.use(Vuex);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
