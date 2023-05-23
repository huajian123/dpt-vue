<template>
  <div class="sidebar-logo" :class="{'p-l-8':collapsed}">
    <a href="#" target="_blank">
      <img alt="logo" src="@/assets/imgs/logo.svg" />
      <h1 class="animate-02 light">Ant Design Pro</h1>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useCollapsedStore } from "@/stores/modules/layout-store";
import { storeToRefs } from "pinia";

const store = useCollapsedStore();
const {collapsed}= storeToRefs(store);
</script>



<style scoped lang="less">
@import (reference) "ant-design-vue/lib/style/themes/default.less";

.sidebar-logo {
    position: relative;
    padding-left: 16px;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    transition: all .3s;

    a {
        min-height: 32px;
        display: inline-block;
        img {
            display: inline-block;
            height: 32px;
            width: 32px;
            vertical-align: middle;
        }

        h1 {
            display: inline-block;
            margin: 0 0 0 12px;
            font-weight: 600;
            font-size: 18px;
            color: @border-color-base;
            vertical-align: middle;
            &.light {
                color: @primary-color !important;
            }
        }
    }
}
</style>
