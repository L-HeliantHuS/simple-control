import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import ZeitUI from '@zeit-ui/vue'
import '@zeit-ui/vue/dist/zeit-ui.css'
import '@zeit-ui/themes/index.css'      // default theme
import '@zeit-ui/themes/dark.css'       // dark theme

Vue.use(ZeitUI);
Vue.config.productionTip = false;
Vue.prototype.$zeitUI = ZeitUI;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
