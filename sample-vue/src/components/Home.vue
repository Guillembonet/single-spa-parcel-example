<template>
  <div class="py-3">
    <h1 class="h1-vue">This is a Vue app</h1>
    <p class="p-vue">{{dbList}}</p>
    <div>
      <b-button variant="outline-primary" @click="http_post()" class="mr-2">Post</b-button>
      <b-button variant="danger" @click="http_delete()">Delete</b-button>
    </div>
    <div class="mt-2">
      <b-button to="/about" class="mr-2">About</b-button>
      <b-button to="/react" class="mr-2">React</b-button>
      <b-button to="/parcel_page">Parcel Page</b-button>
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