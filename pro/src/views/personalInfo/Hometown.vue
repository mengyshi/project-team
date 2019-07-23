<template>
	<div>
		<van-panel title="家乡" desc="请在下面选择你的家乡" >
		<input type="text" v-model="val"/>
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