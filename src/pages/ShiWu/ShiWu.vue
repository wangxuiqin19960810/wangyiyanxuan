<template>
  <section class="shiWuModule">
    <div class="shiWuHeader">
        <div class="shiWuHeader-top">
          <ul class="sList clearFix">
            <li class="p1">
              <i class="iconfont icon-shouye" @click="goTo('/msite')"></i>
            </li>
            <li class="p2">
                <router-link to="/shiwu/find" class="find" :class="{red : $route.path===`/shiwu/find/${$route.params.id}`}">发现</router-link>
                <router-link to="/shiwu/zhengxuanjia" class="zhen" :class="{red : $route.path==='/shiwu/zhengxuanjia'}">甄选家</router-link>
            </li>
            <li class="p3">
              <i class="iconfont icon-sousuo ii"></i>
              <i class="iconfont icon-gouwuche ii"></i>
            </li>
          </ul>
      </div>
      <div class="msiteNav" ref='msitenav' v-show="$route.path!=='/shiwu/zhengxuanjia'">
        <ul class="navList">
            <!-- <li class="navItem" v-for="(item,index) in huadongData" :key="index" :class="{active:$route.path===`/shiwu/find/${$route.params.id}`}"> -->
            <li class="navItem" v-for="(item,index) in huadongData" :key="index" @click="addStyle(index)" :class="{active:myindex===index}">
                <router-link :to="`/shiwu/find/${index}`">
                <!-- <router-link :to="{name: '/shiwu/find', params: {id: index}}"> -->
                  {{item.tabName}}        
                </router-link>
            </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
     data(){
      return {
        huadongData:[],
        myindex:0,
      }
    },
    methods:{
      goTo(path){
        this.$router.push(path)
      },
      addStyle(index){
        this.myindex = index
        // this.titleindex = index
        // console.log(index)
        // this.$router.push
      }
    },
    mounted(){
      this.$nextTick(() => {
          new BScroll(this.$refs.msitenav,{
            scrollX: true,
            scrollY: false
          })
        }),
        //滑动数据请求
      this.$store.dispatch('gethuadong')
      //一上来默认显示第一页
      this.$router.push('/shiwu/find/0')
      
      
    },
    computed:{
      ...mapState(['shuwuhuadong'])
    },
    watch:{
      shuwuhuadong(){
        this.huadongData = this.shuwuhuadong
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .shiWuModule
    background #F4F4F4
    width px2rem(750px)
    .shiWuHeader
      position fixed
      left 0
      top 0
      z-index 100
      background white
      .shiWuHeader-top
        width px2rem(750px)
        height px2rem(88px)
        box-sizing border-box
        padding 0 px2rem(30px)
        background white
        .sList
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
            margin-left: px2rem(155px)
            margin-top: px2rem(26px)
            .find 
              font-size px2rem(40px)
              &.red
                font-weight bold
                color red
            .zhen
              position absolute
              left px2rem(230px)
              top px2rem(27px)
              margin-left: px2rem(155px)
              padding-top: px2rem(-200px)
              &.red
                font-weight bold
                color red
          .p3
            float right
            display flex
            .ii
              font-size px2rem(60px)
              margin-top: px2rem(10px)
              margin-left px2rem(40px)
      .msiteNav
        position relative
        width: px2rem(750px)
        height: px2rem(60px)
        // overflow: hidden
        .navList
          // width 100%
          width px2rem(1500px)
          position relative
          display flex
          font-size px2rem(28px)
          .navItem
            flex-shrink 0
            padding: px2rem(15px) px2rem(30px)
            font-weight bold
            &.active
              border-bottom red solid px2rem(5px)
              color red

</style>
