<template>
	<div>
		<van-panel title="性别" desc="请在下面选择您的性别" style="font-size:1rem">

			 <div class="ipt"><input type="text" v-model="val"/>
		  <van-picker :columns="columns" @change="onChange" />
		  </div>

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

		    	val:"",

		      columns: ['男', '女']
		    };
		  },
		  methods: {
		    onChange(picker, value, index) {
		      
		      console.log(value)

		      this.val=value;

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