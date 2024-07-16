import { ACCOUNT, ISREMPWD, LOGIN_TOKEN } from "@/global/constant";
import router from "@/router";
import { getuserInfo } from "@/service/login/login";
import type { Account } from "@/type";
import { localCache } from "@/utils/cache";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
import { defineStore } from "pinia";

const useLoginStore = defineStore("login", {
  state: () => ({
    userInfo: {}
  }),
  getters: {},
  actions: {
    async getUserInfoAction(account: Account) {
      const res = await getuserInfo(account);
      this.userInfo = res;

      // 判断帐号是否正确
      const token = res.data?.token;
      if (!token) {
        ElMessage.error("Oops, 账号或密码错误,请重新输入!");
        return;
      } else {
        // 密码正确才保存密码
        const isRemPwd = localCache.getCache(ISREMPWD);
        if (isRemPwd) localCache.setCache(ACCOUNT, account);
      }

      // 加载动画
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        router.push("/main");
      }, 300);

      // 将用户的token保存到localstorage
      localCache.setCache(LOGIN_TOKEN, token);
    }
  }
});

export default useLoginStore;
