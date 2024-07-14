<template>
    <div class="tw-p-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200">
        <div class="tw-grid tw-grid-cols-12 tw-divide-x tw-gap-5" >
            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Transaction Volume</p>
                <p class="tw-text-3xl tw-font-bold">$38,782.10 <span class="tw-text-sm tw-text-emerald-400">+2.8%</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$3,123.26</span></p>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Revenue</p>
                <p class="tw-text-3xl tw-font-bold">$18,782.10 <span class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$7,123.26</span></p>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Delivered</p>
                <p class="tw-text-3xl tw-font-bold">$52,782.10 <span class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$12,123.26</span></p>
            </div>

            <div class="tw-h-[150px]x tw-col-span-12 md:tw-col-span-3 tw-border-gray-100 tw-p-4 tw-pl-10 tw-flex tw-flex-col tw-gap-2">
                <p class="tw-text-sm tw-text-gray-400">Total Paid</p>
                <p class="tw-text-3xl tw-font-bold">$52,782.10 <span class="tw-text-sm tw-text-emerald-400">+10.8%</span></p>
                <p class="tw-text-sm tw-text-gray-400 tw-font-medium">{{ moment('2024-07-04').format('MMM D, YYYY') }}: <span class="tw-font-bold tw-text-black">$3,123.26</span></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from "moment";

</script>

<style>

</style>