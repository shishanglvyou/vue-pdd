<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" alt="" width="25px">
        <input type="search" placeholder="拼多多">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchPanel",
    props:{
      isShowSearchPanel:Function
    }
  }
</script>

<style scoped>
  .search-panel {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
    left:0;
    top:0;
    z-index: 1000;
  }
</style>
