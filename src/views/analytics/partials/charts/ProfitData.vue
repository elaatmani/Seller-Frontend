<template>

    <div class="tw-grid tw-grid-cols-12 tw-gap-2">

        <div class="tw-col-span-12  tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
                <p class="tw-p-2 tw-font-bold tw-text-lg">Earnings</p>

                <div class="tw-p-2 tw-flex tw-items-center tw-gap-2">
                    <button :class="[by == 'created' && '!tw-bg-orange-500 !tw-text-white !tw-border-orange-200']" @click="onSwitch('created')" class="tw-text-sm tw-border tw-border-solid tw-border-gray-300 tw-rounded-sm tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-100 tw-duration-200">
                        Created
                    </button>
                    <button :class="[by == 'delivered' && '!tw-bg-orange-500 !tw-text-white !tw-border-orange-200']" @click="onSwitch('delivered')" class="tw-text-sm tw-border tw-border-solid tw-border-gray-300 tw-rounded-sm tw-px-2 tw-py-1 tw-cursor-pointer hover:tw-bg-gray-100 tw-duration-200">
                        Delivered
                    </button>
                </div>
            </div>

            <div>
                <div class="tw-grid tw-grid-cols-3 tw-gap-2">
                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2 ">
                            <div class=" tw-flex tw-items-center tw-gap-2">
                                <p class="tw-font-bold tw-text-lg">Profit</p>
                                <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-w-[70px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                                <p v-else class="tw-font-semibold tw-text-gray-700">( {{ formatNumber(data.orders.orders_count, {}) }} )</p>
                            </div>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[30px] tw-mt-1 tw-w-[150px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-font-bold tw-text-2xl tw-text-emerald-500">{{ formatNumber(data.profit) }}</p>
                        </div>
                    </div>
                    

                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2">
                            <p class="tw-font-bold tw-text-lg">Sourcings</p>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[30px] tw-mt-1 tw-w-[150px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-font-bold tw-text-2xl tw-text-amber-500">{{ formatNumber(data.sourcings_profit) }}</p>
                        </div>
                    </div>

                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2">
                            <p class="tw-font-bold tw-text-lg">Profit Per Order</p>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[30px] tw-mt-1 tw-w-[150px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-font-bold tw-text-2xl tw-text-sky-500">{{ formatNumber(data.profit_per_order) }}</p>
                        </div>
                    </div>
                    
                </div>
                
                <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-mt-2">
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-gray-600">COD Fees</p>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.cod_fees) }}</p>
                    </div>
                    
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-sky-600">Shipping</p>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.orders.shipping_fees) }}</p>
                    </div>
                    
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <div class="tw-flex tw-items-center tw-gap-1">
                            <p class="tw-font-semibold tw-text-violet-600">I.Beirut</p>
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[15px] tw-w-[50px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-text-xs">({{ formatNumber(data.orders.inside_b_count, {}) }})</p>
                        </div>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.orders.inside_b) }}</p>
                    </div>
                    
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <div class="tw-flex tw-items-center tw-gap-1">
                            <p class="tw-font-semibold tw-text-amber-600">O.Beirut</p>
                            <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[15px] tw-w-[50px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                            <p v-else class="tw-text-xs">({{ formatNumber(data.orders.outside_b_count, {}) }})</p>
                        </div>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.orders.outside_b) }}</p>
                    </div>
                    
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-pink-600">Other fees</p>
                        <p v-if="loading" class="tw-font-semibold tw-text-gray-700 tw-h-[20px] tw-mt-1 tw-w-[60px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></p>
                        <p v-else class="tw-font-bold tw-text-lg">{{ formatNumber(data.orders.variant_fees) }}</p>
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
const by = ref('created');
const data = ref({});
const allData = ref({});


const getData = async () => {
    loading.value = true;
    await Analytics.getProfit({ from: filters.value.date.start, to: filters.value.date.end, sellers: filters.value.sellers })
        .then(
            res => {
                console.log(res.data)
                allData.value = res.data.profit
                data.value = by.value == 'created' ? res.data.profit.profit_by_created_at : res.data.profit.profit_by_delivered_at;
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

const onSwitch = (value) => {
    if (value == 'created') {
        data.value = allData.value.profit_by_created_at
    } else if (value == 'delivered') {
        data.value = allData.value.profit_by_delivered_at
    }
    by.value = value;
}

getData();
register(getData)
</script>

<style></style>