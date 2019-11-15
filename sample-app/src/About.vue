<template>
<div style="border-style: solid; border-width: 2px; border-color: red;">
    <h1>This is an about page</h1>
    <router-link to="/">
        home (not displaying as a parcel)
    </router-link>
    <a href="#/about">ABOUT</a>
</div>
</template>
<script lang="ts">
export default {
    name: 'about',
}
</script>