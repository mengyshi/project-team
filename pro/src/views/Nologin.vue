<template>
	<div id="main-box">
		<van-button type="primary" @click="tap('loginC')">登录</van-button>
		<van-button type="info" @click="tap('register')">注册</van-button>
	</div>
</template>
<script>
export default{
	data(){
		return{
			usernam:"",
		}
		
	},
	methods:{
		tap(info){
			this.$router.push("/"+info);

		}

	},
	mounted(){
		// var username = JSON.parse(localStorage.get("info")).username;
		// this.username=username;
		// console.log(username);

	}

}
	
</script>
<style scope="">
	#header{
		width:100%;
		height: 11rem;
		background:#fff;

	}
	section{
		background: gray;

	}
	#main-box{
		display: flex;
		justify-content:center;
		align-items:center;
		height:8rem;

	}
	
		
</style>