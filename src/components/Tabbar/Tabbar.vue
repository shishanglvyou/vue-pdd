<template>
  <div class="bottom-tab">
    <span class="tab-item">
      <img src="@/common/img/icon_home.png" alt="">
      <span>首页</span>
    </span>
    <span class="tab-item">
      <img src="@/common/img/icon_intro.png" alt="">
      <span>推荐</span>
    </span>
    <span class="tab-item">
      <img src="@/common/img/icon_search.png" alt="">
      <span>搜索</span>
    </span>
    <span class="tab-item">
      <img src="@/common/img/icon_chat.png" alt="">
      <span>聊天</span>
    </span>
    <span class="tab-item">
      <img src="@/common/img/icon_mine.png" alt="">
      <span>个人中心</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  .bottom-tab {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    left:0;
    bottom: 0;
    display: flex;
    z-index:999;
  }
  .bottom-tab .tab-item{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
  .bottom-tab .tab-item img{
    width: 35%;
    margin-bottom: 2px;
  }
</style>
