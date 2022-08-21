import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import('../views/home/Home')

const Article = () =>
    import('../components/Article.vue')
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
        path: '/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/home/recommend',
        component: Home
    },
    {
        path: '/home/newest',
        component: Newest
    },
    {
        path: '/home/hot',
        component: Hot
    },
    {
        path: '/following',
        redirect: '/following/recommend'
    },
    {
        path: '/following/recommend',
        component: Follow
    },
    {
        path: '/following/newest',
        component: FollowN
    },
    {
        path: '/following/hot',
        component: FollowH
    },
    {
        path: '/backend',
        redirect: '/backend/recommend'
    },
    {
        path: '/backend/recommend',
        component: Others
    },
    {
        path: '/backend/hot',
        component: OthersH
    },
    {
        path: '/backend/newest',
        component: OthersN
    },
    {
        path: '/frontend',
        redirect: '/frontend/recommend'
    },
    {
        path: '/frontend/recommend',
        component: Others
    },
    {
        path: '/frontend/hot',
        component: OthersH
    },
    {
        path: '/frontend/newest',
        component: OthersN
    },
    {
        path: '/android',
        redirect: '/android/recommend'
    },
    {
        path: '/android/recommend',
        component: Others
    },
    {
        path: '/android/hot',
        component: OthersH
    },
    {
        path: '/android/newest',
        component: OthersN
    },

    {
        path: '/ios',
        redirect: '/ios/recommend'
    },
    {
        path: '/ios/recommend',
        component: Others
    },
    {
        path: '/ios/hot',
        component: OthersH
    },
    {
        path: '/ios/newest',
        component: OthersN
    },

    {
        path: '/ai',
        redirect: '/ai/recommend'
    },
    {
        path: '/ai/recommend',
        component: Others
    },
    {
        path: '/ai/hot',
        component: OthersH
    },
    {
        path: '/ai/newest',
        component: OthersN
    },

    {
        path: '/code',
        redirect: '/code/recommend'
    },
    {
        path: '/code/recommend',
        component: Others
    },
    {
        path: '/code/hot',
        component: OthersH
    },
    {
        path: '/code/newest',
        component: OthersN
    },

    {
        path: '/tools',
        redirect: '/tools/recommend'
    },
    {
        path: '/tools/recommend',
        component: Others
    },
    {
        path: '/tools/hot',
        component: OthersH
    },
    {
        path: '/tools/newest',
        component: OthersN
    },

    {
        path: '/reading',
        redirect: '/reading/recommend'
    },
    {
        path: '/reading/recommend',
        component: Others
    },
    {
        path: '/reading/hot',
        component: OthersH
    },
    {
        path: '/reading/newest',
        component: OthersN
    },


]
const router = new VueRouter({
    mode: 'history',
    routes,

})

//3.导出router
export default router