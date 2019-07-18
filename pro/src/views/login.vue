<template>
  <div>
    <van-nav-bar title="登录" :fixed="true" />
    <div id="inner">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <van-button type="primary" id="loginBtn" @click="login">登录</van-button>
    <van-button type="info" id="registBtn" to="register">注册</van-button>
    <van-button type="info" @click="test()">测试post</van-button>
    <hr />
    <!--获取store数据  -->
    <h3>{{this.$store.state.count}}</h3>
    <h3>{{this.$store.state.info.counts}}</h3>
    <h3>间接获取{{count}}</h3>
    <h3>获取getters数据{{count1}}</h3>
    <van-button type="info" @click="tap1()">修改state数据</van-button>
    <van-button type="info" @click="tap2()">调用actions 异步</van-button>
    <van-button type="info" @click="jian()">调用actions 语法糖</van-button>
    <van-button type="info" @click="login(username)">调用actions 语法糖</van-button>
  </div>
</template>
<script>
// import axios from "axios";
// import qs from "qs";
// import { mapState, mapGetters, mapActions } from "vuex";
// export default {
//   name: "Login",
//   data() {
//     return {
//       username: "",
//       password: ""
//     };
//   },
//   computed: {
//     ...mapState(["count"]),
//     ...mapGetters(["count1"])
//   },
//   methods: {
//     ...mapActions(["jian", "login"]),
//     test() {
//       axios({
//         method: "post",
//         url: "http://localhost:3000/axiosTest",
//         data: qs.stringify({
//           title: "hello"
//         }),
//         headers: { "Content-Type": "application/x-www-form-urlencoded" }
//       }).then(data => {
//         console.log(data.data);
//       });
//     },
//     tap1() {
//       this.$store.commit("add");
//     },
//     tap2() {
//       this.$store.dispatch("jian");
//     },
//     login1() {
//       this.$store.commit("login", this.username);
//       this.$router.push("/index");
//     }
//   }
// };
</script>
<style>
#inner {
  margin-top: 46px;
}
</style>
