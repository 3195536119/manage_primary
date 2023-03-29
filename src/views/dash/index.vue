<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-27 18:44:54
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-29 09:58:19
-->
<template>
    <el-row :gutter="20" >
        <el-col :span="7">
            <Info/>
        </el-col>
        <el-col :span="17">
            <Bill/>
        </el-col>
    </el-row>
</template>

<script setup>
import Info from './info.vue';
import Bill from './bill.vue';
</script>

<style  scoped>

</style>