<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="我的评价"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
		<div class="comment"></div>
		<van-card
		  v-for="item in lists"
	  :title="item.ordernum"
		  :desc="item.myappraise"  
		  thumb="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2813996958,1618626128&fm=26&gp=0.jpg"
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

import axios from "axios"

	export default{
		data(){
			return{
				message:"",
				lists:[],

			}
		},
		methods:{
			onClickLeft() {

				this.$router.go(-1);

				

    		},
      		tap(){
    			console.log("sssss")
    			this.$router.push("/writecomment")
    		}

		},
		mounted(){
			axios({
		      url:"http://10.8.157.18:8080/appr/myapprshow.do",
		      method:"get",
		    }).then((data)=>{
		    	this.lists=data.data.data;
		    	console.log(this.lists)
		    }).catch((err)=>{
		    	console.log(err)
		    });
		    axios({
		      url:"http://10.8.157.18:8080/appr/addapprshow.do",
		      method:"get",
		      params:{ordernum:1999999}
		    }).then((data)=>{
		    	//this.lists=data.data.data;
		    	console.log(data)
		    }).catch((err)=>{
		    	console.log(err)
		    });

		}
	}
</script>
<style>
	.comment{
		margin-top:3rem
	}
</style>