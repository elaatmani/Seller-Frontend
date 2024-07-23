<template>
    <div>
        <div class="tw-flex tw-items-center tw-gap-2">
            <div class="tw-relative">
                <button
                    @click="visible.date = !visible.date"
                    class="tw-px-4 tw-py-2 tw-rounded tw-flex tw-items-center tw-gap-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200 hover:tw-shadow tw-duration-200">
                    <icon icon="mage:calendar" class="tw-text-xl tw-text-gray-700" />
                    <p class="tw-text-sm tw-font-medium tw-text-gray-800">Lifetime</p>
                </button>

                <DateFilter v-show="visible.date" @close="visible.date = false" />
            </div>

            <div v-if="false" class="tw-relative">
                <button @click="visible.sellers = !visible.sellers"
                    class="tw-px-4 tw-py-2 tw-rounded tw-flex tw-items-center tw-gap-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200 hover:tw-shadow tw-duration-200">
                    <icon icon="mage:user" class="tw-text-xl tw-text-gray-700" />
                    <p class="tw-text-sm tw-font-medium tw-text-gray-800">All Sellers</p>
                </button>
                <SellerFilter v-show="visible.sellers" @close="visible.sellers = false" />
            </div>

        </div>

    </div>
</template>

<script setup>
import DateFilter from './DateFilter';
import SellerFilter from './SellerFilter';
import { ref } from 'vue';

const visible = ref({
    date: false,
    sellers: false
})

</script>

<style>
</style>