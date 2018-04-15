/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import List from '../pages/List/List.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

import Homepage from '../pages/Msite/Homepage.vue';
import Dogfood from '../pages/Msite/Dogfood.vue';
import Snacks from '../pages/Msite/Snacks.vue';
import Health from '../pages/Msite/Health.vue';
import Toy from '../pages/Msite/Toy.vue';
import Goout from '../pages/Msite/Goout.vue';
import Clothingcity from '../pages/Msite/Clothingcity.vue';

import Items from '../pages/List/Items.vue';
import Brand from '../pages/List/Brand.vue';



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
      children: [
        {
          path: '/msite/homepage',
          component: Homepage,
          meta: {
            showFooter: true
          }
        },
        {
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
        },
        {
          path: '',
          redirect: '/msite/homepage'
        }

      ],
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
          }
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
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },

  ]
})

