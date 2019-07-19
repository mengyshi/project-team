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
		  <div>
		  	<p>1间，豪华套房</p>
		  	<p>使用时间：</p>
		  	<p>总价￥：</p>
		  </div>
		  <div slot="footer">
		    <van-button size="small" type="danger" style="float:right">点击支付</van-button>
		  </div>
		</van-panel>
		
		
	</div>

</template>
<script>
	import { NavBar } from 'vant';
	import {Panel} from 'vant'
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
		      Toast('按钮');
		    }

		}
	}

</script>
<style>
	
</style>