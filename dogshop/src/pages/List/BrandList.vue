<template>
  <div class="wrapper">
    <div v-for="(brandItem,index) in brand" :key="index">
      <div class="title">
        <span class="c999">—— {{brandItem.title}} ——</span>
      </div>
      <div class="list">
        <ul class="clearfix" >
          <li class="fl" v-for="(item,index) in brandItem.list ">
            <a href="javascript:;" class="block">
              <div class="img loadimg-nofixed rela">
                <img class="db image" v-lazy="item.logo">
              </div>
              <p class="name">{{item.name}}</p>
              <p class="address">{{item.address}}</p>
            </a>
          </li>


        </ul>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <img src="../Msite/images/loading.gif">
      <div>数据加载中</div>
    </div>
  </div>
</template>
<script>
     import {mapState} from 'vuex'
    export default {
       data(){
         return{
           loading:true
         }
       },
      mounted(){
        this.$store.dispatch('Getbrand')
      },
      watch:{
        brand(value){
          this.loading=false
        }
      },
      computed:{
        ...mapState(['brand'])
      }

    }
</script>
<style>
  .bandsbox .brand-list {
    background: #f3f4f5;
    padding: 45px 0 0;
    display: block;
  }

  .bandsbox .brand-list .wrapper {
    padding-bottom: 15px;
    margin-bottom: 10px;
    background: #fff;
  }

  .bandsbox .brand-list .wrapper .title {
    padding-top: 20px;
    font-size: 12px;
    color: #999;
    text-align: center;
  }

  .bandsbox .brand-list .wrapper .title .c999 {
    color: #999
  }

  .bandsbox .brand-list .wrapper .list {
    padding: 0 5px;
  }

  .bandsbox .brand-list .wrapper .list .clearfix {
    list-style: none;
    overflow: hidden;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li {
    margin-top: 20px;
    width: 33.33%;
    padding: 0 5px;
    list-style: none;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl {
    position: relative;
    float: left;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .block {
    display: block;
    color: #333;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .block .img {
    border: 1px solid #e2e2e2;
    text-align: center;
    padding: 50px 10px 10px;
    background: url("./imgs/default-epet.png") no-repeat center center #fff;
    background-size: 120px auto;
    height: 50px;
    position: relative;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .block .img .image {
    top: 0;
    left: 0;
    position: absolute;
    max-width: 90%;
    margin: 10px auto 0;
    height: 40px;
    right: 0;
    display: block;
    border: 0;
    vertical-align: middle
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .name {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    margin-top: 5px;
    text-align: center;
    display: block
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .address {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    text-align: center;
    display: block
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
