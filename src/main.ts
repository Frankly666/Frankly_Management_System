import { createApp } from "vue";
import "normalize.css";

import "@/assets/style/index.less";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/loading/style/css";
import App from "./App.vue";
import router from "./router";
import useIcon from "./utils/useIcon";
import pinia from "./store";

const app = createApp(App);
app.use(router);
app.use(useIcon);
app.use(pinia);

app.mount("#app");
