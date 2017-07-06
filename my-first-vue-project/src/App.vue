<template>
  <div id="app">
    <!-- <h1>{{title}}</h1> -->
    <h1 v-text = "title"></h1>
    <input v-model="newItem" @keyup.enter="addNew">
    <ul>
      <!-- 此时 <li class = "thisisLiClass"> </li> -->
      <!-- <li v-for = "item in items" v-bind:class="liClass">  -->
      <li v-for = "item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
// 此时 调用Store 
import Store from './store' 
console.log(Store)
  export default {
    data () {
      return {
        title: 'this is a todolist',
        items: Store.fetch(),
        newItem:''
      }
    } ,//end data
    watch:{
      items:{
        handler:function(items){
          Store.save(items)
        },
        deep:true
      }
    },
    methods:{
      toggleFinish: function(item){
        item.isFinished = !item.isFinished;
      },
      addNew:function(){
        this.items.push({
          label: this.newItem,
          isFinished: false
        });
        this.newItem = '';
      }
    }//end methods

  }

</script>

<style>
  .finished{
    text-decoration: underline;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
