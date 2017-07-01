<template>
  <div id="account" class="box">
    <nav class="select">
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
.box {
  padding: 1rem;
}

.select {
  font-size: 1.5rem;
  display: flex;
  justify-content: space-around;
}

.select a:hover {
  transition: all;
  color: #2C3E50;
}

#account {
  margin: auto;
  max-width: 480px;
}

#account form {
  position: relative;
  overflow: hiddend;
  margin: auto;
  padding: 1rem;
}

#account input {
  display: block;
  padding: 0.5rem;
  margin: 0.5rem auto;
  width: 80%
}

#account button {
  display: block;
  width: 80%;
  margin: 1.5rem auto;
  background: white;
  padding: 0.5rem;
  border: solid 2px;
  border-radius: 4px;
}
</style>

