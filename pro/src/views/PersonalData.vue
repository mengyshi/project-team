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
		  src="http://img1.imgtn.bdimg.com/it/u=162252298,3769764201&fm=26&gp=0.jpg"
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
				  <img src="http://img1.imgtn.bdimg.com/it/u=162252298,3769764201&fm=26&gp=0.jpg" style="width:8rem;height:8rem;border-radius:50%"/>
				  
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

		

	</div>

	<div id="content">
			
				<van-panel title="昵称" >
				 <div class="contents"><em>{{info.phonenum}}</em><span @click="tap('username')"></span></div>

				</van-panel>
			
				<van-panel title="性别">

					<div class="contents"><em>{{sex}}</em><span><van-icon name="edit" @click="tap('sex')"/></span> </div>
				</van-panel>

				<van-panel title="常用手机">
					<div class="contents"><em>{{phone}}</em><span ><van-icon name="edit" @click="tap('telphone')"/></span></div>
				</van-panel>
			
				<van-panel title="出生日期">
					<div class="contents"><em>{{birthday}}</em><span ><van-icon name="edit" @click="tap('birthday')"/></span></div>

				</van-panel>
			
				<van-panel title="故乡">
					<div class="contents"><em>{{area}}</em><span ><van-icon name="edit" @click="tap('hometown')"/></span></div>
				</van-panel>
			
				<van-panel title="所在城市">
					<div class="contents"><em>{{address}}</em><span><van-icon name="edit"  @click="tap('city')"/></span></div>
					
				</van-panel>
			
				<van-panel title="邮箱地址">
					<div class="contents"><em>{{postcode}}</em><span><van-icon name="edit"  @click="tap('mail')"/></span></div>
				</van-panel>
				
		</div>

	
	</div>
</template>

<script>

import axios from "axios";
import qs from "qs";
import {Toast} from "vant"
	export default{
		data(){
			return{
				info:"",
				
				show: false,
				phonenum:"sss",
				sex:"性别",
				birthday:"出生日期",
				area:"所在地",
				address:"故乡",
				postcode:"邮编",
				phone:"手机号"

			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			
			tap(nextpath){

				var id=this.$route.query.id;
				this.$router.push({path:"/"+nextpath,query:{id:id}});

			},
			shows(){
				this.show=true;
			},
			updatephoto(){
				Toast("系统维护中，暂不支持此功能！")
				
			}
		},
		mounted(){
			var id=this.$route.query.id;
			console.log(id);


			axios({
		      url:"http://106.12.52.107:8081/MeledMall/user/mine",
		      method:"post",
		      data:qs.stringify({id:id}),

		    }).then((data)=>{
		    	// console.log(data)
		    	console.log(data.data.info.user)
		       var lists=data.data.info.user;
		    	this.info=lists;
		    	//对象遍历
		    	var arr=["phonenum",'area','address','postcode','phone'];
		    	for(let key in lists){
				   	console.log(key + '---' + lists[key])
				   	if(lists[key]!=null){
		   				if(arr.indexOf(key)!=-1){
		   					arr[arr.indexOf(key)]=lists[key];		   				}
		   			}
				}
				console.log(arr);
				this.area=arr[1];
				this.address=arr[2];
				this.postcode=arr[3];
				this.phone=arr[4];		   
		      
		  })
		    var sex=JSON.parse(localStorage.getItem("info")).sex;
		    var birthday=JSON.parse(localStorage.getItem("info")).birthday;
		    console.log("sex:",sex,birthday)
		    if(sex!=""){
		    	this.sex=sex
		    }
		    if(birthday!=""){
		    	this.birthday=birthday
		    }
		}
	}

	

	
</script>



<style >
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
		background:url("http://img1.imgtn.bdimg.com/it/u=2199796161,707287990&fm=26&gp=0.jpg");
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

	.contents{
		font-size:1.2rem;
		margin-left:11.5px;
		hright:3.5rem;
		line-height:3.5rem;
		color:#cecece
	}
	.contents em{
		font-style:normal;
	}
	.contents span{
		float:right;
		color:#000;
		
		margin-right:2rem;
	}

	.photo{
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction:column;
		margin-bottom:0rem;
		
	}

</style>