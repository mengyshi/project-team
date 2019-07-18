<template>
	<div>
	<van-panel icon="manager
" title="维也纳酒店>" status="预定成功" style="margin-top:30px ">
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
	import {Tag} from 'vant';
	import { Panel} from 'vant';
	export default{
		name:"OrderList",

	}
</script>
<style>
	
</style>