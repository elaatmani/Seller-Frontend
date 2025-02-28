<template>
    <div>
        <div v-if="!loading" class="tw-w-full tw-shadow-mdx tw-p-4 tw-bg-white tw-rounded-lgx">
            <div class="tw-flex tw-flex-wrap tw-justify-between tw-items-center">
                <h1 class="tw-text-xl tw-font-medium tw-py-2">
                    Performance by Agent
                </h1>
            </div>
            <apexchart :options="options" :series="options.series"></apexchart>
        </div>
        <div v-else class="tw-h-[350px] tw-my-auto tw-flex tw-items-center tw-justify-center">
            <Loading />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, defineProps } from 'vue';
import Dashboard from '@/api/Dashboard';

// Define props
const props = defineProps({
    filters: {
        type: Object,
        required: true,
    },
});

// Data references
const loading = ref(true);
const data = ref([]);

// Chart options with two bars per agent
const options = computed(() => ({
    series: [
        {
            name: 'Confirmed Orders (%)',
            data: data.value.map(item => item.confirmation_percentage),
            type: 'bar',
            color: '#06b6d4', // Cyan for Confirmed
        },
        {
            name: 'Delivered Orders (%)',
            data: data.value.map(item => item.delivery_percentage),
            type: 'bar',
            color: '#22c55e', // Green for Delivered
        },
    ],
    chart: {
        type: 'bar',
        stacked: false,  // Ensures bars appear side by side
    },
    xaxis: {
        type: 'category',
        categories: data.value.map(item => item.agente_name || `Agent ${item.agente_id}`),
    },
    yaxis: {
        title: { text: 'Performance (%)' },
        min: 0,
        max: 100, // Since percentages range from 0 to 100
    },
    tooltip: {
        y: {
            formatter: value => `${value}%`,
        },
    },
    legend: { show: true },
}));

// Fetch data function
const getData = async (filters) => {
    loading.value = true;
    try {
        const res = await Dashboard.getAgentsPerformance(filters);
        if (res.data.code === 'SUCCESS') {
            // Map the response to the required data format
            data.value = res.data.data.map(item => ({
                agente_id: item.agente_id,
                agente_name: `${item?.firstname} ${item?.lastname}`, // Concatenate firstname and lastname
                confirmed_count: item.confirmed_count,
                delivered_count: item.delivered_count,
                confirmation_percentage: ((item.confirmed_count / (item.confirmed_count + item.delivered_count)) * 100).toFixed(2), // Calculate percentage
                delivery_percentage: ((item.delivered_count / (item.confirmed_count + item.delivered_count)) * 100).toFixed(2), // Calculate percentage
            }));
        } else {
            data.value = [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false;
    }
};

// Watch filters for changes
watch(
    () => props.filters,
    (newFilters) => {
        const { dateRange, filter } = newFilters || {};
        const { startDate, endDate } = dateRange || {};
        const { selectedAgenteId } = filter || {};
        const { selectedProductId } = filter || {};
        const filters = { startDate, endDate, selectedAgenteId, selectedProductId };

        getData(filters);
    },
    { immediate: true }
);
</script>
