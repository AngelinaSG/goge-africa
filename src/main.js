import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { VBTooltip } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuelidate from "vuelidate";
import VModal from "vue-js-modal";
import apiService from "@/api";
import message from "@/utils/message";
import { AFRICA_ROUTES } from "./router/index.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VModal);
Vue.use(Vuelidate);
Vue.use(message);

Vue.directive("b-tooltip", VBTooltip);

Vue.prototype.$api = apiService;
Vue.prototype.$AFRICA_ROUTES = AFRICA_ROUTES;

const firebaseConfig = {
  apiKey: "AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
  authDomain: "goge-africa-shop.firebaseapp.com",
  projectId: "goge-africa-shop",
  storageBucket: "goge-africa-shop.appspot.com",
  messagingSenderId: "235437899611",
  appId: "1:235437899611:web:f140f72dde1a545cdd647e",
  measurementId: "G-5J0XRVN46H",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
