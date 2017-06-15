<template>
  <div id="account-box">
    <nav class="account-select">
      <a href="#register" @click="showRegister">Register</a>
      <a href="#login" @click="showLogin">Log In</a>
    </nav>
    <form id="account-registration-form" v-if="isRegister">
      <input id="username-register" type="text" name="username" placeholder="username" />
      <input id="password-register" type="text" name="password" placeholder="password" />
      <button @click="isRegister">Register</button>
    </form>
    <form id="account-login-form" v-else>
      <input id="username-login" type="text" name="username" placeholder="username" />
      <input id="password-login" type="text" name="password" placeholder="passowr " />
      <button @click="login">Log In</button>
    </form>
  </div>
</template>
<script>
var axios = require('axios');

export default {
  data: function () {
    return {
      isRegister: true
    }
  },
  methods: {
    showRegister: function () {
      this.isRegister = true;

    },
    showLogin: function () {
      this.isRegister = false;
    },
    register: function () {
    },
    login: function () {

    }
  }
}

</script>
<style>

</style>

