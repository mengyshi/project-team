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
        <!-- center clearable label="短信验证码" -->
        <van-cell-group>
          <van-field v-model="sms" placeholder="请输入手机号">
            <van-button slot="button" size="small" type="primary">获取验证码</van-button>
          </van-field>
        </van-cell-group>
        <!-- 密码 -->
        <van-password-input :value="value" :mask="false" @focus="showKeyboard = true" />
        <!-- 数字键盘 -->
        <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        />
      </div>

      <div id="bottom">
        <van-button type="primary" id="loginBtn" size="small" v-tap="{methods:loginc}">登录</van-button>
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
export default {
  name: "Login",
  data() {
    return {
      checked: "",
      username: "",
      password: "",
      sms: "",
      value: "",
      mask: "",
      showKeyboard: true,
      config: {
        url: "http://www.baidu.com",
        source: "",
        title: "hello",
        description: "hi",
        image: "",
        sites: ["qq", "weibo", "wechat"],
        // disabled: ["google", "facebook", "twitter"],
        wechatQrcodeTitle: "微信扫一扫：分享",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  },
  methods: {
    loginc() {
      console.log(11);
      axios({
        url: "http://www.manman.com/api"
      }).then(data => {
        console.log(data);
      });
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
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
  margin: 0.5rem 6rem;
}
#login_bottom {
  font-size: 0.12rem;
  /* background: yellow; */
  /* line-height: 1rem; */
  margin-top: 1.6rem;
}
#login_bottom h6 {
  margin: 1rem 5.8rem;
}
#shares {
  margin-left: 5.5rem;
}
#login_bottom p {
  margin: 1rem 3.5rem;
}
</style>
