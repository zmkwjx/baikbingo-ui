import { createRouter, createWebHistory } from "vue-router";
import routes from "./router.config.js";

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
