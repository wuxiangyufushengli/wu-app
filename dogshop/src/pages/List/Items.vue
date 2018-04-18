<template>
  <div id="tab1" class="kindbox">
    <div class="leftbox bgfff scrollbar-none">
      <div>
        <ul>
          <li class="bgfff" :class="{on:index===currentIndex}"
              @click='handleClick(index)' v-for="(category,index) in categorys"
              :key="index">{{category.name}}</li>
        </ul>
      </div>
    </div>
    <ItemList :index="index"></ItemList>
  </div>
</template>
<script>
    import BScroll from 'better-scroll';
    import ItemList from './ItemList.vue';
    import {mapState} from 'vuex'
    export default {
      data(){
        return{
          currentIndex:0,
          index:0
        }
      },
      components:{
        ItemList
      },
      computed:{
        ...mapState(['categorys'])

      },
      mounted(){
        this.$store.dispatch('GetCategorys',()=>{
          this.$nextTick(() => {
            new BScroll('.leftbox ', {
              scrollY: true,
              click:true
            })
          });

        });
      },
      methods:{
        handleClick(index){
          this.currentIndex=index;
          this.index=index
        }
      },


    }
</script>
<style >

  .kindbox {
    padding-top: 40px;
  }

  .kindbox .leftbox {
    position: fixed;
    top: 40px;
    left: 0;
    bottom: 50px;
    border-right: 5px solid #f3f4f5;
  }

  .kindbox .leftbox .bgfff {
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


</style>
