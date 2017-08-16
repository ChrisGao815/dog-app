<template>
<div>
<tp></tp>
	<oneChild :oo='con'></oneChild>
</div>
</template>

<script>
import tp from "../components/header.vue";
import oneChild from "./oneChild.vue";
export default { 
	props:{
		con:{
			type:Array
		}
	},
	components:{
		oneChild,
		tp
   }

   
}

</script>

<style lang="css" scoped>

</style>