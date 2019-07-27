<template>
	<div>
		<van-panel title="家乡" desc="请在下面选择你的家乡" class="ipt">
		<input  type="text" v-model="val"/>

		  <van-area :area-list="areaList" :columns-num="1"   @confirm="confirm"/>
		  
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
				 phone:null,
				 address:null,
				 postcode:null,


			}
		},
		methods:{
			confirm(data){

				console.log(data[0].name);
				this.val=data[0].name;

				console.log(data[0].name)
				var id=this.$route.query.id;
				axios({
			      url:"http://106.12.52.107:8081/MeledMall/user/editMsg",
			      method:"post",
			      data:qs.stringify({id:id,phone:this.phone,area:this.val,address:this.address,postcode:this.postcode}),
			    }).then((data)=>{
			    	console.log(data);

			    })


			},
			onConfirm(data){
				console.log(data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate());
				this.val=data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate();
				
			},
			cancel(){
				this.$router.go(-1)
			}
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
		    	if(data.data.info.user.address!=null){
		    		this.address=data.data.info.user.address;
		    	}
		    	if(data.data.info.user.postcode!=null){
		    		this.postcode=data.data.info.user.postcode;
		    	}

		    	// 
		    	// this.area=data.data.info.user.area;
		    	// this.val=data.data.info.user.address;
		    	// this.postcode=data.data.info.user.postcode;
		    	console.log(this.phone,this.address,this.val,this.postcode)

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