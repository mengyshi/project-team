<template>
	<div>
		<van-panel title="出生日期" desc="请在下面选择您的出生年月" >
		  <van-datetime-picker
			  v-model="currentDate"
			  type="date"
			  :min-date="minDate"
			  :max-date="maxDate"
			  @confirm="onConfirm"
			  @cancel="cancel()"

			/>
		  
		</van-panel>	
	</div>
</template>
<script>
	export default{
	data() {
	    return {
	    	minDate:new Date(1960),
	      currentDate: new Date(),
	       maxDate: new Date(),
	    };

	},
	methods:{
		onConfirm(data){
			console.log(data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate());
		},
		cancel(){
			this.$router.go(-1)
		}

	}



	}
</script>
<style>
	
</style>