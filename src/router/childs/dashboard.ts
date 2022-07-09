import type { RouteRecordRaw } from "vue-router";

export const Dashboard_Routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/dashboard/home'
    },
    {
        path: 'home',
        component: () => import('@/views/dashboard/home/index.vue')
    }
]