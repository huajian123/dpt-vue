import { createRouter, createWebHistory,type Router, type RouteRecordRaw } from "vue-router";
import type { App } from "vue";
import { basicRoutes } from "@/router/routes";

/**
 * @description: 创建路由
 * @param {string} base
 * @returns {Router}
 */
export const router:Router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true, //默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。这里采用严格模式
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * @description: 路由配置汇总方法
 */
export function setupRouter(app: App<Element>):void {
  app.use(router)
}
