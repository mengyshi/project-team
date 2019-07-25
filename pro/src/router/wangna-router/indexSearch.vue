<template>
  <div class="search">
    <!-- 搜索框 -->
    <div class="header-search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="搜索酒店/地名/关键词"
          input-align="center"
          left-icon
          shape="round"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <!-- 热门搜索 -->
    <div class="hotSearch">
      <van-panel title="热门搜索" class="hotSearch-title">
        <ul class="hot-history">
          <li>
            <a href="javascript:;">重庆短租</a>
          </li>
          <li>
            <a href="javascript:;">成都旅游攻略</a>
          </li>
          <li>
            <a href="javascript:;">厦门清新日式民宿</a>
          </li>
          <li>
            <a href="javascript:;">大理古城舒适套房</a>
          </li>
          <li>
            <a href="javascript:;">爱丽丝仙境民宿</a>
          </li>
        </ul>
      </van-panel>
    </div>
    <!-- 历史搜索 -->
    <div class="history-search">
      <van-panel title="历史搜索" class="history-title" status="删除">
        <ul class="history-step">
          <li>
            <a href="javascript:;">重庆短租</a>
          </li>
          <li>
            <a href="javascript:;">成都旅游攻略</a>
          </li>
          <li>
            <a href="javascript:;">厦门清新日式民宿</a>
          </li>
          <li>
            <a href="javascript:;">大理古城舒适套房</a>
          </li>
          <li>
            <a href="javascript:;">爱丽丝仙境民宿</a>
          </li>
        </ul>
      </van-panel>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "indexSearch",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      this.$router.push({ path: "SearchEnd", query: { text: this.value } });
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="" scoped="">
* {
  padding: 0px;
  margin: 0px;
}
.search {
  font-size: 14px;
  font-family: Arial;
}
/* 头部搜索 */
.header-search {
  margin-bottom: 20px;
}
/* 热门搜索 */
.hotSearch-title {
  text-align: left;
}
.hot-history {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.hot-history li {
  padding: 10px;
  margin: 0px 10px 10px 5px;
  background: #cfcfcf;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
}
.hot-history li a {
  text-decoration: none;
  color: grey;
}

/* 历史搜索 */
.history-title {
  text-align: left;
}
.history-step {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.history-step li {
  padding: 10px;
  margin: 0px 10px 10px 5px;
  background: #cfcfcf;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
}
.history-step li a {
  text-decoration: none;
  color: grey;
}
</style>