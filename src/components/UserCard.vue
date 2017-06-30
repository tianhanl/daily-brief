<template>
  <div class="user-card card">
    <img :src="avatarSrc" class="user-avatar" alt="user avatar">
    <h3>Welcome, {{username}}</h3>
  </div>
</template>
<script>
import config from '../config.js';

export default {
  props: {
    username: {
      type: String,
      required: true
    },
    avatarSrc: {
      type: String,
      required: true
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
