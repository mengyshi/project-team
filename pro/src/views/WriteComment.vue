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
			<textarea name="" id="" cols="50" rows="8" placeholder="请输入200字以内的评论" v-model="txt"></textarea>
			<div id="box">
				<van-button round type="info" >取消</van-button>
				<van-button  round type="warning" @click="tap()">发表</van-button>
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
				txt:"",

			}
		},
		methods:{
			onClickLeft() {
				this.$router.go(-1)
      		
    		},
    		tap(){
<<<<<<< HEAD
    			console.log(this.txt);
    			axios({
			      url:"http://10.8.157.18:8080/appr/addapprshow.do",
			      method:"get",
			      params:{}
			    }).then((data)=>{
			    	console.log(data)
			    })
=======
    			console.log(this.txt)
>>>>>>> dev-mm
    		}
    		
		}
	}
</script>
<style>
	#box{
		display:flex;
		justify-content: space-around;
	}
	.comment{
		margin-top:3rem;
		display:flex;
		flex-direction:column;
		padding:1rem

	}
	.comment textarea{
		margin-bottom:1rem
	}
</style>