<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="收件地址"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
		<div class="address">
			<van-address-list
			  v-model="chosenAddressId"
			  :list="list"
			  @add="onAdd"
			  @edit="onEdit"
			/>
		</div>
		
	</div>
</template>
<script>
  import axios from "axios"
	export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
    }
  },

  methods: {
    onAdd() {
      this.$router.push("/addaddress")
    },

    onEdit(item, index) {
      this.$router.push({path:"/editaddress",query:{index:item.id}})
    },
    onClickLeft(){
    	this.$router.go(-1);
    },

  },
  mounted(){
    axios({
      url:"http://uvwvkr.natappfree.cc/set/adds.do",
      method:"get",

    }).then((data)=>{
      
      var lists=data.data.data;
      var datas=[];
      for(var i=0;i<lists.length;i++){
        
        var address=""+lists[i].area+lists[i].detailadds
        var id=""+lists[i].id;
        var list={id:id,name:lists[i].name,tel:lists[i].phone,address:address}
       
        datas.push(list);
        
      }
       this.list=datas;
  })
}
  // $.ajax({
  //       url: 'http://q9ivr2.natappfree.cc/set/adds.do',
  //       type: 'get',
  //       dataType: 'json',
  //       //data:{username:"zhangsan"},
  //       success:function(data){
  //         console.log(data)
  //       }
  //     })
}
</script>
<style>
	.address{
		margin-top:3rem;
	}
</style>