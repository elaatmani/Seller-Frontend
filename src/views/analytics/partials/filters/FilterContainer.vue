<template>
    <div>
        <div class="tw-flex tw-items-center tw-gap-2">
            <div class="tw-relative">
                <button
                    class="tw-px-4 tw-py-2 tw-rounded tw-flex tw-items-center tw-gap-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200 hover:tw-shadow tw-duration-200">
                    <icon icon="mage:calendar" class="tw-text-xl tw-text-gray-700" />
                    <p class="tw-text-sm tw-font-bold tw-text-gray-800">Lifetime</p>
                </button>

                <DateFilter />
            </div>

            <button
                class="tw-px-4 tw-py-2 tw-rounded tw-flex tw-items-center tw-gap-2 tw-bg-white tw-border tw-border-solid tw-border-gray-200 hover:tw-shadow tw-duration-200">
                <icon icon="mage:user" class="tw-text-xl tw-text-gray-700" />
                <p class="tw-text-sm tw-font-bold tw-text-gray-800">All Sellers</p>
            </button>
        </div>

    </div>
</template>

<script setup>
import DateFilter from './DateFilter';


</script>

<style></style>