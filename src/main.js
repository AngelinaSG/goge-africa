import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import VModal from "vue-js-modal";
import apiService from "@/api";

Vue.config.productionTip = false;

Vue.use(VModal);
Vue.prototype.$api = apiService;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
