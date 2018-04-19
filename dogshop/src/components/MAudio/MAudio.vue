<template>
    <div>
      <div class="custom_tite pt10">
        <div class="titmoudle ftc rela clum-tit pb5">
          <div class="leftimg titclass" v-if="homepage.audio">
            <img v-lazy="homepage.audio[index].Timage"></div>
          <div>
            <div>
              <div class="more titclass">
                <a href="https://wap.epet.com/main.html?menu_param=121&amp;pet_type=dog&amp;is_single=1&amp;fw=0">
                  <img src="https://img2.epetbar.com/nowater/2017-12/20/15/0855ecf27a6ca47b32170caab2503ddd.jpg"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fashion" v-if="homepage.audio">
        <div>
          <ul class="cmVideoList cmVideoListIndex" >
            <li><a href="https://wap.epet.com/article/video/View.html?vid=31&amp;fw=0">
              <div class="relative imgBox overflow default_bg" style="height: 210.5px;">
                <img v-lazy="homepage.audio[index].value[0].image"
                lazy="loaded">
                <span class="cmallPlayIco iconfont icon-bofang"></span>
              </div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">{{homepage.audio[index].value[0].title}}</div>
                <div>
                  <span class="iconfont icon-yanjing "></span>
                  <i class="number">{{homepage.audio[index].value[0].visit}}</i>
                  <span class="ml10 mr10">|</span>
                  {{homepage.audio[index].value[0].time}}
                </div>
              </div>

            </a></li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState['homepage']
      },

      props:{
        index:null,
        homepage:{}
      },
      watch:{
        homepage(value){
          console.log(1)
        }
      }
    }
</script>
<style>
  /*
  潮牌视频*/
  .titmoudle .leftimg img {
    margin: 0 auto 0 10px;
  }
  .module img {
    display: block;
  }
  .titmoudle img {
    max-width: 50%;
    max-height: 73px;
    margin: 0 auto;
  }

  .imgBox img {
    width: 100%;
    display: block;
  }
  .cmallPlayIco {
    background-size: contain;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -10px;
  }
  .icon-bofang{
    font-size: 30px;
  }
  .c999 {
    color: #999;
  }
  .ft12 {
    font-size: 12px;
  }
  .pad10 {
    padding: 10px;
  }
  .ftc {
    text-align: center;
  }
  .cmVideoList .c333 {
    color: #333;
  }
  .textover {
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
  }
  .number{
    margin-right: 8px;
  }
  .mr10{
    margin-right: 10px;
  }
</style>
