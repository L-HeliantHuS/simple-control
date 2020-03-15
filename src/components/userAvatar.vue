<template lang="pug">
	div.userAvatar
		div(@click="changeTheme()")
			moon(v-if="!dark")
			sun(v-if="dark")
		zi-avatar(:text="user_name.slice(0, 1)" @click="jumpToUserPage()")
	
</template>

<script>
  import moon from '@zeit-ui/vue-icons/packages/moon'
  import sun from '@zeit-ui/vue-icons/packages/sun'
  export default {
    name: "userAvatar",
    components: {
      moon, sun
	},
	
	props: {
 		user_name: "",
		avatar: ""
	},
	data: () => ({
		dark: false
	}),
	
	methods: {
      // 跳转到用户页面
      jumpToUserPage() {
        this.$router.push({name: 'UserPage'})
	  },
	  
	  
	  // 修改Theme
	  changeTheme() {
        this.dark = !this.dark;
		if (this.dark === false) {
			this.$zeitUI.theme.enableLight()
		}else {
		  this.$zeitUI.theme.enableDark()
		}
	  }
	}
	
  }
</script>

<style scoped lang="stylus">
	.userAvatar
		display flex
		height 2rem
		width 4rem
	
	.userAvatar > *
		margin-left 5px
		margin-top 1px
</style>
