<template>
  <div id="app">
    <user-pane></user-pane>
    <news-box></news-box>
  </div>
</template>

<script>
import UserPane from './components/UserPane.vue';
import NewsBox from './components/NewsBox.vue';

export default {
  name: 'app',
  data() {
    return {
    }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
