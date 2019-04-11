import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store";
import axiosRequests from "./requests";
import axios from "axios";

store.$axios = axiosRequests;
window.axios = axios; 

new Vue({
  el: "#admin-app",
  router,
  store,
  render: h => h(App)
});
