import axios from "axios";
import { getApiUrl } from "@/api/getApiUrl";

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
      let apiUrl = await getApiUrl();
      let params = {
        offset: 0,
        limit: 100
      };
      try {
        let response = await axios.get(
          apiUrl + `users/`,
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
      let apiUrl = await getApiUrl();
      try {
        let response = await axios.get(
          apiUrl + `users/${userId}`
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