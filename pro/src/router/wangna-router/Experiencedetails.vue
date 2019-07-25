<template>
  <div class="Experiencedetails">
    <div class="header">
      <van-icon name="arrow-left" size="24" @click="cancelBtn" />
      <van-icon name="chat-o" size="24" />
    </div>
    <div class="content">
      <div class="hotelinfo">
        <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <ul>
          <li>{{list.shopname}}</li>
          <li>{{list1.address}}</li>
          <li>￥{{list.price}}/每人</li>
          <li>{{list.detail}}</li>
          <li>店提供服务（简体中文和英文）名</li>
        </ul>
      </div>
      <ul class="detail-con">
        <li class="understing">
          <span>认识一下Scarlett</span>
          <van-image width="52" height="52" src="https://img.yzcdn.cn/vant/cat.jpeg" :round="true" />
        </li>
        <li class="jieshao">我生长于深圳的一个法律世家，而是因受儒、释、道三种思的交叉感染，养成了7大爱好；琴/色/书/画/诗/酒/茶。</li>
        <li>
          <span>活动内容</span>
          <p>我会带你品尝我精心挑选的几款茶，教你用传统仪式感，以及独具深圳式创造力的方式喝茶、烹饪、品茶。</p>
          <p>如果你是一枚茶界的小白，那就更棒了，在我的茶馆里面我会带你品尝我精心挑选的几款茶。</p>
        </li>
        <li>
          <span>体验内包括的东西</span>
          <p>燃一款我最爱的沉香</p>
          <p>品尝我沉迷的茶配点心</p>
          <p>喝到三种我精心挑选的茶</p>
        </li>
        <li>
          <span>备注</span>
          <p>我会带你品尝我精心挑选的几款茶，教你用传统仪式感，以及独具深圳式创造力的方式喝茶、烹饪、品茶。</p>
          <p>如果你是一枚茶界的小白，那就更棒了，在我的茶馆里面我会带你品尝我精心挑选的几款茶。</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Experiencedetails",
  data() {
    return {
      list: [],
      list1: []
    };
  },
  methods: {
    cancelBtn() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let that = this;
    axios({
      method: "get",
      url: "http://10.8.157.8:8080/food/shopDetail.do",
      params: {
        id: that.$route.query.id
      }
    })
      .then(function(res) {
        that.list = res.data.info;
        that.list1 = res.data.info.deliciousDetail;
        console.log(that.list);
        console.log(that.list1);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
<style lang="" scoped="">
.Experiencedetails {
  margin-top: 30px;
}
.header {
  height: 40px;
}
.header {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.hotelinfo {
  height: 250px;
  position: relative;
  margin-bottom: 24px;
}
.hotelinfo ul {
  position: absolute;
  font-weight: 100;
  bottom: 14px;
  left: 12px;
}
.hotelinfo ul li {
  text-align: left;
  margin-bottom: 6px;
}
.hotelinfo ul li:first-child {
  margin-bottom: 10px;
}
.detail-con li {
  padding: 10px 10px 20px 10px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 32px;
  text-align: left;
}
.detail-con li span {
  margin-bottom: 20px;
  font-weight: 100;
}
.detail-con .understing {
  display: flex;
  justify-content: space-between;
  height: 52px;
  border-bottom: 0;
  padding: 20px;
}
.jieshao {
  text-indent: 30px;
}
.detail-con li p {
  text-indent: 30px;
}
</style>
