<template>
	<div>
		<van-panel title="用户名" desc="请在下面输入您的姓名" style="font-size:1rem">
		  <div class="ipt"><input type="text"></div>
		  
		</van-panel>	
	</div>
</template>
<script>
	export default{
		methods:{
			onConfirm(data){
				console.log(data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate());
				this.val=data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate();
				var username=this.$route.query.username;
				axios({
					url:"http://10.8.157.18:8080/set/uptaper.do",
					method:"get",
					params:{id:2,place:this.val},
				}).then((data)=>{
					console.log(data);
				}).catch(data=>{
					console.log(data)
				})
			},
			cancel(){
				this.$router.go(-1)
			}
		}

	}
</script>
<style>
	.ipt{
		margin:0 1.2rem;
		background:#cecece;


	}
	.ipt input{
		border:0;
		background:#cecece;
		height:2.4rem
	}
	.van-cell{
		font-size:1.2rem
	}
</style>