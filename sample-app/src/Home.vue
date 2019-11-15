<template>
<div style="border-style: solid; border-width: 2px;">
    <p>{{ test }}</p>
    <button @click="postAndRefresh()">Post Data</button>
    <button @click="deleteAndRefresh()">Delete Data</button>
    <router-link to="/about">
        About
    </router-link>
    <router-link to="/app2">
        App 2
    </router-link>
    <div id="test"></div>
</div>
</template>

<script lang="ts">
import {mountRootParcel} from 'single-spa';
//import {vueLifecycles} from './main.js';
import {parcelConfig} from './parcel.js'
export default {
    name: 'home',
    data: function () {
    return {
      test: "unloaded"
    }
  },
  mounted() {
    this.getTest()
    mountRootParcel(parcelConfig, {domElement: document.getElementById("test")})
  },
  methods: {
    getTest() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", process.env.VUE_APP_API_URL + process.env.VUE_APP_API_ENDPOINT, false); // false for synchronous request
      xmlHttp.send( null );
      this.test = xmlHttp.responseText;
    },
    postTest() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("POST", process.env.VUE_APP_API_URL + process.env.VUE_APP_API_ENDPOINT, false);
      xmlHttp.send(null);
    },
    deleteTest() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("DELETE", process.env.VUE_APP_API_URL + process.env.VUE_APP_API_ENDPOINT, false);
      xmlHttp.send(null);
    },
    postAndRefresh() {
      this.postTest()
      this.getTest()
    },
    deleteAndRefresh() {
      this.deleteTest()
      this.getTest()
    }
  }
}
</script>