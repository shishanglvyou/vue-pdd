<template>
  <div class="search-nav">
    <a href="" class="search-nav-icon" @click.prevent="isShowSearchPanel(true)">
      <img src="../images/search.png" alt="" width="25px">
      <span>搜索</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SearchNav",
    props:{
      isShowSearchPanel:Function
    }
  }
</script>

<style scoped>
  .search-nav {
    width: 100%;
    height: 50px;
    background: #fff;
    position:fixed;
    top:0;
    left:0;
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-nav-icon{
    width: 80%;
    height: 70%;
    background: #f5f5f5;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-nav-icon span{
    color: #aaa;
    margin-left: 6px;
    font-size: 18px;
    font-weight: lighter;
  }
</style>
