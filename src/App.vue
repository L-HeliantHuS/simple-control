<template lang="pug">
	div.app
		// 未登录
		router-view(v-if="!isLogin")
		
		// 登录后
		div(v-if="isLogin")
			zi-row(class="topBar")
				div
					h4(@click="$router.push({path: '/'}).catch()") Simple_Control
				div
					userAvatar(:user_name="userInfo.user_name")
			zi-row
				zi-col(span="3" class="aside1")
					Aside
				zi-col(span="21" class="main")
					router-view

</template>


<script>
  import {userMe} from "./api/v1";
  import userAvatar from "./components/userAvatar";
  import Aside from "./components/Aside";
  export default {
    name: 'App',
	components: {
      userAvatar, Aside
	},
    data: () => ({
      isLogin: false,   // 用户是否登录 默认没有
      userInfo: {       // 用户登录之后存入个人信息 可以自己扩展
        id: 0,
        user_name: "",
		nickname: "",
		avatar: "",
		admin: false,
      }

    }),
	methods: {
      checkLogin() {
        userMe().then(response => {
          if (response.code === 0) {
			this.userInfo = response.data.user;
			
			this.isLogin = true;
          } else {
            console.log(response.data);

            this.$router.push({name: "Login"})
		  }
        })
      }
	},
	
	created() {
      this.checkLogin();
    }
  }
</script>

<style lang="stylus">
	.topBar
		display flex
		height 2rem
	
	.topBar > div:nth-child(2)
		margin-left auto
		
	.aside1
		position fixed
		left 0
		height 100%
	
	.main
		position fixed
		right 0
		height 100%
</style>
