<template>
  <div id="tab2" class="bandsbox">
    <div class="brand-list">
      <BrandList></BrandList>
    </div>
    <div class="allMenue" @click="$router.push('/brands')">全部</div>

  </div>
</template>
<script>
    import BrandList from './BrandList.vue'
    import {mapState} from 'vuex'
    export default {
      data(){
        return{
          loading:true
        }
      },
      components:{
        BrandList
      }
    }
</script>
<style>
  .bandsbox {
    display: block;
  }
  .allMenue{
    color:white;
    font-size: 12px;
    text-align: center;
    line-height: 40px;
    position: fixed;
    bottom:70px;
    right:6px;
    border-radius: 50%;
    width: 40px;
    height:40px;
    background: rgba(0,0,0,.4);
  }


</style>
