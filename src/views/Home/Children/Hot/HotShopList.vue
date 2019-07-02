<template>
  <div class="shop-container">
    <ul class="shop-lst">
      <li class="shop-list-item">
        <img src="../../imgs/shop_list/shop_item.png" width="100%" alt=""/>
        <h4 class="list-item-title">【29.9元限时抢，抢完恢复49.8元】黑色网纱七分袖时尚套装2019春夏新款阔腿裤两件套气质洋气收腰女</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥26.9</span>
          <span class="item-counter">已拼5320件</span>
          <span class="item-user">
            <img src="../../imgs/shop_list/user1.jpg"/>
            <img src="../../imgs/shop_list/user2.jpg"/>
          </span>
          <span class="item-buy">
            <button>去拼单</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HotShopList"
  }
</script>

<style scoped>
  .shop-container {
    margin-bottom: 50px;
    background: #f5f5f5;
  }
  .shop-list-item {
    margin-bottom: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }
  .list-item-title{
    line-height: 22px;
    width: 94%;
    margin-left:3%;
    height: 44px;
    overflow: hidden;
  }
  .list-item-bottom{
    margin:10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .item-price{
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color:red;
    flex:1;
  }
  .item-counter{
    flex:2;
    font-size: 16px;
    color:#ccc;
  }
  .item-user{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .item-user img{
    width: 40px;
    border-radius: 50%;
  }
  .item-user img:nth-child(2){
    margin-left:-6px;
  }
  .item-buy{
    flex: 2;
  }
  .item-buy button{
    width: 80%;
    height: 34px;
    border:none;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:10px;
    background: red;
    border-radius: 8px;
  }
</style>
