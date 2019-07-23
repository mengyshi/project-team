<template>
  <div>
    <van-nav-bar :fixed="true" title="新增收件地址" left-arrow @click-left="onClickLeft" />
    <div class="add">
      <van-address-edit
        :area-list="areaList"
        show-delete
        address-info
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>
<script>
import area from "../assets/area";
// console.log(area.province_list)
export default {
  data() {
    return {
      areaList: area,
      searchResult: [],
      AddressInfo: {
        id: 1,
        name: "张三",
        tel: "15037663282"
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    onSave(content) {
      // console.log(content.addressDetail,content.tel,content.city,content.county,content.name,content.province);
      var area = "" + content.province + content.city + content.county;
      // console.log(area)
    },
    onDelete() {}
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [{
    //       name: '黄龙万科中心',
    //       address: '杭州市西湖区'
    //     }];
    //   } else {
    //     this.searchResult = [];
    //   }
    // }
  }
};
</script>
<style>
.add {
  margin-top: 3rem;
}
</style>
