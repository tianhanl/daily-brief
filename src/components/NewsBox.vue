<template>
  <div class="news-box">
    <div class="news-box-head">
      <h1>Today's top stories</h1>
    </div>
    <div class="news-box-body">
      <news-card v-for="news in newsList" :news-name="news.name" :key="news.priority"></news-card>
    </div>
  </div>
</template>
script <script>
import config from '../config.js';
import NewsCard from './NewsCard.vue';
export default {
  name: 'news-box',
  components: {
    'news-card': NewsCard
  },
  data: function () {
    return {
      msg: 'test',
      newsList: config.newsList
    }
  }

}
</script>
<style>
.news-box {
  box-sizing: border-box;
  position: relative;
  flex: 2 1 60%;
  padding: 1em 1.5em;
  max-height: 100vh;
}

.news-box-body {
  max-height: 75vh;
}
</style>
