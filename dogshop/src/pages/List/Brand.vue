<template>
  <div id="tab2" class="bandsbox">
    <div class="brand-list">
      <BrandList></BrandList>
    </div>
  </div>
</template>
<script>
    import BrandList from './BrandList.vue'
    export default {
      components:{
        BrandList
      }
    }
</script>
<style>
  .bandsbox {
    display: block;
  }



</style>
