<template>
  <div class="main">
    <van-nav-bar title="分享" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- 分享内容块 -->
    <div class="a123">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-grid :border="false" :column-num="1">
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" @click="godetails" />
            </van-grid-item>
          </van-grid>
          <van-col span="24" class="article-title">
            <span @click="godetails">文章标题.....</span>
          </van-col>
        </van-col>
      </van-row>
    </div>

    <!-- 分享链接块 -->
    <div></div>
  </div>
</template>

<script>
export default {
  name: "share",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    godetails() {}
  }
};
</script>

<style scoped="">
.main {
  margin-bottom: 46px;
}

.shareblock {
  margin-top: 20px;
}
</style>


