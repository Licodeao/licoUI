import Vue from "vue";
import App from "./App.vue";

import "lico-ui/dist/css/index.css";
import LUI from "lico-ui";
Vue.use(LUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
