<template lang="pug">
  div.Home()
  	span(class="title") Welcome to the #[zi-code Simple-Control]
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () => ({
  
  }),
}
</script>

<style scoped lang="stylus">
	
	.Home
		display flex
	.title
		margin: 400px auto
		font-size 3rem
	
</style>
