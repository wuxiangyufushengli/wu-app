<template>
  <div>
    <div class="headerTop">
      <!--广告-->
      <div class="overflow xiazaiApp" v-if="isShow">
        <div class="overflow rela">
            <span class="clsoebtn">
              <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" @click="closeBtn"></span>
          <div class="appdowimg">
            <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block;">
              <img
                src=" https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water                              ">
            </a>
          </div>
        </div>
      </div>
      <div id="indexbox" class="main">
        <!--搜索框-->
        <div class="indexheader">
          <div class="indexnavcon">
            <div class="headerbox float-div">
              <div class="main">
                <div class="clearfix pt5 pl10 pr10 pb5">
                  <div class="epet-search bgf">
                    <div class="fl rela ft14 location"><a
                      href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0"><span
                      class="catordog c89">狗狗</span> <span class="c89">|</span>
                      <span class="myposition c89 ft13">重庆</span> <i></i></a></div>
                    <p class="search-text"><a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0"><input
                      type="search" placeholder="搜索商品和品牌" disabled="disabled"> <span
                      class="eico serach-ico"></span></a></p> <a
                    href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category"><img
                    src="//static.epetbar.com/static_web/wap/src/images/mydope.png"></a></div>
                </div>
                <!--导航-->
                <div class="find_nav ">

                  <div class="find_nav_list dscroll-div " style="width: 140%;">
                    <ul class="dscroll-ul" ref="navUl">
                      <li style="width: 74.5px;" @click='ClickLi(index)' :class="{on:index===currentIndex}"
                          v-for="(menu,index) in homepage.menus">
                        <a>
                              <span class="rela">
                               <router-link to="/msite">{{menu.menu_name}}</router-link>
                              <i></i>
                            </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="allmodule module" ref="content">
      <div class="d_wraper" v-if="activity.data">
        <!--轮播-->
        <Swipers :swiperImgs="activity.data.pic_swiper.value"></Swipers>
        <!--list-->
        <div class="columnnavdiv">
          <div>
            <ul class="clearfix hottype pt10 pb10" v-if="homepage.datas">
              <li class="fl" style="width: 20%; height: 90px;" v-for="(nav,index) in homepage.datas[1].menus" :key="index">
                <a href="https://wap.epet.com/group/v226/main.html?pet_type=dog&amp;fw=0">
                  <img v-lazy="nav.image"></a></li>
            </ul>
          </div>
        </div>
        <!--新人专享-->
        <div class="banner_item">
          <div class="swiper-container1 banner-scroll">
            <div class="swiper-wrapper">
              <div class="swiper-slide default_bg"><a
                href="https://sale.epet.com/m/1706/newWelfare.html?pet_type=dog&amp;fw=0"
                class="pointer"><img
                src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif"
                lazy="loaded" style="height: 120px;"></a></div>
            </div>
          </div>
        </div>
        <!--每日疯抢-->
        <div class="surprise_day">
          <div class="surprise">
            <div class="surprise-tit clearfix pad10 rela overflow">
              <div class="fl titimg">
                <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03">
              </div>
              <div class="fl ft13 ml10 nexttip">下一场开始</div>
              <div class="time ftc fl ml5">
                <div class="time1 dib clearfix ft12 dtime">
                  <span class="time1-1">14</span>
                  <span class="time-zi ft12">:</span>
                  <span class="time1-1">00</span></div>
              </div>
              <div class="more">
                <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;tid=14:00&amp;fw=0"
                   class="db ftr"><img
                  src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png"></a>
              </div>
            </div>
            <div class="surprise-pro pl5 mb10">
              <div class="imageWraper" v-if="activity.data">
                <div class="imageList" v-for="(good,index) in activity.data['3'].goods" :key="index">
                  <img class="image" v-lazy="good.image.image" lazy="loaded">
                  <div class="cred ftc mt5">
                    <span class="ft12">¥</span>
                    <span class="ft17">{{good.sale_price}}</span>
                  </div>
                  <p class="c999 ftc ft12">{{good.little_price}}</p>
                </div>


              </div>


            </div>
          </div>
        </div>
        <!--分割线-->
        <Split></Split>
        <div class="currency_ad">
          <div>
            <div class="currency-adcon">
              <div class="titdiv rela">
                <div class="clum-tit"><!---->
                  <div class="leftimg2 titclass ftc"><a href=""><img src=""
                                                                     style="max-height: 73px; max-width: 100%;"></a>
                  </div>
                  <div class="more titclass"><!----></div>
                </div>
              </div>
              <div class="divboximg flex">
                <div class="divimg" style="width: 50.1333%;"><a
                  href="http://wap.epetht.com/guide.html?pet_type=dog&amp;fw=0" class="default_bg"><img
                  name="376x500"
                  src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water"
                  lazy="loaded" style="height: 250px;"></a></div>
                <div class="divimg" style="width: 49.8667%;"><a
                  href="https://wap.epet.com/petschool/SchoolDetail.html?aid=116&amp;fw=0"
                  class="default_bg"><img name="374x250"
                                          src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water"
                                          lazy="loaded" style="height: 125px;"></a><a
                  href="https://sale.epet.com/m/mould/fashion/detail.html?id=149&amp;fw=0"
                  class="default_bg"><img name="374x250"
                                          src="https://img2.epetbar.com/nowater/2018-04/03/09/06273e732679cfcf9e4a5e98d1cc0e8c.jpg@!water"
                                          lazy="loaded" style="height: 125px;"></a></div>
              </div>
            </div>
          </div> <!----></div>
        <Split></Split>
        <div class="banner">
          <img src="https://img2.epetbar.com/nowater/2018-04/09/09/6f37c08087d01b96acaa2c518d8ce102.jpg@!water"
               lazy="loaded">
        </div>
        <Split></Split>
        <!--潮牌视频-->
        <div>
          <MAudio :index="0" :homepage="homepage"></MAudio>
        </div>
        <!--分割线-->
        <Split></Split>
        <!--品牌特卖-->
        <div class="custom_tite pt10">
          <div class="titmoudle ftc rela clum-tit pb5">
            <div class="leftimg titclass"><img
              src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg"></div>
            <div>
              <div>
                <div class="more titclass"><a href="https://wap.epet.com/v2/brandsale.html?&amp;fw=0"><img
                  src="https://img2.epetbar.com/nowater/2017-12/13/13/22f20febaae655371ef3766612102c0e.jpg"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-for="(Bimg,index) in homepage.contentimg" :key="index">
          <div class="currency_ad">
            <div>
              <div class="currency-adcon">
                <div class="titdiv rela">
                  <div class="clum-tit">
                    <div class="leftimg2 titclass ftc"><a href="">
                      <img src="" style="max-height: 73px; max-width: 100%;"></a>
                    </div>
                    <div class="more titclass">

                    </div>
                  </div>
                </div>
                <div class="divboximg flex">
                  <div class="divimg" style="width: 100%;">
                    <a href="http://sale.epet.com/m/mould/activity/ztMzQ4MA%3D%3D.html?tid=3480&amp;fw=0"
                    class="default_bg">
                      <img name="750x320" v-lazy="Bimg.menu_src" lazy="loaded" style="height: 160px;"></a></div>
                </div>
              </div>
            </div>
          </div>
          <Split></Split>
        </div>
        <!--萌抓联盟-->
        <div class="custom_tite pt10">
          <div class="titmoudle ftc rela clum-tit pb5">
            <div class="leftimg titclass"><img
              src="https://img2.epetbar.com/nowater/2018-02/07/10/79d53b0ab1c8a630802d74b5beb0a632.jpg"></div>
            <!---->
            <div>
              <div>
                <div class="more titclass"><a href="http://wap.epet.com/union/trials/main.html?fw=0"><img
                  src="https://img2.epetbar.com/nowater/2017-12/13/14/36046f2f89b3825c77b70ac89f5c7ad2.jpg"></a>
                </div>
              </div> <!----></div>
          </div> <!----></div>
        <!--轮播-->
        <Swipers :swiperImgs="homepage.image"></Swipers>
        <!--萌宠说-->
        <div>
          <MAudio :index="1" :homepage="homepage"></MAudio>
        </div>
        <Split></Split>
        <!--小剧场-->
        <div>
          <MAudio :index="2" :homepage="homepage"></MAudio>
        </div>
        <!--footer-->
        <div class="wap-footer-bar hide" style="display: block;">
          <div class="footer" style="display: block;">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
            </div>
            <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">
              © wap.epet.com 版权：重庆易宠科技有限公司
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--右边小狗-->
    <div class="go-dog pointer dog"></div>
    <div class="loading" v-if="loading">
      <img src="./images/loading.gif">
      <div>数据加载中</div>
    </div>

  </div>

