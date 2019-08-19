<template>
  <section class="category">
    <section class="categoryHeader">
        <div class="headerSearch">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共xxxxx款好物</span>
        </div>
    </section>
    <section class="categoryContainer">
      <div class="categoryNavVertWrap" ref="categoryNav">
        <ul class="categoryNavList">
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
          <li class="categoryNavListItem">
            <span>爆品专区</span>
          </li>
        </ul>

      </div>
      <div class="subCategoryList">
        <div class="subCategoryRight" ref="subCategoryRight">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196"/>
          </div>
          <div class="cateList" ref="catelist">
            <ul class="list">
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
              <li class="listItem">
                <img src="https://yanxuan.nosdn.127.net/e1449d46740b6ecba2f43ce64c45af6c.png?imageView&quality=85&thumbnail=144x144">
                <p>夏季日用换新</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(() => {
          new BScroll(this.$refs.categoryNav,{})
          new BScroll(this.$refs.subCategoryRight,{})
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .category
    background white
    width px2rem(750px)
    .categoryHeader
      position fixed
      left 0
      top 0
      z-index 10
      width px2rem(750px)
      height px2rem(88px)
      box-sizing border-box
      padding px2rem(15px) px2rem(30px)
      background white
      .headerSearch
        width px2rem(690px)
        height px2rem(56px)
        box-sizing border-box
        background #EDEDED
        display flex
        align-items center
        justify-content center
        border-radius px2rem(10px)
        text-align center
        .icon-sousuo
          padding-left:px2rem(15px)
          //padding-top:px2rem(10px)
          font-size px2rem(40px)
          padding-right px2rem(20px)
        span
          font-size px2rem(28px)
          color #666666
    .categoryContainer
      position relative
      width px2rem(750px)
      padding-top px2rem(88px)
      .categoryNavVertWrap
        position absolute
        left 0
        top px2rem(88px)
        width px2rem(162px)
        height px2rem(1000px)
        // background pink
        .categoryNavList
          width px2rem(162px)
          font-size px2rem(28px)
          height px2rem(1148px)
          color #333
          .categoryNavListItem 
            width px2rem(162px)
            height px2rem(50px)
            // background green
            line-height px2rem(50px) 
            margin-top px2rem(50px)
            padding-left px2rem(20px)
      .subCategoryList
        position absolute
        right 0
        top px2rem(88px)
        width px2rem(588px)
        height px2rem(1000px)
        margin-left px2rem(162px)
        .subCategoryRight
          width px2rem(588px)
          height px2rem(1148px)
          .banner
            width px2rem(528px)
            height px2rem(192px)
            margin px2rem(30px) auto
          .cateList
            width px2rem(528px)
            height px2rem(648px)
            margin-left px2rem(30px)
            .list
              width px2rem(528px)
              height px2rem(648px)
              display flex
              flex-wrap wrap
              .listItem
                width px2rem(144px)
                height px2rem(216px)
                font-size px2rem(24px)
                margin-right px2rem(40px)
                color #333
                &:nth-child(3n)
                  margin-right 0
                
              


          

















</style>
