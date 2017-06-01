<template>
  <div class="user-pane">
    <div class="user-pane head">
      <img :src="userAvatarSrc" class="user-avatar" alt="user avatar" />
      <h3 class="user-name">{{username}}</h3>
    </div>
    <section class="user-pane info-box">
      <h3>Welcome {{username}}</h3>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      default: 'test'
    },
    userAvatarSrc: {
      type: String,
      default: require('../assets/logo.png')
    }
  }
}
</script>
<style>

</style>


