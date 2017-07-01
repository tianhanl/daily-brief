<template>
  <div class="brief">
    <button @click="logout">logout</button>
    <user-card></user-card>
    <weather-card></weather-card>
    <!--<news-box></news-box>-->
  </div>
</template>
<script>
import http from '../http.js';
// import NewsBox from './NewsBox.vue';
import UserCard from './UserCard.vue';
import WeatherCard from './WeatherCard.vue';
export default {
  name: 'Brief',
  components: {
    // 'news-box': NewsBox,
    'user-card': UserCard,
    'weather-card': WeatherCard
  },
  methods: {
    logout: function () {
      http.removeCookie('session');
      this.$router.push('/account');
      return false;
    }
  }
}
</script>
<style>
.brief {
  max-width: 960px;
  margin: auto;
}

.card {
  margin: auto;
  max-width: 80%;
  border: 2px solid;
  border-radius: 2em;
  padding: 1em;
  margin-bottom: 2em;
}
</style>


