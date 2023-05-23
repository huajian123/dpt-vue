<template>
  <a-button type="primary" @click="login">登录</a-button>
</template>

<script setup lang="ts">
import { router } from "@/router";
import { PageEnum } from "@/enums/page-enum";

const login= () => {
  // 路由跳转到default
  router.replace(PageEnum.DefaultLayout)
}


</script>



<style scoped>

</style>
