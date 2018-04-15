<template>
  <div>
    <div class="tab">
      <span class="tab-item">
        <router-link to="/list/items" replace>分类</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/list/brand" replace>品牌</router-link>
      </span>

    </div>
    <router-view></router-view>
  </div>

</template>

<script>

  export default {
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
