<template>
  <div id="account-box">
    <nav class="account-select">
      <a href="#" @click="showRegister">Register</a>
      <a href="#" @click="showLogin">Log In</a>
    </nav>
    <component :is="currentView"></component>
  
  </div>
</template>
<script>
var axios = require('axios');
import login from './Login.vue';
import register from './Register.vue';

export default {
  data: function () {
    return {
      currentView: 'login'
    }
  },
  components: {
    'login': login,
    'register': register
  },
  methods: {
    showRegister: function () {
      this.currentView = 'register';
      return false;

    },
    showLogin: function () {
      this.currentView = 'login';
      return false;
    }
  }
}

</script>
<style>

</style>

