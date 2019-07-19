<template>
	<div>
		<div class="list">
			<van-panel title="维也纳酒店>"  status="预定成功">
			  <div class="order-box">
			  	<p>1间，豪华套房</p>
			  	<p>使用时间：</p>
			  	<p>总价￥：</p>
			  </div>
			  <div slot="footer" class="reorder">
			    <van-button size="small" type="danger" >再次预定</van-button>
			  </div>
			</van-panel>
			
		</div>
		<div class="list">
			<van-panel icon="http://img2.imgtn.bdimg.com/it/u=1195948633,2017670587&fm=26&gp=0.jpg" title="维也纳酒店>"  status="订单超时">
			  <div class="order-box">
			  	<p>1间，豪华套房</p>
			  	<p>使用时间：</p>
			  	<p>总价￥：</p>
			  </div>
			  <div slot="footer" class="reorder">
			    <van-button size="small" type="danger">再次预定</van-button>
			  </div>
			</van-panel>
			
		</div>
		
	
	</div>
		

	
</template>
<script>
	
	export default{
		name:"OrderList",

	}
</script>
<style>
	#app{
		text-align:left;
	}
	.order-box{
		margin-left:20%;
	}
	.reorder{
		float:right;	
	}
	.list{
		margin:2rem 0;

	}
	
	
</style>