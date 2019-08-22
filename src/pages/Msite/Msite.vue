<template>
    <section class="msite">
      <!--首页头部-->
      <section class="msiteHeader">
          <div class="msiteHeaderTop">
              <img class="logo" src="./images/logo.png"/>
              <div class="headerSearch" @click="goTo('/search')">
                  <i class="iconfont icon-sousuo"></i>
                  <span>搜索商品, 共xxxxx款好物</span>
              </div>
              <span class="headerLogin">登录</span>
          </div>
          <div class="msiteNav" ref='msitenav'>
              <ul class="navList">
                  <li class="navItem tuijian">
                      <a href="javascript:;" style="color: red">推荐</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">服饰衣物</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">美食酒水</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
                  <li class="navItem">
                      <a href="javascript:;">居家生活</a>
                  </li>
              </ul>
              <span><i class="iconfont icon-jiantou-copy-copy"></i></span>
          </div>
      </section>
      <!--首页轮播-->
      <section class="lunbo">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/09272c0588454c163017bfd19eb932ca.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0"/>
                  </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
          </div>
      </section>
      <!--首页无忧-->
      <section class="grow">
          <div class="smallNav">
              <div class="smallNavItem">
                  <!--<img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" />-->
                  <!--<span >网易自营品牌</span>-->
                  <i class="iconfont icon-wuyoushouhou1"></i>
                  <span >网易自营品牌</span >
              </div>
              <div class="smallNavItem">
                  <i class="iconfont icon-shouhouwuyou"></i>
                  <span >网易自营品牌</span>
              </div>
              <div class="smallNavItem">
                  <i class="iconfont icon-wuyoushouhou"></i>
                  <span >网易自营品牌</span>
              </div>
          </div>

      </section>
      <!--首页大处理-->
      <!-- <section class="handle">
          <ul class="handleList">
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"/>
                  <span>新品首发</span>
              </li>
              <li class="handleListItem">
                  <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif"/>
                  <span>新品首发</span>
              </li>
          </ul>
      </section> -->
      <kingKongModule :hdata="hdata"></kingKongModule>
      <!--首页广告-->
      <section class="ad">
          <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt=""/>
      </section>
      <!--首页便宜商品-->
      <section class="cheap">
          <ul class="cheapList">
              <li class="cheapListItem">
                  <p class="bigtext">9.9超值专区首发</p>
                  <p class="smalltext">180款爆品新定价</p>
                  <div class="new">
                      <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75">
                      <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75">
                  </div>

              </li>
              <li class="cheapListItem">
                  <p class="bigtext">9.9超值专区首发</p>
                  <p class="smalltext">180款爆品新定价</p>
                  <div class="new">
                      <img src="https://yanxuan-item.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=150x150&quality=75">
                      <img src="https://yanxuan-item.nosdn.127.net/0fe562392cd8af853a565fb5c302fe3f.png?imageView&thumbnail=150x150&quality=75">
                  </div>
              </li>
              <li class="cheapListItem">
                  <p class="bigtext">9.9超值专区首发</p>
                  <p class="smalltext">180款爆品新定价</p>
                  <div class="new">
                      <img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75">
                      <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75">
                  </div>
              </li>
              <li class="cheapListItem">
                  <p class="bigtext">9.9超值专区首发</p>
                  <p class="smalltext">180款爆品新定价</p>
                  <div class="new">
                      <img src="https://yanxuan-item.nosdn.127.net/d055df8965d835a012588a15d949fbdc.png?imageView&thumbnail=150x150&quality=75">
                      <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75">
                  </div>
              </li>
          </ul>
      </section>
      <!--私人定制-->
      <section class="personalTailorModule">
          <div class="personalHeader">私人定制</div>
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <div class="personalLunBo">
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/68e4bfd7360c26394c5df20d7c1d4b3b.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/ee6eb8203527dbe5a749b9f5f3c6fe27.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>日本制造 九州大麦若叶青...<span style="color: red">￥18.6</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/61b90e0df4c551cb05f7c601646bf2f7.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>20寸 全铝镁合金登机箱<span  style="color: red">￥22.2</span></p>
                          </div>

                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="personalLunBo">
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/68e4bfd7360c26394c5df20d7c1d4b3b.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/ee6eb8203527dbe5a749b9f5f3c6fe27.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>日本制造 九州大麦若叶青...<span style="color: red">￥18.6</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/61b90e0df4c551cb05f7c601646bf2f7.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>20寸 全铝镁合金登机箱<span  style="color: red">￥22.2</span></p>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="personalLunBo">
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/68e4bfd7360c26394c5df20d7c1d4b3b.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/ee6eb8203527dbe5a749b9f5f3c6fe27.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>日本制造 九州大麦若叶青...<span style="color: red">￥18.6</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/61b90e0df4c551cb05f7c601646bf2f7.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>20寸 全铝镁合金登机箱<span  style="color: red">￥22.2</span></p>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="personalLunBo">
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/68e4bfd7360c26394c5df20d7c1d4b3b.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/ee6eb8203527dbe5a749b9f5f3c6fe27.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>日本制造 九州大麦若叶青...<span style="color: red">￥18.6</span></p>
                          </div>
                          <div class="personalLunBoItem">
                              <img src="https://yanxuan-item.nosdn.127.net/61b90e0df4c551cb05f7c601646bf2f7.png?imageView&quality=65&thumbnail=330x330"/>
                              <p>20寸 全铝镁合金登机箱<span  style="color: red">￥22.2</span></p>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

          </div>
      </section>
      <!--限时购-->
      <section class="xianShiGo">
          <div class="xianShiGoHeader">
              <span class="xiaoShihop">限时购</span>
              <div class="xianShiGoHeaderTime">
                  <span class="hour">02</span>
                  <span class="maohao">:</span>
                  <span class="hour">06</span>
                  <span class="maohao">:</span>
                  <span class="hour">01</span>
              </div>
              <div class="more">
                  <span class="left">更多</span>
                  <span class="right"> > </span>
              </div>

          </div>
          <div class="xianShigoods">
              <ul class="xianShigoodsList">
                  <li class="xianShigoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/7452c303e227f1e4767c8d5db3b495e4.png?imageView&thumbnail=216x216&quality=75"/>
                      <div  class="price">
                          <span class="priceTop">￥256 </span>
                          <s class="priceBottom">￥256 </s>
                      </div>

                  </li>
                  <li class="xianShigoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75"/>
                      <div  class="price">
                          <span class="priceTop">￥256 </span>
                          <s class="priceBottom">￥256 </s>
                      </div>
                  </li>
                  <li class="xianShigoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/d129e72169eee8b6c47e30504cd34442.png?imageView&thumbnail=216x216&quality=75"/>
                      <div  class="price">
                          <span class="priceTop">￥256 </span>
                          <s class="priceBottom">￥256 </s>
                      </div>
                  </li>
                  <li class="xianShigoodsListItem">
                      <img src="https://yanxuan.nosdn.127.net/8bf32abb64fabdfad8f9498a3199e91e.jpg?imageView&quality=65&thumbnail=330x330"/>
                      <div  class="price">
                          <span class="priceTop">￥256 </span>
                          <s class="priceBottom">￥256 </s>
                      </div>
                  </li>
                  <li class="xianShigoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75"/>
                      <div  class="price">
                          <span class="priceTop">￥256 </span>
                          <s class="priceBottom">￥256 </s>
                      </div>
                  </li>
                  <li class="xianShigoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/d6a3ff3894437578b137ccbd6be32132.png?imageView&quality=65&thumbnail=330x330"/>
                      <div  class="price">
                          <span class="priceTop">￥256 </span>
                          <s class="priceBottom">￥256 </s>
                      </div>
                  </li>
              </ul>
          </div>
      </section>
      <!--新品首发-->
      <section class="xinPingShouFa">
          <div class="xinPingShouFaHeader">
              <span class="xinPin">新品首发</span>
              <div class="more">
                  <span class="left">更多</span>
                  <span class="right"> > </span>
              </div>
          </div>
          <div class="xinPingoods">
              <ul class="xinPingoodsList">
                  <li class="xinPingoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">特价</div>
                  </li>
                  <li class="xinPingoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/ca9b7296d7bcc738ca9f20412d87c8a7.png?imageView&quality=65&thumbnail=330x330"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">满减</div>
                  </li>
                  <li class="xinPingoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/d129e72169eee8b6c47e30504cd34442.png?imageView&thumbnail=216x216&quality=75"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">特价优惠</div>
                  </li>
                  <li class="xinPingoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">9.9折扣</div>
                  </li>
                  <li class="xinPingoodsListItem">
                      <img src="https://yanxuan.nosdn.127.net/8bf32abb64fabdfad8f9498a3199e91e.jpg?imageView&quality=65&thumbnail=330x330"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">特价优惠</div>
                  </li>
                  <li class="xinPingoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                  </li>
              </ul>
          </div>
      </section>
      <!--人气推荐-->
      <section class="popularModule">
          <div class="popularHeader">
              <span class="popular">人气推荐</span>
              <div class="more">
                  <span class="left">更多</span>
                  <span class="right"> > </span>
              </div>
          </div>
          <div class="spItem">
              <div class="spItemLeft">
                  <img src="https://yanxuan-item.nosdn.127.net/89d86a4e463115e366daf841b9bcff46.png?imageView&quality=65&thumbnail=280x280" />
              </div>
              <div class="spItemRight">
                  <p class="tejia">抄底特惠</p>
                  <p class="miaoshu1">新色 奢华植鞣头层水牛皮席 凉席三件套</p>
                  <p class="miaoshu2">三峡水牛头层皮，高端夏凉必备</p>
                  <span class="price">￥2328</span>
              </div>
          </div>
          <div class="popularGoods">
              <ul class="popularGoodsList">
                  <li class="popularGoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/ca9b7296d7bcc738ca9f20412d87c8a7.png?imageView&quality=65&thumbnail=330x330"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">满减</div>
                  </li>
                  <li class="popularGoodsListItem">
                      <img src="https://yanxuan.nosdn.127.net/8bf32abb64fabdfad8f9498a3199e91e.jpg?imageView&quality=65&thumbnail=330x330"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                      <div class="tejia">特价优惠</div>
                  </li>
                  <li class="popularGoodsListItem">
                      <img src="https://yanxuan-item.nosdn.127.net/16f26c3a017781a2366518f843ad8702.png?imageView&thumbnail=216x216&quality=75"/>
                      <p class="xinPinSingle">棉麻系列 男式法国雨露棉...<span style="color: red">￥68</span></p>
                  </li>
              </ul>
          </div>
      </section>
      <!--福利活动模块-->
      <section class="activityModule">
          <ul class="activityList">
              <li class="activityItem" style="background-color:#EBEFF6">
                  <div class="activityItemLeft">
                      <p class="p1">福利社</p>
                      <p class="p2">抢超值神券</p>
                      <p class="p3">享会员特价</p>
                  </div>
                  <div class="activityItemRight">
                      <div class="circle">
                          <p class="p1">￥96.9</p>
                          <s class="p2">￥56.8</s>
                      </div>
                      <img src="https://yanxuan-item.nosdn.127.net/f33922af9863addb4845b1c93f04b012.png?imageView&thumbnail=200x200&quality=75"/>
                  </div>
              </li>
              <li class="activityItem" style="background-color:#EAF3E7">
                  <div class="activityItemLeft">
                      <p class="p1">福利社</p>
                      <p class="p2">抢超值神券</p>
                      <p class="p3">享会员特价</p>
                  </div>
                  <div class="activityItemRight">
                      <div class="circle">
                          <p class="p1">￥96.9</p>
                          <s class="p2">￥56.8</s>
                      </div>
                      <img src="https://yanxuan-item.nosdn.127.net/f33922af9863addb4845b1c93f04b012.png?imageView&thumbnail=200x200&quality=75"/>
                  </div>
              </li>
              <li class="activityItem" style="background-color:#F8EFEE">
                  <div class="activityItemLeft">
                      <p class="p1">福利社</p>
                      <p class="p2">抢超值神券</p>
                      <p class="p3">享会员特价</p>
                  </div>
                  <div class="activityItemRight">
                      <div class="circle">
                          <p class="p1">￥96.9</p>
                          <s class="p2">￥56.8</s>
                      </div>
                      <img src="https://yanxuan-item.nosdn.127.net/f33922af9863addb4845b1c93f04b012.png?imageView&thumbnail=200x200&quality=75"/>
                  </div>
              </li>
              <li class="activityItem" style="background-color:#F9F3E4">
                  <div class="activityItemLeft">
                      <p class="p1">福利社</p>
                      <p class="p2">抢超值神券</p>
                      <p class="p3">享会员特价</p>
                  </div>
                  <div class="activityItemRight">
                      <div class="circle">
                          <p class="p1">￥96.9</p>
                          <s class="p2">￥56.8</s>
                      </div>
                      <img src="https://yanxuan-item.nosdn.127.net/f33922af9863addb4845b1c93f04b012.png?imageView&thumbnail=200x200&quality=75"/>
                  </div>
              </li>
          </ul>
      </section>
      <!--品牌制造商直供-->
      <section class="manuFacturersSupplying">
          <div class="manuFacturersHeader">
              <span class="manuFacturers">品牌制造商直供</span>
              <div class="more">
                  <span class="left">更多</span>
                  <span class="right"> > </span>
              </div>
          </div>
          <div class="manu">
              <ul class="manuList">
                  <li class="manuListItem">
                      <p class="bigtext">9.9超值专区首发</p>
                      <p class="smalltext">180款爆品新定价</p>
                      <div class="new">
                          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75">
                      </div>

                  </li>
                  <li class="manuListItem">
                      <p class="bigtext">9.9超值专区首发</p>
                      <p class="smalltext">180款爆品新定价</p>
                      <div class="new">
                          <img src="https://yanxuan-item.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=150x150&quality=75">
                      </div>
                  </li>
                  <li class="manuListItem">
                      <p class="bigtext">9.9超值专区首发</p>
                      <p class="smalltext">180款爆品新定价</p>
                      <div class="new">
                          <img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75">
                      </div>
                  </li>
                  <li class="manuListItem">
                      <p class="bigtext">9.9超值专区首发</p>
                      <p class="smalltext">180款爆品新定价</p>
                      <div class="new">
                          <img src="https://yanxuan-item.nosdn.127.net/d055df8965d835a012588a15d949fbdc.png?imageView&thumbnail=150x150&quality=75">
                      </div>
                  </li>
              </ul>
          </div>
      </section>
      <!--专题精选-->
      <section class="topics">
          <div class="topicsHeader">
              <span class="topicsChange">专题精选</span>
              <div class="more">
                  <span class="left">更多</span>
                  <span class="right"> > </span>
              </div>
          </div>

      </section>
      <!--众筹-->
      <section class="zhongchouModule">
          <div class="zhongchouHeader">
              <span class="zhongchou">众筹</span>
              <div class="more">
                  <span class="left">更多</span>
                  <span class="right"> > </span>
              </div>
          </div>
          <div class="zhongchouTop">
              <img src="https://yanxuan.nosdn.127.net/721fd65889559e3ceff651c81c18685a.png?imageView&thumbnail=210x210&quality=75"/>
              <div class="zhongchouTopRight">
                  <p class="gift">来自地心的礼物</p>
                  <span class="price">￥899起</span>
                  <span class="progressWrap"></span>
                  <span class="rate">9%</span>
                  <p class="supportNum">209人已支持</p>
              </div>
          </div>
          <div class="zhongchouTop">
              <img src="https://yanxuan.nosdn.127.net/71134f6fcdefe050c24031d26d02fbad.png?imageView&thumbnail=210x210&quality=75"/>
              <div class="zhongchouTopRight">
                  <p class="gift">来自地心的礼物</p>
                  <span class="price">￥899起</span>
                  <span class="progressWrap"></span>
                  <span class="rate">9%</span>
                  <p class="supportNum">209人已支持</p>
              </div>
          </div>
      </section>
      <!--分类-->
      <section class="categoryModule">
          <div class="bannder">
              <img src="https://yanxuan.nosdn.127.net/4b09ac57ed87b992e40aad42c197fec6.jpg?imageView&thumbnail=750x0&quality=75"/>
          </div>
          <div class="goodGrid">
              <div class="goodGridContainer">
                  <ul class="goodGridList">
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>
                      <li class="goodGridListItem">
                          <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" />
                          <p class="miaoshu">全净皓齿变速式声波电动牙刷</p>
                          <p class="price">￥233</p>
                      </li>



                  </ul>
              </div>
          </div>

      </section>
      <!--底部-->
      <section class="footer">
          <div class="footerTop">
              <div class="dv"></div>
              <div class="downLoad">下载APP</div>
              <div class="dv"></div>
              <div class="pc">电脑板</div>
          </div>
          <div class="footerBottom">
              <div class="banquan">网易公司版权所有 © 1997-</div>
              <div class="allow">食品经营许可证：JY13301080111719</div>
          </div>
      </section>
      <section class="block"></section>
  </section>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import kingKongModule from '../../components/kingKongModule/kingKongModule.vue'
  export default {
    data(){
      return {
        hdata:[]
      }
    },
    components:{
      kingKongModule
    },
    computed:{
      // ...mapState(['homeData'])
      ...mapState({
        haha:state=> state.homeData
      })
    },
    methods:{
      goTo(path){
        this.$router.push(path)
      }
    },
    watch:{
      haha () {
          this.hdata = this.haha.kingKongModule.kingKongList
      }
    },
    mounted(){
      this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
          new BScroll(this.$refs.msitenav,{
            scrollX: true,
            scrollY: false
          })
        })
        this.$store.dispatch('getHomeData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .msite
    background #eee
    .msiteHeader
      position fixed
      z-index 100
      left 0
      top 0
      width px2rem(750px)
      height px2rem(158px)
      background white
      //box-sizing border-box
      .msiteHeaderTop
        display flex
        align-items center
        justify-content space-around
        padding-left px2rem(30px)
        .logo
          width px2rem(140px)
          height px2rem(40px)
          font-size px2rem(28px)
        .headerSearch
          display flex
          align-items center
          margin-top :px2rem(20px)
          width: px2rem(400px)
          height px2rem(50px)
          background #EDEDED
          border-radius px2rem(10px)
          border 1px solid #EDEDED
          margin-bottom px2rem(20px)
          text-align center
          .icon-sousuo
            padding-left:px2rem(15px)
            //padding-top:px2rem(10px)
            font-size px2rem(40px)
            padding-right px2rem(20px)
          span
            font-size px2rem(28px)
            color #666666
        .headerLogin
          width px2rem(70px)
          height px2rem(40px)
          line-height: px2rem(40px)
          text-align center
          font-size px2rem(28px)
          border px2rem(1px) solid red
          border-radius px2rem(10px)
          color:red
      .msiteNav
        position relative
        width: 100%
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
            &.tuijian
              border-bottom red solid px2rem(5px)
        span
          position absolute
          right:0
          top:0
          width px2rem(100px)
          height 100%
          background white
          text-align center
          .icon-jiantou-copy-copy
            font-size px2rem(32px)
            color #333
            background white
    //首页轮播
    .lunbo
      width 100%
      height px2rem(370px)
      //background red
      padding-top px2rem(158px)
      .swiper-container
        width 100%
        height 100%
        .swiper-slide
        /deep/.swiper-pagination-bullet
          width px2rem(50px)
          height px2rem(5px)
          background blue
    //首页无忧
    .grow
      width 100%
      box-sizing border-box
      height px2rem(72px)
      padding 0 px2rem(30px)
      .smallNav
        width 100%
        height px2rem(72px)
        display flex
        .smallNavItem
          display flex
          align-items center
          width 33.333%
          font-size px2rem(24px)
          color #333
          .iconfont
            font-size px2rem(32px)
            color hotpink
          span
            display inline-block
            padding-left px2rem(10px)

    //首页大处理
    //首页广告
    .ad
      width 100%
      img
        width: 100%
        height px2rem(127px)
    //首页便宜商品
    .cheap
      width px2rem(750px)
      background white
      .cheapList
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        flex-wrap wrap
        .cheapListItem
          box-sizing border-box
          width px2rem(330px)
          height px2rem(264px)
          background #F5F5F5
          margin px2rem(4px)
          padding px2rem(20px)

          .bigtext
            color #333
            font-size px2rem(32px)
            padding-left px2rem(10px)
          .smalltext
            color #7F7F7F
            font-size px2rem(24px)
            padding-left px2rem(10px)
          .new
            display flex
            align-items center
            img
              width px2rem(150px)
              height px2rem(150px)
              padding-right px2rem(4px)
    //私人定制
    .personalTailorModule
      width: px2rem(750px)
      height px2rem(470px)
      box-sizing border-box
      background white
      margin-top px2rem(20px)
      .personalHeader
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        line-height: px2rem(100px)
        font-size px2rem(32px)
        color #333
        padding-left: px2rem(30px)
      .personalLunBo
        width px2rem(750px)
        height px2rem(370px)
        box-sizing border-box
        //background cornsilk
        display flex
        padding 0 px2rem(10px) px2rem(0px) px2rem(30px)
        padding-bottom px2rem(60px)
        .personalLunBoItem
          width px2rem(216px)
          height px2rem(310px)
          //background cornsilk
          font-size px2rem(24px)
          margin-right px2rem(20px)
          color #333
          img
            width px2rem(216px)
            height px2rem(216px)

    .xianShiGo
      width px2rem(750px)
      height px2rem(698px)
      background white
      margin-top px2rem(20px)
      .xianShiGoHeader
        display flex
        //justify-content space-around
        align-items center
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        //background green
        .xiaoShihop
          display inline
          width px2rem(96px)
          height px2rem(42px)
          font-size px2rem(32px)
          color #333
          margin-left px2rem(30px)
        .xianShiGoHeaderTime
          display flex
          align-items center
          box-sizing border-box
          margin-left px2rem(25px)
          .hour
            width px2rem(36px)
            height px2rem(36px)
            line-height: px2rem(36px)
            font-size px2rem(24px)
            color #ffffff
            background #333
            padding-left px2rem(5px)
            //padding-right px2rem(5px)
            border-radius px2rem(5px)
          .maohao
            padding 0 px2rem(10px)
            font-size px2rem(30px)
            margin-top px2rem(-10px)
        .more
          float right
          margin-left px2rem(300px)
          font-size px2rem(28px)
          display flex
      .xianShigoods
        width px2rem(750px)
        height px2rem(598px)
        box-sizing border-box
        padding-left px2rem(30px)
        padding-right px2rem(10px)
        .xianShigoodsList
          display flex
          flex-wrap wrap
          .xianShigoodsListItem
            //background hotpink
            display flex
            align-items center
            width px2rem(216px)
            height px2rem(299px)
            flex-direction column
            box-sizing border-box
            padding-bottom px2rem(30px)
            margin-right px2rem(20px)
            img
              width px2rem(216px)
              height px2rem(216px)
              background #F5F5F5
            .price
              width px2rem(216px)
              height px2rem(41px)
              display flex
              font-size px2rem(27px)
              color #7F7F7F
              margin-top px2rem(20px)
              .priceTop
                color red
                margin 0 px2rem(10px)0 px2rem(30px)
              .priceBottom
                font-size px2rem(24px)


      
    //新品首发
    .xinPingShouFa
      width px2rem(750px)
      height px2rem(840px)
      background white
      margin-top px2rem(20px)
      .xinPingShouFaHeader
        display flex
        margin-top px2rem(10px)
        align-items center
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        //background green
        .xinPin
          //display inline
          width px2rem(310px)
          height px2rem(42px)
          font-size px2rem(32px)
          color #333
          margin-left px2rem(30px)

        .more
          float right
          margin-left px2rem(300px)
          font-size px2rem(28px)
          display flex


      .xinPingoods
        width px2rem(750px)
        height px2rem(598px)
        box-sizing border-box
        padding-left px2rem(30px)
        padding-right px2rem(10px)
        .xinPingoodsList
          display flex
          flex-wrap wrap
          .xinPingoodsListItem
            //background hotpink
            display flex
            align-items center
            width px2rem(216px)
            height px2rem(354px)
            flex-direction column
            box-sizing border-box
            padding-bottom px2rem(30px)
            margin-right px2rem(20px)
            img
              width px2rem(216px)
              height px2rem(216px)
              background #F5F5F5
            .xinPinSingle
              width px2rem(216px)
              height px2rem(310px)
              box-sizing border-box
              margin-top px2rem(15px)
              font-size px2rem(24px)
              margin-right px2rem(20px)
              color #333
            .tejia
              border px2rem(1px) solid red
              border-radius px2rem(20px)
              font-size px2rem(20px)
              padding px2rem(5px) px2rem(10px)
              margin-left px2rem(-120px)
    //人气推荐
    .popularModule
      width px2rem(750px)
      height px2rem(784px)
      background white
      margin-top px2rem(20px)
      .popularHeader
        display flex
        align-items center
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        .popular
          //display inline
          width px2rem(310px)
          height px2rem(42px)
          font-size px2rem(32px)
          color #333
          margin-left px2rem(30px)
        .more
          float right
          margin-left px2rem(300px)
          font-size px2rem(28px)
          display flex


      .spItem
        width px2rem(690px)
        height px2rem(280px)
        display flex
        background #FEF4E7
        margin-left px2rem(28px)
        .spItemRight
          margin-top px2rem(60px)
          .tejia
            width px2rem(80px)
            border px2rem(1px) solid red
            border-radius px2rem(5px)
            font-size px2rem(20px)
            padding px2rem(5px) px2rem(10px)
            margin-left px2rem(30px)
          .miaoshu1
            width px2rem(400px)
            height px2rem(30px)
            font-size px2rem(26px)
            color #333
            overflow:hidden
            white-space:nowrap
            text-overflow:ellipsis
            margin px2rem(10px) 0 px2rem(10px) px2rem(25px)
          .miaoshu2
            font-size px2rem(32px)
            color #7F7F7F
            margin-left px2rem(25px)
          .price
            font-size px2rem(26px)
            color red
            margin-left px2rem(25px)



      .popularGoods
        width px2rem(750px)
        height px2rem(598px)
        box-sizing border-box
        padding-left px2rem(30px)
        padding-right px2rem(10px)
        .popularGoodsList
          display flex
          flex-wrap wrap
          margin-top px2rem(30px)
          .popularGoodsListItem
            display flex
            align-items center
            width px2rem(216px)
            height px2rem(354px)
            flex-direction column
            box-sizing border-box
            padding-bottom px2rem(30px)
            margin-right px2rem(20px)
            img
              width px2rem(216px)
              height px2rem(216px)
              background #F5F5F5
            .xinPinSingle
              width px2rem(216px)
              height px2rem(310px)
              box-sizing border-box
              margin-top px2rem(15px)
              font-size px2rem(24px)
              margin-right px2rem(20px)
              color #333
            .tejia
              border px2rem(1px) solid red
              border-radius px2rem(20px)
              font-size px2rem(20px)
              padding px2rem(5px) px2rem(10px)
              margin-left px2rem(-120px)
    //福利活动模块
    .activityModule
      width px2rem(750px)
      height px2rem(504px)
      background white
      box-sizing border-box
      margin px2rem(20px) 0 px2rem(20px)
      padding px2rem(30px) px2rem(26px)
      .activityList
        display flex
        flex-wrap wrap
        justify-content space-around
        .activityItem
          width px2rem(343px)
          height px2rem(220px)
          box-sizing box-sizing
          margin-bottom px2rem(10px)
          display: flex
          .activityItemLeft
            width px2rem(150px)
            height px2rem(220px)
            font-size px2rem(32px)
            box-sizing border-box
            margin px2rem(10px) px2rem(20px)
            .p1
              font-size px2rem(32px)
              margin-top px2rem(10px)
              color #333
            .p2
              margin-top px2rem(10px)
              font-size px2rem(24px)
              color #7F7F7F
            .p3
              margin-top px2rem(10px)
              font-size px2rem(24px)
              color red
          .activityItemRight
            width px2rem(150px)
            height px2rem(220px)
            .circle
              width px2rem(80px)
              height px2rem(80px)
              background #F3A74E
              border-radius 50%
              display flex
              align-items center
              flex-direction column
              justify-content center
              padding px2rem(10px)
              margin-top px2rem(20px)
              margin-left px2rem(45px)
              box-sizing border-box
              .p1
                width px2rem(80px)
                height px2rem(30px)
                font-size px2rem(22px)
                margin-top px2rem(10px)
                color #fff
              .p2
                width px2rem(80px)
                height px2rem(30px)
                font-size px2rem(20px)
                color #fff
            img
              width: 100%
              height: 100%
              margin-top: px2rem(-100px)
              margin-left: px2rem(-20px)





    //品牌制造商直供
    .manuFacturersSupplying
      width px2rem(750px)
      height px2rem(654px)
      background white
      margin-top px2rem(20px)
      .manuFacturersHeader
        display flex
        align-items center
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        .manuFacturers
          //display inline
          width px2rem(310px)
          height px2rem(42px)
          font-size px2rem(32px)
          color #333
          margin-left px2rem(30px)
        .more
          float right
          margin-left px2rem(300px)
          font-size px2rem(28px)
          display flex
      .manu
        width px2rem(750px)
        margin-top px2rem(-20px)
        .manuList
          display flex
          justify-content center
          align-items center
          box-sizing border-box
          flex-wrap wrap
          .manuListItem
            box-sizing border-box
            width px2rem(330px)
            height px2rem(264px)
            background #F5F5F5
            margin px2rem(4px)
            padding px2rem(20px)

            .bigtext
              color #333
              font-size px2rem(32px)
              padding-left px2rem(10px)
            .smalltext
              color #7F7F7F
              font-size px2rem(24px)
              padding-left px2rem(10px)
            .new
              display flex
              justify-content center
              align-items center
              img
                width px2rem(150px)
                height px2rem(150px)
                padding-right px2rem(4px)






    // 专题精选
    .topics
      width px2rem(750px)
      height px2rem(508px)
      background hotpink
      margin-top px2rem(20px)
      .topicsHeader
        display flex
        align-items center
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        .topicsChange
          //display inline
          width px2rem(310px)
          height px2rem(42px)
          font-size px2rem(32px)
          color #333
          margin-left px2rem(30px)
        .more
          float right
          margin-left px2rem(300px)
          font-size px2rem(28px)
          display flex



    // 众筹
    .zhongchouModule
      width px2rem(750px)
      height px2rem(611px)
      background white
      margin-top px2rem(20px)
      .zhongchouHeader
        display flex
        align-items center
        width px2rem(750px)
        height px2rem(100px)
        box-sizing border-box
        .zhongchou
          //display inline
          width px2rem(310px)
          height px2rem(42px)
          font-size px2rem(32px)
          color #333
          margin-left px2rem(30px)
        .more
          float right
          margin-left px2rem(300px)
          font-size px2rem(28px)
          display flex


      .zhongchouTop
        width px2rem(750px)
        height px2rem(240px)
        box-sizing border-box
        padding px2rem(30px) px2rem(30px) 0
        display flex
      .zhongchouTopRight
        width px2rem(450px)
        height px2rem(168px)
        margin-left px2rem(30px)
        .gift
          font-size px2rem(28px)
        .price
          font-size px2rem(32px)
          color red
        .progressWrap
          width px2rem(360px)
          height px2rem(6px)
          margin px2rem(20px) 0
          background #FEA438
          border-radius px2rem(5px)
          display inline-block
        .rate
          float right
          font-size px2rem(24px)
          color #7F7F7F
          margin-top px2rem(15px)
        .supportNum
          font-size px2rem(24px)
          color #333



    //分类
    .categoryModule
      width px2rem(750px)
      background white
      margin-top px2rem(20px)
      position relative
      .goodGrid
        width px2rem(750px)
        height px2rem(355px)
        margin-top px2rem(20px)
        .goodGridContainer
          width px2rem(750px)
          height px2rem(355px)
          box-sizing border-box
          padding px2rem(0px) px2rem(30px) px2rem(30px)
          .goodGridList
            width px2rem(720px)
            height px2rem(323px)
            display flex
            overflow hidden
            .goodGridListItem
              position relative
              z-index 1000
              flex-shrink 0
              width px2rem(200px)
              height px2rem(323px)
              margin-right px2rem(20px)
              img
                width px2rem(200px)
                height px2rem(200px)
                background #F4F4F4
              .miaoshu
                color #333
                font-size px2rem(24px)
                width px2rem(200px)
                height px2rem(72px)
                margin-top px2rem(20px)
              .price
                color red
                font-size px2rem(24px)
    //底部
    .footer
      width px2rem(750px)
      height px2rem(245px)
      background #414141
      margin-top px2rem(20px)
      display flex
      flex-direction column
      align-items center
      justify-content center
      .footerTop
        width px2rem(450px)
        height px2rem(62px)
        font-size px2rem(26px)
        color white
        display flex
        .downLoad
          width px2rem(171px)
          border px2rem(1px) solid white
          border-radius px2rem(5px)
          box-sizing border-box
          padding-left px2rem(25px)
          padding-top px2rem(15px)
        .dv
          width px2rem(50px)

        .pc
          width px2rem(171px)
          border px2rem(1px) solid white
          border-radius px2rem(5px)
          box-sizing border-box
          padding-left px2rem(50px)
          padding-top px2rem(15px)
      .footerBottom
        width px2rem(403px)
        font-size px2rem(20px)
        letter-spacing:2px
        color #999
        display flex
        flex-direction column
        align-items center
        margin-top px2rem(20px)
        .banquan
          margin px2rem(15px) 0
        .allow
          font-size px2rem(20px)

    .block
      width px2rem(750px)
      height px2rem(100px)
      background #fff

      
      


</style>
