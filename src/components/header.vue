<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-28 19:48:26
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-30 21:08:03
-->
<template>
    <div class="header_container">
        <div>
            <el-icon>
                <Menu />
            </el-icon>
            <el-tag v-for="tag in tags" closable type="info" @close="removeRoute(tag)">
                {{ indexMap[tag] }}
            </el-tag>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                {{ userName }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { computed } from "vue";
import store from '../store/index'
import { indexMap } from "../../public/utils";
import router from "../router/index.js";
const userName = computed(() => {
    return window.localStorage.getItem('name')
})

const tags = computed(() => {
    return store.state.tabBars
})

function removeRoute(tag){
    router.back()
    store.commit('removeTabBar',tag)
}
</script>

<style scoped>
.header_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: rgb(51, 51, 51);
    color: white;
}

.header_container .el-dropdown:hover {
    cursor: pointer;
    box-shadow: none;
    display: flex;
    align-items: center;
}

.header_container .el-dropdown {
    color: white;
}

.el-tag {
    margin-left: 8px;
}
</style>