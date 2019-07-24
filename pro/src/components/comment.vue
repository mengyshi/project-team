<template>
  <div id="main">
    <!-- 对应热门评论列表 -->
    <div class="hostcomment" v-for="(value, key) in 5" :key="key">
      <van-row type="flex" justify="center">
        <van-col span="22">
          <!-- 上层头像 用户名 跳转按钮 -->
          <div class="usermsg">
            <div class="headimg">
              <van-image round width="50px" height="50px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="username">
              <span>张**</span>
              <span>入住城市 &nbsp; 杭州</span>
            </div>
            <div class="button">
              <van-button
                type="info"
                :round="round"
                size="mini"
                style="background: #bbb; border: 0"
              >查看房源</van-button>
            </div>
          </div>
          <!-- 下层评论 -->
          <div>
            <p
              class="commenttext"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda optio, dolore alias officia tenetur aspernatur voluptatibus placeat, ex doloremque reiciendis, mollitia est eligendi modi explicabo asperiores magni inventore beatae nesciunt!</p>
          </div>
        </van-col>
      </van-row>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      round: true
    };
  }
};
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

.usermsg {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.username {
  margin-right: 25px;
}

.username span:nth-child(1) {
  font-size: 20px;
  color: #101010;
}

.username span:nth-child(2) {
  font-size: 14px;
  color: #bbb;
}

.commenttext {
  font-size: 14px;
  color: #626161;
  text-indent: 24px;
}
</style>


