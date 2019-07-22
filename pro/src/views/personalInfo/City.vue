<template>
	<div>
		<van-panel title="所在地" desc="请在下面选择你的所在地" >
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

			}
		},
		methods:{
			confirm(data){
				console.log(data[0].name)

			}
		}

	}
</script>
<style>
	
</style>