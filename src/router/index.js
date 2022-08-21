import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import('../views/home/Home')

const Newest = () =>
    import('../views/home/Newest')

const Hot = () =>
    import('../views/home/Hot')

const Follow = () =>
    import('../views/otherpage/follow/Follow')

    const FollowN = () =>
    import('../views/otherpage/follow/FollowN')

    const FollowH = () =>
    import('../views/otherpage/follow/FollowH')


const Others = () =>
    import('../views/otherpage/Others')

    const OthersN = () =>
    import('../views/otherpage/OthersN')

    const OthersH = () =>
    import('../views/otherpage/OthersH')



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
        path: '/home/recommend',
        component: Home
    },
    {
        path:'/home/newest',
        component:Newest
    },
    {
        path: '/home/hot',
        component: Hot
    },
    {
        path: '/following',
        redirect:'/following/recommend'
    },
    {
        path: '/following/recommend',
        component: Follow
    },
    {
        path:'/following/newest',
        component:FollowN
    },
    {
        path: '/following/hot',
        component: FollowH
    },
    
    {
        path:'/*/recommend',
        component:Others
    },
    {
        path:'/*/hot',
        component:OthersH
    },
    {
        path:'/*/newest',
        component:OthersN
    },
    
    

]
const router = new VueRouter({
    mode: 'history',
    routes,
    
})

//3.导出router
export default router