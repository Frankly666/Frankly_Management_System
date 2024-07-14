<script setup lang="ts">
import Main from "./views/main/main.vue";
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.app {
  height: 100vh;
  width: 100vw;
}
</style>
