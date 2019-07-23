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
            v-model="username"
<<<<<<< HEAD
=======
            value="username"
>>>>>>> dev-mm
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
<<<<<<< HEAD
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
=======
          <van-field
            v-model="password"
            ref="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
>>>>>>> dev-mm
        </van-cell-group>
      </div>

      <div id="bottom">
        <van-checkbox
          id="rememberPwd"
          v-model="checked"
          @click="rememberPwd"
          checked-color="#07c160"
          icon-size="12px"
        >记住密码</van-checkbox>
        <van-button type="primary" id="loginBtn" size="small" @click="loginc">登录</van-button>
        <a href="./#/update" id="forgetPwd">忘记密码</a>
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
      mmInfo: [],
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
<<<<<<< HEAD
      },
      username: "",
      password: ""
=======
      }
>>>>>>> dev-mm
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    loginc() {
      if (this.username === "" || this.password === "") {
        alert("账号或密码不能为空");
      } else {
        axios({
          url: "http://10.8.157.41:8080/user/login",
          params: {
            username: this.username,
            password: this.password
          }
        })
          .then(data => {
            console.log(data);
<<<<<<< HEAD
            if (data.status == 200) {
              // if(){
              //   this.$router.push({ path: "/index" });
              // }else{
              //   this.$toast("账号或密码输入错误")
              // }
              this.$router.push({ path: "/index" });
=======
            if (data.data.code == 1) {
              this.$router.push({ path: "/index" });
            } else {
              this.$toast("账号或密码输入错误");
>>>>>>> dev-mm
            }

            let arr = data.list;
            console.log(arr);
            let i;
            console.log(_this.loginForm.username);
            console.log(_this.loginForm.password);
            var flag = false;
            for (i in arr) {
              let username = arr[i].username;
              let password = arr[i].password;
              if (_this.username == username && _this.password == password) {
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
    }, //login() --end

    rememberPwd() {
      this.checked = true;
      // 账号密码保存到localStorage中
      localStorage.setItem(
        "userLoginInfo",
        JSON.stringify({
          username: this.username,
          password: this.password
        })
      );
    }
  },
  mounted() {
    // 当用户进入浏览器时,首先判断localStorage中是否有“userLoginInfo”，
    // 如果有数据就加载到对应的标签元素位置   这个操作应该放在mounted中
    this.mmInfo = JSON.parse(localStorage.getItem("userLoginInfo"));
    console.log(this.mmInfo);
    console.log(this.mmInfo.password);
    console.log(this.mmInfo.username);
    if (localStorage.getItem("userLoginInfo") !== null) {
      this.username = this.mmInfo.username;
      this.password = this.mmInfo.password;
      console.log(this.username);
      console.log(this.password);
    }
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
  margin-left: 3rem;
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
/* #shares {
  margin-left: 2rem;
} */
#login_bottom p {
  margin: 1rem 3.5rem;
}
</style>
