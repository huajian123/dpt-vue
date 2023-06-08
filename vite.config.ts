
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import federation from "@originjs/vite-plugin-federation";

import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    vueJsx(),
      federation({
      name: 'pcc', //作为远程模块的模块名称，必填。
      filename: 'TaskProjectCenterConsoleModule.js', //作为远程模块的入口文件，非必填，默认为remoteEntry.js
      exposes: {
        // '对外暴露的组件名称':'对外暴露的组件地址'
        './pcc': './src/views/system/user.vue',
      },
      shared: ['vue']
    })],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 路径别名
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

})
