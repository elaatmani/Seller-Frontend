<template>
    <div v-if="loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]">
        <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Confirmation</p>
            <p class="tw-px-1 tw-bg-emerald-500 tw-text-white tw-text-sm tw-rounded"><icon icon="eos-icons:three-dots-loading" class="tw-text-xl" /></p>
        </div>

        <div class="tw-flex tw-gap-x">
            <div class="tw-w-[50%] tw-p-5 tw-h-[280px] tw-flex tw-items-center tw-justify-center">
                <div class="tw-w-[90%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-aspect-square tw-animate-pulse">
                </div>
            </div>
            <div class="tw-w-[50%] tw-p-2 tw-h-[280px] tw-flex tw-justify-center tw-flex-col tw-gap-5">
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
            </div>
        </div>
    </div>
    <div v-else class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]">
        <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Confirmation</p>
            <p class="tw-px-1 tw-bg-emerald-500 tw-text-white tw-text-sm tw-rounded">{{ new Intl.NumberFormat().format(totalConfirmed)  }}</p>
        </div>
        <div class="tw-h-fullx tw-flex tw-gap-2">
            <div class="tw-w-fit">
                <apexchart type="radialBar" height="300" :options="options" :series="series"></apexchart>
            </div>
            <div class="tw-flex-1 tw-p-2 tw-flex tw-flex-col tw-gap-4 tw-justify-center">
                <div v-for="c in data.confirmations" :key="c" class="tw-flex tw-items-center tw-gap-2">
                    <div :style="{ background: c.color }" class="tw-p-0 tw-px-1 tw-rounded tw-text-[10px] tw-font-bold tw-text-white tw-text-center tw-w-[35px]">{{ c.percentage }}</div>
                    <p class="tw-text-smx tw-font-semibold">{{ c.name }} <span class="tw-text-xs">({{ new Intl.NumberFormat().format(c.value) }})</span></p>
                </div> 
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Analytics from '@/api/Analytics'

const loading = ref(true);
const total = ref(0);
const totalConfirmed = ref(0);

// const data = ref([]);

const data = ref({
    confirmations: [
        // { name: 'Total', value: 450, percentage: '100%', color: '#000' },
        // { name: 'Confirmed', value: 225, percentage: '77%', color: '#10b981' },
        // { name: 'Double', value: 225, percentage: '77%', color: '#8b5cf6' },
        // { name: 'Canceled', value: 225, percentage: '77%', color: '#e11d48' },
        // { name: 'No Answer', value: 225, percentage: '77%', color: '#f59e0b' },
        // { name: 'Others', value: 225, percentage: '77%', color: '#64748b' },
    ]
})
const series = ref([77]);

const options = computed(() => ({
    chart: {
        type: 'radialBar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                }
            },
            track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0,
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                }
            },
            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '17px'
                },
                value: {
                    formatter: function (val) {
                        return parseInt(val) + '%';
                    },
                    color: '#111',
                    fontSize: '36px',
                    show: true
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        colors: series.value[0] > 50 ? ['#10b981'] : ['#f43f5e'],
        gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: series.value[0] > 50 ? ['#22c55e', '#10b981'] : ['#f43f5e', '#e11d48'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['Confirmed']
}));


const getData = async () => {
    loading.value = true;
    await Analytics.getConfirmationsCount()
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                handleData(res.data.data)
            }
        },
        err => {
            console.log(err)
        }
    )
    loading.value = false
}

const handleData = dt => {
    total.value = dt.reduce((p, n) => p + n.count, 0)

    let result = [];

    // double
    let doubleCount = dt.find(o => o.confirmation == 'double')?.count ?? 0;
    let doublePercentage = doubleCount > 0 ? ((doubleCount / total.value) * 100).toFixed(0) : 0;
    let double = { name: 'Double', value: doubleCount, percentage: `${doublePercentage}%`, color: '#8b5cf6' };
    
    // total
    let totalCount = total.value - doubleCount
    let totalPercentage = 100;
    let totalOrders = { name: 'Total', value: totalCount, percentage: `${totalPercentage}%`, color: '#000' };
    // result.push(totalOrders)
    totalOrders

    // new
    let newCount = dt.find(o => o.confirmation == null)?.count ?? 0;
    let newPercentage = newCount > 0 ? ((newCount / totalCount) * 100).toFixed(0) : 0;
    let newOrders = { name: 'New', value: newCount, percentage: `${newPercentage}%`, color: '#000' };
    result.push(newOrders)


    // confirmed
    let confirmedCount = dt.find(o => o.confirmation == 'confirmer')?.count ?? 0;
    let confirmedPercentage = confirmedCount > 0 ? ((confirmedCount / totalCount) * 100).toFixed(0) : 0;
    // let confirmed = { name: 'Confirmed', value: confirmedCount, percentage: `${confirmedPercentage}%`, color: '#10b981' };
    // result.push(confirmed)
    totalConfirmed.value = confirmedCount
    series.value = [confirmedPercentage]
    result.push(double)

    

    // canceled
    let canceledCount = dt.find(o => o.confirmation == 'annuler')?.count ?? 0;
    let canceledPercentage = canceledCount > 0 ? ((canceledCount / totalCount) * 100).toFixed(0) : 0;
    let canceled = { name: 'Canceled', value: canceledCount, percentage: `${canceledPercentage}%`, color: '#e11d48' };
    result.push(canceled)
    
    // no answers
    let noAnswerCount = dt.reduce((p, n) => n.confirmation?.includes('-call-') ? p + n.count : p, 0)
    let noAnswerPercentage = noAnswerCount > 0 ? ((noAnswerCount / totalCount) * 100).toFixed(0) : 0;
    let noAnswer = { name: 'No Answer', value: noAnswerCount, percentage: `${noAnswerPercentage}%`, color: '#f59e0b' };
    result.push(noAnswer)

    // refund
    let wrongNumberCount = dt.find(o => o.confirmation == 'wrong-number')?.count ?? 0;
    let wrongNumberPercentage = wrongNumberCount > 0 ? ((wrongNumberCount / totalCount) * 100).toFixed(0) : 0;
    let wrongNumber = { name: 'Wrong Number', value: wrongNumberCount, percentage: `${wrongNumberPercentage}%`, color: '#ec4899' };
    result.push(wrongNumber)

    // others
    let othersCount = total.value - (newCount + confirmedCount + doubleCount + canceledCount + noAnswerCount + wrongNumberCount);
    let othersPercentage = othersCount > 0 ? ((othersCount / totalCount) * 100).toFixed(0) : 0;
    let others = { name: 'Others', value: othersCount, percentage: `${othersPercentage}%`, color: '#64748b' };
    result.push(others)

    data.value.confirmations = result;
}

getData();
</script>

<style>
/* Add any custom styles here */
</style>