<template lang="pug">
	div.userPage
		user
		b ID: {{ userInfo.nickname}}
		br
		zi-button(@click="logoutUser()") Logout
</template>

<script>
	import user from '@zeit-ui/vue-icons/packages/user'
	import { userMe, userLogout } from "../../api/v1";
    export default {
    name: "userPage",
	components: {
      user,
	},
	data: () =>({
      userInfo: {       // 用户登录之后存入个人信息 可以自己扩展
        id: 0,
        user_name: "",
        nickname: "",
        avatar: "",
        admin: false,
      }
	}),
	methods: {
 		getUserInfo() {
          userMe().then(response => {
            this.userInfo = response.data.user;
		  })
		},
	  
	  logoutUser() {
        userLogout().then(response => {
          // 显示注销成功
          this.$Toast.show({
			type: 'success',
			text: response.msg
		  });
    
		  window.location.reload()
    
		})
	  }
	  
	},
	
	created() {
      this.getUserInfo()
    }
    }
</script>

<style scoped lang="stylus">

</style>
