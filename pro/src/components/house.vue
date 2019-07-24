<template>
  <div id="main">
    <!-- 房东故事列表 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="a123">
      <div v-for="(b, index) in msg" :key="index">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <van-grid :border="false" :column-num="1">
              <van-grid-item>
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" @click="godetails(b.id)" />
              </van-grid-item>
            </van-grid>
            <van-col span="24" class="article-title">
              <span @click="godetails(b.id)">{{b.title}}</span>
            </van-col>
            <van-col span="8" class="article-time">
              <span>{{b.datetime}}</span>
            </van-col>
            <van-col offset="8" span="4" class="like">
              <van-icon name="like" color="rgba(255,255,255,.8)" @click="clicklike($event)" />12346
            </van-col>
            <van-col span="4" class="evaluate">
              <van-icon name="chat-o" />
              {{b.pinglun}}
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
  name: "house",
  data() {
    return {
      count: 0,
      isLoading: false,
      msg: [
        {
          title: "这是标题1",
          datetime: "2019.07.01",
          pinglun: 456
        },
        {
          title: "这是标题2",
          datetime: "2019.07.02",
          pinglun: 456
        },
        {
          title: "这是标题3",
          datetime: "2019.07.03",
          pinglun: 456
        },
        {
          title: "这是标题4",
          datetime: "2019.07.05",
          pinglun: 456
        },
        {
          title: "这是标题6",
          datetime: "2019.07.06",
          pinglun: 456
        },
        {
          title: "这是标题7",
          datetime: "2019.07.07",
          pinglun: 456
        }
      ]
    };
  },
  methods: {
    // 下拉加载新数据
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    // 调至详情
    godetails(id) {
      this.$router.push(`/details/2/${id}`);
    },
    // 点赞 记得加上对应数据的加减
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

