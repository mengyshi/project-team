<template>

	<div>
		<van-nav-bar
		:fixed="true"
		  title="设置"
		  left-arrow
		  @click-left="onClickLeft()"
		/>
		<div id="content">
			<div class="cont">
				<van-panel title="账户"  status="&gt;" >
				</van-panel>
			</div>
			<div class="cont">
				<van-panel title="软件通知"  status="&gt;" >
				</van-panel>
			</div>
			<div class="cont">
				<van-panel title="给我们好评"  status="&gt;" >
				</van-panel>
			</div>
			<div class="cont">
				<van-panel title="关于***"  status="&gt;">
				</van-panel>
			</div>
			<div class="cont">
				<van-panel title="退出登录"  status="&gt;"  @click="tap()">
				</van-panel>
			</div>
			
		</div>
		
	</div>
</template>
<script>
import {Toast} from "vant"
	export default{
		data(){
			return{

			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);


			},

			tap(){
				localStorage.removeItem("info");
				Toast("退出成功！")
				var _this=this;
				setTimeout(function out () {
					_this.$router.go(0);
				},200)

				

			}
		},
	}




</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#content {
  margin-top: 2.6rem;
}
#content .cont {
  margin: 2rem 0;
  background: #cecece;
}
</style>