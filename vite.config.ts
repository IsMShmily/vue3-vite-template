import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' //使用jsx语法
import Components from 'unplugin-vue-components/vite' //配置vant按需引入组件样式
import { VantResolver } from 'unplugin-vue-components/resolvers' //配置vant按需引入组件样式
export default defineConfig({
  plugins: [
    vue(),
    //使用jsx语法
    vueJsx(),
    // 配置vant按需引入组件样式
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  //配置全局sass变量
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
