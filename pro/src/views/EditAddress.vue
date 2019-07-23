<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="编辑地址"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
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
	import axios from "axios"
	console.log(area.province_list)
	export default {
	  data() {
	    return {
	      areaList:area,
	      searchResult: [],
	      address:{
	      	id:"1",
	      	name:"zhangsan",
	      	tel:"15037663282",
	      	
	      	areaCode:"420000",
	      	addressDetail:"二七区"
	      },	     
	    }
	  },

	  methods: {
	  	 onClickLeft(){
	    	this.$router.go(-1);
	    },
	    onSave(conent) {
	    	var id=this.$route.query.index;
	    	 var area=""+content.province+content.city+content.county;
	    	axios({
		      url:"http://10.8.157.18:8080/set/updateadds.do",
		      method:"post",
		      params:{id:id,name:content.name,area:area,phone:content.tel,detailadds:content.addressDetail,areaCode:content.areaCode}
		    }).then((data)=>{
		      console.log(data);
		      console.log("修改成功")
		  })

	      
	    },
	    onDelete() {
	    	var id=this.$route.query.index;
	    	axios({
		      url:"http://10.8.157.18:8080/set/dele.do",
		      method:"get",
		      params:{id:id}

		    }).then((data)=>{
		      console.log(data.data.data);
		      console.log("删除成功")
		  })

	      
	    },
	  },
	  mounted(){
	  	console.log(this.$route.query.index);
	  	var id=this.$route.query.index;

		    axios({
		      url:"http://10.8.157.18:8080/set/findbyid.do",
		      method:"post",
		      params:{id:id}

		    }).then((data)=>{
		     

		      var lists=data.data.data;
		      
		      var list={id:id,name:lists.name,tel:lists.phone,addressDetail:lists.detailadds,areaCode:lists.areaCode}
	       		console.log(list)
	       this.address=list;
	       console.log(this.address)
		  })
		}
	  
	}
</script>
<style>
.add{
	margin-top:3rem
}
</style>