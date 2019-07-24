<template>
  <div>
    <h3>仅作接口测试使用</h3>
    <p>api网址：http://10.8.157.4:8080/</p>
    <van-button type="default" @click="showcomment">测试：评论信息</van-button>
    <br />
    <van-button type="primary" @click="showtravel">测试：旅游攻略</van-button>
    <br />
    <van-button type="primary" @click="showgood">测试：点赞数量</van-button>
    <br />
    <input type="text" v-model="pagenum" />
    <van-button type="primary" @click="showpage">测试：旅游攻略分页</van-button>
    <br />
    <van-button type="primary" @click="showfangdong">测试：房东故事分页</van-button>
  </div>
</template>

<script>
import apitest from "../../static/apitestjs";
import axios from "axios";

export default {
  name: "apitest",
  data() {
    return {
      pagenum: 1
    };
  },
  methods: {
    showcomment() {
      axios({
        method: "get",
        url: "http://10.8.157.4:8080//hoststory/list.do"
      }).then(function(data) {
        console.log(data.data);
      });
    },
    showtravel() {
      axios({
        method: "get",
        url: "http://10.8.157.4:8080//triphotel/desc.do"
      }).then(function(data) {
        console.log(data.data);
      });
    },
    showgood() {
      axios({
        method: "get",
        url: "http://10.8.157.4:8080//hoststory/search.do?id=5"
      }).then(function(data) {
        console.log(data.data);
      });
    },
    showpage() {
      console.log(this.pagenum);
      let that = this;
      axios({
        method: "get",
        url: `http://10.8.157.4:8080//comment/list.do?page=${that.pagenum}&pagenum=4`
      })
        .then(function(data) {
          console.log(data.data);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    showfangdong() {
      let that = this;
      axios({
        method: "get",
        url: `http://10.8.157.4:8080//hoststory/list.do?page=${that.pagenum}`
      })
        .then(function(data) {
          console.log(data.data);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    apitest.asd();
  }
};
</script>

<style>
</style>
