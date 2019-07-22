<template>
  <div>
    <h2>tripStory</h2>
    <!-- <img v-for="img in imageList" v-lazy="img" :key="img" /> -->
    <lazy-component>
      <div>
        <img v-for="img in imageList" :key="img" v-lazy="img" width="45%" height="30%" />
      </div>
    </lazy-component>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      img: "",
      imageList: [
        "http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233393089308.jpg",
        "http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233396189618.jpg",
        "http://wdxg.ynkl003.com/upfiles/image/20190408/20190408112117951795.jpg",
        "http://wdxx.ynkl003.com/upfiles/image/20181218/20181218193235263526.jpg",
        "http://wdxg.ynkl003.com/upfiles/image/20190403/20190403134469476947.jpg",
        "http://wdxg.ynkl003.com/upfiles/image/20190403/20190403134417801780.jpg",
        "http://wdxx.ynkl003.com/upfiles/image/20190320/20190320160859135913.jpg"
      ]
    };
  },
  mounted: {
    // axios({
    //   url:"http://vf4hri.natappfree.cc/travelLog/list.do"
    // }).then(data=>{
    //   console.log(data)
    // }).catch(err=>{
    //   console.log(err)
    // })
  }
};
</script >
<style>
</style>
