<script setup lang="ts">
import loginAccount from "./login-account.vue";
</script>

<template>
  <div class="login-panel">
    <h1>FranklyHubCMS</h1>
    <el-tabs type="border-card" stretch class="tab">
      <el-tab-pane label="账号登陆">
        <template #label>
          <el-icon><UserFilled /></el-icon>
          <span class="desc">帐号登陆</span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <el-icon><Message /></el-icon>
          <span class="desc">手机登录</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="less">
.login-panel {
  text-align: center;

  .tab {
    width: 380px;
    margin-top: 15px;
    --el-tabs-header-height: 50px;

    :deep(.el-form-item) {
      margin-bottom: 25px;
    }

    .desc {
      margin-left: 8px;
    }
  }
}
</style>
