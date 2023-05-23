<script setup lang="ts">

</script>

<template>
<div class="app-header">
  <slot name="left"></slot>
  <slot name="right"></slot>
</div>


</template>

<style scoped>
.app-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}



</style>
