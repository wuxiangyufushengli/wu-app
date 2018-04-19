<template>
    <div class="bW">
      <div>
        <header class="headerTop1">
          <a href="javascript:;" class="iconfont icon-jiantou2" @click="$router.back()"></a>
          <span class="all">全部品牌</span>
          <span class="iconfont icon-tupianliebiao" id="icon"></span>
        </header>
        <div id="content" class="brand-list">
          <div id="item0" class="branditem" v-for="(brands,index) in allbrands.brand" :key="index">
            <h2 class="letter">{{brands.order}} </h2>
            <div v-for="(brand,index) in brands.list" :key="index">
              <a href="javascript:;">
                <div class="brand-wrapper">
                  <div class="brand-img">
                    <img class="iamge" :src="brand.logo">
                  </div>
                  <div class="brand-name">
                    <p class="ft14">{{brand.name}}</p>
                    <p class="ft12 c999">{{brand.address}}</p>
                  </div>
                </div>
              </a>
              <div class="line"></div>
            </div>
          </div>
        </div>

      </div>
      <div class="l-26" >
        <span @click='changeMu(index)' class="#item0" :class="{letterActive:index===LeftCindex}" v-for="(brands,index) in allbrands.brand"
              :key="index">{{brands.order}}</span>
      </div>
      <div class="loading" v-if="loading">
        <img src="../Msite/images/loading.gif">
        <div>数据加载中</div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll';
    import {mapState} from 'vuex';
    export default {
      data(){
        return{
          currentIndex:0,
          tops:[],//所有品牌的top
          scrollY:0,//当前Y轴滚动的坐标
          loading:true
        }
      },
     computed:{
       ...mapState(['allbrands']),
       //左边滑动的index
       LeftCindex(){
         const {tops,scrollY}=this;
         return tops.findIndex((top,index)=>{
           return scrollY>=top && scrollY< tops[index+1]
         })
       },

     },
      watch:{
        allbrands(value){
          this.loading=false
        }
      },

      mounted(){
       this.$store.dispatch('GetbrandAll',()=>{
         this.$nextTick(()=>{
           this._initTops()
         })
       });
       this.Scroll=new BScroll('.bW',{
         scrollY: true,
         click:true,
         probeType: 3,
       });
       this.Scroll.on('scroll', (pos) => {
         this.scrollY = Math.abs(pos.y)+200//实时监控手指滑动距离，就为scrollY的值
       });
       this.Scroll.on('scrollEnd', (pos) => {
         this.scrollY = Math.abs(pos.y)+200
       })

     },
      methods:{
        changeMu(index){
          //this.currentIndex=index;
          //scroll滚动到指定位置
            const y=-this.tops[index]-50;
            this.Scroll.scrollTo(0,y,300);
             this.scrollY=this.tops[index]
        },
        //获取所有的tops
        _initTops(){
          const tops=[];
          let top=0;
          tops.push(top);
          var lis=document.getElementsByClassName('branditem');
          console.log(lis)
          Array.prototype.slice.call(lis).forEach(li => {
            top += li.clientHeight
            tops.push(top)
          });
          this.tops=tops;
        }
      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 #app

  .bW
    overflow-x hidden
    overflow-y hidden
    width 100%
    height 100%
    .headerTop1
     overflow-y hidden
     width 100%
     padding 0 5px
     height 50px
     background-color white
     line-height 50px
     .all
      width 80%
      display inline-block
      text-align center
     #icon
      font-size 23px
    #content
      #item0

        .letter

          height 24px
          text-indent 15px
          line-height 24px
        div
          background-color white

          a
            .brand-wrapper
              box-sizing border-box

              height 73px
              display flex
              padding 2% 3%
              .brand-img
                height 52px
                position relative
                border: 1px solid #ff46d2;
                width 30%
                img
                  max-width 90%
                  height 40px
                  margin: 5px auto
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
              .brand-name
                padding-left 20px
                height 52px
                width 60%
                display flex
                flex-direction column
                justify-content space-around
                .ft14
                  font-size 14px
                .ft12
                  font-size 12px



          .line
            height 1px
            width 90%
            background-color #d5dcd4
    .l-26
      position fixed
      right 1px
      top 20%
      display flex
      flex-direction column
      font-size: 12px;
      color: #666;
      .letterActive
        color: #fe3e3e;
        font-weight: 700;



    .loading
       border-radius: 10px;
       background-color:#555555;
       width: 100px;
       height:100px;
       position: absolute;
       top:50%;
       left:50%;
       margin-left: -40px;
       margin-top:-40px ;
       text-align: center;
       z-index: 100;
       img
          position: relative;
          top:25px;
          width: 40px
          height:40px;
       div
          position: relative;
          top:30px;
          color:white;





</style>
