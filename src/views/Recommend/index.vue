<template>
  <div class="recommend-container" v-if="recommendshoplist.length>0">
    <ul class="recommend">
      <shop-list tag="li" v-for="(item,index) in recommendshoplist" :item="item" :key="index"/>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ShopList from '@/components/ShopList/ShopList'
  import BScroll from 'better-scroll';

  import {Indicator} from 'mint-ui';
  export default {
    name: "Recommend",
    data() {
      return {
        page: 1,
        count: 10
      }
    },
    mounted() {
      Indicator.open('正在加载数据...');
      this.$store.dispatch('reqRecommendShopList',{
        page: this.page, count: this.count, callback: () => {
          Indicator.close();
        }
      })
    },
    components:{
      ShopList
    },
    computed:{
      ...mapState(['recommendshoplist'])
    },
    watch: {
      recommendshoplist() {
        this.$nextTick(() => {
          // 让当前的页码+1
          this.page += 1;
          // 初始化
          this._initBScroll();
        })
      }
    },
    methods: {
      _initBScroll() {
        // 1.1 初始化
        this.listScroll = new BScroll('.recommend-container', {
          scrollY: true,
          probeType: 3
        });

        // 1.2 监听列表的滚动
        this.listScroll.on('touchEnd', (pos) => {
          // 1.2.1 监听下拉
          /* console.log(pos.y);
           console.log(this.listScroll.maxScrollY);*/
          if (pos.y >= 50) {
            console.log('下拉刷新');
          }
          // 1.2.2 监听上拉
          if (this.listScroll.maxScrollY > pos.y + 20) {
            console.log(this.page);
            console.log('上拉加载更多');
            Indicator.open('正在加载数据...');
            this.$store.dispatch('reqRecommendShopList', {page: this.page, count: this.count, callback: ()=>{
                Indicator.close();
              }});
          }
        });

        // 1.3 列表滚动结束
        this.listScroll.on('scrollEnd', () => {
          this.listScroll.refresh();
        });
      }
    },
  }
</script>

<style scoped>
  .recommend-container {
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  .recommend{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #f5f5f5;
    margin-bottom: 50px;
  }
</style>
