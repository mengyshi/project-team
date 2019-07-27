<template>
	<div>
		<div class="list">
			 <van-panel v-for="(item, key) in lists" :key="key" :icon="item.hotelimg" :title="item.hotelname" status="支付成功">
		        <div class="order-box">
		          <p><span>{{item.roomnum}}</span>间,<span>{{item.roomtype}}</span></p>
		          <p>使用时间：{{item.time}}</p>
		          <p>总价￥：{{item.totalprice}}</p>
		        </div>
		        <div slot="footer" style="height:2rem;">
		          <van-button size="small" type="danger" style="float:right">再次预定</van-button>
		        </div>
		      </van-panel>
			
		</div>
		<div class="list">
			<van-panel   v-for="(item, key) in list" :key="key" :icon="item.hotelimg" :title="item.hotelname"  status="订单超时">
			  <div class="order-box">
			  	 <p><span>{{item.roomnum}}</span>间,<span>{{item.roomtype}}</span></p>
		          <p>使用时间：{{item.time}}</p>
		          <p>总价￥：{{item.totalprice}}</p>
			  </div>
			   <div slot="footer"  style="height:1.8rem;">
			    <van-button size="small" type="danger" style="float:right" >再次预定</van-button>
			  </div>
			</van-panel>
			
		</div>
		
	
	</div>
		

	
</template>
<script>
	import axios from "axios"
	export default{
		name:"OrderList",
		data(){
			return{
				lists:[],
				list:[],
			}
		},
		 mounted(){
		  	 axios({
		      url:"http://101.132.39.73:8080/travelapp/ord/orderdeta.do",
		      method:"get",
		      params:{}
		    }).then((data)=>{
		    	var datas=data.data.data;
		    	for (var i = 0; i <datas.length; i++) {
		    		if(datas[i].status==1){
		    			this.lists.push(datas[i]);
		    			console.log("待支付");
		    		}
		    		if(datas[i].status==2){
		    			this.list.push(datas[i]);
		    			console.log("支付超时");
		    		}

		    		
		    	}
		    	console.log(this.lists);
		    	console.log(this.list)
		    })

	  }

	}
</script >
<style scope="">
	#app{
		text-align:left;
	}
	.order-box{
		margin-left:20%;
	}
	
	.list{
		margin:2rem 0;

	}
	
	
</style>