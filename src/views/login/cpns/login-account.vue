<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Account } from "../../../type";
import type { FormInstance, FormRules } from "element-plus";
import useLoginStore from "@/store/login/login";
import { localCache } from "@/utils/cache";
import { ACCOUNT, ISREMPWD } from "@/global/constant";
import { ElMessage } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const account = reactive<Account>({
  name: localCache.getCache(ACCOUNT)?.name ?? "",
  password: localCache.getCache(ACCOUNT)?.password ?? ""
});

// 帐号判断的逻辑代码
const checkName = (rule: any, value: string, callback: any) => {
  if (!value) {
    return callback(new Error("帐号不能为空!"));
  }
};

// 密码判断的逻辑
const checkPwd = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("密码不能为空!"));
  } else {
    if (value.length < 6) {
      callback(new Error("密码最小长度位6位!"));
    }
    callback();
  }
};

const rules = reactive<FormRules<Account>>({
  name: [{ validator: checkName, trigger: ["blur", "change"] }],
  password: [{ validator: checkPwd, trigger: ["blur", "change"] }]
});

const requireRule = [{ required: true, trigger: "blur", message: "" }];

const { getUserInfoAction } = useLoginStore();
function submitAction() {
  // 首先需要判断name和密码是否符合, 不符合就直接弹出提示信息
  if (!account.name || account.password.length < 6) {
    console.log("wozaizhe");
    ElMessage({
      message: "请输入正确的格式!",
      type: "warning"
    });
    return;
  }

  getUserInfoAction(account);
}

defineExpose({
  submitAction
});
</script>

<template>
  <div class="login-account">
    <el-form size="large" :rules="rules" :model="account" ref="ruleFormRef">
      <el-form-item label="帐号" prop="name" :rules="requireRule">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="requireRule">
        <el-input
          v-model="account.password"
          type="password"
          autocomplete="off"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.login-account {
  :deep(.el-form-item__label) {
    width: 54px;
  }
}
</style>
