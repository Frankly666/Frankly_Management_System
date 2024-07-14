<script setup lang="ts">
import { reactive } from "vue";
import { Account } from "../../../type";

const account = reactive<Account>({
  name: "",
  password: ""
});
</script>

<template>
  <div class="login-account">
    <el-form size="large">
      <el-form-item label="账号">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.login-account {
}
</style>
