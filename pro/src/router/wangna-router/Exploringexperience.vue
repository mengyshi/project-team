<template>
  <div class="exploring">
    <!-- 返回 -->
    <p class="backBtn">
      <van-icon size="30" name="arrow-left" @click="cancle" />
    </p>
    <!-- 列表 -->
    <div class="list-content">
      <div class="con-travel-story">
        <ul class="shoplist">
          <li v-for="item in list" :key="item.id">
            <router-link
              :to="{path:'Experiencedetails',name:'Experiencedetails',query:{id:item.id}}"
            >
              <van-image
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2525537183,3948077918&fm=26&gp=0.jpg"
              />
            </router-link>
            <p>{{item.shopname}}</p>
            <p>{{item.detail}}</p>
            <p>每人￥{{item.price}}</p>
            <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
            <div class="Collection">
              <van-icon name="like-o" @click="collectionpro" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Exploringexperience",
  data() {
    return {
      value: 0,
      list: []
    };
  },
  methods: {
    cancle() {
      this.$router.go(-1);
    },
    collectionpro() {
      axios({
        method: "get",
        url: "http://10.8.157.8:8080/food/collectDelicious.do",
        params: {
          uid: 2,
          deliciousid: 1
        }
      })
        .then(function(res) {
          alert(res.data.info);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    let that = this;
    axios({
      method: "get",
      url: "http://10.8.157.8:8080/food/showShopdetail.do",
      params: {
        id: that.$route.query.id
      }
    })
      .then(function(res) {
        that.list = res.data.info;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
<style lang="" scope="">
* {
  padding: 0px;
  margin: 0px;
}
.exploring {
  margin-top: 20px;
}
.backBtn {
  text-align: left;
  text-indent: 10px;
  margin-bottom: 6px;
}
/* 店铺列表 */
.shoplist {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.shoplist li {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;
}
.Collection {
  position: absolute;
  top: 20px;
  right: 20px;
}
.shoplist li img {
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.shoplist li p {
  text-align: left;
  height: 20px;
  margin-bottom: 3px;
  color: #333;
}
</style>