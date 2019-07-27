<template>
	<div>
		<van-panel title="所在地" desc="请在下面选择你的所在地" >
		 <div class="ipt"><input type="text" v-model="val"/>
		<van-area :area-list="areaList" :columns-num="1"   @confirm="confirm"/>
		  </div>
		</van-panel>	
	</div>
</template>
<script>
	import area from "../../assets/area";
	import axios from "axios"
	import qs from "qs"
	export default{
		data(){
			return{
				 areaList:area,
				 val:"",
				 info:{},
				 phone:null,
				 area:null,
				 postcode:null,
			}
		},
		methods:{
			confirm(data){
				//console.log(this.val)
				this.val=data[0].name;
				console.log(this.val)
				this.info.city=this.val;
				console.log(this.info);

				//$.ajax({
			// 	url: 'http://106.12.52.107:8081/MeledMall/user/editMsg',
			// 	type: 'post',
			// 	dataType: 'json',
			// 	data: {phone:" 123456",area:"河南省郑州市",address:"二七区",postcode:"176000",id:1},
			// 	success:function(data){
			// 		console.log(data)
			// 	}
			// })
			// 
			
			//修改个人信息
			var id=this.$route.query.id;
				axios({
			      url:"http://106.12.52.107:8081/MeledMall/user/editMsg",
			      method:"post",
			      data:qs.stringify({id:id,phone:"15037663232",area:"上海",address:this.val,postcode:"476200"}),
			    }).then((data)=>{
			    	console.log(data);

			    })
			},

		},
		mounted(){
			var id=this.$route.query.id;
			axios({
		      url:"http://106.12.52.107:8081/MeledMall/user/mine",
		      method:"post",
		      data:qs.stringify({id:id}),

		    }).then((data)=>{
		    	//console.log(data)
		    	if(data.data.info.user.phone!=null){
		    		this.phone=data.data.info.user.phone;
		    	}
		    	if(data.data.info.user.area!=null){
		    		this.area=data.data.info.user.area;
		    	}
		    	if(data.data.info.user.postcode!=null){
		    		this.postcode=data.data.info.user.postcode;
		    	}

		    	// 
		    	// this.area=data.data.info.user.area;
		    	// this.val=data.data.info.user.address;
		    	// this.postcode=data.data.info.user.postcode;
		    	console.log(this.phone,this.area,this.val,this.postcode)

		    })

		}
	}
</script>
<style scope="">

	.ipt{
		margin:0 1.2rem;
		background:#cecece;


	}
	.ipt input{
		border:0;
		background:#cecece;
		height:2.4rem
	}


</style>