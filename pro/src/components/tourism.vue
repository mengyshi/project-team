<template>
  <div id="main">
    <!-- 旅游攻略列表页 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="a123">
      <div v-for="(a, key) in msg" :key="key">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <van-grid :border="false" :column-num="1">
              <van-grid-item>
                <van-image
                  :src="(a.imgurl != '') ? a.imgurl:'https://img.yzcdn.cn/vant/apple-1.jpg'"
                  @click="godetails(a.id)"
                />
              </van-grid-item>
            </van-grid>
            <van-col span="24" class="article-title">
              <span @click="godetails(a.id)">{{a.homename}}</span>
            </van-col>
            <van-col span="8" class="article-time">
              <span>{{a.date.substring(0,10)}}</span>
            </van-col>
            <van-col offset="8" span="4" class="like">
              <van-icon :name="likeicon" @click="clicklike($event)" />
              {{a.likes}}
            </van-col>
            <van-col span="4" class="evaluate">
              <van-icon name="chat-o" />
              {{a.comment}}
            </van-col>
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
  name: "tourism",
  data() {
    return {
      count: 0,
      isLoading: false,
      like: true,
      likeicon: "like",
      msg: [],
      maxpage: 0,
      pagenum: 1
    };
  },
  methods: {
    // 下拉刷新方法
    onRefresh() {
      let that = this;
      this.pagenum++;
      if (this.pagenum > this.maxpage) {
        setTimeout(() => {
          this.$toast("已经到达最后一页");
          this.isLoading = false;
        }, 500);
      } else {
        axios({
          method: "get",
          url: "http://10.8.157.4:8080//travel/list.do",
          params: { page: this.pagenum }
        }).then(function(data) {
          // console.log(data.data.info);
          data.data.info.infos.forEach((value, key) => {
            that.msg.push(value);
          });
          that.$toast("数据加载成功");
          that.isLoading = false;
        });
      }
    },
    // 跳转至详情页
    godetails(id) {
      this.$router.push(`/details/1/${id}`);
    },
    // 点赞
    clicklike(e) {
      if (this.like) {
        e.target.style.color = "red";
        e.target.style.border = "red";
        e.target.nextSibling.data = parseInt(e.target.nextSibling.data) + 1;
        this.like = false;
      } else {
        e.target.style.color = "rgba(187,187,187,.8)";
        e.target.style.border = "rgba(187,187,187,.8)";
        e.target.nextSibling.data = parseInt(e.target.nextSibling.data) - 1;
        this.like = true;
      }
    }
  },
  mounted() {
    let that = this;
    axios({
      method: "get",
      url: "http://192.168.50.132:8080//travel/list.do?page=1"
    }).then(function(data) {
      // console.log(data.data.info);
      that.maxpage = data.data.info.totalPage;
      that.msg = data.data.info.infos;
    });
  }
};
</script>

<style scoped="">
.article-title {
  color: #101010;
  font-size: 14px;
}

.article-time {
  color: #bbb;
  font-size: 14px;
}

.like {
  color: #bbb;
  font-size: 12px;
}

.evaluate {
  color: #bbb;
  font-size: 12px;
}
</style>

