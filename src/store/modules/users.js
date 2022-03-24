import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: null,
    userInfo: null
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    setUsers(state, newUsers) {
      state.users = newUsers;
    },
    setUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  },
  actions: {
    async getUsers({ commit }) {
      let params = {
        offset: 0,
        limit: 100
      };
      try {
        let response = await axios.get(
          process.env.VUE_APP_BACK_ROUTE + `users/`,
          {
            params: params
          }
        );
        if (response.status == 200) {
          commit("setUsers", response.data);
        }
        return response.data;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
    async getUserInfo({ commit }, userId) {
      try {
        let response = await axios.get(
          process.env.VUE_APP_BACK_ROUTE + `users/${userId}`
        );
        if (response.status == 200) {
          commit("setUserInfo", response.data);
        }
        return response.data;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  }
};