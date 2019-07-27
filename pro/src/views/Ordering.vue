<template>

  <div>
    <van-grid :column-num="5" square>
      <van-grid-item
        class="list1"
        v-for="(item,i) in list"
        :key="i"
        :icon="item.imgsrc"
        :text="item.txt"
        @click="tap(i)"
      />
    </van-grid>
    <div class="list" >
      <van-panel v-for="(item, key) in lists" :key="key" :icon="item.hotelimg" :title="item.hotelname" status="待支付">
        <div class="order-box">
          <p><span>{{item.roomnum}}</span>间,<span>{{item.roomtype}}</span></p>
          <p>使用时间：{{item.time}}</p>
          <p>总价￥：{{item.totalprice}}</p>
        </div>
        <div slot="footer" style="height:2rem;">
          <van-button size="small" type="danger" style="float:right">立即支付</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>


	
<script>
	import { Grid, GridItem } from 'vant';
	import {Panel}from 'vant';
	import axios from "axios"

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
			],
			lists:[]
			}

		
		},
		methods:{
	  	tap(e){
	  		if(e==0){
	  			this.$router.push("/tobepay");
	  		}
	  		if(e==2){
	  			this.$router.push("/comments");
	  		}	  		
	  		
	  	}
	  },
	  mounted(){
	  	 axios({
	      url:"http://101.132.39.73:8080/travelapp/ord/orderdeta.do",
	      method:"get",
	      params:{}
	    }).then((data)=>{
	    	console.log(data)
	    	var datas=data.data.data;
	    	

	    	for (var i = 0; i <datas.length; i++) {
	    		if(datas[i].status==0){
	    			this.lists.push(datas[i]);
	    			console.log("待支付");
	    		}
	    		
	    	}
	    	console.log(this.lists)
	    })

	  }
	 
	}

</script>
<style scope="">
		#app{
			text-align:left;
			}
			.order-box{
			margin-left:20%;
			}
			
</style>

