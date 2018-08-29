import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// import Axios from 'axios'
// Vue.prototype.$http = Axios
// Vue.use(Axios)
Vue.use(VueResource)

// Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
