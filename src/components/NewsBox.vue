<template>
  <div class="news-box">
    <div class="news-box-head">
      <h2>Today's top stories</h2>
    </div>
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
  padding: 1em;
}
</style>
