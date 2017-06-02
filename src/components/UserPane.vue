<template>
  <div class="user-pane">
    <div class="user-pane-head">
      <img :src="userAvatarSrc" class="user-avatar" alt="user avatar" />
      <h3 class="user-name">{{username}}</h3>
    </div>
    <section class="info-box">
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
    userLocation: {
      type: String,
      default: 'Guangzhou'
    }
  },
  data: function () {
    return {
      userAvatarSrc: require('../assets/avatar.png')
    }
  }

}
</script>
<style>
.user-pane {
  width: 30%;
  border: solid 1px;
  padding: 1em;
  box-sizing: border-box;
}

.user-pane-head {
  border-bottom: 2px solid;
}

.user-pane-head h3 {
  margin: 0.2em 0;
}

.user-pane .user-avatar {
  width: 120px;
  height: 120px;
}
</style>


