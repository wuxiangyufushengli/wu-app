<template>
  <div>
    <div>
      <header>
        <div class="login_bg">
          <div class="rela ftc ">
            <a href="javascript:void(0)" onclick="history.go(-1)" class="aback page-top iconfont icon-jiantou2"></a>
            <div class="zfont ft16 block"><a href="https://wap.epet.com/register.html" class="afff">注册</a></div>
          </div>
          <div class="mlogo">
            <div style="height: 50px;"></div>
          </div>

        </div>
        <div class="es_por4">
          <ul id="tags4" class="clearfix login_style">
            <li class="selectTag4" :class="{on:loginWay}" @click="loginWay=true">
              <a href="javascript:void(0)" >普通登录</a>
              <i v-if="loginWay"></i>
            </li>
            <li class="" :class="{on:!loginWay}"  @click="loginWay=false">
              <a href="javascript:void(0)" >手机动态密码登录</a>
              <i v-if="!loginWay"></i>
            </li>
          </ul>
        </div>
      </header>
      <div class="bgfff">
        <div class="mformBox">
          <div id="Content">
            <form>
              <ul class="mform" v-if="loginWay">
                <li>
                  <span class="mNameIco iconfont icon-yonghu"></span>
                  <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="name" id="username" maxlength="11" v-model="name" ></li>
                <li>
                  <span class="mpasswordIco iconfont icon-mima"></span>
                  <input type="password" placeholder="输入密码" class="text" name="password" id="password" maxlength="8" v-model="pwd" ></li>
              </ul>
              <ul class="mform" v-if="!loginWay">
                <li>
                  <span class="mNumIco iconfont icon-phone"></span>
                  <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone" maxlength="11" v-model="phone"></li>
                <li>
                  <span class="mpasswordIco iconfont icon-mima"></span>
                  <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify"  v-model="captcha">
                  <span style="display:block;position: absolute;top:5px;right:0px;">
                    <img src="http://localhost:3000/captcha" name="varify" class="codevar" align="absbottom" @click="updateCaptcha">
                  </span>
                </li>
                <li>
                  <span class="mpasswordIco iconfont icon-mima"></span>
                  <input type="text" class="dttext" placeholder="动态密码" name="code" id="code" v-model="code" >
                  <button :disabled="computeTime>0||!rightphone" class="get_phonepass afff ft12"
                          id="scodebtn" @click.prevent="sendCode">{{computeTime?`已发送(${computeTime}s)` : '获取验证码'}}</button>

                </li>
              </ul>
              <div class="forget_pass"></div>
            </form>

          </div>
        </div>

        <div  style="padding-left: 2em;padding-right: 2em;">
          <a href="javascript;;" class="btn-register ft14 forget">忘记密码？</a>
          <div class="clear"></div>
        </div>
        <div class="picture-yz"></div>
        <div class="ftc pt5 loginbtn" id="Content0_btn" style="display: block;" @click="login">
          <a href="javascript:void(0)" class="btn-login afff">登 录</a>
        </div>

        <div class="ftc pt5 loginbtn" id="login_loading" style="display:none">
          <a href="javascript:void(0)" class="btn-login afff">正在登录</a>
        </div>
        <div class="other-login">
          <div class="ftc ft16 mt c666 partners">
            <b>合作网站登录</b></div>
          <ul class="uList1 clearfix">
            <li>
              <a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
                <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
              </a>
            </li>
            <li>
              <a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
                <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
              </a>
            </li>
          </ul>
        </div>


      </div>
      <AlertTip v-if="isShowAlert" :alertText="alertText" @closeTip="closeTip"></AlertTip>
    </div>

  </div>

