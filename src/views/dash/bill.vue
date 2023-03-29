<template>
    <div class="box_container">
        <el-card v-for="(item, index) in bill.billData" :key="index" :body-style="{
            'display': 'flex',
            'flex- direction': 'row',
            'align-items': 'center',
            'justify-content': 'space-between',
            'padding': 0,
            'width': '240px',
        }">
            <div :style="{ backgroundColor: item.color }" class="left_icon">
                <el-icon color="white">
                    <component :is="item.icon"></component>
                </el-icon>
            </div>
            <p>￥{{ item.value }}</p>
            <p class="card_text">{{ item.text }}</p>
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import api from "../../../public/api.js";
import { billMap } from "../../../public/utils";

const bill = reactive({
    billData: []
})

api.getBillData().then(res => {
    if (res.data.status == 200) {
        let data = res.data.data
        data.forEach(d => {
            d.icon = billMap[d.type].icon
            d.color = billMap[d.type].color
        })
        bill.billData = data
    }
})
</script>

<style scoped>
.box-card {
    width: 240px;
}

.box_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: space-between;
    height: 100%;
}

.left_icon {
    height: 60px;
    line-height: 60px;
    width: 60px;
    text-align: center;
}

.card_text {
    color: rgb(143, 147, 153);
    font-size: 8px;
    padding-right: 15px;
}
</style>