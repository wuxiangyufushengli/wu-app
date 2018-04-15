<template>
  <!--<div>
    <div class="tab">
      <span class="tab-item">
        <router-link to="/list/items" replace>分类</router-link>
      </span>
      <span class="tab-item">
        <router-link to="/list/brand" replace>品牌</router-link>
      </span>

    </div>
    <router-view></router-view>
  </div>-->
  <div class="container">
    <div class="class_head">
      <div class="head_left">
        <span class="">分类</span>
      </div>
      <div class="head_right">
        <span class="active">品牌</span>
        <div class="search">
          <i class="iconfont icon-sousuosearch82"></i>
        </div>

      </div>
    </div>
    <!--分类-->
    <div id="tab1" class="kindbox" >
      <div class="leftbox bgfff scrollbar-none">
        <div>
          <ul>
            <li class="bgfff on">为您推荐</li>
            <li class="bgfff">E宠国际</li>
            <li class="bgfff">驱虫祛毛</li>
            <li class="bgfff">外出清洁</li>
            <li class="bgfff">狗狗主粮</li>
            <li class="bgfff">狗狗零食</li>
            <li class="bgfff">狗狗玩具</li>
            <li class="bgfff">狗狗清洁</li>
            <li class="bgfff">狗狗保健</li>
            <li class="bgfff">狗狗护理</li>
            <li class="bgfff">狗狗生活</li>
            <li class="bgfff">狗狗牵引</li>
            <li class="bgfff">狗狗美容</li>
            <li class="bgfff">狗狗服饰</li>
          </ul>
        </div>
      </div>
      <div class="rightbox bgfff scrollbar-none">
        <div class="sort-detail-list">
          <div class="sort-recom bgfff">
            <div class="hot-recom bbtf3">
              <a href="javascript:;" class="db ft12">
                热门分类
              </a>
              <ul class="clearfix">
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sort-recom bgfff">
            <div class="hot-recom bbtf3">
              <a href="javascript:;" class="db ft12">
                热门分类
              </a>
              <ul class="clearfix">
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
                <li class="fl">
                  <a href="javasrcipt:;" class="db">
                    <div class="loadimg-nofixed">
                      <img class="image" src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                    </div>
                    <p>强化免疫</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--品牌-->
    <div id="tab2" class="bandsbox" style="display: none">
      <div class="brand-list">
        <div class="wrapper">
          <div class="title">
            <span class="c999">—— 推荐品牌 ——</span>
          </div>
          <div class="list">
            <ul class="clearfix">
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
          <div class="title">
            <span class="c999">—— 推荐品牌 ——</span>
          </div>
          <div class="list">
            <ul class="clearfix">
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
          <div class="title">
            <span class="c999">—— 推荐品牌 ——</span>
          </div>
          <div class="list">
            <ul class="clearfix">
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
              <li class="fl">
                <a href="javascript:;" class="block">
                  <div class="img loadimg-nofixed rela">
                    <img class="db image" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/28/10/3b236d1731bd91004bffcec3515e1a0a.jpg?x-oss-process=style/waterfall&$1=200">
                  </div>
                  <p class="name">冠能</p>
                  <p class="address">美国</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  div {
    display: block
  }

  .class_head {
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    z-index: 11;
    background: #fff;
  }

  .class_head .head_left {
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding-right: 5%;
    box-sizing: border-box;
  }

  .class_head .head_left span {
    display: inline-block;
    height: 40px;
    box-sizing: border-box;
  }

  .class_head .head_left span.active {
    color: #ed4040;
    border-bottom: 2px solid #ed4040
  }

  .class_head .head_right {
    position: relative;
    float: left;
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 5%;
    box-sizing: border-box;
  }

  .class_head .head_right span {
    display: inline-block;
    height: 40px;
    box-sizing: border-box;
  }

  .class_head .head_right span.active {
    color: #ed4040;
    border-bottom: 2px solid #ed4040
  }

  .class_head .head_right .search {
    position: absolute;
    top: 13px;
    right: 15px;
    height: 14px;
    width: 14px;
    line-height: 14px;
    color: #666
  }

  .kindbox {
    margin-top: 40px;
  }

  .kindbox .leftbox {
    position: fixed;
    top: 40px;
    left: 0;
    overflow-y: scroll;
    bottom: 0;
    padding-bottom: 45px;
    border-right: 5px solid #f3f4f5;
  }

  .kindbox .leftbox.bgff {
    background: #fff
  }

  .kindbox .leftbox div {
    display: block;
  }

  .kindbox .leftbox div ul {
    list-style: none;
  }

  .kindbox .leftbox div ul li {
    padding: 15px 0;
    border-bottom: 1px solid #f3f4f5;
    width: 70px;
    height: 50px;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }

  .kindbox .leftbox div ul li.on {
    background: #f3f4f5;
    color: #ed4044
  }

  .kindbox .rightbox {
    margin-left: 75px;
    border-top: 5px solid #f3f4f5;
    display: block;
  }

  .kindbox .rightbox.bgfff {
    background: #fff
  }

  .kindbox .rightbox div {
    display: block;
  }

  .kindbox .rightbox div .bgfff {
    background: #fff;
    display: block;
  }

  .kindbox .rightbox div .bgfff .hot-recom {
    padding: 5px 5px 20px;
    display: block;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 {
    border-top: 1px solid #f3f4f5;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 a.ft12 {
    font-size: 12px;
    color: #999;
    padding-left: 5px;
    margin-top: 10px
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 a.db {
    display: block
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix {
    list-style: none;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl {
    width: 33.33%;
    padding: 0 5px;
    margin-top: 10px;
    float: left;
    list-style: none;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db {
    display: block;
    color: #333;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db .loadimg-nofixed {
    background: url("./imgs/default-epet.png") no-repeat center center #f4f4f4;
    background-size: 120px auto;
    position: relative;
    padding-top: 100%;
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db .loadimg-nofixed .image {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    border: 0;
    vertical-align: middle
  }

  .kindbox .rightbox div .bgfff .hot-recom.bbtf3 .clearfix .fl .db p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 20px;
    color: #333;
    font-size: 13px;
    margin-top: 10px;
    text-align: center;
    display: block
  }

  .bandsbox {
    display: block;
  }

  .bandsbox .brand-list {
    background: #f3f4f5;
    padding: 45px 0 0;
    display: block;
  }

  .bandsbox .brand-list .wrapper {
    padding-bottom: 15px;
    margin-bottom: 10px;
    background: #fff;
  }

  .bandsbox .brand-list .wrapper .title {
    padding-top: 20px;
    font-size: 12px;
    color: #999;
    text-align: center;
  }

  .bandsbox .brand-list .wrapper .title .c999 {
    color: #999
  }

  .bandsbox .brand-list .wrapper .list {
    padding: 0 5px;
  }

  .bandsbox .brand-list .wrapper .list .clearfix {
    list-style: none;
    overflow: hidden;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li {
    margin-top: 20px;
    width: 33.33%;
    padding: 0 5px;
    list-style: none;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl {
    position: relative;
    float: left;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .block {
    display: block;
    color: #333;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .block .img {
    border: 1px solid #e2e2e2;
    text-align: center;
    padding: 50px 10px 10px;
    background: url("./imgs/default-epet.png") no-repeat center center #fff;
    background-size: 120px auto;
    height: 50px;
    position: relative;
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .block .img .image {
    top: 0;
    left: 0;
    position: absolute;
    max-width: 90%;
    margin: 10px auto 0;
    height: 40px;
    right: 0;
    display: block;
    border: 0;
    vertical-align: middle
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .name {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    margin-top: 5px;
    text-align: center;
    display: block
  }

  .bandsbox .brand-list .wrapper .list .clearfix li.fl .address {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    text-align: center;
    display: block
  }

</style>
