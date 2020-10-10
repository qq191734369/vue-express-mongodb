import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: {
            name: 'goodList'
        },
        name: 'helloword',
        component: () => import('@/components/HelloWorld.vue')
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