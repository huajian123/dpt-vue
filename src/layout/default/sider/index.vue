<template>
  <div class="left-nav-wrap">
    <logo></logo>
    <nav-bar></nav-bar>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo.vue';
import NavBar from "@/layout/default/sider/NavBar.vue";


</script>



<style scoped>
.left-nav-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;

    .nav-ul-wrap {
        flex: 1 1 0;
        overflow: hidden auto;
    }
}
</style>
