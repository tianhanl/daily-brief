<template>
  <form id="account-registration-form">
    <input type="text" name="username" placeholder="username" />
    <input type="text" name="password" placeholder="password" />
    <button @click="register">Register</button>
  </form>
</template>
<script>
let axios = require('axios');
export default {
  data: function () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    register: function () {
      if (this.username != '' && this.password != '') {
        this.toRegister();
      }
    },
    toRegister: function () {
      let registerParam = {
        username: this.username,
        password: this.password
      }
      axios({
        url: './api/account',
        method: 'post',
        params: registerParam
      }).then(function (response) {
        // succeed
        let expireDays = 1000 * 60 * 60 * 24 * 15;
        //登录成功后
        this.$router.push('/brief');
      }, function (response) {
        // error
        console.log(response);
      })
    }
  }

}
</script>

