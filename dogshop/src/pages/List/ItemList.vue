<template>
  <div class="rightbox bgfff scrollbar-none" v-if="categorys[index]">
    <div class="sort-detail-list" v-for="(category,index) in categorys[index].cate_list">
      <CategoryList v-if="category.type===0" :category="category"></CategoryList>
      <HotBrand v-else :category="category"></HotBrand>
    </div>

  </div>
</template>
<script>
     import HotBrand from '../../components/HotBrand/HotBrand.vue';
     import CategoryList from '../../components/CategoryList/CategoryList.vue'
     import {mapState} from 'vuex'
    export default {
      data(){
        return{
          loading:true
        }
      },
      props:{
       index:Number
      },
       computed:{
         ...mapState(['categorys'])

       },
      components:{
        HotBrand,
        CategoryList
      }

    }
</script>
<style>
  .kindbox .rightbox {
    margin-left: 75px;
    border-top: 5px solid #f3f4f5;
    display: block;
  }

  .kindbox .rightbox .bgfff {
    background: #fff
  }

  .kindbox .rightbox div {
    display: block;
  }

  .kindbox .rightbox div .bgfff {
    background: #fff;
    display: block;
  }

  .kindbox .rightbox div .bgfff .hot-recom {
    padding: 5px 5px 20px;
    display: block;
  }
  .sort-detail-list .arrowL {
    height: 10px;
    margin-top: 5px;
  }
  .mr5 {
    margin-right: 5px;
  }
  .fr, .pull-right {
    float: right;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 {
    border-top: 1px solid #f3f4f5;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 a.ft12 {
    font-size: 12px;
    color: #999;
    padding-left: 5px;
    margin-top: 10px
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 a.db {
    display: block
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix {
    overflow: hidden;
    list-style: none;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl {
    width: 33.33%;
    padding: 0 5px;
    margin-top: 10px;
    float: left;
    list-style: none;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db {

    display: block;
    color: #333;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db .loadimg-nofixed {

    background-size: 120px auto;
    position: relative;
    padding-top: 100%;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db .loadimg-nofixed .image {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    border: 0;
    vertical-align: middle
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    color: #333;
    font-size: 13px;
    margin-top: 10px;
    text-align: center;
    display: block
  }

  /*品牌样式*/
  .sort-detail-list .hot-recom ul li, .sort-detail-list .other-list ul li {
    width: 33.33%;
    padding: 0 5px;
  }

  li.llogo {
    width: 50%!important;
  }
 .container_brand{
   text-align: center;
   height: 60px;
   box-sizing:border-box ;
   border: 1px solid #f3f4f5;
   line-height: 55px;

 }
  .container_brand img{
    width: 89px;
    vertical-align:middle;

  }
  .clearfix{
    width: 100%;
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
