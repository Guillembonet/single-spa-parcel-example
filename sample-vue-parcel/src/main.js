import Vue from 'vue'
import Home from './components/Home.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/styles/style.scss';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

Vue.use(BootstrapVue)

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(Home)
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