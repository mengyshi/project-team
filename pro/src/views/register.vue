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
          @click-right-icon="$toast('question')"
        />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
      <van-radio-group v-model="radio" id="sex">
        性别：
        <van-radio name="1" icon-size="14px">男</van-radio>
        <van-radio name="2" icon-size="14px">女</van-radio>
      </van-radio-group>
      <van-cell-group>
        <!-- error-message="手机号格式错误" -->
        <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
        <van-field v-model="birthday" label="出生日期" placeholder="请输入出生年月" />
        <van-field v-model="birthday" label="身份证" placeholder="请输入身份证号" />
        <van-field v-model="birthday" label="省份" placeholder="请输入所在省份" />
        <van-field v-model="birthday" label="市区" placeholder="请输入所在市区" />
        <van-field v-model="birthday" label="邮箱" placeholder="请输入邮箱" />
      </van-cell-group>
    </div>
    <van-button type="primary" id="RegisterBtn" size="small" v-tap="{methods:registerBtn}">注册</van-button>
  </div>
</template>
<script>
import axios from "axios";
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
      birthday: ""
    };
  },
  methods: {
    registerBtn() {
      console.log(11);
      axios({
        url: "http://jha4m2.natappfree.cc/v2/api-docs/user/checkUserName",
        method: "get",
        params: { username: "aaa" }
      })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onClickLeft() {
      this.$toast("返回");
    }
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
#sex {
  display: flex;
  margin-left: 1rem;
}
#RegisterBtn {
  margin-left: 8rem;
  margin-top: 1.5rem;
}
</style>
