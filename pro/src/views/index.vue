<template>
  <div id="app">
    <div class="box">
      <router-view />
    </div>
    <van-tabbar v-model="active" :fixed="true">
      <van-tabbar-item icon="wap-home" to="/Recommend">推荐</van-tabbar-item>
      <van-tabbar-item icon="hot" to>发现</van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/ownpage">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<!-- <script src="../assets/zepto.js" type="text/javascript" charset="utf-8"></script>
<script src="../assets/iscroll.js" type="text/javascript" charset="utf-8"></script> -->

<script>
// import iscroll from "../assets/iscroll.js";
// var myscroll = new iscroll("section", {
//   click: true
// });
// $(document).on("touchend", function() {
//   if (myscroll.y > 50) {
//     console.log("下拉刷新");
//   }
//   if (myscroll.y < myscroll.maxScrollY - 50) {
//     console.log("上拉加载");
//   }
// });
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

