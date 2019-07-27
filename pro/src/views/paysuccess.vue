<template>
  <div>
    <!-- 这是支付成功页面 -->
    <!-- 顶部信息 -->
    <div>
      <van-nav-bar title="预定成功" left-arrow @click-left="onClickLeft" class="header-main" />
    </div>

    <div>
      <!-- 温馨提示 -->
      <van-row type="flex" justify="center" class="row">
        <van-col span="22">
          <div class="tips">
            <h4>温馨提示</h4>
            <p>入住说明：Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quas. Necessitatibus repellendus laudantium voluptas ipsa eveniet, molestiae velit commodi iusto porro optio, unde dolore nisi ipsum ut qui. Dignissimos, neque</p>
            <p>发票报销：如需发票，请提前通知前台</p>
          </div>
        </van-col>
      </van-row>

      <!-- 付款信息 -->
      <van-row type="flex" justify="center" class="row">
        <van-col span="22">
          <div class="tips">
            <h4>付款信息</h4>
            <van-row type="flex" justify="center">
              <van-col span="6">预定房间数：</van-col>
              <van-col span="16">{{roomnum}}间</van-col>
            </van-row>
            <van-row type="flex" justify="center">
              <van-col span="6">预定天数：</van-col>
              <van-col span="16">{{day}}天</van-col>
            </van-row>
            <van-row type="flex" justify="center">
              <van-col span="6">支付金额：</van-col>
              <van-col span="16">{{allprice}}元</van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>

      <!-- 预定人信息 -->
      <van-row type="flex" justify="center" class="row">
        <van-col span="22">
          <div class="tips">
            <h4>预定人信息</h4>
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
                  <p>联系电话</p>
                </div>
              </van-col>
              <van-col span="16">
                <div class="bookmsga">
                  <p>15938335832</p>
                </div>
              </van-col>
            </van-row>
            <p style="text-align: center; font-size: 18px;">祝您入住愉快!</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "paysuccess",
  data() {
    return {
      roomnum: 0,
      day: 0,
      allprice: 0
    };
  },
  methods: {
    onClickLeft() {
      console.log("点击了返回按钮");
      this.$router.push("/Recommend");
    }
  },
  mounted() {
    this.roomnum = this.$route.params.roomnum;
    this.day = this.$route.params.day;
    this.allprice = this.$route.params.allprice;
  }
};
</script>

<style scoped="">
.header-main {
  background: #eae9e9;
}

.row {
  margin: 18px 0;
}

.tips {
  background: #eae9e9;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 14px;
  color: #101010;
  padding: 5px 0;
}

.tips h4,
.tips p {
  margin: 10px;
  line-height: 16px;
}

.tips h4 {
  text-align: center;
}
</style>
