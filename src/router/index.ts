// import type { RouterMeta } from '@/models/interfaces/RouterMeta'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { Layouts } from '@/models/enums/Layouts'
import { Dashboard_Routes } from './childs/dashboard'
import { beforeEach } from './routerGaurds'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        layout: Layouts.Normal
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      children: Dashboard_Routes,
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        layout: Layouts.Dashboard
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/authentication/Login.vue')
    }

  ] as RouteRecordRaw[],
})

router.beforeEach(beforeEach)

export default router
