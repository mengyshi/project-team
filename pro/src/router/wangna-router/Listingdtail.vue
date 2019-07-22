<template>
  <div class="listing">
    <!-- 头部搜索 -->
    <div class="header-search">
      <van-row gutter='0'>
        <van-col span="2">
          <van-icon name="arrow-left" @click="searchBtn" />
        </van-col>
        <van-col span="22">
          <van-search
            class="search"
            shape="round"
            placeholder="房源搜索"
            v-model="value"
            input-align="center"
            left-icon
            background="#ffffff"
          />
        </van-col>
      </van-row>
    </div>
    <!-- 选项卡 -->
    <div class="tab">
      <van-tabs v-model="active" type>
        <van-tab title="民宿">
          <!-- 地点 -->
          <van-collapse v-model="activeNames">
            <van-collapse-item :title="address" name="1">
              <van-address-edit :area-list="areaList" @save="onSave" />
            </van-collapse-item>
            <!-- 日期 -->
            <van-collapse-item :title="date" name="2">
              <van-datetime-picker
                v-model="currentDate"
                type="year-month"
                :min-date="minDate"
                :formatter="formatter"
              />
            </van-collapse-item>
            <van-collapse-item title="搜索" name="3">
              <!-- 搜索 -->
              <input class="search-content" type="text" placeholder="搜索酒店/地址/关键词" />
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title="酒店">内容 2</van-tab>
        <van-tab title="短租">内容 3</van-tab>
      </van-tabs>
    </div>
    <van-button class="searchBtn" @click="searchEnd" type="primary" size="large">开始查找</van-button>
  </div>
</template>
<script>
import areaList from "./area";
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "Listingdetail",
  data() {
    return {
      value: "",
      active: "",
      activeNames: ["1"],
      currentDate: new Date(),
      minDate: new Date(2019),
      areaList: areaList,
      date: "时间",
      address: "上海"
    };
  },
  methods: {
    searchBtn() {
      this.$router.go(-1);
    },
    formatter(type, value) {
      if (type === "year") {
        this.date = `${value}`;
        return `${value}年`;
      } else if (type === "month") {
        this.date += "/" + `${value}`;
        return `${value}月`;
      }
      return value;
    },
    onSave(e) {
      Toast("save");
      this.address = e.province + "/" + e.city + "/" + e.county;
    },
    searchEnd() {
      this.$router.push("SearchEnd");
    }
  },
  mounted() {
    //     axios.get('http://jun4gv.natappfree.cc/hotel/findHotel.do/address="郑州"')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
};
</script>
<style scope="">
* {
  padding: 0px;
  margin: 0px;
}
.listing {
  font-size: 20px;
  font-family: Arial;
  margin-top: 10px;
}
.header-search {
  margin-bottom: 27px;
}
.header-search .search {
  padding: 0px;
}
.tab .van-tab--active {
  background: #ccc;
  border-radius: 6px;
}
.search-content {
  border: 0;
  width: 100%;
  padding: 10px 0;
  background: #ccc;
  border-radius: 10px;
  text-indent: 20px;
}
.searchBtn {
  position: absolute;
  bottom: 40px;
  left: 0px;
}
</style>