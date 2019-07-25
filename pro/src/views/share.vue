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
    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div class="share-box">
            <share :config="config" class="shareicon"></share>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

 
<script>
export default {
  name: "sharepage",
  data() {
    return {
      config: {
        url: "http:www.baidu.com",
        source: "",
        title: "文本标题分享",
        description: "文本内容分享",
        img: "",
        sites: ["qzone", "qq", "weibo", "wechat"],
        wechatQrcodeTitle: "微信扫一扫：分享",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文发送至朋友圈</p>"
      }
    };
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

.share-box {
  border-radius: 10px;
  padding: 50px;
  text-align: center;
  /* background: #bbb; */
}

.shareicon {
  width: 100%;
  background: #fff;
}
</style>


