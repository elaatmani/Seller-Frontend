<template>
    <div>
        <div
            class="tw-w-full tw-h-[50px] md:tw-text-4xl tw-text-3xl tw-font-bold tw-rounded tw-truncate tw-font-[cairo]">
            {{ product.name }}</div>
        <div class="tw-flex tw-items-center tw-gap-4">
            <div v-if="product.category"
            class="tw-w-fit tw-h-[30px] md:tw-text-xl tw-text-lg tw-font-bold tw-rounded tw-truncate tw-text-orange-500 tw-font-[cairo]">
            {{ product.category }}</div>
            <div class="tw-px-4 tw-border-l tw-border-solid tw-border-gray-200 tw-flex tw-items-center tw-gap-4">
                <span>SKU:</span>
                <button @click="copy(product.sku)" class="tw-py-0.5 tw-px-2 tw-bg-orange-50 tw-text-orange-500 tw-rounded tw-flex tw-items-center tw-gap-2">
                    <span>{{ product.sku }}</span>
                    <icon icon="solar:copy-linear" />
                </button>
            </div>
        </div>

        <div class="tw-mt-10 tw-w-full tw-rounded">
            <div class="tw-p-1 tw-px-10 tw-bg-orange-500 tw-text-white tw-w-fit tw-rounded-t">Pricing</div>
            <div class=" tw-border-2 tw-border-solid tw-border-orange-500 tw-rounded-b tw-overflow-hidden tw-rounded-tr">
                <table class="tw-w-full">
                <thead>
                    <tr class="tw-bg-gray-100">
                        <th class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">Variation</th>
                        <th class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">Available</th>
                        <th class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="v in product.variations" :key="v.id">
                        <td class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">
                            <span v-if="!v.size && !v.color">Default</span>
                            <div v-else class="tw-flex tw-items-center tw-gap-1">
                                <span v-if="v.size">{{ v.size }}</span>
                                <span v-if="v.color">{{ v.color }}</span>

                            </div>
                        </td>
                        <td class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">{{ v.available_quantity }}</td>
                        <td class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">{{ currency + product.selling_price }}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        <div class="tw-mt-10 tw-w-full tw-rounded">
            <div class="tw-p-1 tw-px-10 tw-bg-emerald-500 tw-text-white tw-w-fit tw-rounded-t">Rates</div>
            <div class=" tw-border-2 tw-border-solid tw-border-emerald-500 tw-rounded-b tw-overflow-hidden tw-rounded-tr">
                <table class="tw-w-full ">
                    <thead>
                        <tr class="tw-bg-gray-100">
                            <th class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">Confirmation</th>
                            <th class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">{{ product.confirmation_rate }}%</td>
                            <td class="tw-p-2 tw-text-start tw-border-r tw-border-solid tw-border-gray-200 last:tw-border-none">{{ product.delivery_rate }}%</td>
                        </tr>
                    </tbody>
    
                </table>
            </div>
        </div>
        
        <product-card-actions :is-card="false" :product="product" />

        <div v-if="false" class="tw-w-full tw-h-[300px] tw-bg-gray-50 tw-mt-10 tw-rounded"></div>
        <div v-if="false" class="tw-w-full  tw-mt-10">
            <TiptapEditor v-model="product.description" :editable="false"  />
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { currency } from '@/config/config';
import ProductCardActions from '@/views/affiliate/components/common/product/ProductCardActions.vue';
import TiptapEditor from '@/views/affiliate/components/admin/partials/editor/TiptapEditor';
import { useAlert } from '@/composables/useAlert';

const product = inject('product');

const copy = (value) => {
  navigator.clipboard.writeText(value);
  useAlert('Copied to clipboard');
}
</script>

<style></style>