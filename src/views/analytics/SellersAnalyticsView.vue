<template>
    <div class="tw-pb-16">
        <div class="tw-flex tw-items-center tw-justify-between tw-gap-2 tw-mb-2">
            <div>
                <FilterContainer />
            </div>

            <div class="tw-flex tw-items-center tw-gap-2">
                <div class="tw-bg-white tw-h-[40px] tw-w-[150px] tw-border tw-border-solid tw-border-gray-300"></div>
                <div class="tw-bg-white tw-h-[40px] tw-w-[150px] tw-border tw-border-solid tw-border-gray-300"></div>
            </div>
        </div>

        <div class="tw-grid tw-grid-cols-12 tw-gap-2">
            <div class="tw-col-span-12 md:tw-col-span-12 lg:tw-col-span-4">
                <OrdersCountChart />
            </div>
            <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
                <ConfirmationChart />
            </div>
            <div class="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
                <DeliveryChart />
            </div>
            <div class="tw-col-span-12">
                <FinanceData />
            </div>
            <div class="tw-col-span-12 md:tw-col-span-12 lg:tw-col-span-6">
                <SellerData />
            </div>

            <div class="tw-col-span-12 md:tw-col-span-12 lg:tw-col-span-6">
                <TopProductChart />
            </div>
        </div>
        
    </div>
</template>

<script setup>
import OrdersCountChart from './partials/charts/OrdersCountChart'
import ConfirmationChart from './partials/charts/ConfirmationChart'
import DeliveryChart from './partials/charts/DeliveryChart'
import FinanceData from './partials/charts/FinanceData'
import SellerData from './partials/charts/SellerData'
import TopProductChart from './partials/charts/TopProductChart'
import FilterContainer from './partials/filters/FilterContainer'
import { provide, ref } from 'vue'

const filters = ref({
    date: {
        start: null,
        end: null
    },
    sellers: []
})

const charts = ref([]);

const register = chartCallback => {
    charts.value.push(chartCallback);
}

const filter = () => {
    charts.value.forEach(callback => callback());
}

provide('filter', filter);
provide('filters', filters);
provide('register', register);

</script>

<style></style>