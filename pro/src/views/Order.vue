<template>
	<div>
		<van-nav-bar :fixed="true"
		  title="我的订单"
		/>
		<div class="orderlist">		
		<van-tabs v-model="active" >
		  <van-tab title="进行中">
		  	<v-ordering v-if="num"></v-ordering>
		  	
		  	


		  </van-tab>
		  <van-tab title="已完成" >
		  		<v-orderlist v-if="num"></v-orderlist>
		  		
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

	import axios from "axios"
	import { Dialog } from 'vant';



	export default {
	  data() {
	    return {
	      active: 2,
	      num:false,
	      show:true,
	    };
	  },
	  components:{
	  	"v-orderlist":OrderList,
	  	"v-ordering":Ordering,
	  	[Dialog.Component.name]: Dialog.Component
	  },

	  mounted(){
	  	
		axios({
	      url:"http://101.132.39.73:8080/travelapp/ord/orderdeta.do",
	      method:"get",
	      params:{}
	    }).then((data)=>{
	    	console.log(data)
	    });
	    if(localStorage.getItem("info")){
	    	this.num=true;
	    	this.show=false;

	    }else{
	    	Dialog.alert({
			  message: '您还未登录,请先登录'
			}).then(() => {
			  this.$router.push("/loginC")
			});

	    }
	   
	 
	}
 }

	  	 
	


</script scope="">
<style>
	.orderlist{
		margin-top:3rem;
	}
</style>