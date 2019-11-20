<template>
  <div class="py-3">
    <h1 class="h1-vue">This is a Vue App</h1>
    <div id="parcel"></div>
    <b-button to="/" class="mt-2">Home</b-button>
  </div>
</template>

<script>
//import { mountRootParcel } from 'single-spa';
import { mountParcel } from '../main.js'

export default {
  name: 'parcelPage',
  mounted() {
      this.loadParcel()
  },
  methods: {
      loadParcel() {
        var domElement = document.getElementById('parcel')
        /*global System*/
        mountParcel(() => System.import("sample-react-parcel"), { domElement })
        //mountRootParcel(() => System.import("sample-react-parcel"), { domElement })
      }
  }
}
</script>