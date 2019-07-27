<template>
	<div>
		<van-uploader v-model="fileList" multiple :after-read="afterRead" capture/>
		<button @click="tap()">
			test
		</button>
		<img :src="imgsrc"/>
	</div>
</template>
<script>
	export default {
		 data() {
		    return {
		    	imgsrc:"",
		      fileList: [
		        { url: 'https://img.yzcdn.cn/vant/cat.jpeg'}
		      ]
		    }
		  },
	  methods:{
	    afterRead(file,detail) {
	      // 此时可以自行将文件上传至服务器
	      console.log(file.content);
	      this.imgsrc=file.content;
	      var formData=new FormData();

	      //console.log(detail);

	    },
	    tap(){
	    	console.log('1111');
	    	console.log(this.fileList)
	    }
	  }
	};
</script>
<style>
	
</style>