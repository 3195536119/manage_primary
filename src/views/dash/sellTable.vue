<template>
    <div>
        <el-card>
            <el-table :data="tableData.tableData">
                <el-table-column prop="name" label="品牌" width="120px" />
                <el-table-column prop="todayBuy" label="当天销量" />
                <el-table-column prop="monthBuy" label="当月销量" />
                <el-table-column prop="totalBuy" label="总销量" />
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import api from '../../../public/api'
const tableData = reactive({
    tableData: []
})
api.getTableData().then(res => {
    console.log(res)
    if (res.data.status == 200) {
        tableData.tableData = res.data.data
    }
})
</script>

<style scoped></style>