<template>
	<div>
		<van-panel title="家乡" desc="请在下面选择你的家乡" >
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