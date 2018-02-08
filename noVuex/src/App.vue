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
*{
  margin: 0; 
  padding: 0;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
b,h1,h2,h3,h4,h5,h6{
    font-weight:100;
}
html,body,#app{
  height: 100%; 
  width: 100%; 
  font-size:625%;
}
body{
  font-size: 12px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}

</style>
