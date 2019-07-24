<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  
		right-text="保存"
	  	left-arrow
	  	@click-left="onClickLeft"
	 	@click-right="onClickRight"
		 
	/>
	<router-view class="show-info"></router-view>
	</div>
	
</template>
<script>
 import axios from "axios"
 import city from "./personalInfo/City.vue"
 

	export default{
		data(){
			return{
				info:{}


			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);

			},

			onClickRight(){
				console.log("保存成功")
				
			}
		},
		

	}
</script>
<style>
	#app{
		text-align:left;
	}
	.show-info{
		margin-top:3rem;
	}
</style>