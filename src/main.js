import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import interceptorsSetup from "@/api/interceptors";

//BootstrapVue
import "@/plugins/bootstrapVue";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

interceptorsSetup();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
