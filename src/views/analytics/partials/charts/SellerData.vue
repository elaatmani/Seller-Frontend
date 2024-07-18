<template>
    <div v-if="!loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]x">
        <div class="tw-flex tw-items-center tw-justify-between">
            <div class="tw-flex tw-items-center tw-gap-2">
                <p class="tw-p-2 tw-font-bold tw-text-lg">Sellers</p>
                <p class="tw-px-1 tw-bg-black tw-text-white tw-text-sm tw-rounded" v-if="false">{{ new
                    Intl.NumberFormat().format(total)
                    }}</p>
            </div>

            <div class="tw-p-4 tw-bg-red-400">

            </div>
        </div>
        <div>
            <div id="chart">
                <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
    </div>
    <div v-if="loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[380px]">
        <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Sellers</p>
            <p class="tw-px-1 tw-bg-black tw-text-white tw-text-sm tw-rounded">
                <icon icon="eos-icons:three-dots-loading" class="tw-text-xl" />
            </p>
        </div>
        <div class="tw-h-[320px] tw-w-full tw-bg-gray-100 tw-rounded tw-animate-pulse">

        </div>
    </div>
</template>


<script setup>
import Analytics from '@/api/Analytics';
import { ref } from 'vue';

const loading = ref(false);
const total = ref(0);

const series = ref([
    {
        name: 'Orders',
        group: 'budget',
        data: []
    },
    {
        name: 'Confirmed',
        group: 'actual',
        data: []
    },
    // {
    //     name: 'Q2 Budget',
    //     group: 'budget',
    //     data: [13000, 36000, 20000, 8000, 13000]
    // },
    // {
    //     name: 'Q2 Actual',
    //     group: 'actual',
    //     data: [20000, 40000, 25000, 10000, 12000]
    // }
]);

const chartOptions = ref({
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    dataLabels: {
        formatter: (val) => {
            return val
        }
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        categories: [],
        labels: {
            formatter: (val) => {
                return val
            }
        }
    },
    fill: {
        opacity: 1,
    },
    colors: ['#000', '#10b981'],
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
});

const getData = async () => {
    loading.value = true;

    await Analytics.getOrdersBySellers()
        .then(
            res => {
                if (res.data.code == 'SUCCESS') {
                    handleData(res.data.data);
                }
            },
            err => {
                console.log(err);
            }
        );
    loading.value = false;
};
getData();

const handleData = response => {
    const usernames = Object.keys(response);
    chartOptions.value.xaxis.categories = usernames;
    
    const data = usernames.map(username => {
        const total = Object.keys(response[username]).reduce((acc, cur) => {
            return acc + (response[username][cur].order_count || 0);
        }, 0);
        const confirmed = response[username]['confirmer']?.order_count || 0;
        console.log('total: ', total);
        console.log('confirmed: ', confirmed);

        return [
            total,
            confirmed
        ]
    })

    series.value[0].data = data.map(o => o[0]);
    series.value[1].data = data.map(o => o[1]);
};


</script>

<style></style>