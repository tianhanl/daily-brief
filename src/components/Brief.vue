<template>
  <div class="brief">
    <user-card></user-card>
    <weather-card></weather-card>
    <news-box></news-box>
  </div>
</template>
<script>
import NewsBox from './NewsBox';
import UserCard from './UserCard';
import WeatherCard from './WeatherCard';
export default {
  components: {
    'news-box': NewsBox,
    'user-card': UserCard,
    'weather-card': WeatherCard
  }
}
</script>

