<template>
	<div>
		<van-panel title="性别" desc="请在下面选择您的性别" style="font-size:1rem">

			 <div class="ipt"><input type="text" v-model="val"/>
		  <van-picker :columns="columns" @change="onChange" />
		  </div>
		</van-panel>	
	</div>
</template>
<script>
	export default{
		  data() {
		    return {

		    	val:"",

		      columns: ['男', '女']
		    };
		  },
		  methods: {
		    onChange(picker, value, index) {
		      
		      console.log(value)

		      this.val=value;
		      var username=JSON.parse(localStorage.getItem("info")).username;
				var id=JSON.parse(localStorage.getItem("info")).id;
				var birthday=JSON.parse(localStorage.getItem("info")).birthday;
				var sex=this.val;
				//var sex=JSON.parse(localStorage.getItem("info")).sex;
				localStorage.setItem("info", JSON.stringify({username:username,id:id,birthday:birthday,sex:sex}))

		    },
		//     onConfirm(data){
		// 	console.log(data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate());
		// 	this.val=data.getFullYear()+"-"+(data.getMonth()-1+2)+"-"+data.getDate();
			
		// 	// axios({
		// 	// 	url:"http://10.8.157.18:8080/set/uptaper.do",
		// 	// 	method:"get",
		// 	// 	params:{id:2,sex:this.val},
		// 	// }).then((data)=>{
		// 	// 	console.log(data);
		// 	// }).catch(data=>{
		// 	// 	console.log(data)
		// 	// })
		// },
		cancel(){
			this.$router.go(-1)
		}

		  }

	}
</script>
<style scope="">
	.ipt{
		margin:0 1.2rem;
		background:#cecece;


	}
	.ipt input{
		border:0;
		background:#cecece;
		height:2.4rem
	}
	.van-cell{
		font-size:1.2rem
	}
</style>