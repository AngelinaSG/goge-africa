import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// import guest from "./middleware/guest";
import auth from "./middleware/auth";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter);

export const AFRICA_ROUTES = {
  HOME: () => "/",
  COURSE_PAGE: () => "/course",
  PRODUCT_PAGE: (courseId) =>
    courseId ? `/course/${courseId}` : "/course/:id",
  CART: () => "/cart",
  DASHBOARD: () => "/dashboard",
  PRODUCT_EDIT: (productId) =>
    productId ? `/dashboard/${productId}` : "/dashboard/:id",
};

const routes = [
  {
    path: AFRICA_ROUTES.HOME(),
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: AFRICA_ROUTES.COURSE_PAGE(),
    name: "CoursePage",
    component: () => import("../views/CoursePage.vue"),
  },
  {
    path: AFRICA_ROUTES.PRODUCT_PAGE(),
    name: "ProductPage",
    component: () => import("@/components/CoursePage/ProductPage"),
  },
  {
    path: AFRICA_ROUTES.CART(),
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: AFRICA_ROUTES.DASHBOARD(),
    name: "Dashboard",
    meta: {
      middleware: [auth],
    },
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: AFRICA_ROUTES.PRODUCT_EDIT(),
    name: "ProductEdit",
    meta: {
      middleware: [auth],
    },
    component: () => import("@/components/Dashboard/ProductEdit.vue"),
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
