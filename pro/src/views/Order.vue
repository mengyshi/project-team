<template>
	<div>
		<van-nav-bar :fixed="true"
		  title="我的订单"
		/>
		<div class="orderlist">		
		<van-tabs v-model="active" >
		  <van-tab title="进行中">
		  	<v-ordering></v-ordering>
		  </van-tab>
		  <van-tab title="已完成" >
		  		<v-orderlist></v-orderlist>
		  </van-tab>
		 
		</van-tabs>
		</div>
		
	</div>

</template>
<script>
	import{NavBar}from 'vant';
	import {Tab, Tabs} from 'vant';
	import OrderList from  '@/views/OrderList'
	import Ordering from  '@/views/Ordering'

	export default {
	  data() {
	    return {
	      active: 2
	    };
	  },
	  components:{
	  	"v-orderlist":OrderList,
	  	"v-ordering":Ordering,
	  },
	  	 
	}

</script>
<style>
	.orderlist{
		margin-top:3rem;
	}
</style>