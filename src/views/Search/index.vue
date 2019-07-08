<template>
  <div class="search">
    <search-nav :isShowSearchPanel="isShowSearchPanel"/>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item"
              v-for="(goods, index) in searchgoods"
              :key="index"
              :class="{current: index === currentIndex}"
              @click="clickLeftItem(index)"
              ref = 'menulist'>
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul ref="shopsParent">
          <li class="shops-li" v-for="(goods,index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 </a>
            </div>
            <!--<ul class="phone-type" v-if="goods.tag==='phone'">-->
              <!--<li class="phone-img" v-for="(phone,index) in goods.category" :key="index">-->
                <!--<img :src="phone.icon" alt="" width="70%">-->
              <!--</li>-->
            <!--</ul>-->
            <ul class="shops-items">
              <li v-for="(item,index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <search-panel v-if="isShow" :isShowSearchPanel="isShowSearchPanel"/>
  </div>
</template>

<script>
  import searchNav from './children/SearchNav'
  import searchPanel from './children/searchPanel'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Search",
    data(){
      return{
        scrollY:0,
        rightLiTops:[],
        isShow:false,
      }
    },
    mounted() {
      this.$store.dispatch('reqSearchGoods')
    },
    components: {
      searchNav,
      searchPanel
    },
    computed:{
      ...mapState(['searchgoods']),
      //  1. 用于动态决定左侧哪个选项被选中
      currentIndex() {
        // 1.1 获取数据
        const {scrollY, rightLiTops} = this;
        // 1.2  取出索引
        return rightLiTops.findIndex((liTop, index) => {
          this._leftScroll(index);
          return scrollY >= liTop && scrollY < rightLiTops[index + 1];
        })
      }
    },
    watch:{
      searchgoods(){
        this.$nextTick(()=>{
          this._initBScroll();
          this._initRightLiTops();
        })
      }
    },
    methods:{
      _initBScroll(){
        this.leftScroll = new BScroll('.menu-wrapper',{
          scrollY: true,
          click: true
        });
        this.rightScroll = new BScroll('.shop-wrapper',{
          scrollY: true,
          click: true,
          probeType:3
        });
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y);
          //console.log(this.scrollY);
        })
      },
      _initRightLiTops(){
        const tempArr=[];
        let top=0;
        tempArr.push(top);
        let allLis=this.$refs.shopsParent.getElementsByClassName('shops-li');
        Array.prototype.slice.call(allLis).forEach(li=>{
          top+=li.clientHeight;
          tempArr.push(top)
        });
        this.rightLiTops=tempArr;
        console.log(tempArr);
      },
      // 1.3  点击切换
      clickLeftItem(index) {
        this.scrollY = this.rightLiTops[index];
        this.rightScroll.scrollTo(0, -this.scrollY, 300);
      },

      // 1.4 左侧联动
      _leftScroll(index){
        let menuLists = this.$refs.menulist;
        // console.log(menuLists);
        let el = menuLists[index];
        // console.log(el);
        this.leftScroll.scrollToElement(el, 300, 0, -100)
      },
      isShowSearchPanel(flag){
        this.isShow=flag
      }
    }
  }
</script>

<style scoped>
  .search {
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }

  .shop {
    display: flex;
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
    background: #fff;
    overflow: hidden;
  }

  .menu-wrapper {
    background: #f5f5f5;
    width: 80px;
  }

  .menu-item {
    width: 100%;
    height: 50px;
    background: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    color: #666;
    position: relative;
  }

  .current {
    color: #e02e24;
  }

  .current::before {
    content: '';
    background: #e02e24;
    width: 4px;
    height: 25px;
    position: absolute;
    left: 0;
  }
  .shop-wrapper{
    flex: 1;
    background: #fff;
  }
  .shop-wrapper ul{
    overflow: hidden;
  }
  .shops-title{
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    height: 44px;
    align-items: center;
    justify-content: space-between;
    color: #999999;
  }
  .shops-title a{
    color: #999;
    font-weight: lighter;
  }
  .shops-items{
    display: flex;
    flex-wrap: wrap;
  }
  .shops-items li{
    display: flex;
    flex-direction: column;
    width: 33.3%;
    height: 90px;
    justify-content: center;
    align-items: center;
    color:#333;
    font-size: 14px;
    font-weight: lighter;
  }
  .shops-items img{
    width: 60%;
    height: 60%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  .phone-type{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .phone-img{
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:5px 0;
  }
</style>
