<template>
  <div id="app">
  <Headers></Headers>
  </div>
</template>

<script>
import header from "./components/header.vue";

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    Headers:header
  }
}
</script>

<style>

</style>
