<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
 
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix::after{
  content: '';
  clear: both;
  display: block;
  width: 100%;
  height: 0;
}
 .footer{
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
 }
</style>
