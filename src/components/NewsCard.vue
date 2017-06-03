<template>
  <div class="news-card">
    <h2 class="news-name">{{newsNameTitle}}</h2>
  </div>
</template>
<script>
export default {
  name: 'news-card',
  props: ['newsName'],
  computed: {
    newsNameTitle: function () {
      return this.newsName.split('-').join(' ');
      // remember to use this when accessing parameter
    }
  }
}
</script>
<style>
.news-card {
  border-left: 2px solid;
  text-align: left;
  padding: 1em;
}

.news-name {
  margin-top: 0;
  overflow: hidden;
  text-transform: capitalize;
}
</style>


