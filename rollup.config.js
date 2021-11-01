import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import postcss from "postcss"
import autoprefixer from "autoprefixer"
import vue from "rollup-plugin-vue";
import vueJsx from "rollup-plugin-vue-jsx-compat";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";
import config from "./package.json";

// 构建信息
const banner = `/* 
 * ${config.name} version ${config.version} 
 * description：${config.description}
 * author：${config.author}
 * 
 */
`;

export default {
  input: "plugin/index.js",
  output: [
    // CommonJS，适用于 Node 和 Browserify/Webpack
    {
      file: config.main,
      format: "cjs",
      name: "main",
      banner,
      sourcemap: true
    },
    // 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
    {
      file: config.module,
      format: "esm",
      name: "main.esm",
      banner,
      sourcemap: true
    }
  ],
  plugins: [
    vue(),
    vueJsx(),
    esbuild({
      jsxFactory: "vueJsxCompat"
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    json(),
    scss({
      processor: () => postcss([autoprefixer()])
    }),
    terser()
  ]
};
