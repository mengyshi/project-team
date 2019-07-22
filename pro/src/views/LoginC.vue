<template>
  <div id="wrap">
    <!-- top  img -->
    <div id="login_top">
      <img src="../../static/imgs/login.jpg" alt />
    </div>
    <!-- top  img   end -->
    <!-- middle -->
    <div id="login_middle">
      <div id="top">
        <a href="./#/loginC">账号登录</a>
        <a href="./#/loginP">手机号登录</a>
        <a href="./#/register">去注册</a>
      </div>
      <div id="middle">
        <van-cell-group>
          <van-field
            v-model="loginForm.username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
          <van-field
            v-model="loginForm.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
      </div>

      <div id="bottom">
        <van-checkbox
          id="rememberPwd"
          v-model="checked"
          checked-color="#07c160"
          icon-size="12px"
        >记住密码</van-checkbox>
        <van-button type="primary" id="loginBtn" size="small" @click="loginc">登录</van-button>
        <a href="#" id="forgetPwd">忘记密码</a>
      </div>
    </div>
    <!-- middle   end-->

    <!-- bottom  -->
    <div id="login_bottom">
      <h6>首次登录即送88元</h6>
      <!-- 这里是 qq插件  其他方式登录 -->
      <share :config="config" id="shares"></share>
      <p>登录即代表您同意我们的服务协议和隐私政策</p>
    </div>
  </div>
  <!-- bottom  end-->
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      checked: "",
      username: "",
      password: "",
      config: {
        url: "http://www.baidu.com",
        source: "",
        title: "hello",
        description: "hi",
        image: "",
        sites: ["qq", "weibo", "wechat"],
        wechatQrcodeTitle: "微信扫一扫：分享",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      },
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    loginc() {
      let _this = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        axios({
          url: "http://www.manman.com/api",
          method: "post",
          data: _this.loginForm
        })
          .then(res => {
            console.log(res.data);
            // _this.userToken = "Bearer" + res.data.list.token;
            // console.log(_this.userToken);
            // console.log(res.data.list);
            let arr = res.data.list;
            console.log(arr);
            let i;
            console.log(_this.loginForm.username);
            console.log(_this.loginForm.password);
            var flag = false;
            for (i in arr) {
              let username = arr[i].username;
              let password = arr[i].password;
              if (
                _this.loginForm.username == username &&
                _this.loginForm.password == password
              ) {
                _this.$router.push("/index");
                console.log("登录成功");
                flag = true;
                return;
              }
            }
            if (!flag) {
              // alert("账号或密码错误");
              console.log("账号或密码错误");
            }
          })
          .catch(error => {
            console.log(error);
          });
      } //else  --end
    } //login() --end
  }
};
</script>
<style>
#wrap {
  position: relative;
  height: 36rem;
}
#login_top img {
  width: 20rem;
  height: 14rem;
  margin-top: -3.7rem;
}
#login_middle {
  width: 17rem;
  height: 16rem;
  margin-left: 1.5rem;
}
#top {
  display: flex;
}
#top h5 {
  margin: 1rem 0.8rem;
}
#top a {
  margin: 1rem 0.8rem;
  font-size: 12px;
}
#bottom {
  display: flex;
  /* margin: 1rem auto; */
  font-size: 0.12rem;
}
#rememberPwd {
  margin: -2rem 1.2rem;
}
#loginBtn {
  margin: 2rem 0;
}
#forgetPwd {
  margin: 3rem 2rem;
}
#login_bottom {
  font-size: 0.12rem;
  /* background: yellow; */
  margin-top: 1.6rem;
}
#login_bottom h6 {
  margin: 1rem 7rem;
}
#shares {
  margin-left: 5.5rem;
}
#login_bottom p {
  margin: 1rem 3.5rem;
}
</style>
