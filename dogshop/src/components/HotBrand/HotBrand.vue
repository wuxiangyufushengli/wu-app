<template>
  <div class="sort-recom bgfff" >

    <div class="hot-recom bbtf3" >
      <a href="javascript:;" class="title c999 db ft12 mt10 pl5">
         {{category.title}}
      </a>
      <ul class="clearfix">
        <li class="fl mt10 rela llogo" v-for="(list,index) in category.list">
          <a href="https://wap.epet.com/brand/bd186.html?fw=0" class="db">

            <div class="container_brand">
              <img v-lazy="list.logo" lazy="loaded">
            </div>
            <p class="ftc ft12  mt5">{{list.name}}</p>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
    export default {
      props:['category']
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

</style>
