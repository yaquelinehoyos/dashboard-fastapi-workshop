import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: null,
  },
  getters: {
    getUsers(state) {
        return state.users;
    }
  },
  mutations: {
    setUsers(state, newUsers) {
        state.users = newUsers;
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
  }
};