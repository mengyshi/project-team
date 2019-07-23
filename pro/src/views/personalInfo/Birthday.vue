<template>
	<div>
		<van-panel title="出生日期" desc="请在下面选择您的出生年月" >
		 <div class="ipt"><input type="text" v-model="val"/>
		  <van-datetime-picker
			  v-model="currentDate"
			  type="date"
			  :min-date="minDate"
			  :max-date="maxDate"
			  @confirm="onConfirm"
			  @cancel="cancel()"

			/>
		  </div>
		</van-panel>	
	</div>
</template>
<script>
	export default{
	data() {
	    return {
	    	val:"",
	    	minDate:new Date(1960),
	      currentDate: new Date(),
	       maxDate: new Date(),
	    };

	},
	methods:{
		onConfirm(data){
			console.log(data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate());
			this.val=data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate();
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