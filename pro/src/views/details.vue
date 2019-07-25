<template>
  <div class="mian">
    <!-- 这是详情页 旅游攻略 房东故事公用 -->
    <!-- 引入头部导航 -->
    <van-nav-bar left-text="返回" title="文章详情" left-arrow @click-left="goup()">
      <van-icon name="chat-o" slot="right" :info="num" style="margin-right: 15px;" />
    </van-nav-bar>

    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-grid :border="false" :column-num="1">
            <van-grid-item>
              <van-image
                :src="(msg.imgurl != '')? msg.imgurl:'https://img.yzcdn.cn/vant/apple-1.jpg'"
              />
            </van-grid-item>
          </van-grid>
          <van-col span="24" class="article-time">
            <span class="datetime">文章|{{(msg.date).substring(0,10)}}</span>
            <span class="readnum">阅读量|{{msg.likes}}</span>
          </van-col>
          <van-col span="24" class="article-title">
            <span>{{msg.homename}}</span>
          </van-col>
          <van-col span="24" class="article-text">
            <p class="text">{{msg.detail}}</p>
          </van-col>
        </van-col>
      </van-row>
    </div>

    <!-- 分享模块 -->
    <div class="share">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div class="share-box">
            <p>听说善于分享的人都很美</p>
            <share :config="config"></share>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      num: "",
      msg: {},
      config: {
        url: window.location.href,
        source: "",
        title: "文本标题分享",
        description: "文本内容分享",
        sites: ["qzone", "qq", "weibo", "wechat"],
        wechatQrcodeTitle: "微信扫一扫：分享",
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文发送至朋友圈</p>"
      }
    };
  },
  methods: {
    // 返回按钮
    goup() {
      // console.log(123);
      this.$router.go(-1);
    }
  },
  // 通过获取页面后缀查询单条信息 并展示详情 通过from判断是有谁跳转过来的 调用同一个页面
  // from=1 旅游攻略页     from=2 房东故事页
  mounted() {
    let from = this.$route.params.from;
    let id = this.$route.params.id;
    let that = this;
    if (from == 1) {
      // 这里写旅游攻略详情
      axios({
        method: "get",
        url: "http://10.8.157.4:8080//travel/query.do",
        params: { id: id }
      }).then(function(data) {
        // console.log(data.data.info);
        that.msg = data.data.info;
      });
    } else {
      this.$router.go(0);
      // 这里写房东故事详情
      axios({
        method: "get",
        url: "http://10.8.157.4:8080//hoststory/query.do",
        params: { id: id }
      }).then(function(data) {
        that.msg = data.data.info;
      });
    }
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

.share-box {
  text-align: center;
}
</style>
