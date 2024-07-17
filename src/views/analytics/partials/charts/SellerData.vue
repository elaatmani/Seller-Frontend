<template>
    <div v-if="!loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]x">
        <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Sellers</p>
            <p class="tw-px-1 tw-bg-black tw-text-white tw-text-sm tw-rounded" v-if="false">{{ new
                Intl.NumberFormat().format(total)
                }}</p>
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
import { confirmations } from '@/config/orders';
import { ref } from 'vue';

const loading = ref(false);
const total = ref(0)

const series = ref([
])

const chartOptions = ref({
    chart: {
        stacked: true,
        toolbar: {
            show: true
        },
        type: 'bar',
        events: {
            // click: function (chart, w, e) {
            //     // console.log(chart, w, e)
            // }
        }
    },
    colors: [
        '#10B981', // tw-bg-green-500
        '#FECACA', // tw-bg-rose-200/10
        '#FEB2B2', // tw-bg-rose-400/10
        '#FC8181', // tw-bg-rose-600/10
        '#C3DAFE', // tw-bg-indigo-200/10
        '#A3BFFA', // tw-bg-indigo-400/10
        '#7F9CF5', // tw-bg-indigo-600/10
        '#BFDBFE', // tw-bg-blue-200/10
        '#90CDF4', // tw-bg-blue-400/10
        '#63B3ED', // tw-bg-blue-600/10
        '#FAE8FF', // tw-bg-fuchsia-500/10
        '#FEB2B2', // tw-bg-rose-400/10
        '#B2F5EA', // tw-bg-teal-500/10
        '#FED7D7', // tw-bg-red-500/10
        '#FAE8FF', // tw-bg-fuchsia-500/10
        '#D1FAE5', // tw-bg-green-500/10
        '#E9D8FD'  // tw-bg-purple-500/10
    ],
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: false,
        }
    },
    dataLabels: {
        enabled: true,

    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [
        ],
        labels: {
            style: {
                // colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
                fontSize: '12px'
            }
        }
    }
})


const getData = async () => {
    loading.value = true;

    await Analytics.getOrdersBySellers()
        .then(
            res => {
                if (res.data.code == 'SUCCESS') {
                    handleData(res.data.data)
                }
            },
            err => {
                console.log(err)
            }
        )
    loading.value = false;
}; getData();

const handleData = response => {
    const usernames = Object.keys(response);
    chartOptions.value.xaxis.categories = usernames
    const names = confirmations.map(o => ({ name: o.name, value: o.value }));

    const data = names.map(confirmation => {
        let value = []
        usernames.forEach(username => {
            if (confirmation.value) {
                value.push(response[username][confirmation.value]?.order_count || 0)
            } else {
                value.push(response[username]['']?.order_count || 0)
            }
        });
        return { ...confirmation, data: value }
    });

    series.value = data;
}

</script>

<style></style>