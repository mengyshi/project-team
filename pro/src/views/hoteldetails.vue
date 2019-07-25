<template>
  <div class="main">
    <!-- 头部信息 -->
    <div>
      <van-nav-bar
        :title="hotelname"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight($event)"
        class="header-main"
      >
        <van-icon :name="iconcollect" slot="right" />
      </van-nav-bar>
    </div>

    <!-- 中部导航 -->
    <van-tabs v-model="active" @click="changeshow">
      <van-tab title="酒店预订">
        <router-view></router-view>
      </van-tab>
      <van-tab title="住客评价">
        <router-view></router-view>
      </van-tab>
      <van-tab title="其他酒店">
        otherhotel
        <span>直接跳转至酒店列表页</span>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import hotelbook from "../components/hotelbook";
import axios from "axios";

export default {
  name: "hoteldetails",
  data() {
    return {
      hotelmsg: "",
      collect: true,
      iconcollect: "star-o",
      active: 0,
      // hotelid: this.$route.params.id
      hotelid: this.$route.params.id,
      hotelname: ""
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.push("/cityhotellist");
    },
    // 点击星星图标
    onClickRight(e) {
      console.log(e);
      if (this.collect) {
        this.iconcollect = "star";
        this.collect = false;
      } else {
        this.iconcollect = "star-o";
        this.collect = true;
      }
    },
    // 导航切换不同的展示页面
    changeshow(key, value) {
      // let hotelid = this.$route.params.id;
      if (key == 0) {
        this.$router.push(`/hotelbook/${this.hotelid}`);
      } else if (key == 1) {
        this.$router.push("/usercomment");
      } else if (key == 2) {
        this.$router.push("/cityhotellist");
      }
    }
  },
  mounted() {
    let that = this;
    axios({
      method: "get",
      url: "http://10.8.157.4:8080//triphotel/query.do",
      params: { id: that.hotelid }
    }).then(function(data) {
      console.log(data.data.info);
      that.hotelname = data.data.info.hotelname;
      that.$router.push(`/hotelbook/${that.hotelid}`);
    });
  },
  components: {
    hotelbook
  }
};
</script>

<style scoped="">
.main {
  overflow: auto;
}

.header-main {
  background: #eae9e9;
}
</style>

