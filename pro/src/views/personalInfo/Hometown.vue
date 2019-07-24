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

				console.log(data[0].name)


			},
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


</style>