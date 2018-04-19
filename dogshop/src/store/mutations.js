
import {RECEIVE_CATEGORYS, RECEIVE_BRAND, RECEIVE_HOMEPAGE, RECEIVE_ALLBRANDS,RECEIVE_ACTIVITY} from './mutation-types'

export default {
  //获取首页信息
  [RECEIVE_HOMEPAGE](state,{homepage}){
    state.homepage=homepage;
  },
  //获取首页活动信息
  [RECEIVE_ACTIVITY](state,{activety}){
    state.activity=activety;
  },
  //获取tab1分类列表
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys;
  },
  //获取tab2品牌分类列表
  [RECEIVE_BRAND](state,{brand}){
    state.brand=brand;
  },
  //获取所有品牌列表
  [RECEIVE_ALLBRANDS](state,{allbrands}){
    state.allbrands=allbrands;
  }


}
