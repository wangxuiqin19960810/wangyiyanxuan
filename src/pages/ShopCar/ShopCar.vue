<template>
  <div>
    <section class="shopCar">
      <section class="shopCarHeader">
        <div class="shopC">
          <span class="car">购物车</span>
          <span class="quan">领券</span>
        </div>
      </section>
      <section class="servicePolicy">
        <div class="serviceP clearFix">
          <span class="left">30天无忧退货</span>
          <span class="middle">30天无忧退货</span>
          <span class="right">30天无忧退货</span>
        </div>
      </section>
      <section class="ShopContainer">
        <div class="container">
          <i class="iconfont icon-MBEfenggeduosetubiao-gouwuche"></i>
          <div class="noCart-login">
            <span class="noCart-title">去做点什么吧</span>
            <p class="noCart-btn">登录</p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.shopCar
  background #F4F4F4
  height px2rem(1250px)
  width px2rem(750px)
  .shopCarHeader
    width px2rem(750px)
    height px2rem(88px)
    box-sizing border-box
    padding 0 px2rem(30px)
    background white
    .shopC
      width 100%
      height px2rem(88px)
      line-height px2rem(88px)
      font-size px2rem(36px)
      color #333
      box-sizing border-box
      .car
        float left 
      .quan
        float right 
        font-size px2rem(30px)
        color red
  .servicePolicy
    width px2rem(750px)
    height px2rem(70px)
    box-sizing border-box
    padding 0 px2rem(30px)
    background #eee
    .serviceP
      width 100%
      font-size px2rem(24px)
      color #666
      background #eee
      box-sizing border-box
      padding-top px2rem(20px)
      .left 
        float left
      .middle
        float left
        margin-left px2rem(125px)
      .right
        float right
  .ShopContainer
    width px2rem(750px)
    .container
      width px2rem(600px)
      height px2rem(600px)
      margin-left px2rem(74px)
      margin-top px2rem(120px)
      padding-top px2rem(200px)
      .iconfont 
        font-size px2rem(400px)
        margin-left px2rem(100px)
        margin-top px2rem(1000px)
        color #ccc
      .noCart-login
        width px2rem(600px)
        height px2rem(200px)
        margin-top px2rem(-490px)
        .noCart-title
          font-size px2rem(26px)
          color #333
          box-sizing border-box
          padding-left px2rem(210px)
        .noCart-btn
          width px2rem(500px)
          height px2rem(100px)
          line-height px2rem(100px)
          background #b4282d
          border-radius px2rem(5px)
          margin 0 auto
          text-align center
          color #fff
          font-size px2rem(30px)

</style>
