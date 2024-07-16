import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import type { App } from "vue";

// 用来加载element中的icon图标
function useIcon(app: App<any>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export default useIcon;
