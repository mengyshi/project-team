<template>
	<div class="box">
		<header id="header" class="">
			<van-nav-bar style="font-size:1.6rem">
					<van-icon name="setting-o"  slot="left" size="1.6rem"/>
			  		<span slot="left" @click="tap()">设置</span>
				
			<van-icon name="sign"  slot="left" size="1.6rem"/>
			   <span slot="left">签到</span>
			   <van-icon name="chat-o"  slot="right" size="1.6rem"/>
			</van-nav-bar>

			<v-login v-if="info"></v-login>	
			<v-unlogin v-if="!info"></v-unlogin>	

			

		</header>
		<section>
			<van-grid :column-num="3" style="padding:0;border:0">
		  <van-grid-item
		  	style="padding-right:0;height:5.6rem"
		    v-for="(value,i) in list"
		    :key="i"
		    :icon="value.imgsrc"
		    :text="value.txt"
		    @click="clickList(i)"
		  />
		</van-grid>
		<van-image
		  fit="fill"
		  src="http://img1.imgtn.bdimg.com/it/u=130077287,1734648362&fm=26&gp=0.jpg"
		/>
		<van-grid :column-num="3" :border="false"  style="padding:0;">
		  <van-grid-item
		  	style="padding-right:0;height:5.6rem"
		    v-for="(value,i) in list1"
		    :key="i"
		    :icon="value.imgsrc"
		    :text="value.txt"
		  />
		</van-grid>
		</section>
		
		<footer>
			
		</footer>
	</div>
</template>
<script>
	import UserLogin from "./UserLogin";
	import Unlogin from "./Nologin.vue"
	export default {
	  data() {
	    return {
	    	info:false,
	      loading: false,
	      list:[{
				imgsrc:"bill-o",
				txt:"邀请好友"

			},{
				imgsrc:"clock-o",
				txt:"优惠券"

			},{
				imgsrc:"comment-o",
				txt:"积分"
			},{
				imgsrc:"balance-o",
				txt:"浏览收藏"
			},{
				imgsrc:"orders-o",
				txt:"芝麻信用"
			},{
				imgsrc:"orders-o",
				txt:"我的故事"
			},{
				imgsrc:"orders-o",
				txt:"开具发票"
			},{
				imgsrc:"orders-o",
				txt:"收件地址"
			},{
				imgsrc:"orders-o",
				txt:"金卡会员"
			}
			],
			list1:[{
				imgsrc:"bill-o",
				txt:"联系客服"

			},{
				imgsrc:"clock-o",
				txt:"成为房东"

			},{
				imgsrc:"comment-o",
				txt:"我的入住人"
			},{
				imgsrc:"balance-o",
				txt:"意见反馈"
			}]

	     }


	  },
	  components:{
	  	"v-login":UserLogin,
	  	"v-unlogin":Unlogin
	  },
	  mounted() {
	    this.loading = false;
	    if(localStorage.getItem("info")){
	    	var username=localStorage.getItem("info").username;
	    	this.info=true;
	    }else{
	    	this.info=false;
	    }
	  },
	  methods:{
	  	tap(){
	  		this.$router.push("/setting")
	  	},
	  	tap1(){
	  		this.$router.push("/personaldata")
	  	},
	  	clickList(i){
	  		if(i==3){
	  			this.$router.push("/collect")
	  		}
	  		if(i==7){
	  			this.$router.push("/addresslist")
	  		}
	  	}
	  }
	};
</script>
<style>
	.box{
		margin-bottom: 1rem;
	}
	
	#main-box{
		display: flex;
		justify-content: space-between;

	}
	#main-left{
		
		width:60%;
		display:flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	#main-right{
		width:30%;
		height:8rem;
		display:flex;
		justify-content: center;
		align-items: center;
	}
	#main-right span{
		display: block;
		width:5rem;
		height:5rem;
		background: #0ff;
		border-radius: 50%;
		background:url("http://img3.imgtn.bdimg.com/it/u=4171914132,1957317625&fm=26&gp=0.jpg") no-repeat;
		background-size:5rem 5rem;
	}

</style>