<template>
    <el-card>
        <div ref="pieChart" style="height: 350px;width:500px">

        </div>
    </el-card>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import api from "../../../public/api"
const options = {
    legend: {
        top: 'bottom'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: '各类手机占比',
            type: 'pie',
            radius: [30, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 3
            },
            data: [
            ]
        }
    ]
};

console.log('我在setup里面', options)
const pieChart = ref(null)
onMounted(() => {
    console.log('我是mounted')
    api.getPieData().then(res => {
        console.log(res)
        if (res.data.status == 200) {
            options.series[0].data = res.data.data
            let chart = echarts.init(pieChart.value)
            console.log(chart, options, options.series[0].data, options.series[0].center)
            chart.setOption(options)
            chart.resize()
        }
    })
})
</script>

<style scoped></style>