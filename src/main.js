import App from "@/App.vue";
import { createApp } from "vue";

// 初始化
const app = createApp(App);

// link
// import Dsnd from "ds-design-vue";
// import "ds-design-vue/dist/plugin/main.css";
// app.use(Dsnd);

// 路由
import router from "@/router";
app.use(router);

// 使用开发组件
import plugin from "../plugin";
app.use(plugin);

// 挂载
app.mount("#app");

// 引用 ant desgin
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(Antd);
