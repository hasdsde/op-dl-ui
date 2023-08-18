import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', redirect: "todo"},
            {path: 'todo', component: () => import('pages/list.vue')},
            {path: 'add', component: () => import('pages/add.vue')},
            {path: 'user', component: () => import('pages/user.vue')},
        ],
    },
    {
        path: '/login',
        component: () => import('layouts/Login.vue')
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
