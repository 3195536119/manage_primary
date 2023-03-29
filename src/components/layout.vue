<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 15:47:37
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-29 13:55:41
-->
<template>
    <el-container>
        <el-aside width="auto">
            <Aside />
        </el-aside>
        <el-container>
            <el-header height="50px">
                <Header style="height: 50px;"/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Aside from './aside.vue'
import Header from './header.vue'

</script>

<style  scoped>
</style>