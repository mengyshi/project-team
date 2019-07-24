<template>
  <div class="mian">
    <!-- 这是详情页 旅游攻略 房东故事公用 -->
    <!-- 引入头部导航 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="goup()">
      <van-icon name="chat-o" slot="right" :info="num" style="margin-right: 15px;" />
      <van-icon name="share" slot="right" @click="goshare()" />
    </van-nav-bar>

    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-grid :border="false" :column-num="1">
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
          </van-grid>
          <van-col span="24" class="article-time">
            <span class="datetime">文章|2019.07.20</span>
            <span class="readnum">阅读量|1324656</span>
          </van-col>
          <van-col span="24" class="article-title">
            <span>文章标题.....</span>
          </van-col>
          <van-col span="24" class="article-text">
            <p class="text">{{msg}}</p>
          </van-col>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      num: "",
      msg: `##Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reprehenderit delectus! Distinctio dignissimos omnis vitae aut nobis nihil fugit assumenda velit sit enim tempora, consequatur voluptas excepturi obcaecati perspiciatis quae.
      ##Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reprehenderit delectus! Distinctio dignissimos omnis vitae aut nobis nihil fugit assumenda velit sit enim tempora, consequatur voluptas excepturi obcaecati perspiciatis quae.
      ##Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, reprehenderit delectus! Distinctio dignissimos omnis vitae aut nobis nihil fugit assumenda velit sit enim tempora, consequatur voluptas excepturi obcaecati perspiciatis quae.`
    };
  },
  methods: {
    // 返回按钮
    goup() {
      console.log(123);
      this.$router.go(-1);
    },
    // 跳转至分享页
    goshare() {
      console.log(123);
      this.$router.push("/share");
    }
  },
  // 通过获取页面后缀查询单条信息 并展示详情 通过from判断是有谁跳转过来的 调用同一个页面
  // from=1 旅游攻略页     from=2 房东故事页
  mounted() {
    console.log(this.$route.params.from);
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped="">
.main {
  margin-bottom: 46px;
  overflow: auto;
}

.datetime,
.readnum {
  display: inline-block;
  font-size: 12px;
  color: #bbb;
}

.readnum {
  float: right;
}

.article-title {
  font-size: 20px;
  color: #101010;
}

.text {
  text-indent: 24px;
  font-size: 14px;
  font-size: 12px;
  color: #202020;
}
</style>
