<template>
  <section class="profileModule">
    <div class="profileHeader">
      <ul class="pList clearFix">
        <li class="p1">
          <i class="iconfont icon-shouye" @click="goTo('/msite')"></i>
        </li>
        <li class="p2">网易严选</li>
        <li class="p3">
          <i class="iconfont icon-sousuo ii"></i>
          <i class="iconfont icon-gouwuche ii"></i>
        </li>
      </ul>
    </div>
    <!-- 总的登录界面 -->
    <div class="profileContainer" v-show="isShow">
        <div class="profileImg">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>>
        </div>
        <div class="profileLogin" @click="go(1)">
           <div class="tel">
            <i class="iconfont icon-shouji101" ></i>
            <p>手机号快捷登录</p>
          </div>
           <div class="youxiang" @click="go(0)">
            <i class="iconfont icon-duanxin" ></i>
            <p>邮箱帐号登录</p>
          </div>
        </div>
        <div class="thirdWrap">
          <ul class="thirdList">
            <li class="thirdItem">
              <i class="iconfont icon-weixin ic" ></i>
              <p>微信</p>
            </li>
            <li class="thirdItem">
              <i class="iconfont icon-qq1 ic"></i>
              <p>QQ</p>
            </li>
            <li class="thirdItem right">
              <i class="iconfont icon-weibo ic"></i>
              <p>微博</p>
            </li>
          </ul>
        </div>
    </div>
    <!--手机号登录界面 -->
    <div class="phoneLogin" v-show="toggle==1&&!isShow">
      <img class="image" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      <div class="pLogin">
        <input 
         class="tel"
         type="tel"
         placeholder="请输入手机号"
         v-model="phone"
         v-validate="'required|mobile'"
         name="phone"
        />
        <p class="phone" v-show=" errors.has('phone')">{{ errors.first('phone') }}</p>
        <div class="yzlogin">
          <input 
            class="dxyanzheng"
            type="text"
            placeholder="请输入短信验证码"
            v-model="code"
            v-validate="{ required: true, regex: /^\d{6}$/ }"
            name="code"
          />
          <p class="code" v-show=" errors.has('code')">{{errors.first('code')}}</p>
          <button class="lo">获取验证码</button>
        </div>
        <div class="yzlogin">
          <input class="pro" type="text" placeholder="遇到问题？"/>
          <button class="mima lo" @click="go(0)">使用密码验证登录</button>
        </div>
        <div class="login">登录</div>
        <div class="back_btn" @click="show">其他登录方式 ></div>
      </div>
    </div>
    <!-- 邮箱登录界面 -->
    <div class="emailLogin" v-show="toggle==0&&!isShow">
      <img class="image" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      <div class="pLogin">
        <input class="tel" type="text" placeholder="邮箱帐号" />
        <div class="yzlogin">
          <input class="dxyanzheng" type="text" placeholder="密码"/>
        </div>
        <div class="yzlogin">
          <input class="pro" type="text" placeholder="注册账号"/>
          <button class="mima lo mimayz">忘记密码</button>
        </div>
        <div class="login">登录</div>
        <div class="back_btn" @click="show">其他登录方式 ></div>
      </div>
    </div> 
    <div class="footer">
      <router-view></router-view>
    </div>
    
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        isShow:true,
        toggle:0, //1 手机号登录界面显示  0 邮箱登录界面显示
        phone:'',//手机号
        code:'',//短信验证码
      }
    },
    methods: {
      goTo(path){
        this.$router.replace(path)
      },
      go(num){
          this.isShow=false
          this.toggle=num
      },
      show(){
        this.isShow=true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.profileModule
  background #F4F4F4
  // height px2rem(1450px)
  width px2rem(750px)
  .profileHeader
    width px2rem(750px)
    height px2rem(88px)
    box-sizing border-box
    padding 0 px2rem(30px)
    background white
    .pList
      width 100%
      height px2rem(88px)
      // background red
      .p1
        float left
        margin-top: px2rem(20px)
        .icon-shouye
          font-size px2rem(60px)
      .p2
        float left
        font-size px2rem(35px)
        margin-left: px2rem(215px)
        margin-top: px2rem(26px)
      .p3
        float right
        display flex
        .ii
          font-size px2rem(60px)
          margin-top: px2rem(10px)
          margin-left px2rem(40px)
  .profileContainer
    position relative
    width px2rem(750px)
    height px2rem(480px)
    .profileImg
      margin px2rem(180px) px2rem(220px)
      img 
        width px2rem(268px)
        height px2rem(90px)
    .profileLogin
      width px2rem(670px)
      height px2rem(250px)
      margin 0 auto 
      .tel
        width px2rem(670px)
        height px2rem(90px)
        background #DD1A21 
        border-radius px2rem(5px)
        margin-bottom px2rem(30px)
        display flex
        align-items center
        justify-content center
        font-size px2rem(28px)
        color #fff
        .icon-shouji101
          margin-right px2rem(30px)
          color white
          font-size px2rem(40px)
      .youxiang
        width px2rem(670px)
        height px2rem(90px)
        border px2rem(1px) solid #DD1A21 
        border-radius px2rem(10px)
        display flex
        align-items center
        justify-content center
        font-size px2rem(28px)
        color red
        .icon-duanxin
          margin-right px2rem(30px)
          color red
          font-size px2rem(40px)
    .thirdWrap
      position absolute
      left 0
      top px2rem(600px)
      width px2rem(600px)
      height px2rem(70px)
      padding-left: px2rem(150px)
      padding-top: px2rem(350px)
      .thirdList
        width px2rem(600px)
        height px2rem(50px)
        .thirdItem
          float left 
          width px2rem(150px)
          height px2rem(40px)
          display flex
          justify-content center
          align-items center
          font-size px2rem(26px)
          color #7F7F7F
          border-right px2rem(4px) solid #ccc
          .ic
            font-size px2rem(40px)
            margin-right px2rem(15px)
          &.right
            border-right 0
  .phoneLogin,.emailLogin
    width px2rem(750px)
    height px2rem(1246px)
    background white
    .image
      width: px2rem(200px)
      display: block
      margin: auto;
      padding-top:px2rem(70px)
    .pLogin
      input
        width px2rem(660px)
        height px2rem(80px)
        border-bottom px2rem(3px) solid #F3F3F3
        margin-left px2rem(50px)
        margin-top px2rem(100px)
        font-size px2rem(26px)
        color #666
        line-height px2rem(100px)
        // background pink
        &.dxyanzheng
          margin-top px2rem(20px)
        &.pro
          margin-top px2rem(20px)
      .phone
        color:red
        font-size:px2rem(26px)
        width px2rem(660px)
        height px2rem(40px)
        line-height px2rem(40px)
        margin 0 auto
      .yzlogin
        position relative
        .code
          color:red
          font-size:px2rem(26px)
          width px2rem(660px)
          height px2rem(40px)
          line-height px2rem(40px)
          margin 0 auto
        .lo
          position: absolute
          right: px2rem(50px)
          top: px2rem(40px)
          width: px2rem(168px)
          height: px2rem(50px)
          font-size: px2rem(30px)
          color #333
        .mima
          top: px2rem(45px)
          right: px2rem(37px)
          width: px2rem(258px)
          background: transparent
          outline:none
          border 0
        .mimayz
          color #7f7f7f
          // margin-top px2rem(-10px)
      .login
        width px2rem(660px)
        height px2rem(92px)
        background #DD1A21
        border-radius px2rem(5px)
        margin 25px auto 
        text-align center
        line-height px2rem(92px)
        font-size px2rem(30px)
        color #fff
      .back_btn
        text-align center
        margin-top px2rem(20px)
        font-size px2rem(30px)
        color #333
</style>
