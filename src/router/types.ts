import type { defineComponent } from "vue";
import type { RouteRecordRaw } from "vue-router";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Record<string, any>;
  fullPath?: string;
  redirect?: string;
}


export interface RouteMeta extends Record<string | number | symbol, unknown> {
  // 路由标题，必填
  title: string;
  // 菜单图标
  icon?: string;
  // 是否忽略KeepAlive缓存
  ignoreKeepAlive?: boolean;
  // 是否固定标签
  affix?: boolean;
  // 当前路由不再菜单显示
  hideMenu?: boolean;
  // 当前路由不再标签页显示
  hideTab?: boolean;
  // 隐藏所有子菜单
  hideChildrenInMenu?: boolean;
  // 隐藏该路由在面包屑上面的显示
  hideBreadcrumb?: boolean;
  // 是否是外链
  isExternal?: boolean;
  // 内嵌iframe的地址
  frameSrc?: Nullable<string>;
}

export interface Menu {
  id: number;
  path: string;
  name: string;
  redirect?: string;
  component: Nullable<string>;
  meta: RouteMeta;
  children: Menu[];
}

export type AppRouteModule = AppRouteRecordRaw;
