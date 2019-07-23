<template>
	<div>
		<van-panel title="性别" desc="请在下面选择您的性别" style="font-size:1rem">
<<<<<<< HEAD
			 <div class="ipt"><input type="text" v-model="val"/>
		  <van-picker :columns="columns" @change="onChange" />
		  </div>
=======
			<div>
				
			</div>
		  <van-picker :columns="columns" @change="onChange" />
		  
>>>>>>> dev-mm
		</van-panel>	
	</div>
</template>
<script>
	export default{
		  data() {
		    return {
<<<<<<< HEAD
		    	val:"",
=======
>>>>>>> dev-mm
		      columns: ['男', '女']
		    };
		  },
		  methods: {
		    onChange(picker, value, index) {
		      
		      console.log(value)
<<<<<<< HEAD
		      this.val=value;
=======
>>>>>>> dev-mm
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