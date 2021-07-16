import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import guest from "./middleware/guest";
import auth from "./middleware/auth";
import middlewarePipeline from "./middlewarePipeline";

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
    path: "/course/:id",
    name: "ProductPage",
    component: () => import("@/components/CoursePage/ProductPage"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      middleware: [auth],
    },
    component: () => import("../views/Dashboard.vue"),
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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
