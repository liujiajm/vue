import Vue from 'vue'
import Router from 'vue-router'
//@相当于src目录
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopCarContainer from '@/components/tabbar/ShopCarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  // routes: [{
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }]
  routes: [
    {path: '/home',component: HomeContainer},
    {path: '/member',component: MemberContainer},
    {path: '/shopCar',component: ShopCarContainer},
    {path: '/search',component: SearchContainer},
    {path: '*',redirect: '/home'}
  ]
})
