<template>
  <div>
    <!-- 上部主体 -->
    <div class="find-main">
      <!-- 引入上方标签页 通过此处跳转至 发现对应子页 -->
      <van-tabs v-model="active" @click="onClick">
        <van-tab title="旅游攻略">
          <!-- <tourism /> -->
          <router-view></router-view>
        </van-tab>
        <van-tab title="出行专题">
          <!-- <travel /> -->
          <router-view></router-view>
        </van-tab>
        <van-tab title="房东故事">
          <!-- <house /> -->
          <router-view></router-view>
        </van-tab>
        <van-tab title="热门评论">
          <!-- <comment /> -->
          <router-view></router-view>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import tourism from "../components/tourism";
import travel from "../components/travel";
import house from "../components/house";
import comment from "../components/comment";

export default {
  name: "find",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClick(name, title) {
      switch (name) {
        case 0:
          this.$router.push("/tourism");
          break;
        case 1:
          this.$router.push("/travel");
          break;
        case 2:
          this.$router.push("/house");
          break;
        case 3:
          this.$router.push("/comment");
          break;
      }
    }
  }
  // components: {
  //   tourism,
  //   travel,
  //   house,
  //   comment
  // }
};
</script>

<style scoped="">
.find-main {
  margin-bottom: 46px;
  overflow: auto;
}
</style>

