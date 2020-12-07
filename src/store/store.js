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
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios({
          url: "https://api.codementum.co.uk/auth/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            let info = resp.data;
            let t = info.data;
            const token = t.auth.accessToken;
            const type = t.auth.tokenType;
            const user = resp.data.user;
            this.state.authorization = type + " " + token;
            localStorage.setItem("token", this.state.authorization);
            axios.defaults.headers.common["Authorization"] = token;
            resolve(resp);
          })
          .catch(err => {
            localStorage.removeItem("token");
            reject(err);
          });
      });
    }
  },
  mutations: {
    show: state => {
      state.isShow = !state.isShow;
    }
  }
});

export default store;
