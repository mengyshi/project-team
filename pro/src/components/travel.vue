<template>
  <div id="main">
    <!-- 出行专题 -->
    <div class="travellist" v-for="num in 6" :key="num">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <van-grid :border="false" :column-num="1">
            <van-grid-item>
              <div class="showtravel" @click.stop="gohotel($event,123)">
                <van-row type="flex" justify="space-between">
                  <van-col span="12">
                    <div class="texttravel">
                      <div>大理</div>
                      <div>大理很美 洱海 寺庙</div>
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
            </van-grid-item>
          </van-grid>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "travel",
  methods: {
    gohotel(e, id) {
      console.log(e, id);
      this.$router.push("/cityhotellist");
    }
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
}

.texttravel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  margin: 0 10px;
}

.texttravel div {
  font-size: 12px;
  color: #fff;
}

.textright div {
  text-align: right;
}
</style>

