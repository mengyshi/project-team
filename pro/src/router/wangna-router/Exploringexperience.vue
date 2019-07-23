<template>
  <div class="exploring">
    <!-- 返回 -->
    <p class="backBtn">
      <van-icon name="arrow-left" @click="cancle" />
    </p>
    <!-- 列表 -->
    <div class="list-content">
      <div class="con-travel-story">
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" @click="projectInfo" />
            <p>名称</p>
            <p>描述</p>
            <p>价格</p>
            <van-rate v-model="value" />
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            <p>名称</p>
            <p>描述</p>
            <p>价格</p>
            <van-rate v-model="value" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Exploringexperience",
  data() {
    return {
      value: 3
    };
  },
  methods: {
    cancle() {
      this.$router.go(-1);
    },
    // 进入商品详情
    projectInfo(){
      this.$router.push('Experiencedetails')
    }
  }
};
</script>
<style lang="" scope="">
* {
  padding: 0px;
  margin: 0px;
}
.exploring {
  margin-top: 20px;
}
.backBtn {
  text-align: left;
  text-indent: 10px;
}
</style>