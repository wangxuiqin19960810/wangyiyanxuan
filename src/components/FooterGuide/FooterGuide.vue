<template>
  <footer class="footer_guide border-1px" >
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/msite'}" @click="goTo('/msite')">
        <span class="item_icon">
            <i class="iconfont icon-shouye" ></i>
        </span>
        <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item " :class="{on:$route.path==='/category'}" @click="goTo('/category')">
        <span class="item_icon">
            <i class="iconfont icon-icon-"></i>
        </span>
        <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item " :class="{on:$route.path===`/shiwu/find/${$route.params.id}`}" @click="goTo('/shiwu')">
        <span class="item_icon">
            <i class="iconfont icon-tupian"></i>
        </span>
        <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item " :class="{on:$route.path==='/shopcar'}" @click="goTo('/shopcar')">
        <span class="item_icon">
            <i class="iconfont icon-gouwuche"></i>
        </span>
        <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item " :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
        <span class="item_icon">
            <i class="iconfont icon-geren11"></i>
        </span>
        <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name :'footerGuide',
    methods: {
      goTo(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  //底部切换
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width px2rem(750px)
    background-color #fff
    height px2rem(100px)
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin px2rem(10px)
      color #999999
      &.on
        color deeppink
      span
        font-size px2rem(24px)
        margin-bottom px2rem(4px)
        .iconfont
          font-size px2rem(40px)
</style>
