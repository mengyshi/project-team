<template>
  <div id="main">
    <!-- 旅游攻略列表页 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="a123">
      <div v-for="a in 6" :key="a">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <van-grid :border="false" :column-num="1">
              <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" @click="godetails(a.id)" />
              </van-grid-item>
            </van-grid>
            <van-col span="24" class="article-title">
              <span @click="godetails(a.id)">文章标题.....</span>
            </van-col>
            <van-col span="8" class="article-time">
              <span>2019.07.20</span>
            </van-col>
            <van-col offset="8" span="4" class="like">
              <van-icon :name="likeicon" @click="clicklike($event)" />12346
            </van-col>
            <van-col span="4" class="evaluate">
              <van-icon name="chat-o" />12346
            </van-col>
          </van-col>
        </van-row>
        <hr />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "tourism",
  data() {
    return {
      count: 0,
      isLoading: false,
      like: true,
      likeicon: "like"
    };
  },
  methods: {
    // 下拉刷新方法
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
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
        this.like = false;
      } else {
        e.target.style.color = "rgba(187,187,187,.8)";
        e.target.style.border = "rgba(187,187,187,.8)";
        this.like = true;
      }
    }
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

