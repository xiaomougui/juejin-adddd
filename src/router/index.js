import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import('../views/home/Home')

const Newest = () =>
    import('../views/home/Home')

const Article = () =>
    import('../views/articles/Article')


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
        component: Home
    },
    {
        path: '/article',
        component: Article
    },
    {
        path: '/newest',
        component: Newest
    },

]
const router = new VueRouter({
    mode: 'history',
    routes,
    
})

//3.导出router
export default router