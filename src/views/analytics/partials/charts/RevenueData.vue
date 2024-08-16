<template>

    <div v-if="false" class="tw-grid tw-grid-cols-12 tw-gap-2">
        <div class="tw-col-span-12  tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200">


            <div>
                <div class="tw-grid tw-grid-cols-2 tw-gap-2">
                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2 ">
                            <div class=" tw-flex tw-items-center tw-gap-2">
                                <p class="tw-font-bold tw-text-lg">Total Revenue</p>
                                <p class="tw-font-semibold tw-text-gray-700">( 43,100 )</p>
                            </div>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p class="tw-font-bold tw-text-2xl tw-text-emerald-500">1,000,234$</p>
                        </div>
                    </div>

                    <div class="tw-border tw-border-solid tw-p-2">
                        <div class="tw-flex tw-items-center tw-gap-2">
                            <p class="tw-font-bold tw-text-lg">Profit Per Order</p>
                        </div>
                        <div class="tw-px-2x tw-mt-2x">
                            <p class="tw-font-bold tw-text-2xl tw-text-sky-500">3.4$</p>
                        </div>
                    </div>

                </div>

                <div class="tw-grid tw-grid-cols-5 tw-gap-2 tw-mt-2">
                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-gray-600">COD Fees</p>
                        <p class="tw-font-bold tw-text-lg">$55,812.57</p>
                    </div>

                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-sky-600">Shipping</p>
                        <p class="tw-font-bold tw-text-lg">$344,248</p>
                    </div>

                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <div class="tw-flex tw-items-center tw-gap-1">
                            <p class="tw-font-semibold tw-text-violet-600">I.Beirut</p>
                            <p class="tw-text-xs">(13,048)</p>
                        </div>
                        <p class="tw-font-bold tw-text-lg">$23,486.40</p>
                    </div>

                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <div class="tw-flex tw-items-center tw-gap-1">
                            <p class="tw-font-semibold tw-text-amber-600">O.Beirut</p>
                            <p class="tw-text-xs">(29,983)</p>
                        </div>
                        <p class="tw-font-bold tw-text-lg">$77,955.80</p>
                    </div>

                    <div class="tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-shadowx xtw-rounded">
                        <p class="tw-font-semibold tw-text-pink-600">Other fees</p>
                        <p class="tw-font-bold tw-text-lg">{{formatNumber(86062, {})}}</p>
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