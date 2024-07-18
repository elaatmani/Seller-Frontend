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
const total = ref(0);

const series = ref([]);

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
        '#FB7185', // tw-bg-rose-500
        '#FB7185', // tw-bg-rose-500
        '#FB7185', // tw-bg-rose-500
        '#6366F1', // tw-bg-indigo-500
        '#6366F1', // tw-bg-indigo-500
        '#6366F1', // tw-bg-indigo-500
        '#3B82F6', // tw-bg-blue-500
        '#3B82F6', // tw-bg-blue-500
        '#3B82F6', // tw-bg-blue-500
        '#EC4899', // tw-bg-fuchsia-500
        '#FB7185', // tw-bg-rose-500
        '#14B8A6', // tw-bg-teal-500
        '#EF4444', // tw-bg-red-500
        '#EC4899', // tw-bg-fuchsia-500
        '#10B981', // tw-bg-green-500
        '#A855F7'  // tw-bg-purple-500
    ],
    plotOptions: {
        bar: {
            columnWidth: '90%',
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
        categories: [],
        labels: {
            style: {
                // colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
                fontSize: '12px'
            }
        }
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

    const names = confirmations.map(o => ({ name: o.name, value: o.value }));

    const data = names.map((confirmation) => {
        let value = [];
        usernames.forEach(username => {
            if (confirmation.value) {
                value.push(response[username][confirmation.value]?.order_count || 0);
            } else {
                value.push(response[username]['']?.order_count || 0);
            }
        });
        return { ...confirmation, data: value };
    });

    series.value = data;
};


</script>

<style></style>