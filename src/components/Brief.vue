<template>
  <div class="brief">
    <user-card :username="username" :avatar-src="avatarSrc"></user-card>
    <!--<weather-card></weather-card>-->
    <!--<news-box></news-box>-->
  </div>
</template>
<script>
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
  computed: {
    username: function () {
      return this.$store.state.userConfig.username || 'user';
    },
    avatarSrc: function () {
      return this.$store.state.userConfig.userSrc || require('../assets/avatar.png');
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


