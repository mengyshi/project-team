<template>
	<div>
		<van-panel title="家乡" desc="请在下面选择你的家乡" >
<<<<<<< HEAD
		<input type="text" v-model="val"/>
=======
>>>>>>> dev-mm
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
<<<<<<< HEAD
				 val:"",
=======
>>>>>>> dev-mm

			}
		},
		methods:{
			confirm(data){
<<<<<<< HEAD
				console.log(data[0].name);
				this.val=data[0].name;
=======
				console.log(data[0].name)
>>>>>>> dev-mm

			}
		}

	}
</script>
<style>
<<<<<<< HEAD
	.ipt{
		margin:0 1.2rem;
		background:#cecece;


	}
	.ipt input{
		border:0;
		background:#cecece;
		height:2.4rem
	}

=======
	
>>>>>>> dev-mm
</style>