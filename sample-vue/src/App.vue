<template>
  <div id="app">
    <router-view class="vue-app"></router-view>
  </div>
</template>

<script>
export default {
  name: 'sample-vue'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="scss" scoped>
  .vue-app {
    border-style: solid;
    border-width: 3px;
    border-color: green;
  }
</style>
