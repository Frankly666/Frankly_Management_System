<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Phone } from "../../../type";
import type { FormRules } from "element-plus";

const phone = reactive<Phone>({
  phoneNum: "" as unknown as number,
  captcha: "" as unknown as number
});

// 帐号判断的逻辑代码
const checkPhoneNum = (rule: any, value: number, callback: any) => {
  if (!value) {
    callback(new Error("手机号不能为空!"));
  } else if (String(value).length !== 11) {
    callback(new Error("手机号长度为11位!"));
  }
  callback();
};

// 密码判断的逻辑
const checkCaptcha = (rule: any, value: number, callback: any) => {
  if (!value) {
    callback(new Error("验证码不能为空!"));
  } else {
    if (String(value).length !== 6) {
      callback(new Error("验证码长度为6位!"));
    }
    callback();
  }
};

const rules = reactive<FormRules<Phone>>({
  phoneNum: [{ validator: checkPhoneNum, trigger: ["blur", "change"] }],
  captcha: [{ validator: checkCaptcha, trigger: ["blur", "change"] }]
});
</script>

<template>
  <div class="login-phone">
    <el-form size="large" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="phone.phoneNum" />
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <el-input v-model="phone.captcha" />
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.login-phone {
  :deep(.el-form-item__content) {
    flex-wrap: nowrap;
  }

  .el-button {
    margin-left: 10px;
  }
}
</style>
