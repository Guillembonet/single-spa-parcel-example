import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import About from './About.vue';

const parcel = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(About)
  },
});

export const parcelConfig = {
  name: "aa",
  customProps: {},
  domElement: document.getElementById("test"),
  bootstrap: parcel.bootstrap,
  mount: parcel.mount,
  unmount: parcel.unmount,
}
