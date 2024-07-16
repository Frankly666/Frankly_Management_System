import { createRouter, createWebHashHistory } from "vue-router";

import { LOGIN_TOKEN } from "@/global/constant";
import { localCache } from "@/utils/cache";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      component: () => import("@/views/main/main.vue")
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue")
    }
  ]
});

// 进行导航守卫
router.beforeEach((to) => {
  // 在localstorage中获取token, 如果要前往的是main中的页面,一律都跳到登录页面
  const token = localCache.getCache(LOGIN_TOKEN);
  if (to.path.startsWith("/main") && !token) {
    return "/login";
  }
});

export default router;
