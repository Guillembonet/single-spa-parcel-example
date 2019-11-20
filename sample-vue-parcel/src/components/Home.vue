<template>
  <div class="p-3 vue-app">
    <h1 class="h1-vue">This is a Vue parcel</h1>
    <p class="p-vue">{{dbList}}</p>
    <div>
      <b-button variant="outline-primary" @click="http_post()" class="mr-2">Post</b-button>
      <b-button variant="danger" @click="http_delete()">Delete</b-button>
    </div>
  </div>
</template>

<script>
import api from '../services/api_service.ts'
export default {
  name: 'home',
  data() {
    return {
      dbList: []
    }
  },
  mounted() {
    this.http_get()
  },
  methods: {
    http_post: function() {
      api.http_post().then(response => {
        if (response.status == 200) {
          this.dbList.push(response.data)
        }
      })
    },
    http_delete: function() {
      api.http_delete().then(response => {
        if (response.status == 200 && this.dbList.length > 0) {
          this.dbList.pop()
        }
      })
    },
    http_get: function() {
      api.http_get().then(response => {
        this.dbList = response
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .vue-app {
    border-style: solid;
    border-width: 3px;
    border-color: green;
    display: inline-block;
  }
</style>