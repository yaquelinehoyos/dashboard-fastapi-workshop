import axios from "axios";
import { getApiUrl } from "@/api/getApiUrl";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
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
