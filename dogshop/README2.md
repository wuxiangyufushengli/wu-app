
## 1. 项目开发准备
    项目描述:
     1)关于宠物用品商城app；包括首页，分类，购物车，登录注册等模块；
     2)是一个前后端分离的单页面应用；
     3)使用Vue全家桶+ES6+Webpack等前端最新最热的技术
     4)后端使用node+express+mongodb等技术
     5)采用模块化、组件化、工程化的模式开发
    技术选型：
    1).前端数据处理/交互/组件化: vue/vue-router/vuex/swiper/vue-lazyload(vue全家桶)
    2).前后台交互: axios/mockjs
    3).模块化: es6/babel
    4).项目构建/工程化: webpack/脚手架/eslint
    5).css预编译器: stylus


## 2. 搭建项目整体界面结构
    1.搭建路由：首页，分类，购物车，我的E宠为一级路由，
               一级路由中的分类有两个二级路由，/list/items；/list/brand
## 3.首页的主要功能和组件：
       1.轮播和潮流视频，小剧场，萌宠说等组件抽出，方便复用
       2.一些简单的效果的实现：
          导航和轮播使用bescroll和swipper库实现滑动
          导航点击某个添加相应的类
          头部广告，固定定位，当点击关闭的按钮的时候，广告app隐藏，此时布局会有问题，需要动态的用js调整布局样式
     分类页面主要功能和组件：
       1.需要创建二级路由；分类中点击分类导航显示相应的内容
       2.品牌中点击全部按钮实现全部品牌组件显示，品牌内容和右边的字母排序需要滑动关联
     购物车页面的主要功能和组件：
       1.点击左上角方框首页，分类，购物车组件容器，显示隐藏（动画）。
     登录页面：
       1.密码登录和短信验证码登录
       2.需要前端验证和后端验证

## 4.项目中的重点
     1.轮播的实现
     2.分页路由中的全部品牌组件左右联动的实现
     3.登录注册的实现


## 5.遇到的问题
     1:路由中：编程式导航（跳转路由的时候用的是$router.replace),每次访问回退后总是跳转到购物车的组件；
     所以只能是push,不能用replace;
     2:布局中，头部，固定定位，当点击关闭广告app的时候会出现高度塌陷，布局错乱的问题，此时我们需要用js动态设置下面元素的padding-top
     3：轮播组件出现问题和导航滑动出现问题：轮播组件使用的是swiper,不能轮播和小圆点不出现，需要监视数据请求回来，页面显示之后才能创建swiper对象
     4：分类路由组件，数据展现的时候出现问题，数据在一起，但是需要在不同的结构中展现；需要把分类和品牌，进行判断，遍历
     5：购物车中显示和隐藏的时候需要动画效果，但是添加动画后，能实现隐藏，但是里面的内容是在过度之后才隐藏的，效果不一样，
       因为当容器隐藏的时候，内容没使用overflow：hidden,所以当动画加载的时候，div高度慢慢减少，不能包裹内容区，所以出现怪异现象
     6：短信登录和密码登录使用的老师的服务器，服务器修改部分数据，但是目前的效果只能是登录后自动注册，不用再去注册，然后再短信登录中显示已注册过手机号，可以使用短信和验证码登录
       全部分类中，点击字母可以滑动指定的位置，手动滑动后左边列表右边字母也需要相应的改变颜色，在手动滑动的时候
       获取当前列表所在的索引，通过 scrollY>=top && scrollY< tops[index+1]获取当前的索引，然后去改变当前索引所在字母的颜色
       但是滑动完成之后才改变，不符合常理效果，需要在滑动中去改变index，此时需要给bscroll添加一个属性，probeType: 3
       当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
     7：loading图当数据请求成功后，loading状态改变，loading图隐藏，但是在二级路由中数据请求成功，并未改变状态，父组件中添加loading状态，影响当前子组件的loading

## 6.项目优化：
    1.路由懒加载
    当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
    如果我们能把不同路由对应的组件分割成不同的代码块，
    然后当路由被访问的时候才加载对应组件，这样就更加高效了，实现按需加载
    2.vue-lazy图片懒加载的实现





