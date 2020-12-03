<template lang="pug">
	div.loginPage
		zi-card.loginForm(hoverable)
			zi-row
				zi-tag username
			zi-row
				zi-input(placeholder="Input your username" size="big" clearable v-model="userInput.user_name")
			
			zi-row(style="margin-top: 15px")
				zi-tag password
			zi-row
				zi-input(placeholder="Input your password" _type="password" size="big" clearable  v-model="userInput.password")
			
			
			zi-row(style="margin-top: 30px")
				zi-button(@click="submitLogin()" type="primary" ghost :loading="btnLoading") Login!
</template>

<script>
  import {userLogin} from '../api/v1'

  export default {
    name: "Login",
    data: () => ({
	  // 后台需要进行提交的Json信息
      userInput: {
        user_name: "",
        password: ""
      },
	  
	  // 提交登录按钮的loading状态
      btnLoading: false

    }),

    methods: {
      // submitLogin 提交登录 START
      submitLogin() {
        this.btnLoading = true;
        userLogin(this.userInput).then(
            response => {
              if (response.code === 0) {
                // 将获取的JWT Token放入LocalStorage
                localStorage.setItem("simple_admin_access_token", response.data.access_token);

                // 跳转到管理页面
                this.$router.push({name: "home"});

                // 并刷新网页
                window.location.reload();
              } else {
                // 显示提示 (用户名输入错误 或者其他的)
                this.$Toast.show({
                  type: 'danger',
                  text: response.msg
				});
                
                // 重置按钮状态
                this.btnLoading = false;
			  }
            }
        )
      }
      // submitLogin 提交登录 END


    }
  }
</script>

<style lang="stylus" scoped>
	.loginPage
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		background-image url("../assets/img/loginPageBackground.jpg")
		background-repeat no-repeat
		background-position center
	
	.loginForm
		/*position absolute*/
		width 16rem
		height 18rem
		margin 15rem auto
		border-radius 20px

</style>
