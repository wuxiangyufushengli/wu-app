<template>
  <div class="sort-recom bgfff">
    <div class="hot-recom bbtf3">
      <a href="javascript:;" class="db ft12">
          {{category.title}}
        <img  v-lazy="category.rigth_img.image?category.rigth_img.image:'' " class="fr arrowL mr5">
      </a>
      <ul class="clearfix">
        <li class="fl" v-for="(list,index) in category.list" :key="index">
          <a href="javasrcipt:;" class="db">
            <div class="loadimg-nofixed">
              <img class="image" v-lazy="list.photo" alt="">
            </div>
            <p>{{list.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['categorys'])
      },
      props:['category']
    }
</script>
<style >
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

</style>
