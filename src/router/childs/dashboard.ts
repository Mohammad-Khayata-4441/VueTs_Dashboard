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
                component: () => import('@/views/dashboard/components/index.vue'),
                meta: {
                    breadCrumb: [
                        { path: '/dashboard', icon: 'someIcon', text: 'Dashboard' },
                        { path: '/dashboard/components', icon: 'someIcon', text: 'Components' }
                    ]
                }
            },
            {
                path: ':id',
                component: () => import('@/views/dashboard/components/details.vue')
            },
        ]
    },
    {
        path: 'home',
        name: 'Home Page',
        component: () => import('@/views/dashboard/home/index.vue')
    }
]