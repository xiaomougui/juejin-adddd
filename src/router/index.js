import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
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
        path: '/article',
        component: Article
    }

]
const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出router
export default router