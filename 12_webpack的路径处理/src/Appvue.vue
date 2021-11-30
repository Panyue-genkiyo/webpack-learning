<template>
  <div>
    <h1 class="title">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'AppVue',
    data() {
      return {
        msg: 'Welcome to Your Vue.js deeded'
      }
    }
  }
</script>

<style scoped>
   .title{
     color: blue;
   }
</style>