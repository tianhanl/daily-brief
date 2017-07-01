<template>
  <div class="card weather-card">
    <h2 class="card-name">Weather</h2>
    <p>
      Current Weather is {{weatherText}}
      <br> Current Temperatur is {{temperatureText}}
    </p>
  </div>
</template>
<script>
import http from '../http.js';
export default {
  data: function () {
    return {
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
      let self = this;
      // remember to store this, since this in axios is different

      http.getWeather().then(function (response) {
        let weatherResult = response.data.results[0];
        self.weatherText = weatherResult.now.text;
        self.temperature = weatherResult.now.temperature;
      }, function (response) {
        console.log(response);
      });
    }
  }
}
</script>

