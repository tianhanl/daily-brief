<template>
  <form id="login-form">
    <input type="text" name="username" v-model="username" placeholder="username" />
    <input type="text" name="password" v-model="password" placeholder="password" />
    <button @click="login">Log In</button>
  </form>
</template>

<script>
var axios = require('axios');

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
      let loginParam = {
        account: this.username,
        password: this.password
      }
      axios({
        method: 'get',
        url: './api/account',
        params: loginParam
      }).then(function (response) {
        // succeed
        let expireDays = 1000 * 60 * 60 * 24 * 15;
        this.$router.push('/brief')
      }, function (response) {
        // error
        console.log(response);
      })
    }
  }
}
</script>

