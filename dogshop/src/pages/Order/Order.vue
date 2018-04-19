<template>
  <div>
    <div class="bg">
      <header class="ftc head-top bgfff zcolor rela">
        <a href="javascript:void(0)" class="aback page-top go-back iconfont icon-jiantou2" @click="$router.go(-1)"></a>
        <span class="ft18 topbar-title">购物车</span>
        <span class="iconfont icon-tupianliebiao" @click="isShow=!isShow"></span>
      </header>
      <transition name="move">
        <div class="footer1_guide border-1px" v-show="isShow">
          <div class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
          <span class="item_icon">
            <i class="iconfont icon-iconsy1"></i>
          </span>
            <span>首页</span>
          </div>
          <div class="guide_item" @click="goto('/list')" :class="{on: isCurrent('/list')}">
          <span class="item_icon">
            <i class="iconfont icon-icon04"></i>
          </span>
            <span>分类</span>
          </div>
          <div class="guide_item" @click="goto('/order')" :class="{on: isCurrent('/order')}">
            <span class="item_icon">
               <i class="iconfont icon-gouwugouwuchedinggou"></i>
              </span>
            <span>购物车</span>
          </div>
          <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
            <span class="item_icon">
              <i class="iconfont icon-xiaolian-"></i>
            </span>
            <span>我的E宠</span>
          </div>
        </div>
      </transition>
      <div id="CartBox">
        <div class="mycart">
          <div class="m-emptycoupon ftc bgfff" >
            <div>
              <span class="u-emtcoupon iconfont icon-gouwugouwuchedinggou">&nbsp;</span>
            </div>
            <div class="ftc emttip ft16" >购物车是空的</div>
            <div class="emt-a mt15">
              <a href="http://wap.epet.com" class="c999 ft16 mr5">去逛逛</a>
              <a href="javascript;;" class="c999 ft16">我的收藏</a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      goto(path) {
        this.$router.push(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    },

  }
</script>

<style>
  /*
购物车*/
  .head-top.zcolor {
    color: #333;
  }

  .head-top {
    height: 50px;
    line-height: 50px;
    position: relative;
    padding: 0 1em;
    border-bottom: 1px solid #f3f3f3;
  }

  .head-top .aback {
    font-size: 20px;
    background-size: 9px 17px;
    display: block;
    width: 22px;
    height: 20px;
    position: absolute;
    margin-top: 3px;
  }

  .topbar-title {
    font-size: 20px;
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    margin: 0 auto;
  }

  .Jbur {
    background-size: 20px 20px;
    position: absolute;
    top: 0;
    right: 1em;
  }

  .mla {
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    margin-top: 14px;
    position: relative;
    z-index: 100;
    cursor: pointer;
  }

  .ml {
    margin-left: 1em;
  }

  .pull-right {
    float: right;
  }

  .icon-tupianliebiao {
    font-size: 25px;
    float: right;

  }

  .footer1_guide {
    overflow: hidden;
    left: 0;
    right: 0;

    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
  }

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
  }

  .footer_guide > .on {
    color: #97C78F
  }

  .guide_item > span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px
  }

  .iconfont {
    font-size: 25px
  }

  .mycart {
    padding-top: 40px;
    border-top: 1px solid #D7D7D7;
  }

  .u-emtcoupon {
    margin: 50px auto 20px;
    /* display: inline-block; */
    width: 100px;
    height: 100px;
    color: #DBDBDB;
    font-size: 105px;
  }

  .emttip {
    color: #dbdbdb;
  }

  .ft16 {
    font-size: 15px;
  }

  .ftc {
    margin: 0px auto;
    text-align: center;
  }

  .emt-a a {
    display: inline-block;
    border-radius: 5px;
    border: 1px solid #999;
    height: 40px;
    line-height: 40px;
    width: 100px;
    margin-right: 10px;
    margin-top: 10px;
  }

  .c999 {
    color: #999;
  }


  .bg {
    padding-bottom: 30px;
    background-color: white;
  }

  .move-enter-active, .move-leave-active {
    transition: height 1s
  }

  .move-enter, .move-leave-to {
    height: 0px;
  }


</style>
