import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import('../views/home/Home')

const Follow = () =>
    import('../views/otherpage/Follow')

const Frontend = () =>
    import('../views/otherpage/Frontend')

const Android = () =>
    import('../views/otherpage/Android')

const IOS = () =>
    import('../views/otherpage/IOS')

const AI = () =>
    import('../views/otherpage/AI')

const Code = () =>
    import('../views/otherpage/Code')

const Reading = () =>
    import('../views/otherpage/Reading')


//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/following',
        component: Follow
    },
    {
        path: '/frontend',
        component: Frontend
    },
    
    {
        path: '/android',
        component: Android
    },
    {
        path: '/ios',
        component: IOS
    },
    {
        path: '/ai',
        component: AI
    },
    {
        path: '/code',
        component: Code
    },
    {
        path: '/reading',
        component: Reading
    },

]
const router = new VueRouter({
    mode: 'history',
    routes,
    
})

//3.导出router
export default router