import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users/Index.vue"),
  },
  {
    path: "/items",
    name: "Items",
    component: () =>
      import(/* webpackChunkName: "items" */ "../views/Items/Index.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
