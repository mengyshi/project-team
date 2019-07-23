<template>
	<div>
		
	<van-nav-bar
		:fixed="true"
		  title="个人资料"
		  left-arrow
		  @click-left="onClickLeft()"
	/>
	<div id="main">

		<span class="touxiang">
		<van-image
		  round
		  width="8rem"
		  height="8rem"
		  :src="info.img"
		/>
		</span>
		<span @click="shows()">修改头像</span>
		<van-dialog
		  v-model="show"
		  title="修改头像"
		  show-cancel-button
		  :show-confirm-button="false"
		>
		<div class="photo">
				<span class="touxiang">
				  <img :src="info.img" style="width:8rem;height:8rem;border-radius:50%"/>
				  
				</span>
				 <div style="width:100%; text-align:center">
					 <p style="font-size:0.8rem">请上传您的头像</p>
					  <hr/>
					  <p>拍照</p>
					  <hr />
					  <p @click="updatephoto">从相册选择图片</p>
					  <hr/>
				  </div>


		</div>
		</van-dialog>

		<span class="touxiang">	
		</span>
		<span>修改头像</span>

	</div>

	<div id="content">
			
				<van-panel title="昵称" >

				 <div class="content"><em>{{info.username}}</em><span @click="tap('username')">&gt;</span></div>

				</van-panel>
			
			
				<van-panel title="性别">

					<div class="content"><em>{{info.sex}}</em><span @click="tap('sex')">&gt;</span></div>
				</van-panel>

				<van-panel title="常用手机">
					<div class="content"><em>{{info.tel}}</em><span @click="tap('telphone')">&gt;</span></div>

					<div class="content"><em>内容</em><span @click="tap('sex')">&gt;</span></div>
				</van-panel>

				<van-panel title="常用手机">
					<div class="content"><em>内容</em><span @click="tap('telphone')">&gt;</span></div>

				</van-panel>
			
			
				<van-panel title="出生日期">

					<div class="content"><em>{{info.birthday}}</em><span @click="tap('birthday')">&gt;</span></div>

					<div class="content"><em>内容</em><span @click="tap('birthday')">&gt;</span></div>

				</van-panel>
			
				<van-panel title="身份证号码"  >
					<div class="content"><em>411**************X</em><span @click="tap('idcard')">&gt;</span></div>
				</van-panel>
			
				<van-panel title="故乡"   >

					<div class="content"><em>{{info.place}}</em><span @click="tap('hometown')">&gt;</span></div>
				</van-panel>
			
				<van-panel title="所在城市"  >
					<div class="content"><em>{{info.place}}</em><span @click="tap('city')">&gt;</span></div>
				</van-panel>
			
				<van-panel title="邮箱地址"  >
					<div class="content"><em>{{info.email}}</em><span @click="tap('mail')">&gt;</span></div>

					<div class="content"><em>内容</em><span @click="tap('hometown')">&gt;</span></div>
				</van-panel>
			
				<van-panel title="所在城市"  >
					<div class="content"><em>内容</em><span @click="tap('city')">&gt;</span></div>
				</van-panel>
			
				<van-panel title="邮箱地址"  >
					<div class="content"><em>内容</em><span @click="tap('mail')">&gt;</span></div>

				</van-panel>		
		</div>

	
	</div>
</template>

<script>

import axios from "axios"
	export default{
		data(){
			return{
				info:"",
				show: false

			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			
			tap(nextpath){
				this.$router.push(""+nextpath);


			},
			shows(){
				this.show=true;
			},
			updatephoto(){
				this.$router.push("/uploderimg")
			}

		},
		mounted(){

			axios({
		      url:"http://10.8.157.18:8080/set/personage.do",
		      method:"get",
		      params:{username:"华晨宇"}

		    }).then((data)=>{
		      var lists=data.data.data[0];
		      console.log(lists);
		      this.info=lists;
		      // var list={id:id,name:lists.name,tel:lists.phone,addressDetail:lists.detailadds,areaCode:lists.areaCode}
	       // 		console.log(list)
	       // this.address=list;
	       // console.log(this.address)
		  })
			}

	}

	
</script>



<style>
	#app{
		text-align:left;
	}

	#main{
		width:100%;
		height:11rem;
		display:flex;
		justify-content: center;
		align-items: center;
		margin-top:3rem;
		background:url("http://img0.imgtn.bdimg.com/it/u=3656656606,232096928&fm=26&gp=0.jpg");
		background-size:100% 11rem;
		flex-direction: column;

	}

	 

	#main .touxiang{


		display: block;
		width:8rem;
		height:8rem;
		background:url("http://img3.imgtn.bdimg.com/it/u=4171914132,1957317625&fm=26&gp=0.jpg") no-repeat;
		background-size:8rem 8rem;
		border-radius: 50%;

	}

	.content{
		font-size:1.2rem;
		margin-left:11.5px;
		hright:3.5rem;
		line-height:3.5rem;
		color:#cecece
	}
	.content em{
		font-style:normal;
	}
	.content span{
		float:right;
		color:#cecece;
		margin-right:2rem
	}

	.photo{
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction:column;
		margin-bottom:0rem;
		
	}

</style>