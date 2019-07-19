<template>
	<div>
		<van-nav-bar
		:fixed="true"
		  title="收件地址"
		  left-arrow
		  @click-left="onClickLeft"
		 
		/>
		<div class="add">
			<van-address-edit
			  :area-list="areaList"
			  show-postal
			  show-delete
			  show-set-default
			  show-search-result
			  :search-result="searchResult"
			  @save="onSave"
			  @delete="onDelete"
			  
			/>
		</div>
		
	</div>	
</template>
<script>
	import area from "../assets/area";
	console.log(area.province_list)
	export default {
	  data() {
	    return {
	      areaList:area,
	      searchResult: []
	    }
	  },

	  methods: {
	  	 onClickLeft(){
	    	this.$router.go(-1);
	    },

	    onSave() {
	      Toast('save');
	    },
	    onDelete() {
	      Toast('delete');
	    },
	    // onChangeDetail(val) {
	    //   if (val) {
	    //     this.searchResult = [{
	    //       name: '黄龙万科中心',
	    //       address: '杭州市西湖区'
	    //     }];
	    //   } else {
	    //     this.searchResult = [];
	    //   }
	    // }
	  }
	}
</script>
<style>
.add{
	margin-top:3rem
}
</style>