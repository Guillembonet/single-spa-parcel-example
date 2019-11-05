import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';
import Router from "vue-router";
import About from './About.vue';
import Home from './Home.vue';

Vue.config.productionTip = false;

export const router = new Router({
  routes: [
      {
          path: "/",
          name: "home",
          component: Home
      },
      {
          path: "/about",
          name: "about",
          component: About
      }
  ]
});

Vue.use(Router);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router
  },
});

/*new Vue({
  el: '#app',
  render: (h) => h(App),
  router
}).$mount("#app");*/

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
