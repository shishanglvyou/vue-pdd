<template>
  <div class="recommend-container">
    <ul class="recommend">
      <li class="recommend-item">

      </li>
    </ul>
  </div>
</template>

<script>
  import mapState from 'vuex'

  export default {
    name: "Recommend",
    mounted() {
      this.$store.dispatch('reqRecommendShopList')
    }
  }
</script>

<style scoped>
  .recommend-container {
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
</style>
