

import {reqCategorys, reqBrand, reqHomepage, reqAllbrands,reqActivity} from '../api'

import {RECEIVE_CATEGORYS, RECEIVE_BRAND, RECEIVE_HOMEPAGE, RECEIVE_ALLBRANDS,RECEIVE_ACTIVITY} from './mutation-types'

export default {
  //获取首页信息
  async getHomepage({commit},callback){

       let result=await reqHomepage();
       if(result.code===0){
        let homepage=result.data;
        commit(RECEIVE_HOMEPAGE,{homepage});
         callback&&callback()
       }
  },
  //获取首页中的活动信息
  async GetActivity({commit},callback){
    let result=await reqActivity();
    if(result.code===0){
      let activety=result.data;
      commit(RECEIVE_ACTIVITY,{activety});
      callback&&callback()
    }
  },
  //获取分类列表
  async GetCategorys({commit},callback){
    let result=await reqCategorys();
    if(result.code===0){
      let categorys=result.data;
      commit(RECEIVE_CATEGORYS,{categorys});
      callback&&callback()
    }
  },
  //获取品牌列表
  async Getbrand({commit},callback){
    let result=await reqBrand();
    if(result.code===0){
      let brand=result.data;
      commit(RECEIVE_BRAND,{brand})
    }
  },
  //获取所有的品牌
  async GetbrandAll({commit},callback){
    let result=await reqAllbrands();
    if(result.code===0){
      let allbrands=result.data;
      commit(RECEIVE_ALLBRANDS,{allbrands});
      callback&&callback()
    }
  },


}
