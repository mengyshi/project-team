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
		</span>
		<span>修改头像</span>
	</div>

	<div id="content">
			
				<van-panel title="昵称" >
				 <div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
			
				<van-panel title="性别" >
					<div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
				<van-panel title="出生日期" >
					<div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
				<van-panel title="身份证号码"  >
					<div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
				<van-panel title="故乡"   >
					<div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
				<van-panel title="所在城市"  >
					<div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
				<van-panel title="邮箱地址"  >
					<div class="content"><em>内容</em><span>&gt;</span></div>
				</van-panel>
			
			
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
			onClickLeft(){
				this.$router.go(-1)
			}
		}

	}
</script>



<style>
	#app{
		text-align: left;
	}

	#main{
		width:100%;
		height:11rem;
		display:flex;
		justify-content: center;
		align-items: center;
		margin-top:3rem;
		background:#00f;
		flex-direction: column;

	}
	#main .touxiang{

		display: block;
		width:8rem;
		height:8rem;
		background: #0ff;
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
</style>