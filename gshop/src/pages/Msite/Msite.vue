<template>
  <div>
    <div class="tab">
      <span>
        <router-link to="/msite/homepage" replace>首页</router-link>
      </span>
      <span>
        <router-link to="/msite/dogfood" replace>狗狗主粮</router-link>
      </span>
      <span >
        <router-link to="/msite/snacks" replace>零食</router-link>
      </span>
      <span >
        <router-link to="/msite/health" replace>医疗保健</router-link>
      </span>
      <span >
        <router-link to="/msite/toy" replace>玩具</router-link>
      </span>
      <span>
        <router-link to="/msite/goout" replace>外出</router-link>
      </span>
      <span >
        <router-link to="/msite/clothingcity" replace>服饰城</router-link>
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

<style lang="stylus" rel="stylesheet/stylus">



</style>
