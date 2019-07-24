<template>
  <div>
    <!-- 搜索页 -->
    <div>
      <van-row>
        <van-col span="24">
          <form action="/">
            <van-search
              v-model="value"
              placeholder="搜索 酒店"
              show-action
              input-align="center"
              shape="round"
              @search="onSearch"
              @cancel="onCancel"
            />
          </form>
        </van-col>
      </van-row>
    </div>

    <!-- 下部搜索信息 -->
    <div>
      <van-row>
        <van-col span="22">
          <span class="selecttitle">热门搜索</span>
          <ul class="selsecttext">
            <li v-for="(msga,msgid) in hotselect" :key="msgid">{{msga.msg}}</li>
          </ul>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="22">
          <span class="selecttitle">搜索历史</span>
          <ul class="selsecttext">
            <li v-for="(msga,msgid) in historyselect" :key="msgid">{{msga.msg}}</li>
          </ul>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectpage",
  data() {
    return {
      value: "",
      hotselect: [
        { msg: "热门搜索1" },
        { msg: "热门搜索2" },
        { msg: "热门搜索3" },
        { msg: "热门搜索1热1" },
        { msg: "热门搜索" },
        { msg: "热门搜索456akdsjhgfkasdg" }
      ],
      historyselect: [
        { msg: "搜索历史1" },
        { msg: "搜索历史1" },
        { msg: "搜索历史1" },
        { msg: "搜索历史1" },
        { msg: "搜索历史1" }
      ]
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    onCancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped="">
.selsecttext {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.selsecttext li {
  background: #ebebeb;
  color: #bbb;
  border-radius: 4px;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  padding: 0 5px;
  margin: 5px;
}
</style>
