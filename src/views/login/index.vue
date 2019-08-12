<template>
    <div class="login-container">

        <div class="form-container">
            <div class="login-logo">
                <img src="../../assets/img/logo1.png" alt="">
            </div>
            <div class="login-title">
                <h1>XXXXXXXXXXX后台管理系统</h1>
            </div>
            <div class="form">
                <el-form>
                    <el-form-item>
                        <el-input v-model="loginForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="login()">登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import login from '../../api/user';

export default Vue.extend({
  data() {
    return {
      loginForm: {
        userName: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      login(this.loginForm);
    },
  },
});
</script>

<style lang="scss">
    .login-container{
        display: flex;
        position: relative;
        height: 900px;
        justify-content: center;
        align-items: center;

    }
    .login-container::before{
        content: "";
        display: block;
        position: absolute;
        z-index: -999;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/img/beijing.png');
    }
    .login-title{
        color: #fff;
    }
    .form{
        padding: 30px;
    }
</style>
