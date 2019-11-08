import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const parcel = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App)
  },
});

const parcelConfig = {
  name: "parcel",
  customProps: {},
  domElement: document.getElementById("test"),
  bootstrap: parcel.bootstrap,
  mount: parcel.mount,
  unmount: parcel.unmount,
}

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

