<template>
	<div>
		<van-panel title="联系方式" desc="请在下面输入您的联系方式" >
		  <div class="ipt"><input type="text" v-model="num" @touchstart.stop="show = true">
				<van-number-keyboard
				  :show="show"
				  extra-key="."
				  close-button-text="完成"
				  @blur="show = false"
				  @input="onInput"
				  @delete="onDelete"
				  @close="onClose"
				/>
			</div>
		</van-panel>	
	</div>
</template>
<script>
	import axios from "axios"
	import qs from "qs"
	export default{
		data(){
			return{
				num:"",
				show: true,
				maxlength:11,
				 phone:null,
				 address:null,
				 postcode:null,

			}
		},
		methods: {
		    onInput(value) {
		    	this.num+=value;
		     	console.log(value)
		    },
		    onDelete() {
		      	this.num=this.num.slice(0,this.num.length-1)
		    },
		    onClose(){
		    	console.log("完成");
		    	var id=this.$route.query.id;
				axios({
			      url:"http://106.12.52.107:8081/MeledMall/user/editMsg",
			      method:"post",
			      data:qs.stringify({id:id,phone:this.num,area:this.area,address:this.address,postcode:this.postcode}),
			    }).then((data)=>{
			    	console.log(data);

			    })
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
		    	if(data.data.info.user.area!=null){
		    		this.area=data.data.info.user.area;
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
		    	console.log(this.area,this.address,this.val,this.postcode)

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