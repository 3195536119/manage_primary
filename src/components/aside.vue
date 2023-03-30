<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-27 18:34:22
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-30 20:46:30
-->
<template>
    <div class="aside_container">
        <el-menu :collapse="isCollapse" collapse-transition="true" :router="true">
            <el-menu-item index="/dash" @click="addBar">
                <el-icon>
                    <Histogram />
                </el-icon>
                <template #title>看板</template>
            </el-menu-item>
            <el-menu-item index="/userManage" @click="addBar">
                <el-icon>
                    <UserFilled />
                </el-icon>
                <template #title>用户管理</template>
            </el-menu-item>
            <!-- <el-menu-item index="/goodsManage">
                <el-icon>
                    <GoodsFilled />
                </el-icon>
                <template #title>商品管理</template>
            </el-menu-item>
            <el-sub-menu index="/other">
                <template #title>
                    <el-icon>
                        <CirclePlusFilled />
                    </el-icon>
                    <span>其他</span>
                </template>
                <el-menu-item index="otherOne">其他页面一</el-menu-item>
                <el-menu-item index="otherTwo">其他页面二</el-menu-item>
            </el-sub-menu> -->
        </el-menu>
    </div>
</template>

<script setup>
import store from "../store/index.js";
function addBar(param){
    store.commit('addTabBar',param.index)
}
</script>

<style  scoped>
.aside_container{
    /*background-color: rgb(81, 92, 100);*/
    height: 100%;
}

.aside_container .el-menu{
    /*background-color: rgb(81, 92, 100);*/
    color: white;
}
</style>