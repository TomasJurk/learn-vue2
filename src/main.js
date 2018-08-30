import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Custom directives
/* transfered to showData component local directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.cssText = (
      `color: #${Math.random().toString().slice(2, 8)}`
  )
  }
}); */

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = '600px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '300px';
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// Custom filters
/* transfered to showData component local filter
Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase();
}); */

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...';
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
