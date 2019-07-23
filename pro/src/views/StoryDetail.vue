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

      this.$router.go(-1);
    },
    onClickIcon() {
      this.$toast("点击图标");
    }
  },
  mounted() {

    axios({

      url: "http://10.8.157.43:8080//travelLog/findById.do",
      params: { id: this.$route.query.id }
    })
      .then(data => {
        console.log(data.data.info);
        this.list = data.data.info;
        var list = this.list;

        console.log(list);

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
