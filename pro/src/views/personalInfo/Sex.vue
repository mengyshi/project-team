<template>
	<div>
		<van-panel title="性别" desc="请在下面选择您的性别" style="font-size:1rem">
			<div>
				
			</div>
		  <van-picker :columns="columns" @change="onChange" />
		  
		</van-panel>	
	</div>
</template>
<script>
	export default{
		  data() {
		    return {
		      columns: ['男', '女']
		    };
		  },
		  methods: {
		    onChange(picker, value, index) {
		      
		      console.log(value)
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