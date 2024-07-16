<script setup lang="ts">
import { ref, watch } from "vue";
import loginAccount from "./login-account.vue";
import loginPhone from "./login-phone.vue";
import { Check, Close } from "@element-plus/icons-vue";
import { localCache } from "@/utils/cache";
import { ACCOUNT, ISREMPWD } from "@/global/constant";

const isRemPwd = ref(localCache.getCache(ISREMPWD) ?? false);
const accountRef = ref<InstanceType<typeof loginAccount>>();

watch(isRemPwd, (newValue) => {
  if (newValue === false) localCache.removeCache(ACCOUNT);
  localCache.removeCache(ISREMPWD);
  localCache.setCache(ISREMPWD, newValue);
});

// 触发提交， 直接操作子组件中的函数
function login() {
  accountRef.value?.submitAction();
}
</script>

<template>
  <div class="login-panel">
    <h1>FranklyHubCMS</h1>
    <el-tabs type="border-card" stretch class="tab">
      <el-tab-pane label="帐号登陆">
        <!-- 插槽 -->
        <template #label>
          <el-icon><UserFilled /></el-icon>
          <span class="desc">帐号登陆</span>
        </template>
        <!-- 面板主体 -->
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <el-icon><Message /></el-icon>
          <span class="desc">手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="tips">
      <div class="remember-pwd">
        <el-switch
          v-model="isRemPwd"
          class="mt-2"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
        <span>记住密码</span>
      </div>
      <div class="forgot-pwd">
        <el-link type="primary">忘记密码</el-link>
      </div>
    </div>

    <div class="login">
      <el-button type="primary" size="large" @click="login">立即登录</el-button>
    </div>
  </div>
</template>

<style scoped lang="less">
.login-panel {
  position: relative;
  text-align: center;
  bottom: 45px;

  .tab {
    width: 380px;
    margin-top: 15px;
    --el-tabs-header-height: 50px;

    :deep(.el-form-item) {
      margin-bottom: 30px;
    }

    .desc {
      margin-left: 8px;
    }

    :deep(.el-tabs__item) {
      font-size: 16px;
    }
    .login-account,
    .login-phone {
      margin-top: 20px;
    }
  }

  .tips {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--el-color-primary);
    margin-top: 5px;

    .remember-pwd {
      span {
        margin-left: 8px;
      }
    }
    .forgot-pwd {
      .el-link {
        font-size: 16px;
      }
    }
  }

  .login {
    margin-top: 20px;

    .el-button {
      width: 100%;
    }
  }
}
</style>
