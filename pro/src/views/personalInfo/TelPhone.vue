<template>
	<div>
		<van-panel title="联系方式" desc="请在下面输入您的联系方式" >
		  <div class="ipt"><input type="text" v-model="num" @touchstart.stop="show = true">
			  
				<van-number-keyboard
				  :show="show"
				  extra-key="."
				  close-button-text="完成"
				  @blur="show = false"
				  @input="onInput"
				  @delete="onDelete"
				/>
			</div>
		</van-panel>	
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num:"",
				show: true,
				maxlength:11
			}
		},
		methods: {
		    onInput(value) {
		    	this.num+=value;
		     	console.log(value)
		    },
		    onDelete() {
		      	this.num=this.num.slice(0,this.num.length-1)
		    },

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