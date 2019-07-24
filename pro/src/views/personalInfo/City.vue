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
	export default{
		data(){
			return{
				 areaList:area,

				 val:"",


			}
		},
		methods:{
			confirm(data){

				console.log(data[0].name);
				this.val=data[0].name;

				


			},
			onConfirm(data){
				console.log(data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate());
				this.val=data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate();
				var username=this.$route.query.username;
				axios({
					url:"http://10.8.157.18:8080/set/uptaper.do",
					method:"get",
					params:{id:3,username:username,place:this.val},
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


</style>