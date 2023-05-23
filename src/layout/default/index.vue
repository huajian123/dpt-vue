<!--默认布局-->
<template>
 <def-layout-content>
   <!--sider模式sider-->
   <template #sider>
     <sider></sider>
   </template>

   <!-- sider模式的header  -->
   <template #sider-header>
      <layout-header></layout-header>
   </template>


  <!-- 内容区域  -->
   <template #content>
      <layout-content></layout-content>
   </template>

   <template #footer>
      <layout-footer></layout-footer>
   </template>

 </def-layout-content>
</template>
 
<script setup lang="ts">
import DefLayoutContent from './def-layout-content/index.vue';
import Sider from './sider/index.vue';
import LayoutHeader from './header/index.vue';
import LayoutContent from './content/index.vue';
import LayoutFooter from './footer/index.vue';

</script>



<style scoped>

</style>
