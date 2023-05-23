
<template>
  <a-layout class="min-screen-full-height">
    <a-layout-sider v-model:collapsed="collapsed" :width="208" :collapsed-width="48" :trigger="null"  class="left-nav-fixed"  theme="light" collapsible>
      <slot name="sider"></slot>
    </a-layout-sider>
    
    <a-layout>
      <a-layout-header class="fixed animate-02" :class="{'fixed-collapsed':collapsed}">
        <slot name="sider-header"></slot>
      </a-layout-header>
      <a-layout-content class="layout-content animate-02" :class="{'collapsed':collapsed}">
        <slot name="content"></slot>
      </a-layout-content>
      <a-layout-footer>
        <slot name="footer"></slot>
      </a-layout-footer>

    </a-layout>
  </a-layout>
</template>

<script setup lang="ts" name="DefLayoutContent">
import { useCollapsedStore } from "@/stores/modules/layout-store";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const store = useCollapsedStore();
const {collapsed}= storeToRefs(store);

</script>



<style scoped lang="less">

@import "@/styles/ant";

.layout-content{
  margin-top: @layout-header-height;
  margin-left: @layout-side-width;
  &.collapsed{
    margin-left: @menu-collapsed-width;
  }
}

.left-nav-fixed {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
}

.fixed {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: calc(100% - @layout-side-width); // 208px 是左侧菜单的宽度
    flex: auto;
     &.fixed-collapsed{
      width: calc(100% - @menu-collapsed-width);
     }
}
</style>
