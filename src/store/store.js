import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [],
    firstCreate: true,
    detail: {}
  },

});

export default store;
