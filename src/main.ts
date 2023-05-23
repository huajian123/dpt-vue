import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { setupRouter } from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import '@/styles/index.less'
import { setupStore } from "@/stores";

function bootstrap() :void{
  const app = createApp(App)

  // 初始化store
  setupStore(app);

  app.use(Antd);

  // 初始化router
  setupRouter(app)

  app.mount('#app')
}

bootstrap();
