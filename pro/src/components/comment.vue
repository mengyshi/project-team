<template>
  <div id="main">
    <!-- 对应热门评论列表 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="hostcomment" v-for="(value, key) in msg" :key="key">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <!-- 上层头像 用户名 跳转按钮 -->
            <div class="usermsg">
              <div class="headimg">
                <van-image
                  round
                  width="50px"
                  height="50px"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
              </div>
              <div class="username">
                <span>{{value.name.slice(0,1) + namechange}}</span>
                <span>入住城市 &nbsp; {{value.city}}</span>
              </div>
              <div class="button">
                <van-button
                  type="info"
                  :round="round"
                  size="mini"
                  style="background: #bbb; border: 0"
                  to="/cityhotellist"
                >查看房源</van-button>
              </div>
            </div>
            <!-- 下层评论 -->
            <div>
              <p class="commenttext">{{value.detail}}</p>
            </div>
          </van-col>
        </van-row>
        <hr />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "comment",
  data() {
    return {
      round: true,
      msg: [],
      maxpage: 0,
      pagenum: 1,
      namechange: "**",
      isLoading: false
    };
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      let that = this;
      this.pagenum++;
      if (this.pagenum > this.maxpage) {
        this.$toast("已经到达最后一页");
        this.isLoading = false;
      } else {
        axios({
          methos: "get",
          url: "http://10.8.157.4:8080//comment/list.do",
          params: { page: that.pagenum }
        }).then(function(data) {
          data.data.info.infos.forEach((value, key) => {
            that.msg.push(value);
          });
          that.$toast("加载完成");
          that.isLoading = false;
        });
      }
    }
  },
  mounted() {
    let that = this;
    axios({
      methos: "get",
      url: "http://10.8.157.4:8080//comment/list.do?page=1"
    }).then(function(data) {
      // console.log(data.data.info);
      that.maxpage = data.data.info.totalPage;
      that.msg = data.data.info.infos;
    });
  }
};
</script>

<style scoped="">
.clean:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.usermsg {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.username {
  margin-right: 25px;
}

.username span:nth-child(1) {
  font-size: 20px;
  color: #101010;
}

.username span:nth-child(2) {
  font-size: 14px;
  color: #bbb;
}

.commenttext {
  font-size: 14px;
  color: #626161;
  text-indent: 24px;
}
</style>


