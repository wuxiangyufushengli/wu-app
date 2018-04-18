<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(swiperImg,index) in swiperImgs">
          <a href="https://sale.epet.com/m/1804/exposition.html?fw=0" >
            <img :src="swiperImg.image">  </a>
        </div>

      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>
  </div>

</template>
<script>


    export default {
      props:{
        swiperImgs:{}
      },
      mounted(){

      }
    }
</script>
<style>
  /*轮播*/

  .swiper-container {
    width: 100%;
    height: 160px;
  }
  .swiper-container img{
    width: 100%;
  }
  .swiper-container {
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
</style>
