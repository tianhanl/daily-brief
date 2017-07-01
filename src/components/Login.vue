<template>
  <form id="login-form">
    <input type="text" name="username" v-model="username" placeholder="username">
    <input type="text" name="password" v-model="password" placeholder="password">
    <button @click="login">Log In</button>
  </form>
</template>

<script>
import http from '../http.js';

export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      if (this.username != '' && this.password != '') {
        this.toLogin();
      }
    },
    toLogin: function () {
      //   let loginParam = {
      //     account: this.username,
      //     password: this.password
      //   }
      //   http.login.then(function (response) {
      //     // succeed
      //     let expireDays = 1000 * 60 * 60 * 24 * 15;
      //     this.$router.push('/')
      //   }, function (response) {
      //     // error
      //     console.log(response);
      //   })
      // }
      http.setCookie('session', '12345', null);
      this.$router.push('/');
    }
  }
}
</script>

