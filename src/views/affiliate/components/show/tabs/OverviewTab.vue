<template>
    <div class="tw-w-full tw-p-4 tw-text-gray-600">
        <div v-if="false" class="tw-flex tw-mb-5 tw-flex-wrap tw-gap-4">
            <div class="tw-flex" v-for="t in product.tags" :key="t">
                <div class="tw-py-1 tw-px-4 tw-bg-orange-50 tw-text-black tw-h-full tw-text-sm">{{ t }}</div>
            </div>
        </div>

        <TiptapEditor v-model="product.description" :editable="false" />
    </div>
</template>

<script setup>
import { inject } from 'vue';
import TiptapEditor from '@/views/affiliate/components/admin/partials/editor/TiptapEditor';

const product = inject('product');

</script>

<style></style>