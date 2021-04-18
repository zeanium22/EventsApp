import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/styles/main.css'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
