import Vue from "vue";
import Vuex from "vuex";

//modules
import users from "./modules/users";
import items from "./modules/items";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    items
  },
});
