<template>
  <div id="app">
    <p>{{ test }}</p>
    <button @click="postAndRefresh()">Post Data</button>
    <button @click="deleteAndRefresh()">Delete Data</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      test: "a"
    }
  },
  mounted() {
    this.getTest()
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
