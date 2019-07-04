<template>
  <div class="search">
    <search-nav/>
  </div>
</template>

<script>
  import searchNav from './children/SearchNav'
  export default {
    name: "Search",
    components:{
      searchNav
    }
  }
</script>

<style scoped>
  .search{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
</style>
