import { PageEnum } from "@/enums/page-enum";
import type { AppRouteRecordRaw } from "@/router/types";
import systemRoute from "@/router/routes/modules/system";

// 根路由
const ROOT_ROUTE: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/login',
  meta: {
    title: 'Root'
  }
}

// Page Login
const LOGIN_ROUTE: AppRouteRecordRaw = {
  path: PageEnum.BaseLogin,
  name: 'Login',
  component: () => import('../../views/login/login.vue'),
  meta: {
    title: '登录页'
  }
};

const DEFAULT_LAYOUT: AppRouteRecordRaw = {
  path: PageEnum.DefaultLayout,
  name: 'DefaultLayout',
  component: () => import('../../layout/default/index.vue'),
  meta: {
    title: '默认布局'
  },
  children:[systemRoute]
};

export const basicRoutes:AppRouteRecordRaw[] = [ROOT_ROUTE, LOGIN_ROUTE,DEFAULT_LAYOUT];
