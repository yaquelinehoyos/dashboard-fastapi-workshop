import axios from "axios";
import { getApiUrl } from "@/api/getApiUrl";

export default {
  namespaced: true,
  state: {
    items: null,
  },
  getters: {},
  mutations: {
    setItems(state, newItems) {
      state.items = newItems;
    },
  },
  actions: {
    async getItems({ commit }) {
      let apiUrl = await getApiUrl();
      let params = {
        offset: 0,
        limit: 100,
      };
      try {
        let response = await axios.get(apiUrl + `items/`, {
          params: params,
        });
        if (response.status == 200) {
          commit("setItems", response.data);
        }
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
    async createItem(__, payload) {
      let apiUrl = await getApiUrl();
      try {
        let response = await axios.post(
          apiUrl + `users/${payload.userId}/items`,
          payload.newItem
        );
        return response.data;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  },
};
