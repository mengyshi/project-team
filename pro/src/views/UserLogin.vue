<template>
	<div id="main-box">
		<div id="main-left">
			<h2>{{username}}</h2>
			<div>
				<van-icon name="sign"/> 
	  			<span>高级会员</span>
			</div>
	  		
		</div>
		<div id="main-right">
			<span @click="tap1()">
				
			</span>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			username:"",
		}
		
	},
	mounted(){
		var username = JSON.parse(localStorage.getItem("info")).username;
		this.username=username;
		console.log(username);

	},
	methods:{
		tap1(){
	  		this.$router.push({path:"/personaldata",query:{username:this.username}})
	  	},
	}

}
	
</script>
<style>
	#header{
		width:100%;
		height: 11rem;
		background:url("http://img2.imgtn.bdimg.com/it/u=18565717,1492017595&fm=26&gp=0.jpg");

	}
	section{
		background: gray;
	}
	#main-box{
		display: flex;
		justify-content: space-between;

	}
	#main-left{
		
		width:60%;
		display:flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	#main-right{
		width:30%;
		height:8rem;
		display:flex;
		justify-content: center;
		align-items: center;
	}
	#main-right span{
		display: block;
		width:5rem;
		height:5rem;
		background: #0ff;
		border-radius: 50%;
		background:url("http://img3.imgtn.bdimg.com/it/u=4171914132,1957317625&fm=26&gp=0.jpg") no-repeat;
		background-size:5rem 5rem;
	}	
</style>