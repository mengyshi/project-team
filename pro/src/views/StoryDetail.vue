<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <h4>我和旅游的故事</h4>
        <img :src="list.imgpath" />
        <div class="txt">
          <p style="text-align:center;color:#000">{{list.address}}</p>
          <p
            style="font-size:12px;;margin-left:0.4rem;color:#696666;text-indent:20px"
          >{{list.comment}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: ""
    };
  },
  methods: {
    onClickLeft() {
      // this.$toast("返回");
      this.$router.go(-1);
    },
    onClickIcon() {
      this.$toast("点击图标");
    }
  },
  mounted() {
    // console.log(this.$route.query.id);
    axios({
      // url: "http://dvbpr7.natappfree.cc/travelLog/findById.do",
      url: "http://101.132.39.73:8080/travelapp/travelLog/findById.do",
      params: { id: this.$route.query.id }
    })
      .then(data => {
        console.log(data.data.info);
        this.list = data.data.info;
        var list = this.list;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script >
<style>
h4 {
  text-align: center;
}
img {
  width: 100%;
}
</style>
