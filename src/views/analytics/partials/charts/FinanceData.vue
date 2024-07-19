<template>
    <div v-if="loading" class="tw-p-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200">
        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-5 tw-divide-x tw-gap-5" >
            <div class="tw-h-[125px]  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <div class="tw-flex tw-items-center tw-gap-1">
                    <p class="tw-text-sm tw-text-gray-400">Transaction Volume</p>
                    <icon icon="ph:info-light" class="tw-text-lg tw-text-gray-400" />
                </div>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>
            
            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Gross Delivered</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>

            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Gross Paid</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>

            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Net Paid</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>
            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">AOV</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>
        </div>
    </div>
    <div v-if="!loading" class="tw-p-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200">
        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-5 tw-divide-x tw-gap-5" >
            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <div class="tw-flex tw-items-center tw-gap-1 tw-relative">
                    <p class="tw-text-sm tw-text-gray-400">Transaction Volume</p>
                    <icon icon="ph:info-light" class="tw-text-lg tw-text-gray-400 hover:tw-text-gray-600 tw-duration-200 tw-cursor-pointer" />
                </div>
                <p class="tw-text-2xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.sum_livrer + data.sum_paid) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+2.8%</span></p>
                <p v-if="false" class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$3,123.26</span></p>
            </div>

            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Gross Delivered</p>
                <p class="tw-text-2xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.sum_livrer) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p v-if="false" class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$7,123.26</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">COD Fees: <span class="tw-font-bold tw-text-black">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.cod_fees) }}</span></p>
            </div>

            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Gross Paid</p>
                <p class="tw-text-2xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.sum_paid) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p  class="tw-text-sm tw-text-gray-400 tw-font-medium">Shipping Fees: <span class="tw-font-bold tw-text-black">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.shipping_fees) }}</span></p>
            </div>
            
            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Net Paid</p>
                <p class="tw-text-2xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.net_paid) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">Other fees: <span class="tw-font-bold tw-text-black">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.other_fees) }}</span></p>
            </div>
            <div class="tw-h-[150px]x  tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">AOV</p>
                <p class="tw-text-2xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format((data.sum_livrer + data.sum_paid) / data.count_orders_paid_delivered) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p  class="tw-text-sm tw-text-gray-400 tw-font-medium">Profit per order: <span class="tw-font-bold tw-text-black">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.cod_fees / data.count_orders_paid_delivered) }}</span></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Analytics from "@/api/Analytics";
import moment from "moment";
import { ref } from 'vue';

const loading = ref(false);
const data = ref({})


const getData = async () => {
    loading.value = true;
    await Analytics.getRevenue()
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

getData();
</script>

<style>

</style>