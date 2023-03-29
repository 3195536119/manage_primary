<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-27 18:44:54
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-29 17:54:14
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
    <el-row :gutter="20" >
        <el-col :span="9">
            <sell-table></sell-table>
        </el-col>
        <el-col :span="15" >
            <pie-chart></pie-chart>
        </el-col>
    </el-row>
</template>

<script setup>
import Info from './info.vue';
import Bill from './bill.vue';
import sellTable from './sellTable.vue';
import PieChart from './pieChart.vue'
</script>

<style  scoped>
.el-row:first-child{
    margin-bottom: 20px;
}
</style>