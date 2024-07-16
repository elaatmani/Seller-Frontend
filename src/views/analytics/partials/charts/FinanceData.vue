<template>
    <div v-if="loading" class="tw-p-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200">
        <div class="tw-grid tw-grid-cols-12 tw-divide-x tw-gap-5" >
            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Transaction Volume</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>
            
            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Delivered</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Paid</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total With Delivery</p>
                <div class="tw-h-[30px] tw-w-[120px] tw-bg-gray-100 tw-rounded tw-animate-pulse"></div>
            </div>
        </div>
    </div>
    <div v-if="!loading" class="tw-p-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200">
        <div class="tw-grid tw-grid-cols-12 tw-divide-x tw-gap-5" >
            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Transaction Volume</p>
                <p class="tw-text-3xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.sum_livrer + data.sum_paid) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+2.8%</span></p>
                <p v-if="false" class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$3,123.26</span></p>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Delivered</p>
                <p class="tw-text-3xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.sum_livrer) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p v-if="false" class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$7,123.26</span></p>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Paid</p>
                <p class="tw-text-3xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.sum_paid) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">COD Fees: <span class="tw-font-bold tw-text-black">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.cod_fees) }}</span></p>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Net Paid</p>
                <p class="tw-text-3xl tw-font-bold">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.net_paid) }} <span v-if="false" class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p  class="tw-text-sm tw-text-gray-400 tw-font-medium">Shipping Fees: <span class="tw-font-bold tw-text-black">{{ new Intl.NumberFormat('en', {style: 'currency', currency: 'USD' }).format(data.shipping_fees) }}</span></p>
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