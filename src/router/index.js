import Vue from 'vue'
import Router from 'vue-router'
//@相当于src目录
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopCarContainer from '@/components/tabbar/ShopCarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import newList from '@/components/tabbar/newList'
import newInfo from '@/components/tabbar/newInfo'
import photoList from '@/components/tabbar/photoList.vue'
import photoInfo from '@/components/tabbar/photoInfo.vue'
import goodList from '@/components/tabbar/goodList.vue'
import goodsInfo from '@/components/tabbar/goodsInfo.vue'
import GoodsDesc from '@/components/tabbar/GoodsDesc.vue'
import GoodsComment from '@/components/tabbar/GoodsComment.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  // routes: [{
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }]
  routes: [{
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopCar',
      component: ShopCarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/home/newList',
      component: newList
    },
    {
      path: '/home/newInfo/:id',
      component: newInfo
    },
    {
      path: '/home/photolist',
      component: photoList
    },
    {
      path: '/home/photoInfo/:id',
      component: photoInfo
    },
    {
      path: '/goods/goodList',
      component: goodList
    },
    {
      path: '/goods/goodsInfo/:id',
      name: 'goodsInfo',
      component: goodsInfo
    },
    {
      path: '/goods/goodsdesc/:id',
      name: 'goodsdesc',
      component: GoodsDesc
    },
    {
      path: '/goods/goodscomment/:id',
      name: 'goodscomment',
      component: GoodsComment
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
