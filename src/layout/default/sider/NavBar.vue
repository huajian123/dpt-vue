
<template>
  <a-menu
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    :open-keys="state.openKeys"
    @openChange="onOpenChange"
  >
    <a-sub-menu key="sub1">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>系统管理</template>
      <a-menu-item @click="changeRoute('/user')" key="1">用户管理</a-menu-item>
      <a-menu-item @click="changeRoute('/role')" key="2">角色管理</a-menu-item>
      <a-menu-item @click="changeRoute('/menu')" key="3">菜单管理</a-menu-item>
    </a-sub-menu>
  </a-menu>

</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useRoute, useRouter } from "vue-router";

const router = useRouter()

const state = reactive({
  rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
  openKeys: ['sub1'],
  selectedKeys: [],
});

const changeRoute=(path:string)=>{
  router.push('/default/system'+path)
}

const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};


</script>



<style scoped>

</style>

