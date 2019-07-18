<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="撰写评价"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
		<div>
			<h2>订单xxxx的评价</h2>
			<textarea name="" id="" cols="50" rows="8"></textarea>
			<div id="box">
				<van-button round type="info" >取消</van-button>
				<van-button  round type="warning" >发表</van-button>
			</div>
			<van-card
			  
			  title="订单编号："
			  desc="你的评价："  
			  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
			/>
		</div>
		
				
		
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			onClickLeft() {
      		
    		},
    		
		}
	}
</script>
<style>
	#box{
		display:flex;
		justify-content: space-around
	}
</style>