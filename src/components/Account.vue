<template>
  <div id="account-box">
    <nav class="account-select">
      <a href="#register" @click="showRegister">Register</a>
      <a href="#login" @click="showLogin">Log In</a>
    </nav>
  
    <register v-if="isRegister"></register>
    <login v-else></login>
  
  </div>
</template>
<script>
var axios = require('axios');
import login from './Login.vue';
import register from './Register.vue';

export default {
  data: function () {
    return {
      isRegister: true
    }
  },
  components: {
    'login': login,
    'register': register
  },
  methods: {
    showRegister: function () {
      this.isRegister = true;

    },
    showLogin: function () {
      this.isRegister = false;
    },
    register: function () {
    }
  }
}

</script>
<style>

</style>