</template>

<script>

  import Swiper from 'swiper';
  import BScroll from 'better-scroll';
  import 'swiper/dist/css/swiper.min.css';
  /*轮播组件*/
  import Swipers from '../../components/Swipers/Swiper.vue';
  /*潮流视频组件*/
  import MAudio from '../../components/MAudio/MAudio.vue';
  /*分割组件*/
  import Split from '../../components/Split/Split.vue';
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        currentIndex: 0,
        isShow:true,
        loading:true,
      }
    },
    computed: {
      ...mapState(['homepage', 'activity']),
    },
    watch:{
      homepage(value){
        this.loading=false
      }
    },
    methods: {
      ClickLi(index) {
        this.currentIndex = index;
      },
      closeBtn(){
        this.isShow=false;
        let CD=this.$refs.content;
        CD.style.paddingTop=89+'px'
      }
    },
    mounted() {
      //导航滑动
      this.$nextTick(() => {
        new BScroll('.find_nav', {
          scrollX: true
        })
      });

      this.$store.dispatch('getHomepage');

      this.$store.dispatch('GetActivity',()=>{
        //轮播
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            delay: 3000,
            pagination: {
              el: '.swiper-pagination'
            }
          });
        });
        //每日疯抢轮播
        this.$nextTick(() => {
          new BScroll('.surprise-pro', {
            scrollX: true
          })
        });

      });



    },
    components: {
      Swipers,
      MAudio,
      Split
    }
  }
