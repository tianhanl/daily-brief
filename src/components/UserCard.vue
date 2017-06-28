<template>
  <div class="user-card card">
    <img :src="userAvatarSrc" class="user-avatar" alt="user avatar">
    <h3>Welcome, {{username}}</h3>
  </div>
</template>
<script>
import config from '../config.js';

export default {
  props: {
    username: {
      type: String,
      default: 'test'
    },
  },
  data: function () {
    return {
      // provide default image for avatar
      userAvatarSrc: require('../assets/avatar.png'),

    }
  }
}
</script>
<style>
.user-avatar {
  width: 120px;
  height: 120px;
}
</style>
