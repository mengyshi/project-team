<template>
	<div id="main-box">
		<div id="main-left">
			<h2>{{username}}</h2>
			<div>
				<van-icon name="edit"/> 
	  			<span  @click="tap1()">个人资料</span>
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
			id:"",
			username:"",
		}
		
	},
	mounted(){
		var id = JSON.parse(localStorage.getItem("info")).id;
		this.username = JSON.parse(localStorage.getItem("info")).username;
		this.id=id;
		console.log(id);

	},
	methods:{
		tap1(){
	  		this.$router.push({path:"/personaldata",query:{id:this.id}})
	  	},
	}

}
	
</script>
<style>
	#header{
		width:100%;
		height: 11rem;
		background:url("http://img1.imgtn.bdimg.com/it/u=2199796161,707287990&fm=26&gp=0.jpg");

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
		background:url("http://img1.imgtn.bdimg.com/it/u=162252298,3769764201&fm=26&gp=0.jpg") no-repeat;
		background-size:5rem 5rem;
	}	
</style>