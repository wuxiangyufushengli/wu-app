import Vue from 'vue'
import { Button,Swipe, SwipeItem} from 'mint-ui'
import FastClick from 'fastclick'

import App from './App.vue'
import router from './router'

import './filters'
import './mock/mockServer'  // 加载这个模块即可


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,

})
