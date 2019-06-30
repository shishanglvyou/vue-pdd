<template>
  <div class="bottom-tab">
    <span class="tab-item" @click="switchTo('/home')">
      <img :src="$route.path.includes('/home')?tabBarImgArr[0].selected:tabBarImgArr[0].normal" alt="">
      <span :class="{on:$route.path.includes('/home')}">首页</span>
    </span>
    <span class="tab-item" @click="switchTo('/recommend')">
      <img :src="$route.path.includes('/recommend')?tabBarImgArr[1].selected:tabBarImgArr[1].normal" alt="">
      <span :class="{on:$route.path.includes('/recommend')}">推荐</span>
    </span>
    <span class="tab-item" @click="switchTo('/search')">
      <img :src="$route.path.includes('/search')?tabBarImgArr[2].selected:tabBarImgArr[2].normal" alt="">
      <span :class="{on:$route.path.includes('/search')}">搜索</span>
    </span>
    <span class="tab-item" @click="switchTo('/chat')">
      <img :src="$route.path.includes('/chat')?tabBarImgArr[3].selected:tabBarImgArr[3].normal" alt="">
      <span :class="{on:$route.path.includes('/chat')}">聊天</span>
    </span>
    <span class="tab-item" @click="switchTo('/mine')">
      <img :src="$route.path.includes('/mine')?tabBarImgArr[4].selected:tabBarImgArr[4].normal" alt="">
      <span :class="{on:$route.path.includes('/mine')}">个人中心</span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    data(){
      return{
        tabBarImgArr:[
          {
            normal:require('@/common/img/icon_home.png'),
            selected:require('@/common/img/icon_home_selected.png')
          },
          {
            normal:require('@/common/img/icon_intro.png'),
            selected:require('@/common/img/icon_intro_selected.png')
          },
          {
            normal:require('@/common/img/icon_search.png'),
            selected:require('@/common/img/icon_search_selected.png')
          },
          {
            normal:require('@/common/img/icon_chat.png'),
            selected:require('@/common/img/icon_chat_selected.png')
          },
          {
            normal:require('@/common/img/icon_mine.png'),
            selected:require('@/common/img/icon_mine_selected.png')
          }
        ]
      }
    },
    methods:{
      switchTo(path){
        this.$router.replace(path)
      }
    }
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
  .bottom-tab .on{
    color:red;
  }
</style>
