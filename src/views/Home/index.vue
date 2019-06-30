<template>
  <div class="home">
    <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" class="fix"/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        selectedId:0,
        items:[
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options:{
          activeColor:'#e9232c'
        },
        subRouterUrl:[
          '/home/hot',
          '/home/dress',
          '/home/box',
          '/home/mbaby',
          '/home/general',
          '/home/food',
          '/home/shirt',
          '/home/man',
          '/home/ele',
        ]
      }
    },
    methods:{
      handleChange(item,index){
        //console.log(item,index)
        this.$router.replace(this.subRouterUrl[index])
      }
    }
  }
</script>

<style scoped>
  .home {
    height: 100%;
    width: 100%;
  }
  .fix{
   position: fixed;
    top:0;
    left:0;
    z-index:9;
  }

</style>
