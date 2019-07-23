<template>
<<<<<<< HEAD
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
    <div class="list">
      <van-panel title="维也纳酒店>" status="待支付">
        <div class="order-box">
          <p>1间，豪华套房</p>
          <p>使用时间：</p>
          <p>总价￥：</p>
        </div>
        <div slot="footer" style="height:2rem;">
          <van-button size="small" type="danger" style="float:right">立即支付</van-button>
        </div>
      </van-panel>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem } from "vant";
import { Panel } from "vant";

export default {
  name: "Ordering",
  data() {
    return {
      list: [
        {
          imgsrc: "bill-o",
          txt: "待付款"
        },
        {
          imgsrc: "clock-o",
          txt: "支付超时"
        },
        {
          imgsrc: "comment-o",
          txt: "待评价"
        },
        {
          imgsrc: "balance-o",
          txt: "退款"
        },
        {
          imgsrc: "orders-o",
          txt: "全部订单"
        }
      ]
    };
  },
  methods: {
    tap(e) {
      if (e == 0) {
        this.$router.push("/tobepay");
      }
      if (e == 2) {
        this.$router.push("/comment");
      }
    }
  }
};
</script>
<style>
#app {
  text-align: left;
}
.order-box {
  margin-left: 20%;
}
</style>
=======
	<div>	
	<van-grid :column-num="5" square >
	  <van-grid-item class="list1"
	    v-for="(item,i) in list"
	    :key="i"
	    :icon="item.imgsrc"
	    :text="item.txt"
	    @click="tap(i)"/>
	</van-grid>
		<div class="list">
			<van-panel title="维也纳酒店>"  status="待支付">
			  <div class="order-box">
			  	<p>1间，豪华套房</p>
			  	<p>使用时间：</p>
			  	<p>总价￥：</p>
			  </div>
			  <div slot="footer"  style="height:2rem;">
			    <van-button size="small" type="danger" style="float:right" >立即支付</van-button>
			  </div>
			</van-panel>
			
		</div>
	
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
		#app{
			text-align:left;
			}
			.order-box{
			margin-left:20%;
			}
			
</style>
>>>>>>> dev-mm
