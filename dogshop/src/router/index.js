/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//import Msite from '../pages/Msite/Msite.vue'
//import List from '../pages/List/List.vue'
//import Order from '../pages/Order/Order.vue'
//import Profile from '../pages/Profile/Profile.vue'

/*当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
如果我们能把不同路由对应的组件分割成不同的代码块，
然后当路由被访问的时候才加载对应组件，这样就更加高效了。*/
const Msite=()=>import('../pages/Msite/Msite.vue');
const List=()=>import('../pages/List/List.vue');
const Order=()=>import('../pages/Order/Order.vue');
const Profile=()=>import('../pages/Profile/Profile.vue')


import Homepage from '../pages/Msite/Homepage.vue';

import Items from '../pages/List/Items.vue';
import Brand from '../pages/List/Brand.vue';
import Brands from '../pages/List/Brands.vue'



Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,

      meta: {
        showFooter: true
      }
    },
    {
      path: '/list',
      component: List,
      children: [
        {
          path: '/list/items',
          component: Items,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/list/brand',
          component: Brand,
          meta: {
            showFooter: true
          },
        },
        {
          path: '',
          redirect: '/list/items'
        }


      ],
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,

    },
    {
      path: '/profile',
      component: Profile,
    },

    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/brands',
      component:Brands
    }
    /*{
      path: '/msite/dogfood',
      component: Dogfood
    },
    {
      path: '/msite/snacks',
      component: Snacks
    },
    {
      path: '/msite/health',
      component: Health
    },
    {
      path: '/msite/toy',
      component: Toy
    },
    {
      path: '/msite/goout',
      component: Goout
    },
    {
      path: '/msite/clothingcity',
      component: Clothingcity
    },*/


],

})

