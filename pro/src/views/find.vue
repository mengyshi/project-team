<template>
  <div>
    <!-- 上部主体 -->
    <div class="find-main">
      <!-- 引入上方标签页 通过此处跳转至 发现对应子页 -->
      <van-tabs v-model="active" @click="onClick">
        <van-tab title="旅游攻略">
          <tourism />
        </van-tab>
        <van-tab title="出行专题">
          <travel />
        </van-tab>
        <van-tab title="房东故事">
          <house />
        </van-tab>
        <van-tab title="热门评论">
          <comment />
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
    onClick(name, title) {}
  },
  components: {
    tourism,
    travel,
    house,
    comment
  }
};
</script>

<style scoped="">
.find-main {
  margin-bottom: 46px;
}
</style>

