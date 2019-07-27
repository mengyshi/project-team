<template>
  <div>
    <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      placeholder="输入新密码"
      @click-left="onClickLeft"
    />
    <div id="updateMid">
      <van-cell-group>
        <van-field
          v-model="tel"
          required
          clearable
          label="手机号"
          placeholder="手机号"
          @blur="phoneTest"
        />
        <van-button type="primary" size="small" id="getVal" @click="getYzm">获取验证码</van-button>
        <van-field v-model="yzm" @blur="yzmTest" required clearable label="验证码" placeholder="验证码" />
        <van-field v-model="password1" type="password" label="密码" placeholder="输入新密码" required />
        <van-field
          v-model="password2"
          type="password"
          label="再次输入"
          placeholder="再次输入新密码"
          required
          @blur="pwd2"
        />
      </van-cell-group>
    </div>
    <van-button type="primary" size="small" id="updateBtn" @click="saveBtn">保存|修改</van-button>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      tel: "",
      yzm: "",
      password1: "",
      password2: "",
      info: "",
      code: "",
      code1: "",
      info1: "",
      code2: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    phoneTest() {
      let p = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
      if (!this.tel) {
        this.$toast("手机号不能为空");
      } else if (!p.test(this.tel)) {
        this.$toast("手机号输入不合法");
      }
    },
    // 点击  获取验证码   发起axios请求验证码
    // yzmTest() {
    // if(this.yanzhengma == )
    // },
    pwd1() {
      let p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      if (!this.password) {
        this.$toast("密码不能为空");
      } else if (!p.test(this.password)) {
        this.$toast("密码由8-16位数字和字母组成");
      }
    },
    pwd2() {
      if (this.password1 !== this.password2) {
        this.$toast("两次密码输入不一致");
      }
    },
    // 点击  获取验证码按钮  发起axios请求
    getYzm() {
      // axios
      //   .post("http://10.8.157.41:8080/user/sendCode", { tel: this.tel },
      //   )
      axios({
        url: "http://10.8.157.41:8080/user/sendCode",
        method: "post",
        data: { tel: this.tel },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],

        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
        .then(data => {
          console.log(data);
          console.log(this.tel);
          console.log(data.data.code);
          console.log(data.data.info);
          // 把请求得到的数据放到全局上   这样在其它函数中也可以访问操作
          this.info1 = data.data.info;
          this.code1 = data.data.code;
          if (this.yzm == data.data.info) {
            console.log("验证码匹配成功");
          }
          再次发起axios请求;
          axios
            .post("http://10.8.157.41:8080/user/sendCode", {
              tel: this.tel
            })
            .then(res => {
              console.log(res);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },
    yzmTest() {
      if (this.yzm == this.info1) {
        console.log("验证码输入成功");
      } else {
        this.$toast("验证码输入错误");
      }
    },
    // 更新密码 http://10.8.157.41:8080/user/updatePassword?tel=?&code=?&password=?
    saveBtn() {
      // 点击保存按钮把修改后的数据传给后台数据库
      axios({
        url: "http://10.8.157.41:8080/user/updatePassword",
        params: { tel: this.tel, code: this.code1, password: this.password1 }
      })
        .then(res => {
          console.log(res);
          console.log(res.data.code);
          this.code = res.data.code;
          if (this.code1 == 1) {
            this.$toast("密码修改成功");
            this.$router.push("/loginC");
          } else {
            this.$toast("密码修改失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  // mounted() {
  //   console.log(this.tel);
  // }
};
</script>
<style>
#updateMid {
  width: 20rem;
  height: 13rem;
  margin: 0 auto;
}
#getVal {
  float: right;
}
</style>
