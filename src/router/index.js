import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/course",
    name: "CoursePage",
    component: () => import("../views/CoursePage.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
];

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior,
});

export default router;
