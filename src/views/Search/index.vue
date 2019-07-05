<template>
  <div class="search">
    <search-nav/>
    <div class="shop">
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item" v-for="(goods,index) in searchgoods" :key="index">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop-wrapper">
        <ul ref="shopParent">
          <li class="shops-li" v-for="(goods,index1) in searchgoods" :key="index1">
            <div class="shops-title">
              <h4>{{goods.name}}</h4>
              <a href="">查看更多 </a>
            </div>
            <div class="phone-type" v-if="goods.tag==='phone'">
              <div class="phone-img" v-for="(phone,index) in goods.category" :key="index">
                <img :src="phone.icon" alt="" width="80%">
              </div>
            </div>
            <div class="shops-items" v-for="(item,index2) in goods.items" :key="index2">
              <img :src="item.icon" alt="">
              <span>{{item.title}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import searchNav from './children/SearchNav'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Search",
    data(){
      return{
        scrollY:0,
        rightDivTops:[],
      }
    },
    components: {
      searchNav
    },
    computed:{
      ...mapState(['searchgoods'])
    },
    mounted() {
      this.$store.dispatch('reqSearchGoods')
    },
    watch:{
      searchgoods(){
        this.$nextTick(()=>{
          this._initBScroll();
          this._initRightDivTops();
        })
      }
    },
    methods:{
      _initBScroll(){
        let leftScroll = new BScroll('.menu-wrapper',{
          scrollY: true,
          click: true
        });
        let rightScroll = new BScroll('.shop-wrapper',{
          scrollY: true,
          click: true
        });

      },
      _initRightDivTops(){
        const tempArr=[];
        let top=0;
        tempArr.push(top);
        let allLis=this.$refs.shopParent.getElementsByClassName('shops-li');
        Array.prototype.slice.call(allLis).forEach(li=>{
          top+=li.clientHeight;
          tempArr.push(top)
        });
        this.rightDivTops=tempArr;
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
    float: left;
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
