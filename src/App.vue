<template>
  <div id="app">
    <user-pane :username="username" :userLocation="userLocation"></user-pane>
    <news-box></news-box>
  </div>
</template>

<script>
import UserPane from './components/UserPane.vue';
import NewsBox from './components/NewsBox.vue';
import config from './config.js';

export default {
  name: 'app',
  data: function () {
    return {
      username: config.username,
      userLocation: config.userLocation,
    };
  },
  components: {
    'user-pane': UserPane,
    'news-box': NewsBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
  color: #2c3e50;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  padding: 1em;
  overflow: hidden;
  height: 100vh;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
