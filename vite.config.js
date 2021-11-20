import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"
import eslintPlugin from "vite-plugin-eslint";
import path from "path";
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: "/",
    plugins: [vue(), vueJsx(), eslintPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@plugin": path.resolve(__dirname, "./plugin")
      }
    },
    build: {
      outDir: "dist-preview/" + loadEnv(mode, process.cwd()).VITE_APP_NAME
    },
    // 预设样式
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '/src/styles/index.scss';"
        }
      }
    }
  });
};
