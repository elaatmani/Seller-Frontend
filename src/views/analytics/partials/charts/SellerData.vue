<template>
    <div v-if="!loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]x">
        <div class="tw-flex tw-items-start tw-justify-between">
            <div class="tw-flex tw-items-center tw-gap-2">
                <p class="tw-p-2 tw-font-bold tw-text-lg">Sellers</p>
                <p class="tw-px-1 tw-bg-black tw-text-white tw-text-sm tw-rounded">{{ new
                    Intl.NumberFormat().format(total)
                    }}</p>
            </div>

            <div class="tw-flex tw-items-center">
                <select v-model="order_by" class="tw-h-[35px] tw-px-2 tw-outline-none tw-border tw-rounded tw-border-solid tw-border-gray-200 tw-w-[180px]">
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                </select>
                <div class="tw-p-4 tw-flex tw-gap-2 tw-items-center">
                    <button
                        :disabled="!options.prev_page_url"
                        @click="onPrev"
                        :class="!options.prev_page_url ? 'tw-cursor-not-allowed' : ''"
                        class="tw-p-0.5 tw-aspect-square tw-rounded tw-border tw-border-solid tw-border-gray-200 hover:tw-bg-gray-100 tw-duration-200">
                        <icon icon="ic:round-chevron-left" class="tw-text-3xl tw-text-gray-500" />
                    </button>

                    <button
                        :disabled="!options.next_page_url"
                        @click="onNext"
                        :class="!options.next_page_url ? 'tw-cursor-not-allowed' : ''"
                        class="tw-p-0.5 tw-aspect-square tw-rounded tw-border tw-border-solid tw-border-gray-200 hover:tw-bg-gray-100 tw-duration-200">
                        <icon icon="ic:round-chevron-right" class="tw-text-3xl tw-text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div id="chart">
                <apexchart type="bar" height="450" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
    </div>
    <div v-if="loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[420px]">
        <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Sellers</p>
            <p class="tw-px-1 tw-bg-black tw-text-white tw-text-sm tw-rounded">
                <icon icon="eos-icons:three-dots-loading" class="tw-text-xl" />
            </p>
        </div>
        <div class="tw-h-[350px] tw-w-full tw-bg-gray-100 tw-rounded tw-animate-pulse">

        </div>
    </div>
</template>


<script setup>
import Analytics from '@/api/Analytics';
import { ref, watch } from 'vue';

const order_by = ref('high');
const options = ref({});
const loading = ref(false);
const total = ref(0);

watch(() => order_by.value, () => {
    getData();
})

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

const getData = async (per_page = 6, page = 1) => {
    loading.value = true;

    await Analytics.getOrdersBySellers({ per_page, page, order_by: order_by.value })
        .then(
            res => {
                if (res.data.code == 'SUCCESS') {
                    handleData(res.data.data.data);
                    options.value = res.data.data;
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
    total.value = usernames.length;
    chartOptions.value.xaxis.categories = usernames;

    const data = usernames.map(username => {
        const total = Object.keys(response[username]).reduce((acc, cur) => {
            return acc + (response[username][cur].order_count || 0);
        }, 0);
        const confirmed = response[username]['confirmer']?.order_count || 0;

        return [
            total,
            confirmed
        ]
    })

    series.value[0].data = data.map(o => o[0]);
    series.value[1].data = data.map(o => o[1]);
};

const onNext = () => {
    getData(options.value.per_page, options.value.current_page + 1);
}

const onPrev = () => {
    getData(options.value.per_page, options.value.current_page - 1);
}

</script>

<style></style>