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
  export default {
    name: "Recommend",
    mounted() {
      this.$store.dispatch('reqRecommendShopList')
    },
    components:{
      ShopList
    },
    computed:{
      ...mapState(['recommendshoplist'])
    }
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
