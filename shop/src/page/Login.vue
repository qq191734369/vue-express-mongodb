<template>
    <div>
        <form>
            <div>用户名：<input type="text" v-model="username" /></div>
            <div>密码：<input type="text" v-model="password"/></div>
        </form>
        <a href="javascript:void(0)" @click="login">登录</a>
        <a href="javascript:void(0)" @click="logout">登出</a>
    </div>
</template>
<script>
import loginService from 'service/login.service'
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            loginService.login({
                username: this.username,
                password: this.password
            }).then(res => {
                console.log(res)
            })
        },
        logout() {
            loginService.logout().then(res => {
                console.log(res)
            })
        }
    }
}
</script>
<style lang="scss">
    a {
        display: block;
    }
</style>