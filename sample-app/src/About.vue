<template>
<div style="border-style: solid; border-width: 2px;">
    <h1>Hey</h1>
    <router-link to="/">
        home
    </router-link>
    <a href="#/about">ABOUT</a>
</div>
</template>
<script lang="ts">
export default {
    name: 'about',
}
</script>