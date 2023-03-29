<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-28 09:47:27
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-29 13:38:07
-->
<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <el-avatar :src="require('../../assets/user.png')" />
                <div class="user_detail">
                    <h3>Admin</h3>
                    <div class="user_detail_auth">超级管理员</div>
                </div>
            </div>
        </template>
        <div class="login_info">
            <p>上次登录时间：<span>2022-05-17</span></p>
            <p>上次登录地点：<span>湖北 武汉</span></p>
        </div>
    </el-card>
</template>

<script setup>

</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user_detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-around;
}

.user_detail_auth {
    color: rgb(143, 147, 153);
    font-size: 8px;
}

.login_info {
    margin-top: 10px;
    color: rgb(143, 147, 153);
}

.login_info p {
    margin-left: 30px;
    font-size: 12px;
}

.login_info p span {
    margin-left: 40px;
}
.login_info p:first-child
{
    margin-bottom: 5px;
}

/deep/.el-card__body {
    padding: 6px;
}
</style>