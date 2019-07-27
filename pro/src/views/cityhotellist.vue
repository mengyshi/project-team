<template>
  <div class="main">
    <!-- 引入上层搜索 实现跳转 -->
    <div class="top">
      <van-nav-bar left-arrow @click-left="leftClick">
        <!-- <van-icon name="search" slot="title" /> -->
        <div class="selecthotel" slot="title" @click="goselectpage">搜索酒店名</div>
      </van-nav-bar>

      <!-- 筛选部分 仅实现按照价格  城市名排序 -->
      <div class="screen">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" @change="price" />
          <van-dropdown-item v-model="value2" :options="option2" @change="city" />
        </van-dropdown-menu>
      </div>

      <!-- 用于加载搜索出来的数据 -->
      <div class="content">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="a123">
          <div v-for="(msga, index) in msg" :key="index">
            <van-row type="flex" justify="center">
              <van-col span="22">
                <van-grid :border="false" :column-num="1">
                  <!-- 详情图片 -->
                  <van-grid-item class="parent">
                    <van-image
                      :src="msga.imgurl? msga.imgurl:msga.imgUrl"
                      @click="gohoteldetails(msga.id)"
                      fit="fill"
                      width="100%"
                    />
                    <van-icon
                      class="children"
                      :name="iconlike"
                      color="rgba(255,255,255,.8)"
                      @click="iconclick($event)"
                    />
                    <span class="children1">￥{{msga.price}}</span>
                  </van-grid-item>
                  <van-row type="flex" justify="space-between" style="width: 100%;">
                    <van-col span="18">
                      <div class="title" @click="gohoteldetails(msga.id)">{{msga.hotelname}}</div>
                      <div class="describe">
                        <span>{{msga.detail}}</span>
                        <span>{{msga.city}}</span>
                      </div>
                    </van-col>
                    <van-col span="4">
                      <div class="result">{{msga.grade}}</div>
                    </van-col>
                  </van-row>
                </van-grid>
              </van-col>
            </van-row>
          </div>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cityhotellist",
  data() {
    return {
      count1: 1,
      iconlike: "like",
      maxpage: 0,
      pagenum: 1,
      msg: [],
      value1: "a",
      value2: "1",
      option1: [
        { text: "价格", value: "a" },
        { text: "价格升序", value: "b" },
        { text: "价格降序", value: "c" }
      ],
      option2: [
        { text: "城市", value: "1" },
        { text: "城市升序", value: "2" },
        { text: "城市降序", value: "3" }
      ],
      isLoading: false
    };
  },
  methods: {
    // 返回上一级按钮
    leftClick() {
      this.$router.push("/find");
    },
    // 跳转至搜索页
    goselectpage() {
      // this.$router.push("/select");
      this.$router.push("/indexSearch");
    },
    // 价格排序下拉菜单

    price() {
      if (this.value1 === "b") {
        this.value2 = "1";
        this.msg.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (this.value1 === "c") {
        this.value2 = "1";
        this.msg.reverse();
      }
    },
    // 城市排序下拉菜单
    city() {
      let that = this;
      if (this.value2 === "2") {
        this.value1 = "a";
        axios({
          method: "get",
          url: "http://10.8.157.4:8080//triphotel/asc.do"
        }).then(function(data) {
          that.msg = data.data.info;
        });
      } else if (this.value2 === "3") {
        this.value1 = "a";
        this.msg.reverse();
      }
    },
    // 页面下拉加载
    onRefresh() {
      let that = this;
      this.pagenum++;
      if (this.pagenum > this.maxpage) {
        this.$toast("没有更多数据了");
        this.isLoading = false;
      } else {
        axios({
          method: "get",
          url: "http://10.8.157.4:8080//triphotel/list.do",
          params: { page: that.pagenum }
        }).then(function(data) {
          data.data.info.infos.forEach((value, key) => {
            that.msg.push(value);
          });
          that.$toast("加载完成");
          that.isLoading = false;
        });
      }
    },
    // 跳转至酒店详情页
    gohoteldetails(id) {
      console.log(id);
      this.$router.push(`/hoteldetails/${id}`);
    },
    // 喜欢图标
    iconclick(e) {
      if (this.count1 % 2 != 0) {
        e.target.style.color = "red";
        this.count1++;
      } else {
        e.target.style.color = "rgba(255,255,255,.8)";
        this.count1++;
      }
    }
  },
  mounted() {
    // 进入页面加载首屏数据
    let that = this;
    axios({
      method: "get",
      url: "http://101.132.39.73:8080/travelapp/triphotel/list.do?page=1"
    }).then(function(data) {
      that.maxpage = data.data.info.totalPage;
      that.msg = data.data.info.infos;
    });
  }
};
</script>

<style scoped="">
.main {
  margin-bottom: 46px;
  overflow: auto;
}

.selecthotel {
  height: 30px;
  border: #bbb 1px solid;
  border-radius: 15px;
  line-height: 30px;
  font-size: 14px;
  color: #bbb;
  text-align: center;
  margin-top: 10px;
}

.parent {
  position: relative;
}

.children {
  position: absolute;
  top: 20px;
  right: 20px;
  /* color: rgba(255, 255, 255, 0.8); */
}

.children1 {
  display: block;
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.title {
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  color: #101010;
}

.describe {
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: #101010;
}

.result {
  height: 40px;
  line-height: 40px;
  font-size: 28px;
  color: #bbb;
}
</style>
