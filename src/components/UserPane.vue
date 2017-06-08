<template>
  <div class="user-pane">
    <div class="user-pane-head">
      <img :src="userAvatarSrc" class="user-avatar" alt="user avatar" />
  
      <h3>Welcome, {{username}}</h3>
  
    </div>
    <section class="info-box">
      <h3>Hi, we prepared some info for you</h3>
      <p>
        Current Weather is {{weatherText}}
        <br/> Current Temperatur is {{temperatureText}}
      </p>
    </section>
  </div>
</template>
<script>
var axios = require('axios')

import config from '../config.js';

export default {
  props: {
    username: {
      type: String,
      default: 'test'
    },
    userLocation: {
      type: String,
      default: 'Guangzhou'
    }
  },
  data: function () {
    return {
      userAvatarSrc: require('../assets/avatar.png'),
      weatherText: 'N/A',
      temperature: 'N/A'
    }
  },
  computed: {
    temperatureText: function () {
      return this.temperature + '°c'
    }
  },
  created: function () {
    this.updateWeather();
  },
  methods: {
    updateWeather: function () {
      var self = this;
      // remember to cache this, since this in axios is different
      axios({
        method: 'get',
        url: '/api/weather',
      }).then(function (response) {
        var weatherResult = response.data.results[0];
        self.weatherText = weatherResult.now.text;
        self.temperature = weatherResult.now.temperature;
      }).catch(function (response) {
        console.log(response);
      })
    }
  }
}
</script>
<style>
.user-pane {
  width: 30%;
  padding: 1em;
  box-sizing: border-box;
  text-align: right;
  max-height: 100vh;
}

.user-pane-head {
  border-bottom: 2px solid;
}

.user-pane-head h3 {
  margin: 0.2em 0 0.2em;
}

.user-pane .user-avatar {
  width: 120px;
  height: 120px;
}

.user-pane .info-box {
  margin-top: 2em;
}
</style>


