import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Index from "@/components/indexpage/index.vue"
import Commu from "@/components/indexpage/community.vue"
import Mine from "@/components/indexpage/mine.vue"
import Wetalk from "@/components/indexpage/wetalk.vue"
import Dongtai from "@/components/childcomponent/dongtai.vue"
import Fensi from "@/components/childcomponent/fensi.vue"
import Guanzhu from "@/components/childcomponent/guanzhu.vue"
import Pinglun from "@/components/childcomponent/pinglun.vue"
import Communitem from "@/components/childcomponent/communitem.vue"
import Publish from "@/components/childcomponent/publish.vue"
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/commu',
        name: 'Commu',
        component: Commu
    }, {
        path: '/mine',
        name: 'Mine',
        component: Mine
    }, {
        path: '/wetalk',
        name: 'Wetalk',
        component: Wetalk
    }, {
        path: '/mine/dongtai',
        name: 'Dongtai',
        component: Dongtai
    }, {
        path: '/mine/fensi',
        name: 'Fensi',
        component: Fensi
    }, {
        path: '/mine/guanzhu',
        name: 'Guanzhu',
        component: Guanzhu
    }, {
        path: '/mine/pinglun',
        name: 'Pinglun',
        component: Pinglun
    }, {
        path: '/commu/communitem',
        component: Communitem
    }, {
        path: '/mine/publish',
        component: Publish
    }, {
        path: '/',
        redirect: '/login'
    }]
})