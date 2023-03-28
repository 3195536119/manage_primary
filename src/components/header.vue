<template>
    <div class="header_container">
        <el-icon>
            <Menu />
        </el-icon>
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
    <router-view></router-view>
</template>

<script setup>
import { computed } from "vue";

const userName = computed(() => {
    return window.localStorage.getItem('name')
})
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

.header_container .el-dropdown:hover{
    cursor: pointer;
    box-shadow: none;
    display: flex;
    align-items: center;
}

.header_container .el-dropdown{
    color: white;
}


</style>