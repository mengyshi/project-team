<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="我的评价"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
		<van-card
		  
		  title="订单编号："
		  desc="你的评价："  
		  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
		/>
		<van-card
		  desc="描述信息"  
		  title="商品标题"
		  v-
		  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
		>
		  <div slot="footer">
		    <span @click='tap()'>点击立即评价</span>
		  </div>
		</van-card>
				
		<div v-html="message"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				message:""

			}
		},
		methods:{
			onClickLeft() {

    		},
      		tap(){
    			console.log("sssss")
    			this.$router.push("/writecomment")
    		}
		}
	}
</script>
<style>
	
</style>