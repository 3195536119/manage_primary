<template>
    <div >
        <el-card class="box-card" v-for="item in billInfos" >
            
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const billInfos = reactive([{
    icon: 'circle-check',
    value: 320,
    text: '当天支付订单',
    color: '#00C0CF'
}, {
    icon: 'star',
    value: 540,
    text: '当天收藏订单',
    color: '#ffb980'
}, {
    icon: 'circle-close',
    value: 79,
    text: '当天未支付订单',
    color: '#5ab1ef'
}, {
    icon: 'circle-check',
    value: 5400,
    text: '当月支付订单',
    color: '#00C0CF'
}, {
    icon: 'star',
    value: 8900,
    text: '当月收藏订单',
    color: '#ffb980'
}, {
    icon: 'circle-close',
    value: 540,
    text: '当月未支付订单',
    color: '#5ab1ef'
}])
</script>

<style scoped>
.box-card {
    width: 480px;
}
</style>