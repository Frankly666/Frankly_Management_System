<script setup lang="ts">
import loginPanel from "./cpns/login-panel.vue";
</script>

<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background: url(../../assets/img/login-bg.svg);
}
</style>
