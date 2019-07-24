<template>
  <div>
    <!-- 这是预定详情+支付页 -->
    <div class="main">
      <!-- 头部信息 -->
      <div>
        <van-nav-bar
          title="酒店名绑定信息"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight($event)"
          class="header-main"
        >
          <van-icon :name="iconcollect" slot="right" />
        </van-nav-bar>
      </div>

      <!-- 上部酒店图片轮播图 -->
      <div>
        <p class="roomname">高级大床房</p>
        <van-swipe :autoplay="3000" indicator-color="#bbb" :height="240">
          <van-swipe-item v-for="(img, key) in 6" :key="key">
            <div style="height: 300px; background: #21abfd">
              <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 房间信息 -->
      <div>
        <van-row type="flex" justify="center">
          <van-col span="11">
            <div class="roomdescribe">
              <p>面积：36m&sup2;</p>
              <p>楼层：2—4层</p>
              <p>可住：2人</p>
              <p>卫浴：独立卫浴</p>
            </div>
          </van-col>
          <van-col span="11">
            <div class="roomdescribe">
              <p>早餐：无早餐</p>
              <p>窗户：有窗</p>
              <p>宽带：免费WIFI</p>
              <p>床型：1.8*2.0米一张</p>
            </div>
          </van-col>
        </van-row>
        <hr />
      </div>

      <!-- 预订信息 -->
      <div class="usermsg">
        <van-row type="flex" justify="center">
          <van-col span="6">
            <div class="bookmsga">
              <p>房间数</p>
            </div>
          </van-col>
          <van-col span="16">
            <div class="bookmsga">
              <p>
                <van-stepper v-model="roomnum" />
              </p>
            </div>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="6">
            <div class="bookmsga">
              <p>入住人</p>
            </div>
          </van-col>
          <van-col span="16">
            <div class="bookmsga">
              <p>陈亚博</p>
            </div>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="6">
            <div class="bookmsga">
              <p>预计到店</p>
            </div>
          </van-col>
          <van-col span="16">
            <div class="bookmsga">
              <p>16：00（房间整晚保留）</p>
            </div>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="6">
            <div class="bookmsga">
              <p>发票</p>
            </div>
          </van-col>
          <van-col span="16">
            <div class="bookmsga">
              <p>如需发票请到前台领取</p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>

    <!-- 底层支付 -->
    <div class="pay">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
        <van-dropdown-menu direction="up" class="dropdown">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookpay",
  data() {
    return {
      collect: true,
      iconcollect: "star-o",
      checked: "",
      value1: 1,
      option1: [
        { text: "支付宝支付", value: 1 },
        { text: "微信支付", value: 2 },
        { text: "Apple pay支付", value: 3 }
      ],
      roomnum: 1
    };
  },
  methods: {
    // 返回上一级
    onClickLeft() {
      this.$router.push("/cityhotellist");
    },
    // 点击星星图标
    onClickRight(e) {
      if (this.collect) {
        this.iconcollect = "star";
        this.collect = false;
      } else {
        this.iconcollect = "star-o";
        this.collect = true;
      }
    },
    // 提交订单
    onSubmit() {
      console.log("点击了提交按钮");
    }
  }
};
</script>

<style scoped="">
.main {
  overflow: auto;
}

.header-main {
  background: #eae9e9;
}

.roomname {
  margin: 5px 0;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
  color: #101010;
}

.roomdescribe {
  font-size: 12px;
  color: #101010;
}

.roomdescribe p {
  margin: 2px 0;
  line-height: 16px;
}

.dropdown {
  width: 150px;
}

.bookmsga p {
  margin: 5px 0;
}
</style>
