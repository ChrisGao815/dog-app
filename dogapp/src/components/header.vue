<template>
<div>
	 <!-- <one :con='content'></one> -->
		<p >
    <router-link :to="{path:'/one',params:{con:content}}">点我路由</router-link>
    </p>
		<p>
    <router-link :to="{path:'/two'}" >二路由</router-link>
    </p>		
		<router-view></router-view>
</div>
</template>

<script>
import one from "../router/one.vue";
export default {

  data () {
    return {
    	content:[]  	
   }
  }, 
  components:{
    one
  },
  mounted(){    
        this.$axios.get('http://localhost:3000/text').then((res)=>{
        this.content = res.data.us
         console.log(this.content)
           })
      }

}

</script>
<style lang="css" scoped>
</style>