<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="收藏"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<div v-if="num">
		<div class="show">
			<van-image
			  width="100%"
			  height="100%"
			  fit="contain"
			  src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
			<div class="introduce">
				<div class="itr-left">
					<p><span>中科院</span><span>森林公园旁</span><span>舒适宽敞</span><span>富有情调的家</span></p>
					<p class="smallitr"><span>整租-名居-宜居3人</span><span>北京朝阳区</span></p>
				</div>
				<div class="itr-right">
					<p>5.0</p>
					<p class="smallitr">12条评论</p>
				</div>
				
			</div>
		</div>

		<div class="show">
			<van-image
			  width="100%"
			  height="100%"
			  fit="contain"
			  :src="img"
			/>
			<div class="introduce">
				<div class="itr-left">
					<p><span>中科院</span><span>森林公园旁</span><span>舒适宽敞</span><span>富有情调</span></p>
					<p class="smallitr"><span>整租-名居-宜居3人</span><span>北京朝阳区</span></p>
				</div>
				<div  class="itr-right">
					<p>5.0</p>
					<p class="smallitr">12条评论</p>
				</div>
				
			</div>
		</div>
	</div>
	</div>
</template>
<script>
import axios from "axios"
import { Dialog } from 'vant';
	export default{
		data(){
			return{
				list:[],
				img:"",
				num:false
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);
			},
			components:{
			  	
			  	[Dialog.Component.name]: Dialog.Component
			  },
		},
		mounted(){
			var _this=this;
			axios({
				url:"http://101.132.39.73:8080/travelapp/trip/list.do"

			}).then((data)=>{
				console.log(data);
					_this.img=data.data.info[0].imgUrl;
			})
			if(localStorage.getItem("info")){
	    	this.num=true;


	    }else{
	    	Dialog.alert({
			  message: '您还未登录,请先登录'
			}).then(() => {
			  this.$router.push("/loginC")
			});

	    }
			// 
			// $.ajax({
			// 	url: 'http://10.8.157.4:8080//trip/list.do',
			// 	type: 'get',
			// 	dataType: 'json',
			// 	//data:{city:"郑州"},
				
			// 	success:function(data){
			// 		console.log(data)
			// 		this.img=data.info[0].imgUrl;
					
			// 	}
			// })

		}
	}
</script>
<style scope="">
	.show{
		margin-top:3rem;
		margin:1rem 0.5rem

	}
	.show .introduce{
		display:flex;
		font-size:1rem;
		justify-content:space-between;

	}
	.show .introduce span{

		margin-right:0.1rem
	}
	.show .introduce .itr-left{
		text-align:left;
	}

	.show .introduce .smallitr{

		font-size:14px;
		color:#cecece;
	}



</style>