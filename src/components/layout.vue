<!--
 * @Descripttion: 
 * @version: 
 * @Author: shaye
 * @Date: 2023-03-26 15:47:37
 * @LastEditors: shaye
 * @LastEditTime: 2023-03-28 10:13:36
-->
<template>
    <div class="container">
        <Aside style="width: 150px;margin-right:3px" />
        <div class="container_right">
            <Header style="height:50px" />
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