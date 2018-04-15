<template>
  <div>
    <div>
      <header>
        <div class="login_bg" style="background: url(//img1.epetbar.com/2018-04/13/13/ef42dfb164982f302e78ca327b9d306c.png) no-repeat;  background-size: 100% 100%">
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
            <li class="selectTag4"><a href="javascript:void(0)" >普通登录</a></li>
            <li class=""><a href="javascript:void(0)" >手机动态密码登录</a></li>
          </ul>
        </div>
      </header>
      <div class="bgfff">
        <div class="mformBox">
          <div id="Content">
            <form>
              <ul class="mform" style="display: none" >
                <li>
                  <span class="mNameIco iconfont icon-yonghu"></span>
                  <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username"></li>
                <li>
                  <span class="mpasswordIco iconfont icon-mima"></span>
                  <input type="password" placeholder="输入密码" class="text" name="password" id="password"></li>
              </ul>
              <ul class="mform" >
                <li>
                  <span class="mNumIco iconfont icon-phone"></span>
                  <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone"></li>
                <li>
                  <span class="mpasswordIco iconfont icon-mima"></span><input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
                  <span style="display:block;position: absolute;top:5px;right:0px;"><img src="share/seccode.html?hash=5157&amp;height=30&amp;width=85" name="varify" class="codevar" align="absbottom" ></span>
                </li>
                <li>
                  <span class="mpasswordIco iconfont icon-mima"></span><input type="text" class="dttext" placeholder="动态密码" name="code" id="code" >
                  <a class="get_phonepass afff ft14 w9 nocode" style="display:none;margin-right:0px">(<d id="stime">60</d>)短信已发送</a>
                  <a href="javascript:void(0);"  class="get_phonepass afff ft12 " id="scodebtn">获取动态密码</a>
                </li>
              </ul>
              <div class="forget_pass"></div>
            </form>

          </div>
        </div>

        <div class="ftc" style="padding-left: 2em;padding-right: 2em;">
          <a href="https://wap.epet.com/login.html?do=findpassword" class="btn-register ft14 forget pull-right">忘记密码？</a>
          <div class="clear"></div>
        </div>
        <div class="picture-yz"></div>
        <div class="ftc pt5 loginbtn" id="Content0_btn" style="display: block;"><a href="javascript:void(0)"  class="btn-login afff" >登 录</a></div>
        <div class="ftc pt5 loginbtn" id="Content1_btn" style="display: none;"><a href="javascript:void(0)" class="btn-login afff" >登 录</a></div>
        <div class="ftc pt5 loginbtn" id="login_loading" style="display:none"><a href="javascript:void(0)" class="btn-login afff" >正在登录</a></div>
        <div ></div>
        <div class="other-login">
          <div class="ftc ft16 mt c666 partners"><b>合作网站登录</b></div>
          <ul class="uList1 clearfix">
            <li><a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html"><img src="//static.epetbar.com/mpet/images/login/login_ico4.png"></a></li>
            <li><a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html"><img src="//static.epetbar.com/mpet/images/login/login_ico2.png"></a></li>
          </ul>
        </div>


      </div>

    </div>
    <div class="footerBg"></div>
  </div>

</template>

<script>

  export default {
    computed: {

    },
    components: {

    }
  }
</script>

<style>
  /*
login
*/

  .login_bg{
    height: 180px;
    background: url(//img1.epetbar.com/2018-04/13/13/ef42dfb….png) no-repeat;
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
  .zfont a{
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
    font-family: "Microsoft Yahei",tahoma,arial;
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
    font-size:16px;
  }
  .mform .iconfont{
    margin-right: 5px;
    font-size:20px;
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
  #Content0_btn{
    margin: 30px 5%;
  }
  .partners {
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
    width: 50%;
    height: auto;
    display: block;
    margin: auto;
    max-width: 176px;
  }
  .footerBg{
    bottom: 0;
    left:0;
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



</style>
