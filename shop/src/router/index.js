import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/page/Home.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/page/Main.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/page/Login.vue')
    },
    {
        path: '/goods',
        name: 'goodList',
        component: () => import('@/page/GoodList.vue')
    },
    {
        path: '/cartList',
        name: 'cartList',
        component: () => import('@/page/CartList.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router