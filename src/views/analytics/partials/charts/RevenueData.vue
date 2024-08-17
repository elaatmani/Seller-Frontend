<template>

    <div class="tw-grid tw-grid-cols-12 tw-gap-2">
        <div class="tw-col-span-12  tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200">


            <div>
                <div class="tw-grid tw-grid-cols-2 tw-gap-2">
                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2 ">
                            <div class=" tw-flex tw-items-center tw-gap-2">
                                <p class="tw-font-bold tw-text-lg">Total Revenue</p>
                                <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-w-[70px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                                <p v-else class="tw-font-semibold tw-text-gray-700">( {{ formatNumber(data.orders.paid_count, {}) }} )</p>
                            </div>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[30px] tw-mt-1 tw-w-[150px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-font-bold tw-text-2xl tw-text-emerald-500">{{ formatNumber(data.turnover) }}</p>
                        </div>
                    </div>

                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2">
                            <p class="tw-font-bold tw-text-lg">Net Paid</p>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[30px] tw-mt-1 tw-w-[70px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-font-bold tw-text-2xl tw-text-sky-500">{{ formatNumber(data.net_paid) }}</p>
                        </div>
                    </div>

                </div>

                <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-mt-2">

                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-sky-600">AOV</p>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.aov) }}</p>
                    </div>
                    
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <div class="tw-flex tw-items-center tw-gap-1">
                            <p class="tw-font-semibold tw-text-violet-600">Shipping Fees</p>
                        </div>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.orders.shipping_fees) }}</p>
                    </div>

                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <div class="tw-flex tw-items-center tw-gap-1">
                            <p class="tw-font-semibold tw-text-rose-600">Total Fees</p>
                        </div>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.total_fees) }}</p>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script setup>
import Analytics from "@/api/Analytics";
import { ref, inject } from 'vue';

const filters = inject('filters');
const register = inject('register');
const loading = ref(false);
const data = ref({});


const getData = async () => {
    loading.value = true;
    await Analytics.getRevenue({ from: filters.value.date.start, to: filters.value.date.end, sellers: filters.value.sellers })
        .then(
            res => {
                console.log(res.data)
                data.value = res.data.revenue
            },
            err => {
                console.log(err)
            }
        )
    loading.value = false;
}

const formatNumber = (number, type = {style: 'currency', currency: 'USD'}) => {
    return new Intl.NumberFormat('en', { maximumFractionDigits: 2, ...type }).format(number);
}

getData();
register(getData)
</script>

<style></style>