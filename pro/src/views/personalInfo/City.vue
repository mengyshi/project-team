<template>
	<div>
		<van-panel title="所在地" desc="请在下面选择你的所在地" >
		 <div class="ipt"><input type="text" v-model="val"/>
		<van-area :area-list="areaList" :columns-num="1"   @confirm="confirm"/>
		  </div>
		</van-panel>	
	</div>
</template>
<script>
	import area from "../../assets/area";
	import axios from "axios"
	export default{
		data(){
			return{
				 areaList:area,
				 val:"",
				 info:{}


			}
		},
		methods:{
			confirm(data){
				//console.log(this.val)
				this.val=data[0].name;
				
				console.log(this.val)
				this.info.city=this.val;
				console.log(this.info)
				axios({
			      url:"http://10.8.157.18:8080/set/uptaper.do",
			      method:"get",
			      params:{id:this.info.id,city:this.val},
			    }).then((data)=>{
			    	console.log(data);

			    })
			},

		},
		mounted(){
			
			var username=this.$route.query.username;
			axios({
		      url:"http://10.8.157.18:8080/set/personage.do",
		      method:"get",
		      params:{username:username}
		    }).then((data)=>{
		    console.log(data)
		      var lists=data.data.data[0];
		      //console.log(data);
		      this.info=lists;
		      console.log(this.info)
		  }).catch(err=>{
		  	console.log(err)
		  })

		}
	}
</script>
<style>

	.ipt{
		margin:0 1.2rem;
		background:#cecece;


	}
	.ipt input{
		border:0;
		background:#cecece;
		height:2.4rem
	}


</style>