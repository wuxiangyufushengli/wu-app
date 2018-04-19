<template>
  <div class="container">
    <div class="class_head">
      <div class="head_left">
           <router-link to="/list/items"><span :class="{active:$route.path==='/list/items'}">分类</span></router-link>
      </div>
      <div class="head_right">
           <router-link to="/list/brand"><span :class="{active:$route.path==='/list/brand'}">品牌</span></router-link>
        <div class="search">
          <i class="iconfont icon-sousuosearch82"></i>
        </div>

      </div>
    </div>
    <div class="loading" v-if="loading">
      <img src="../Msite/images/loading.gif">
      <div>数据加载中</div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Items from './Items.vue';
  import Brand from './Brand.vue'
  export default {
    data(){
      return{
        loading:true
      }
    },
    computed:{
      ...mapState(['categorys'])
    },
    watch:{
      categorys(value){
        this.loading=false
      }
    },
    components: {
      Items,
      Brand
    },

  }
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  .container{
    width: 100%;
    height: 100%;
    background-color: white;

  }

  div {
    display: block
  }

  .class_head {
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    z-index: 11;
    background: #fff;
  }

  .class_head .head_left {
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding-right: 5%;
    box-sizing: border-box;
  }

  .class_head .head_left span {
    display: inline-block;
    height: 40px;
    box-sizing: border-box;
  }

  .class_head .head_left span.active {
    color: #ed4040;
    border-bottom: 2px solid #ed4040
  }

  .class_head .head_right {
    position: relative;
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 5%;
    box-sizing: border-box;
  }

  .class_head .head_right span {
    display: inline-block;
    height: 40px;
    box-sizing: border-box;
  }

  .class_head .head_right span.active {
    color: #ed4040;
    border-bottom: 2px solid #ed4040
  }

  .class_head .head_right .search {
    position: absolute;
    top: 13px;
    right: 15px;
    height: 14px;
    width: 14px;
    line-height: 14px;
    color: #666
  }

  /*loading*/
  .loading{
    border-radius: 10px;
    background-color:#555555;
    width: 100px;
    height:100px;
    position: absolute;
    top:50%;
    left:50%;
    margin-left: -40px;
    margin-top:-40px ;
    text-align: center;
    z-index: 100;

  }
  .loading img{
    position: relative;
    top:25px;
    width: 40px;
    height:40px;
  }
  .loading div{
    position: relative;
    top:30px;
    color:white;
  }




</style>
