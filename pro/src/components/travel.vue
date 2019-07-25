<template>
  <div id="main">
    <!-- 出行专题 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="travellist" v-for="(value, key) in msg" :key="key">
        <van-row type="flex" justify="center">
          <van-col span="22">
            <van-grid :border="false" :column-num="1">
              <van-grid-item>
                <div class="showtravel" @click.stop="gohotel($event,123)">
                  <van-grid :border="false" :column-num="1">
                    <van-grid-item>
                      <van-image :src="value.imgurl" />
                    </van-grid-item>
                  </van-grid>
                  <div class="msgtext">
                    <van-row type="flex" justify="space-between">
                      <van-col span="12">
                        <div class="texttravel">
                          <div>{{value.city}}</div>
                          <div>{{value.detail}}</div>
                        </div>
                      </van-col>
                      <van-col span="12">
                        <div class="texttravel textright">
                          <div>出行</div>
                          <div>推荐</div>
                        </div>
                      </van-col>
                    </van-row>
                  </div>
                </div>
              </van-grid-item>
            </van-grid>
          </van-col>
        </van-row>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "travel",
  data() {
    return {
      msg: [],
      maxpage: 0,
      pagenum: 1,
      isLoading: false
    };
  },
  methods: {
    gohotel(e, id) {
      // console.log(e, id);
      this.$router.push("/cityhotellist");
    },
    // 下拉加载
    onRefresh() {
      let that = this;
      this.pagenum++;
      if (this.pagenum > this.maxpage) {
        this.$toast("已经到最后一页");
        this.isLoading = false;
      } else {
        axios({
          method: "get",
          url: "http://10.8.157.4:8080//trip/list.do",
          params: { page: that.pagenum }
        }).then(function(data) {
          data.data.info.infos.forEach((value, key) => {
            that.msg.push(value);
            that.$toast("加载成功");
            that.isLoading = false;
          });
        });
      }
    }
  },
  mounted() {
    let that = this;
    axios({
      methos: "get",
      url: "http://10.8.157.4:8080//trip/list.do?page=1"
    }).then(function(data) {
      that.maxpage = data.data.info.totalPage;
      that.msg = data.data.info.infos;
    });
  }
};
</script>

<style scoped="">
.show {
  width: 100%;
  height: 100px;
  background: #21bafd;
}

.showtravel {
  background: #21bafd;
  width: 100%;
  height: 120px;
  position: relative;
}

.msgtext {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 90%;
}

.texttravel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  margin: 0 10px;
}

.texttravel div {
  font-size: 14px;
  color: #fff;
}

.textright div {
  text-align: right;
}
</style>

