// import type { RouterMeta } from '@/models/interfaces/RouterMeta'
import { createRouter, createWebHistory, RouterView, type RouteRecordRaw } from 'vue-router'
import { Layouts } from '@/models/enums/Layouts'
import { Dashboard_Routes } from './childs/dashboard'
import { beforeEach } from './routerGaurds'
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'

    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      children: Dashboard_Routes,
      component: { render: () => h(RouterView) },
      meta: {
        layout: Layouts.Dashboard
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/authentication/Login.vue'),
      meta: {
        layout: Layouts.FullScreen
      }
    }

  ] as RouteRecordRaw[],
})

router.beforeEach(beforeEach)

export default router
