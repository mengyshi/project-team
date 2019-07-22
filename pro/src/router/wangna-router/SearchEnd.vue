<template>
  <div class="search-result">
    <!-- 头部搜索 -->
    <div class="header-search">
      <van-row type="flex" justify="center" align="center">
        <van-col span="4">
          <van-icon name="arrow-left" @click="cancelBtn" />
        </van-col>
        <van-col span="20">
          <van-search
            placeholder="搜索酒店/地名/关键词"
            v-model="value"
            shape="round"
            left-icon
            input-align="center"
          />
        </van-col>
      </van-row>
    </div>
    <!-- 筛选 -->
    <div class="select-list">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
    </div>
    <!-- 分类列表 -->
    <div class="sort-list">
      <van-row type="flex" justify="flex-start" gutter="10">
        <van-col span="12">
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </van-col>
        <van-col span="12">
          <ul class="info">
            <li><p>店名</p></li>
            <li><p>消费人数</p></li>
            <li><p>店铺地址详情</p></li>
            <li><p><span>价格</span><span>优惠</span></p></li>
          </ul>
        </van-col>
      </van-row>
    </div>

  </div>
</template>
<script>
export default {
  name: "SearchEnd",
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      value3: "d",
      value4: "h",
      option1: [
        { text: "位置区域", value: 0 },
        { text: "郑州", value: 1 },
        { text: "上海", value: 2 }
      ],
      option2: [
        { text: "价格/星级", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "智能排序", value: "d" },
        { text: "好评排序", value: "e" },
        { text: "销量排序", value: "f" }
      ],
      option4: [
        { text: "筛选", value: "h" },
        { text: "好评排序", value: "i" },
        { text: "销量排序", value: "g" }
      ]
    };
  },
  methods: {
    cancelBtn(){
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="" scope="">
.select-list{
  margin-bottom: 40px;
}
.sort-list .info li{
  margin-bottom: 6px;
}
.sort-list .info p{
  text-align: left;
  text-indent: 10px;
}
.sort-list .info p span{
  margin-right: 10px;
}
</style>