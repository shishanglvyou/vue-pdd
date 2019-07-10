<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" alt="" width="20px">
        <input ref="mySearch" type="search" placeholder="拼多多">
      </div>
      <button @click="isShowSearchPanel(false)">取消</button>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" alt="" width="25px">
        <span>热门搜索</span>
      </div>
      <ul class="search-list">
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
        <li>抽纸批发</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchPanel",
    props:{
      isShowSearchPanel:Function
    },
    mounted(){
      this.$refs.mySearch.focus()
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
  .search-nav{
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;

    align-items: center;
  }
  .search-input{
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ededed;
    width: 77%;
    height: 38px;
    border-radius: 30px;
    padding: 0 10px;
  }
  .search-input input{
    width: 90%;
    height: 90%;
    padding-left: 8px;
    font-size: 16px;
    background: transparent;
    outline: none;
    border: none;
  }
  .search-nav button{
    background: transparent;
    font-size: 16px;
    color: #aaa;
    border: none;
  }
  .search-content{
    padding: 15px;
  }
  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
    color:#aaa;
    margin-bottom: 10px;
  }
  .search-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .search-list li{
    background: #ededed;
    color: #aaa;
    margin:5px 10px;
    padding: 5px;
    border-radius: 8px;
    font-weight: lighter;
    font-size: 12px;
  }
</style>
