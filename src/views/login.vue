<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 15:56:05
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-28 08:47:07
-->
<template>
    <div>
        <h2>系统登录</h2>
        <el-card shadow="always">
            <el-form label-position="right" label-width="100px" :model="loginForm" style="max-width: 460px" :rules="rules">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.name" place-holder="请输入用户名" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password" type="password" show-password place-holder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button @click="login" type="primary">
                        登录
                    </el-button>
                    <el-button @click="reset" type="default">
                        重置
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import api from '../../public/api'
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter()

const loginForm = reactive({
    name: '',
    password: ''
})

const rules = reactive({
    name: [{
        required: true
    }],
    password: [{
        required: true
    }]
})

function login() {
    console.log(loginForm)
    let name = loginForm.name;
    let password = loginForm.password
    api.login(name, password).then(res => {
        console.log(res)
        if (res.data.status == 200) {
            window.localStorage.setItem('token',res.data.token)
            window.localStorage.setItem('name',name)
            router.push('/')
            ElMessage({
                message: res.data.msg,
                type: 'success',
                showClose: true
            })
        } else {
            ElMessage({
                message: res.data.msg,
                type: 'error',
                showClose: true
            })
        }
    })
}

function reset() {
    loginForm.name = ''
    loginForm.password = ''
}


</script>

<style lang="less" scoped></style>