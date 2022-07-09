import { RouterView, type RouteRecordRaw } from "vue-router";
import { h } from 'vue'
export const Dashboard_Routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/dashboard/home'
    },
    {
        path: 'components',
        component: { render: () => h(RouterView) },
        children: [
            {
                path: '',
                component: () => import('@/views/dashboard/components/index.vue')
            },
            {
                path: ':id',
                component: () => import('@/views/dashboard/components/details.vue')
            },
        ]
    },
    {
        path: 'home',
        component: () => import('@/views/dashboard/home/index.vue')
    }
]