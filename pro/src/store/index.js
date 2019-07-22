import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const store = new Vuex.Store({});
const state = {
  // 存储token
  // user: window.localStorage.getItem("user"),
  Authorization: localStorage.getItem("Authorization")
    ? localStorage.getItem("Authorization")
    : "",
};
const mutations = {
  // 修改token，并将token存入localStorage
  changeLogin(state, user) {
    state.Authorization = user.Authorization;
    localStorage.setItem("Authorization", user.Authorization);
  },
};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
