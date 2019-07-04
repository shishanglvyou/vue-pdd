<template>
  <div class="hot">
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index"><img :src="casual.imgurl" alt="" width="100%"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <hot-nav/>
    <div class="hot-ad">
      <img src="../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
    </div>
    <hot-shop-list/>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HotNav from './HotNav'
  import HotShopList from './HotShopList'
  import {
    mapState
  } from 'vuex'
  export default {
    name: "Hot",
    components:{
      HotNav,
      HotShopList
    },
    computed:{
      ...mapState(['homecasual'])
    },
    mounted() {
      this.$store.dispatch('reqHomeCasual');
      this.$store.dispatch('reqHomeNav');
      this.$store.dispatch('reqHomeShopList');
    },
    watch:{
      homecasual(){
        this.$nextTick(()=>{
          // 创建swiper实例
          new Swiper ('.swiper-container', {
            loop: true,
            autoplay:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style scoped>
  .hot {
    width: 100%;
    height: 100%;
    padding-top:43px;
  }
  .hot-ad{
    background: #fff;
    margin:8px 0;
    padding:5px;
  }
</style>
