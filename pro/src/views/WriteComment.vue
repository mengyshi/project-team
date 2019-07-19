<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="撰写评价"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
		<div class="comment">
			<h2>订单xxxx的评价</h2>
			<textarea name="" id="" cols="50" rows="8" placeholder="请输入200字以内的评论"></textarea>
			<div id="box">
				<van-button round type="info" >取消</van-button>
				<van-button  round type="warning" >发表</van-button>
			</div>
			<van-card
			  title="订单编号：" 
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
				this.$router.go(-1)
      		
    		},
    		
		}
	}
</script>
<style>
	#box{
		display:flex;
		justify-content: space-around;
	}
	.comment{
		margin-top:3rem
	}
	.comment textarea{
		margin-top:1rem
	}
</style>