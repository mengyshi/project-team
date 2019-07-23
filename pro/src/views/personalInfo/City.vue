<template>
	<div>
		<van-panel title="所在地" desc="请在下面选择你的所在地" >
<<<<<<< HEAD
		 <div class="ipt"><input type="text" v-model="val"/>
		<van-area :area-list="areaList" :columns-num="1"   @confirm="confirm"/>
		  </div>
=======
		  <van-area :area-list="areaList" :columns-num="1"   @confirm="confirm"/>
		  
>>>>>>> dev-mm
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