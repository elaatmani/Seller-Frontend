<template>
    <div>

        <popup-new :visible="props.visible" @cancel="hide">
            <div class="tw-w-full tw-max-w-[500px] tw-mx-auto tw-p-2">
                <div
                    class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                    <h1
                        class="tw-text-lg tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-4">
                        Request Supply
                    </h1>


                    <div class="tw-p-5 tw-space-y-4">
                        <div>
                            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-500">Product</label>
                            <p class="tw-font-semibold tw-mt-1">{{ item.product.name }}</p>
                        </div>

                        <div class="tw-flex tw-items-center">
                            <div v-if="(!!item.product_variation.color || !!item.product_variation.size)" class="tw-flex-1">
                                <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-500">Variation</label>
                                <p class="tw-font-semibold tw-mt-1"><span class="tw-text-blue-500 ">{{ item.product_variation.color }}</span> <span class="tw-text-green-500">{{ item.product_variation.size  }}</span></p>
                            </div>

                            <div class="tw-flex-1">
                                <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-500">Status</label>
                                <p class="tw-font-semibold tw-text-sm tw-rounded tw-mt-1 tw-uppercase tw-w-fit tw-py-1 tw-px-2" :class="[status.style]">{{ status.name }}</p>
                            </div>
                        </div>

                        <div>
                            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-500">Message</label>
                            <p class="tw-font-semibold tw-mt-1">{{ item.note }}</p>
                        </div>


                        <div v-if="item.admin_note">
                            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-500">Note</label>
                            <p class="tw-font-semibold tw-mt-1">{{ item.admin_note }}</p>
                        </div>

                    </div>

                    <div
                        class="tw-flex tw-justify-end tw-items-center tw-p-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-100 tw-border-t tw-border-solid">
                        <button @click="hide"
                            class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </popup-new>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, toRef, computed } from 'vue';
import { statuses } from '@/config/supply-requests'


const emit = defineEmits(['update:visible']);

const props = defineProps(['item', 'visible']);
const item = toRef(props, 'item');
const status = computed(() => statuses.find(s => s.value == item.value.status));


const hide = () => {
    emit('update:visible', false);
}

</script>