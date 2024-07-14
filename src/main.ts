import { createApp } from "vue";
import "normalize.css";

import "@/assets/style/index.less";
import App from "./App.vue";
import router from "./router";
import useIcon from "./utils/useIcon";

const app = createApp(App);
app.use(router);
app.use(useIcon);

app.mount("#app");
