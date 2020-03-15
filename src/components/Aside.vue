<template lang="pug">
	div.Aside
		hr
		zi-card(hoverable)
			router-link(to="/test") Test
</template>

<script>
  import home from '@zeit-ui/vue-icons/packages/home'
  export default {
    name: "Aside",
	components: {
      home
	},
	
	created() {
    }

  }
</script>

<style scoped lang="stylus">
	.Aside
		text-align center
</style>
