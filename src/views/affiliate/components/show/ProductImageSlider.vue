<template>
    <div class="tw-flex tw-flex-col tw-gap-4">
        <div class="tw-h-[450px] tw-w-full  tw-bg-gray-200 tw-rounded tw-overflow-hidden">
            <img class="tw-h-full tw-w-full tw-object-cover" :src="product.thumbnail">
        </div>
        <div class="tw-w-full tw-grid tw-grid-cols-12 tw-gap-2">
            <div class="tw-col-span-2 tw-aspect-square tw-bg-gray-100 tw-rounded"></div>
            <div class="tw-col-span-2 tw-aspect-square tw-bg-gray-100 tw-rounded"></div>
            <div class="tw-col-span-2 tw-aspect-square tw-bg-gray-100 tw-rounded"></div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const product = inject('product');
</script>

<style></style>