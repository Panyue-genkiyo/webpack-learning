<template>
   <div id="app">
      <h1 class="title">{{ msg }}</h1>
   </div>
</template>


<script>
  export default {
     data(){
       return {
         msg: 'welcome to js learning'
       }
     }
  }
</script>

<style  scoped lang="less">
    .title{
      color: red;
    }
</style>