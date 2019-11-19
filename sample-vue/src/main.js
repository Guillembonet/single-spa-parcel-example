import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/styles/style.scss';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

Vue.use(Router);
Vue.use(BootstrapVue)

const router = new Router({
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

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router
  }
});

export const bootstrap = [
  singleSpa.bootstrap
];
export const mount = [
  singleSpa.mount
];
export const unmount = [
  singleSpa.unmount
];