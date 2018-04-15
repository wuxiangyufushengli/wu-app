<template>
  <footer class="footer_guide border-1px">
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
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #97C78F
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
