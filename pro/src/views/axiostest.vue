<template>
  <div class="main">
    加载测试
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" ref="showmsg" class="asd">
      <van-card
        ref="showmsg"
        v-for="(msga, id) in msg"
        :key="id"
        price="2.00"
        :desc="msga.pid"
        :title="msga.pname"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "axios",
  data() {
    return {
      msg: "",
      newmsg: "",
      pagenum: 2,
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      let that = this;
      axios({
        method: "get",
        url: `http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=1&pagenum=${that.pagenum}`
      }).then(function(data) {
        data.data.data.forEach((value, key) => {
          that.msg.push(value);
        });
        that.$toast("刷新成功");
        that.isLoading = false;
        that.pagenum++;
      });
    }
  },
  mounted() {
    let that = this;
    axios({
      method: "get",
      url:
        "http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=1&pagenum=1"
    }).then(function(data) {
      console.log(data.data.data);
      that.msg = data.data.data;
    });
  }
};
</script>

<style scope="">
.asd {
  overflow: auto;
}
</style>
