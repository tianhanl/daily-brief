<template>
  <section class="news-card">
    <h2 class="news-name">{{newsNameTitle}}</h2>
    <div v-for="story in stories" class="news-item">
      <a :href="story.link">{{story.title}}</a>
    </div>
  </section>
</template>
<script>
var axios = require('axios');

export default {
  name: 'news-card',
  props: ['newsName'],
  created: function () {
    this.requestStories();
  },
  data: function () {
    return {
      stories: []
    }
  },
  computed: {
    newsNameTitle: function () {
      return this.newsName.split('-').join(' ');
      // remember to use this when accessing parameter
    }
  },
  methods: {
    requestStories: function () {
      var self = this;
      axios({
        method: 'get',
        url: '/api/news/' + self.newsName.split('-')[0],
      }).then(function (response) {
        self.stories = response.data;
      }).catch(function (response) {
        console.log(response);
      })
    }
  }
}
</script>
<style>
.news-card {
  border-left: 2px solid;
  text-align: left;
  padding: 1em;
  padding-top: 0;
  overflow: hidden;
}

.news-name {
  margin-top: 0;
  text-transform: capitalize;
}

.news-item {
  font-size: 1.25em;
  margin: 0.25em 0;
}

.news-item a {
  text-decoration: none;
}
</style>


