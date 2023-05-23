import type { AppRouteRecordRaw } from "@/router/types";

const systemRoute:AppRouteRecordRaw= {
  path: 'system',
  name: 'System',
  redirect: '/system/user',
  meta: {
    title: '系统管理'
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('../../../../views/system/user.vue'),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'role',
      name: 'Role',
      component: () => import('../../../../views/system/role.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'menu',
      name: 'Menu',
      component: () => import('../../../../views/system/menu.vue'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}

export default systemRoute;
