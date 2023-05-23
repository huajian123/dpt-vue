

<template>
<tool-bar>
  <template #left>
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="changeCollapse"
    />
    <menu-fold-outlined v-else class="trigger" @click="changeCollapse" />
  </template>
  <template #right>
    <div>右边</div>
  </template>
</tool-bar>
</template>
<script setup lang="ts" name="LayoutHeader">

import ToolBar from "@/layout/default/header/ToolBar.vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useCollapsedStore } from "@/stores/modules/layout-store";
import { storeToRefs } from "pinia";


const store = useCollapsedStore();
const {collapsed}= storeToRefs(store);
const changeCollapse = () => {
  store.setCollapsed(!collapsed.value);
};
</script>
<style scoped lang="less">
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    z-index: 10;
}

.trigger:hover {
    color: #1890ff;
}

</style>
