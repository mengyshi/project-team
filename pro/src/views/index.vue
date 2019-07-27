<template>
  <div id="app">
    <div class="box">
      <router-view />
    </div>
    <van-tabbar v-model="active" :fixed="true">
      <van-tabbar-item icon="wap-home" to="/Recommend">推荐</van-tabbar-item>
      <van-tabbar-item icon="hot" to="/find">发现</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/ownpage">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  },
  mounted() {
    console.log(this.$route.path)
    if (this.$route.path == "/find") {
      this.active = 1;
    }
    if (this.$route.path=='/order') {
      this.active = 2;
    }
    if (this.$route.path == "/ownpage") {
      this.active = 3;
    }
    if(this.$route.path=='/Recommend'){
      this.active=0;
    }
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

