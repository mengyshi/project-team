<template>
  <div class="main">
    <!-- 这是酒店预订子模块 -->
    <!-- 上部酒店图片轮播图 -->
    <div>
      <van-swipe :autoplay="3000" indicator-color="#bbb" :height="240">
        <van-swipe-item v-for="(img, key) in 6" :key="key">
          <div style="height: 300px; background: #21abfd">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 酒店描述 -->
    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div class="hotelmsg">
            <span class="hotelname">酒店名</span>
            <p class="hoteltext">酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务酒店服务</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <hr />
    <!-- 选择入住时间 -->
    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-cell-group>
            <van-field
              v-model="intime"
              :readonly="readonly"
              input-align="center"
              clearable
              label="预定时间"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-cell-group>
            <van-field
              v-model="outtime"
              :readonly="readonly"
              input-align="center"
              clearable
              label="退订时间"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-cell-group>
            <van-field
              v-model="stayday"
              :readonly="readonly"
              input-align="center"
              clearable
              label="预定天数"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-button type="info" @click="showPopup" style="width: 100%" :text="time"></van-button>
          <van-popup v-model="show">
            <div class="datemodel">
              <!-- 入住时间 -->
              <div>
                <!-- <p class="datetitle">入住时间</p> -->
                <van-datetime-picker
                  v-model="inDate"
                  type="date"
                  :main-date="miandate"
                  :visible-item-count="datenum"
                  title="预订时间"
                  :show-toolbar="showdatebtn"
                  cancel-button-text=" "
                  confirm-button-text=" "
                />
              </div>
              <!-- 退订时间 -->
              <div>
                <!-- <p class="datetitle">退订时间</p> -->
                <van-datetime-picker
                  v-model="outDate"
                  type="date"
                  :main-date="miandate"
                  :visible-item-count="datenum"
                  title="退订时间"
                  :show-toolbar="showdatebtn"
                  cancel-button-text=" "
                  confirm-button-text=" "
                />
              </div>
              <van-row>
                <van-col span="12">
                  <van-button type="default" @click="closedate" style="width: 100%">取消</van-button>
                </van-col>
                <van-col span="12">
                  <van-button type="default" @click="showdate" style="width: 100%">完成</van-button>
                </van-col>
              </van-row>
            </div>
          </van-popup>
        </van-col>
      </van-row>
    </div>
    <!-- 可预订房间展示 -->
    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <p>酒店推荐</p>
        </van-col>
      </van-row>

      <div v-for="(value, key) in 6" :key="key">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <div class="clean roombox">
              <div class="roomimg">
                <img src="http://pavo.elongstatic.com/i/Hotel120_120/0000663x.jpg" alt />
              </div>
              <div class="roommsg">
                <p>高级大床房</p>
                <p>36m&sup2;&nbsp; 不含早 &nbsp; 大床 &nbsp; 有窗</p>
                <p>入住当天18:00之前免费取消订单</p>
              </div>
              <div class="bookbtn">
                <van-button type="info" @click="gobook(key)">预订</van-button>
                <div class="money">￥123在线付</div>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>

    <!-- 酒店入住提示 -->
    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          <div class="tips">
            <p class="title">订房必读</p>
            <p>入住时间</p>
            <p>入店时间：14:00以后&nbsp;&nbsp;离店时间：12:00以前</p>
            <p>儿童政策</p>
            <p>不接受16岁以下儿童单独入住</p>
            <p>膳食安排</p>
            <p>自主早餐&nbsp;RMB18</p>
            <p>宠物携带</p>
            <p>不允许宠物携带</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotelbook",
  data() {
    return {
      hotelid: this.$route.params.id,
      img: "",
      show: false,
      showdatebtn: true, //用于控制弹出框中时间选择器自带的按钮
      time: "预定时间",
      inDate: new Date(),
      outDate: new Date(),
      miandate: new Date(),
      intime: "",
      outtime: "",
      datenum: 3,
      readonly: true,
      stayday: 0
    };
  },
  methods: {
    // 时间弹出层
    showPopup() {
      this.show = true;
    },
    asd() {
      console.log(123);
    },
    // 计算住宿时间
    showdate() {
      let max = Date.parse(this.outDate);
      let min = Date.parse(this.inDate);
      this.stayday = parseInt((max - min) / 1000 / 60 / 60 / 24);
      console.log(this.stayday);
      this.intime = gettime(this.inDate);
      this.outtime = gettime(this.outDate);
      this.show = false;
    },
    // 关闭弹出层
    closedate() {
      this.show = false;
    },
    // 跳转至预定信息页面
    gobook(id) {
      console.log("跳转至预定页");
      console.log(id);
    }
  },
  mounted() {
    console.log(this.hotelid);
    this.intime = gettime();
    this.outtime = gettime();
  }
};

function gettime(date1) {
  if (date1 === undefined) {
    var date = new Date();
  } else {
    var date = date1;
  }

  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
</script>

<style scoped="">
.clean:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.hotelmsg > span {
  display: block;
}

.hotelname {
  height: 30px;
  line-height: 30px;
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  text-align: center;
}
.hoteltext {
  margin: 0;
  line-height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
}

.datemodel {
  width: 300px;
}

.datetitle {
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #101010;
}

.tips p {
  margin: 2px 0;
  text-indent: 10px;
  font-size: 12px;
  line-height: 18px;
  color: #101010;
}

.tips > .title {
  line-height: 20px;
  font-size: 16px;
  text-align: center;
}

.roombox {
  height: 80px;
  margin: 5px 0;
  padding: 5px 0;
  color: #101010;
}

.roomimg {
  float: left;
}

.roomimg img {
  height: 70px;
  width: 70px;
}

.roommsg {
  float: left;
  margin-left: 5px;
  height: 70px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.roommsg p {
  margin: 5px 0;
}

.roommsg p:nth-child(1) {
  font-size: 16px;
}

.bookbtn {
  float: right;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.money {
  text-align: center;
  background: #1989fa;
  border-radius: 1px;
  font-size: 10px;
  color: #fff;
}
</style>
