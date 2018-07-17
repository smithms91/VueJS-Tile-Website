import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
