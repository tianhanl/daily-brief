<template>
  <div class="news-box">
    <h3>{{msg}}</h3>
  </div>
</template>
script <script>
export default {
  name: 'news-box',
  data: function () {
    return {
      msg: 'test'
    }
  }

}
</script>
<style>
.news-box {
  box-sizing: border-box;
  position: relative;
  flex: 2 1 60%;
  min-height: 100vh;
}
</style>