</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {nameLogin,reqSmsLogin,reqSendCode} from '../../api/index'
  export default {
    data(){
      return{
        loginWay:true,
        name:'',
        pwd:'',
        phone:'',
        captcha:'',
        code:'',
        computeTime:0,
        isShowAlert: false, // 是否显示警告框
        alertText: '', // 警告框的文本
      }
    },
    computed: {
      rightphone(){
        return /^1\d{10}$/.test(this.phone)
      },
      rightuser(){
        return /^1\d{10}$/.test(this.name)
      }
    },
    methods:{
      //发送验证码
      async sendCode(){
        let result;
        if(this.rightphone){
          this.computeTime=30;
          const timer=setInterval(()=>{
            this.computeTime--;
            if( this.computeTime===0){
                clearInterval(timer)
            }
          },1000)
        };
        result=await reqSendCode(this.phone);
        if(result.code===1){
          this.showAlert(result.msg)
          // 停止计时
          clearInterval(timer)
          this.computeTime = 0
        }



      },
      //点击更新图片
      updateCaptcha (event) {
        event.target.src='http://localhost:3000/captcha?time='+Date.now()
      },
      //登录
      async login(){
        //前端验证
         let result;
         if(this.loginWay){

           const {name,pwd,rightuser}=this;
           if(!name){
             this.isShowAlert=true;
             this.alertText='用户名不能为空'
           }else if (!rightuser){
             this.isShowAlert=true;
             this.alertText='手机号码不正确'
           } else if(!pwd){
             this.isShowAlert=true;
             this.alertText='密码不能为空'
           }else{
             //手机号密码登录发请求
             result=await nameLogin({name,pwd})
             if(result.code===1){
               this.isShowAlert=true;
               this.alertText=result.msg
             }else if(result.code===0){
               //保存到state中
               var user=result.data;
               this.isShowAlert=true;
               this.alertText='登录成功'

             }
           }

         }else{
           //短信验证码登录
           const {phone,rightphone,captcha,code}=this;
           if(!phone){
             this.isShowAlert=true;
             this.alertText='手机号码不能为空'
           } else if(!rightphone){
             this.isShowAlert=true;
             this.alertText='手机号码错误'
           }else if(!captcha){
             this.isShowAlert=true;
             this.alertText='图形验证码不能为空'
           }else if(!code){
             this.isShowAlert=true;
             this.alertText='短信验证码不能为空'
           }else{
             result=await reqSmsLogin({phone,code,captcha});
             if(result.code===1){
               this.isShowAlert=true;
               this.alertText=result.msg
             }else if(result.code===0){
               //保存到state中
               var user=result.data;
               this.isShowAlert=true;
               this.alertText='登录成功'

             }
           }

         }



      },
      closeTip(){
         this.isShowAlert=false
      }
    },
    components:{
      AlertTip
    }



  }
</script>

<style>
  /*
login
*/
 #app{
   background-color:#F5F5F5;
 }
  .isshow{
    display: block;
  }
  .rightnumber{
    color:black
  }
  .login_bg {
    height: 180px;
    background: url(//img1.epetbar.com/2018-04/13/13/ef42dfb164982f302e78ca327b9d306c.png) no-repeat;
    background-size: 100% 100%;
  }

  .aback {
    background-size: 9px 17px;
    display: block;
    width: 22px;
    height: 20px;
    position: absolute;
    margin-top: 16px;
    color: white;
  }

  .login_bg .zfont {
    right: 10px;
  }

  .zfont {
    position: absolute;
    right: 2.5em;
    top: 19px;
  }

  .zfont a {
    color: white;
  }

  .es_por4 {
    background-color: rgba(255, 255, 255, 0.3);
    margin-top: -44px;
    height: 44px;
  }

  .login_style li a {
    font-size: 15px;
    color: #fff;
    display: block;
  }

  .login_style li {
    float: left;
    width: 50%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .bgfff {
    background: #fff;
  }

  .mformBox {
    background: #fff;
    border-radius: 0.5em;
    margin: 0em 4% 1em 4%;
    padding: 0 1.6%;
  }

  .mform li input {
    height: 21px;
    font-size: 15px;
    border: none;
    padding: 0px;
    color: #666;
    font-family: "Microsoft Yahei", tahoma, arial;
    outline: none;
  }

  input[type="text"] {
    height: 30px;
    -webkit-appearance: none;
    padding: 0 15px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    outline: none;
  }

  .mform li {
    border-bottom: #e2e2e2 solid 1px;
    padding: 12px 0 12px 0px;
    position: relative;
  }

  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #D5D5D5;
    font-size: 16px;
  }

  .mform .iconfont {
    margin-right: 5px;
    font-size: 20px;
    color: #D5D5D5;
  }

  .btn-register, .btn-register:hover {
    color: #898989;
  }

  .btn-login {
    display: block;
    letter-spacing: 5px;

    border-radius: 5px;
    background: #2ec975;
    font-size: 15px;
    padding: 13px 0;
    text-align: center;
    color: white;

  }

  #Content0_btn {
    margin: 70px 5%;
  }

  .partners {
    text-align: center;
    font-size: 18px;
    color: #d7d7d7;
    margin-top: 0.5em;
  }

  .uList1 li {
    width: 33.3%;
    margin-top: 5px;
    display: inline-block;
  }

  .uList1 li img {
    width: 40%;
    height: auto;
    display: block;
    margin: auto;
    max-width: 176px;
  }

  .footerBg {
    bottom: 0;
    left: 0;
    position: fixed;
    height: 50px;
    width: 100%;
    background-color: #F5F5F5;
  }

  /*
  手机密码登录*/
  .get_phonepass {
    background: #fff;
    color: #ff4259;
    border: 1px solid #eb4c33;
    position: absolute;
    right: 0;
    top: 0.5em;
    border-radius: 3px;
    width: 100px;
    text-align: center;
    padding: 0.7em 0;
  }
  .login_style li.selectTag4 i {
    display: block;
  }
  .login_style li i {

    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .codevar{
    position: relative;
    bottom: 9px;
  }

</style>
