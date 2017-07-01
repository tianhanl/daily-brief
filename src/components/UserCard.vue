<template>
  <div class="user-card card">
    <h2 class="card-name">User</h2>
    <img :src="avatarSrc" class="user-avatar" alt="user avatar">
    <h3>Welcome, {{username}}</h3>
  </div>
</template>
<script>
import config from '../config.js';

export default {
  computed: {
    username: function () {
      return this.$store.state.userConfig.username ? this.$store.state.userConfig.username : 'N/A';
    },
    avatarSrc: function () {
      return this.$store.state.userConfig.avatarSrc ? this.$store.state.userConfig.avatarSrc : '#';
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
