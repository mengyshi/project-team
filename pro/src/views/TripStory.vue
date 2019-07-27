<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-for="item in list">
        <!-- <a href="./detail?id=" item.id> -->
        <img :src="item.imgpath" @click="detail(item.id)" />
        <!-- </a> -->
        <div class="txt">
          <p style="text-align:center;color:#000">{{item.address}}</p>
          <p style="margin-left:0.4rem">{{item.overview}}</p>
        </div>
        <div class="pic">
          <h5>{{item.user}}</h5>
          <span class="zan">{{item.likenum}}</span>
          <van-rate
            v-model="value"
            class="shoucang"
            icon="like"
            void-icon="like-o"
            :count="1"
            @change="shouC"
          />
          <van-goods-action-icon class="pinglun" icon="chat-o" @click="onClickIcon" />
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
      item: "",
      list: [],
      value: 0,
      ids: ""
    };
  },
  methods: {
    onClickLeft() {
      // this.$toast("返回");
      this.$router.go(-1);
    },
    //   评论操作
    onClickIcon() {
      // this.$toast("点击图标");
      // axios({
      //   url: ""
      // }).then(res => {
      //   console.log(res);
      // });
    },
    // 详情   query传参操作
    detail(i) {
      // console.log(i);
      axios({
        url: "http://101.132.39.73:8080/travelapp/travelLog/findById.do",
        // url: "http://dvbpr7.natappfree.cc/travelLog/findById.do",
        params: { id: i }
      }).then(data => {
        console.log(data);
        // console.log(id);
        this.$router.push({ path: "/detail", query: { id: i } });
      });
    },
    // 收藏操作
    shouC() {
      axios({
        url: "http://101.132.39.73:8080/travelapp/collecttion/add.do/uid=1&tid=2"
        // params:{uid:,tid:}
      }).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    axios({
      url: "http://101.132.39.73:8080/travelapp/travelLog/list.do"
      // url: "http://dvbpr7.natappfree.cc/travelLog/list.do"
    })
      .then(data => {
        let arr = data.data.info;
        this.list = arr;
        var list = this.list;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script >
<style scoped="">
ul {
  width: 100%;
  height: 100%;
}
ul li {
  width: 9rem;
  height: 15rem;
  margin-left: 0.5rem;
  float: left;
}
img {
  width: 100%;
  height: 35%;
}
p {
  font-size: 0.2rem;
  color: #ccc;
}
h5 {
  width: 2rem;
  height: 2rem;
  background: yellowgreen;
}
.txt {
  width: 100%;
  height: 36%;
}
.pic {
  width: 100%;
  margin-top: -2rem;
  display: flex;
}
.zan {
  margin-top: 1.2rem;
  margin-left: 1.5rem;
  font-size: 10px;
}
.shoucang {
  margin-top: 1.2rem;
  margin-left: 0.4rem;
  font-size: 10px;
}
.pinglun {
  margin-top: 0.5rem;
  font-size: 10px;
}
</style>
