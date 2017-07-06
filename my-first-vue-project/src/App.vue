<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
    <!-- <h1>{{title}}</h1> -->
    <h1 v-text = "title2"></h1>
    <h1 v-html = "title2"></h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'this is a todolist',
        title2: '<span>?<span>this is a todolist - v-text & v-html 的区别'
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
