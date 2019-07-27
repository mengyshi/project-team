<template>
	<div>
		<van-nav-bar
		  title="待付款"
		  
		  right-text="刷新"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		<van-panel icon="manager
" title="维也纳酒店>" status="待支付" style="margin-top:30px ">
		  <div class="order-box">
		  	<p>1间，豪华套房</p>
		  	<p>使用时间：</p>
		  	<p>总价￥：</p>
		  </div>
		  <div slot="footer" style="height:2rem">
		    <van-button size="small" type="danger" style="float:right">点击支付</van-button>
		  </div>
		</van-panel>
		
		
	</div>

</template>

<script>
	import {Toast} from "vant"
	export default{
		data(){
			return{

			}
		},
		methods:{
			onClickLeft() {
		      this.$router.go(-1)
		    },
		    onClickRight() {
		    	setTimeout(function arr () {
		    		Toast('刷新成功');
		    	},200)
		    	
		    	
		      
		    }

		}
	}

</script>
<style>
	#app{
		text-align:left;
	}
	.order-box{
		margin-left:20%;
	}
</style>