</script>

<style>


  body {
    background: #fff;
    min-width: 320px;
    font-size: 14px;
  }

  html, body {
    overflow: hidden;
    overflow-y: auto;
  }

  /*
  广告
  */
  .headerTop {
    z-index: 9999;
    background-color: white;
    width: 100%;
    position:fixed;
    top:0;
    left:0;

  }

  .xiazaiApp {
    min-width: 320px;
    margin: 0 auto;
  }

  .xiazaiApp {
    color: #fff;
    position: relative;
    z-index: 102;
  }

  .overflow {
    overflow: hidden !important;
  }

  .appdowimg img {
    width: 100%;
  }

  img {
    vertical-align: middle;
  }

  .clsoebtn {
    display: inline-block;
    width: 5%;
    margin-right: 2%;
    vertical-align: middle;
    position: absolute;
    top: 20%;
    left: 2%;
  }

  /*
  地址*/

  .main {
    min-width: 320px;
    margin: auto
  }

  .pl10, .pl {
    padding-left: 10px;
  }

  .pb5 {
    padding-bottom: 5px;
  }

  .pr10, .pr {
    padding-right: 10px;
  }

  .pt5 {
    padding-top: 5px;
  }

  .epet-search {
    padding: 8px 0;
    background: #fff;
    text-align: center;
    display: -webkit-box;
    -webkit-box-align: center;
    display: -moz-box;
    -moz-box-align: center;
    width: 100%;
  }

  .location {
    margin-right: 20px;
  }

  .relative, .rela {
    position: relative;
  }

  .ft14 {
    font-size: 14px;
  }

  .fl, .pull-left {
    float: left;
  }

  .c89 {
    color: #898989;
  }

  .ft13 {
    font-size: 13px;
  }

  a {
    color: #333;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .c89 {
    color: #898989;
  }

  i, em {
    font-style: normal;
  }

  .epet-search p {
    position: relative;
  }

  .epet-search p {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
  }

  .epet-logo, .epet-category {
    display: block;
  }

  .epet-search input {
    width: 100%;
    border: 0;
    height: 25px;
    background: #e9e9e9;
    border-radius: 4px;
    color: #bcbcbc;
    text-indent: 10px;
    font-size: 13px;
    outline: 0;
  }

  .location i {
    position: absolute;
    top: 5px;
    right: -11px;
    border-width: 4px;
    font-size: 0;
    line-height: 0;
    border-style: solid solid dotted;
    border-color: #898989 transparent transparent;
  }

  i, em {
    font-style: normal;
  }

  .epet-search {
    text-align: center;
  }

  .epet-search .serach-ico {
    width: 11px;
    height: 11px;
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-position: 0 0;
  }

  .eico {
    background: url(./images/search.png) no-repeat;
    background-size: 11px auto;
  }

  .epet-category img {
    width: 25px;
    margin-left: 10px;
  }

  /*
  导航
  */
  .find_nav {
    width: 100%;
    height: 35px;
    min-width: 320px;
    overflow: hidden;
  }

  .find_nav_list ul li.on span {
    color: #459d36;
    display: inline-block;
  }

  .find_nav_list ul li a {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
    color: #666;
  }

  .dscroll-ul {
    white-space: nowrap;
    display: flex;
  }

  .find_nav_list ul li.on i {
    background: #459d36;
  }

  .find_nav_list li i {
    position: absolute;
    bottom: 1px;
    left: -10%;
    width: 120%;
    height: 2px;
  }

  /*轮播*/
  .allmodule {
    height: 100%;
    padding-top:141px ;
    padding-bottom: 50px;
  }

  .swiper-container {
    width: 100%;
    height: 160px;
  }

  .swiper-container img {
    width: 100%;
  }

  .swiper-container {
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  /*
  list
  */
  .columnnavdiv {

    height: 180px;
  }

  .columnnavdiv li {
    width: 20%;
    height: 90px;
  }

  .fl, .pull-left {
    float: left;
  }

  .hottype li img {
    width: 100%;
    height: 100%;
  }

  .module img {
    display: block;
  }

  /*
  新人专享
  */
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  /*每日疯抢*/
  .rela {
    position: relative;
  }

  .fl, .pull-left {
    float: left;
  }

  .surprise-tit .titimg img {
    width: 85px;
  }

  .nexttip {
    top: 13px;
    position: absolute;
    right: 107px;
    margin-right: 5px;
  }

  .ft13 {
    font-size: 13px;
  }

  .ml10, .ml {
    margin-left: 10px;
  }

  .fl, .pull-left {
    float: left;
  }

  .module img {
    display: block;
  }

  .titmoudle .more img, .more img {
    margin: -9px 0 0 auto;
  }

  .more img {
    width: 50%;
  }

  .surprise-tit .more {
    top: 0;
  }

  .more {
    position: absolute;
    top: 7px;
    right: -8px;
  }

  .time {
    position: absolute;
    right: 55px;
  }

  .ml5 {
    margin-left: 5px;
  }

  .fl, .pull-left {
    float: left;
  }

  .time1-1 {
    text-align: center;
    font-size: 12px;
    position: relative;
    top: 1px;
    line-height: 18px;
    border: 1px solid #7e8c8d;
    display: inline-block;
    width: 20px;
    height: 18px;
  }

  .surprise_day {
    margin-top: 20px;
  }

  .pl5 {
    padding-left: 5px;
  }

  .mb10, .mb {
    margin-bottom: 10px;
  }

  .imageWraper {
    width: 500px;
    display: flex;
  }

  .imageList img {
    width: 85px;
    height: 85px;
  }

  .imageList {
    margin-top: 10px;
    margin-right: 20px;
  }

  .cred {
    color: red;
  }

  .c999 {
    color: #999;
  }

  .ft12 {
    font-size: 12px;
  }

  .flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }

  .banner {
    width: 100%;
    height: 160px;
  }

  .banner img {
    width: 100%;
  }

  /*品牌特卖*/
  .divimg img {
    width: 100%;
    display: block;
  }

  /*footer*/
  .footer div {
    font-size: 14px;
  }

  .ft {
    padding: 15px 0 5px;
    text-align: center;
  }

  .footer .ft span {
    padding-right: 10px;
  }

  .footer div {
    font-size: 14px;
  }

  .footer .bt {
    color: red;
  }

  /*
  狗*/
  .go-dog {
    background: url(./images/godog.png) no-repeat;
    width: 41px;
    height: 46px;
    background-size: 80px auto;
    position: fixed;
    bottom: 15%;
    right: -1px;
    z-index: 2;
    animation:dog steps(1,end) 2s infinite
  }
/*steps()是一个timing function，允许我们将动画或者过渡分割成段，而不是从一种状态持续到另一种状态的过渡。这个函数有两个参数——第一个参数是一个正值，指定我们希望动画分割的段数。
Steps(<number_of_steps>，<direction>)
第二个参数定义了这个要点 在我们的@keyframes中申明的动作将会发生的关键。这个值是可选的，在没有传递参数时，默认为”end”
*/
  @keyframes dog {
    50%{
      background-position:-41px 0
    }
  }
  /*loading*/
  .loading{
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

  }
  .loading img{
    position: relative;
    top:25px;
    width: 40px;
    height:40px;
  }
  .loading div{
    position: relative;
    top:30px;
    color:white;
  }

</style>
