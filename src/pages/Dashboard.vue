<template>
    <n-row>
        <n-col :span="6">
            <n-statistic label="待发货" :value="12">
                <template #suffix>
                    订单数量
                </template>
            </n-statistic>
        </n-col>
        <n-col :span="6">
            <n-statistic label="待退款" :value="0">
                <template #suffix>
                    订单数量
                </template>
            </n-statistic>
        </n-col>
        <n-col :span="6">
            <n-statistic label="提现申请" :value="7">
                <template #suffix>
                    申请数量
                </template>
            </n-statistic>
        </n-col>
        <n-col :span="6">
            <n-statistic label="订单总数" :value="0">
                <template #prefix>
                    今日
                </template>
            </n-statistic>
        </n-col>
    </n-row>
    <n-row style="margin-top:20px">
        <n-col :span="6">
            <n-statistic label="观看直播人数" :value="0">
                <template #suffix>
                    人数
                </template>
            </n-statistic>
        </n-col>
        <n-col :span="6">
            <n-statistic label="申请主播" :value="0">
                <template #suffix>
                    人数
                </template>
            </n-statistic>
        </n-col>
        <n-col :span="6">
            <n-statistic label="分销商申请" :value="0">
                <template #suffix>
                    人数
                </template>
            </n-statistic>
        </n-col>
        <n-col :span="6">
            <n-statistic label="交易额" :value="0">
                <template #suffix>
                    总金额
                </template>
            </n-statistic>
        </n-col>
    </n-row>
    <n-divider />
    <v-chart class="chart1" :option="option1" />

    <v-chart class="chart2" :option="option2" />
</template>

<script setup>
    import { NStatistic, NCol, NRow, NDivider}  from 'naive-ui'

    import { use } from "echarts/core";
    import { CanvasRenderer } from "echarts/renderers";
    import { PieChart, LineChart, BarChart } from "echarts/charts";
    import {
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,

    } from "echarts/components";
    import VChart, { THEME_KEY } from "vue-echarts";
    import { ref, defineComponent } from "vue";

    use([
        CanvasRenderer,
        PieChart,
        LineChart,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
        BarChart
    ]);
    const option1 = ref({
        title: {
            text: "Traffic Sources",
            left: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            left: "left",
            data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
        },
        series: [
            {
                name: "Traffic Sources",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                    { value: 335, name: "Direct" },
                    { value: 310, name: "Email" },
                    { value: 234, name: "Ad Networks" },
                    { value: 135, name: "Video Ads" },
                    { value: 1548, name: "Search Engines" }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    })
    const option2 = ref( {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    })
</script>

<style scoped>
    .chart1 {
        height: 40vh;
        width: calc(100vw-240px);
    }
    .chart2 {
        height: 40vh;
        margin-top: 20px;
        width: calc(100vw-240px);
    }
</style>