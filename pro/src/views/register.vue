<template>
  <div id="wrap">
    <div id="con">
      <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @blur="userTest"
          @click-right-icon="$toast('用户名不能为空')"
        />
        <span v-show="false">此用户名已注册</span>
        <van-field
          v-model="password"
          type="password"
          label="密码"
          @blur="pwdTest"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
    </div>
    <van-button
      v-bind:disable="dis"
      type="primary"
      id="RegisterBtn"
      size="small"
      @click="registerBtn()"
    >注册</van-button>
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs"
export default {
  name: "Register",
  data() {
    return {
      checked: "",
      username: "",
      password: "",
      phone: "",
      radio: "",
      currentDate: new Date(),
      minDate: new Date(),
      birthday: "",
      dis: false
    }
  },
  methods: {
    
    // 用户名测试
    userTest() {
      if (!this.username) {
        this.$toast("用户名不能为空");
      }
      // } else {
      //   axios({
      //     // 用户名不允许重复
      //     url: "http://10.8.157.41:8080/user/checkUserName",
      //     params: { username: this.username }
      //   })
      //     .then(data => {
      //       console.log(data);
      //       if (data.data.code == 1) {
      //         this.$toast("此用户名已注册");
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // }
    },
    //密码测试
    pwdTest() {
      // 不能全部是数字   不能全部是字母   必须是数字或字母
      let p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      if (!this.password) {
        this.$toast("密码不能为空");
      } else if (!p.test(this.password)) {
        this.$toast("密码由8-16位数字和字母组成");
      }
    },
    registerBtn() {
      axios({
        url: "http://106.12.52.107:8081/MeledMall/user/register",
        method:"post",
        data:qs.stringify({phonenum: this.username, password: this.password })
      })
        .then(data => {
          console.log(data);
          console.log(this.username,this.password);
          if (data.data.code == 1) {
            this.$router.push("/loginC");
            localStorage.removeItem("userLoginInfo");
          }
        }).catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {

}
};
</script>
<style>
#wrap {
  position: relative;
  height: 36rem;
}
#con {
  width: 17rem;
  margin-left: 1.5rem;
}
/* #sex {
  display: flex;
  margin-left: 1rem;
} */
#RegisterBtn {
  /* margin-left: 5rem; */
  margin-top: 1.5rem;
}
</style>
