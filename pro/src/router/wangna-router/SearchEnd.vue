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
            show-actions
            @search="onSearch"
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
      <p v-show="txt">没有搜索项</p>
      <div v-for="item in list" :key="item.id">
        <van-row type="flex" justify="flex-start" gutter="10">
          <van-col span="12">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </van-col>
          <van-col span="12">
            <ul class="info">
              <li>
                <p>{{item.hotelname}}</p>
              </li>
              <li>
                <p>{{item.count}}</p>
              </li>
              <li>
                <p>{{item.address}}</p>
              </li>
              <li>
                <p>
                  <span>{{item.hotelprice}}</span>
                  <span>优惠</span>
                </p>
              </li>
            </ul>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SearchEnd",
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      value3: "d",
      value4: "h",
      list: [],
      txt: false,
      option1: [
        { text: "位置区域", value: 0 },
        { text: "郑州", value: 1 },
        { text: "杭州", value: 2 }
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
    cancelBtn() {
      this.$router.go(-1);
    },
    onSearch() {
      let that = this;
      function getUserAccount() {
        return axios.get("http://10.8.157.8:8080/hotel/findHotelAll.do", {
          params: { address: that.value }
        });
      }
      function getUserPermissions() {
        return axios.get("http://10.8.157.8:8080/hotel/findHotelAll.do", {
          params: { hotelname: that.value }
        });
      }
      axios.all([getUserAccount(), getUserPermissions()]).then(
        axios.spread(function(acct, perms) {
          // 两个请求现在都执行完成
          if (acct.data.info.length != 0) {
            that.list = acct.data.info;
            that.txt = false;
          } else if (perms.data.info.length != 0) {
            that.list = perms.data.info;
            that.txt = false;
          } else {
            that.list = [];
            that.txt = true;
          }
        })
      );
    }
  },
  mounted() {
    console.log(this.$route);
    let that = this;
    function getUserAccount() {
      return axios.get("http://10.8.157.8:8080/hotel/findHotelAll.do", {
        params: { address: that.$route.query.text }
      });
    }
    function getUserPermissions() {
      return axios.get("http://10.8.157.8:8080/hotel/findHotelAll.do", {
        params: { hotelname: that.$route.query.text }
      });
    }
    axios.all([getUserAccount(), getUserPermissions()]).then(
      axios.spread(function(acct, perms) {
        // 两个请求现在都执行完成
        if (acct.data.info.length != 0) {
          that.list = acct.data.info;
          that.txt = false;
        } else if (perms.data.info.length != 0) {
          that.list = perms.data.info;
          that.txt = false;
        } else {
          that.list = [];
          that.txt = true;
        }
      })
    );
  }
};
</script>
<style lang="" scoped="">
.select-list {
  margin-bottom: 40px;
}
.sort-list .van-row {
  margin-bottom: 10px;
}
.sort-list .info li {
  margin-bottom: 6px;
}
.sort-list .info p {
  text-align: left;
  text-indent: 10px;
}
.sort-list .info p span {
  margin-right: 10px;
}
</style>