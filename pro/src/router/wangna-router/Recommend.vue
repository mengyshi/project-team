<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div id="recommend">
      <!-- 头部 -->
      <header class="header">
        <van-row type="flex" justify="center" gutter="10">
          <van-col>
            <!-- 头部地址 -->
            <van-dropdown-menu class="header-address">
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </van-col>
          <van-col>
            <!-- 头部搜索 -->
            <van-search
              class="header-search"
              placeholder="搜索"
              v-model="value"
              input-align="center"
              left-icon="string"
              shape="round"
              background="#ffffff"
              @click="searchBtn"
            />
          </van-col>
          <van-col>
            <!-- 消息按钮 -->
            <van-button class="header-views" type="default" :round="true">消息</van-button>
          </van-col>
        </van-row>
      </header>
      <!-- 中间内容 -->
      <div class="content">
        <!-- 轮播 -->
        <div class="con-lunbo">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <van-image
                width="100%"
                height="100%"
                src="http://cdn2.tmmtours.cn/201907151520/picture/o1cn018sfoup1eqdgzgpmj5_!!2270913865.jpg"
              />
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="100%"
                height="100%"
                src="http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233393089308.jpg"
              />
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="100%"
                height="100%"
                src="http://wdxg.ynkl003.com/upfiles/image/20190403/20190403134417801780.jpg"
              />
            </van-swipe-item>
            <van-swipe-item>
              <van-image
                width="100%"
                height="100%"
                src="http://wdxx.ynkl003.com/upfiles/image/20190320/20190320160859135913.jpg"
              />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 房源 -->
        <div class="con-listing">
          <p>房源推荐</p>
          <div class="con-listing-num">
            <div v-for="item in list" :key="item.id">
              <router-link :to="{name:'Listingdetail',query:{text:item.id}}">
                <van-card class="listing" :tag="item.hotel" :thumb="item.imgpath" />
              </router-link>
            </div>
          </div>
        </div>
        <!-- 探索体验 -->
        <div class="con-experience">
          <p>探索体验</p>
          <ul>
            <li v-for="item in list1" :key="item.id">
              <router-link
                :to="{path:'Exploringexperience',name:'Exploringexperience',query:{id:item.id}}"
              >
                <van-image :src="item.imgpath"></van-image>
              </router-link>
              <p>{{item.hotel}}</p>
            </li>
          </ul>
        </div>
        <!-- 精彩旅行故事 -->
        <div class="con-travel-story">
          <p class="con-travel-title">精彩旅行故事</p>
          <van-grid :border="false" :column-num="2">
            <van-grid-item to="/trip">
              <van-image
                src="http://img0.imgtn.bdimg.com/it/u=3581979092,1503649394&fm=26&gp=0.jpg"
              />
              <p>名称</p>
              <p>描述</p>
              <p>
                <van-icon name="user-circle-o" size="14" />
                <van-icon name="thumb-circle-o" size="14" />
                <van-icon name="like-o" size="14" />
                <van-icon name="chat-o" size="14" />
              </p>
            </van-grid-item>
            <van-grid-item to="/trip">
              <van-image
                src="http://img2.imgtn.bdimg.com/it/u=2684910209,2942734213&fm=26&gp=0.jpg"
              />
              <p>名称</p>
              <p>描述</p>
              <p>
                <van-icon name="user-circle-o" size="14" />
                <van-icon name="thumb-circle-o" size="14" />
                <van-icon name="like-o" size="14" />
                <van-icon name="chat-o" size="14" />
              </p>
            </van-grid-item>
          </van-grid>
        </div>
        <!-- 旅游攻略 -->
        <div class="con-travelling-guideline" @click="gofind($event)">
          <p>旅游攻略</p>
          <div class="traveling-wrap">
            <van-image
              fit="fill"
              width="100%"
              height="100%"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <van-icon name="like-o" size="20" class="xin-icon" />
            <p class="guideline-desc">超强重庆攻略！喝着豆奶吃着...</p>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </van-pull-refresh>
</template>
<script>
import axios from "axios";
export default {
  name: "Recommend",
  data() {
    return {
      isLoading: false,
      value1: 0,
      option1: [
        { text: "北京", value: 0 },
        { text: "上海", value: 1 },
        { text: "广州", value: 2 }
      ],
      value: "",
      list: [],
      list1: []
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    tap() {
      this.$router.push("./Listingdtail");
    },
    searchBtn() {
      this.$router.push("indexSearch");
    },
    //  跳转至发现模块 旅游攻略
    gofind(e) {
      this.$router.push("/find");
    }
  },
  mounted() {
    let _this = this;
    axios
      .get("http://10.8.157.8:8080/hotel/findHotel.do")
      .then(function(response) {
        for (let i = 0; i < response.data.info.length; i++) {
          if (i < 3) {
            _this.list.push(response.data.info[i]);
          } else {
            _this.list1.push(response.data.info[i]);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scope="">
* {
  margin: 0px;
  padding: 0px;
}
#recommend {
  font-family: Arial;
  font-size: 14px;
  margin-bottom: 50px;
}
/* 头部 */
.header {
  height: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.header-address {
  height: 30px;
}
.header-search {
  height: 30px;
}
.header-views {
  height: 30px;
  text-align: center;
  line-height: 30px;
  width: 60px;
}
/* 轮播 */
.con-lunbo {
  margin-bottom: 20px;
}
.con-lunbo img {
  height: 282px;
}
/* 房源 */
.con-listing {
  margin-bottom: 20px;
}
.con-listing p {
  text-align: left;
  text-indent: 10px;
  height: 30px;
  line-height: 30px;
}
.con-listing .con-listing-num {
  display: flex;
  justify-content: space-around;
}
.con-listing .listing {
  height: 90px;
  padding: 0px;
  margin: 0px;
  background: #fff;
}
/* 探索体验 */
.con-experience {
  margin-bottom: 30px;
}
.con-experience p {
  height: 30px;
  line-height: 30px;
  text-indent: 10px;
  text-align: left;
}
.con-experience ul {
  padding: 0 10px;
  display: flex;
  height: 110px;
  justify-content: space-around;
}
.con-experience ul li {
  display: flex;
  flex-direction: column;
}
.con-experience ul li img {
  height: 100px;
  width: 100px;
}
/* 精彩旅行故事 */
.con-travel-story {
  margin-bottom: 20px;
}
.con-travel-story img {
  height: 98px;
}
.con-travel-title {
  text-align: left;
}
.con-travel-story p {
  height: 30px;
  line-height: 30px;
  text-indent: 10px;
}
/* 游戏攻略 */
.con-travelling-guideline {
  margin-bottom: 10px;
}
.con-travelling-guideline p {
  height: 30px;
  line-height: 30px;
  text-align: left;
  text-indent: 10px;
}
.con-travelling-guideline .traveling-wrap {
  height: 139px;
  position: relative;
}
.traveling-wrap .xin-icon {
  position: absolute;
  top: 10px;
  right: 40px;
}
.traveling-wrap .guideline-desc {
  position: absolute;
  bottom: 10px;
  left: 0;
  color: #000;
  font-size: 14px;
}
</style>

