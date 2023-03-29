<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 15:47:37
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-29 10:11:59
-->
<template>
    <div class="container">
        <Aside style="width: 200px;margin-right:3px" />
        <div class="container_right">
            <Header style="height:50px;margin-bottom:10px" />
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Aside from './aside.vue'
import Header from './header.vue'

</script>

<style  scoped>
.container {
    display: flex;
}

.container_right {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>