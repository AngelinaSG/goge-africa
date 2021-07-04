import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from "vuelidate";
import VModal from "vue-js-modal";
import apiService from "@/api";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VModal);
Vue.use(Vuelidate);
Vue.prototype.$api = apiService;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
