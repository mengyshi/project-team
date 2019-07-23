<template>
  <div>
    <van-nav-bar :fixed="true" title="编辑地址" left-arrow @click-left="onClickLeft" />
    <div class="add">
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        :address-info="address"
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
  </div>
</template>
<script>
import area from "../assets/area";
import axios from "axios";
// console.log(area.province_list)
export default {
  data() {
    return {
      areaList: area,
      searchResult: [],
      address: {
        id: "1",
        name: "zhangsan",
        tel: "15037663282",

        areaCode: "420000",
        addressDetail: "二七区"
      }
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave() {},
    onDelete() {}
  },
  mounted() {
    // console.log(this.$route.query.index);
    var id = this.$route.query.index;

    //   axios({
    //     url:"http://uvwvkr.natappfree.cc/set/findbyid.do",
    //     method:"post",
    //     params:{id:id}

    //   }).then((data)=>{
    //     console.log(data.data.data)
    //     var lists=data.data.data;
    //     var datas=[];2、
    //     for(var i=0;i<lists.length;i++){

    //       //var address=""+lists[i].area+lists[i].detailadds
    //       var id=""+lists[i].id;
    //       var list={id:id,name:lists[i].name,tel:lists[i].phone,province:"",city:"",county:"",addressDetail:lists[i].detailadds}

    //       datas.push(list);

    //     }
    //      this.address=datas;
    //      console.log(this.address)
    // })
  }
};
</script>
<style>
.add {
  margin-top: 3rem;
}
</style>
