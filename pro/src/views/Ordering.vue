<template>
	<div>	
	<van-grid :column-num="5" square style="margin-top:20px ">
	  <van-grid-item class="list"
	    v-for="(item,i) in list"
	    :key="i"
	    :icon="item.imgsrc"
	    :text="item.txt"
	    @click="tap(i)"/>
	</van-grid>
		<van-panel icon="manager
" title="维也纳酒店>" status="支付中" style="margin-top:30px ">
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
	import { Grid, GridItem } from 'vant';
	import {Panel}from 'vant';

	export default{
		name:"Ordering",
		data(){
			return{
					
			list:[{
				imgsrc:"bill-o",
				txt:"待付款"

			},{
				imgsrc:"clock-o",
				txt:"支付超时"

			},{
				imgsrc:"comment-o",
				txt:"待评价"
			},{
				imgsrc:"balance-o",
				txt:"退款"
			},{
				imgsrc:"orders-o",
				txt:"全部订单"
			}
			]
			}

		
		},
		methods:{
	  	tap(e){
	  		if(e==0){
	  			this.$router.push("/tobepay");
	  		}
	  		if(e==2){
	  			this.$router.push("/comment");
	  		}	  		
	  		
	  	}
	  }

	}

</script>
<style>
	
</style>