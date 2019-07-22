<template>
  <div id="app">
    <van-tabbar v-model="active" :fixed="true">
      <van-tabbar-item icon="wap-home" to="/Recommend">推荐</van-tabbar-item>
      <van-tabbar-item icon="hot" to="">发现</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/ownpage">我的</van-tabbar-item>
    </van-tabbar>
    <div class="box">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  overflow: auto;
}
</style>
