import path from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from "weapp-tailwindcss/vite";
const { WeappTailwindcssDisabled, resolve } = require('./shared')
import { plugins as postcssPlugins } from './postcss.config.cjs'
// vite 插件配置
const vitePlugins = [uni(), uvwt({
  disabled: WeappTailwindcssDisabled
})];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins,
  // 假如 postcss.config.js 不起作用，请使用内联 postcss Latset
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
});
