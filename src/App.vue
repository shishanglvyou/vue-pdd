<template>
  <div id="app">
    <router-view/>
    <Tabbar/>
  </div>
</template>
<script>
  import Tabbar from './components/Tabbar/Tabbar'
  export default {
    name:'App',
    components:{
      Tabbar
    }
  }
</script>
<style>
#app{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
