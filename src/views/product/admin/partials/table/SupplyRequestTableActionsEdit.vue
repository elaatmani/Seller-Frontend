<template>
    <popup-new :visible="props.visible" @cancel="hide">
        <div class="tw-w-full tw-max-w-[500px] tw-mx-auto tw-p-2">
                <div class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                    <h1
                        class="tw-text-lg tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-4">
                        Request Supply
                    </h1>


                    <div class="tw-p-5 tw-space-y-4">
                        <div class="">
                            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Product <span class="tw-text-xs tw-text-gray-400" v-if="!productsFetched"> loading...</span></label>
                            <div class="tw-relative">
                                <select 
                                :disabled="!productsFetched || true"
                                @change="form.errors.product_id = null"
                                v-model="form.request.product_id" :class="[form.errors.product_id && '!tw-border-red-400']"
                                    class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 tw-pr-7">
                                    <option disabled value="no-value-selected">
                                        Select a product
                                    </option>
                                    <option :class="[p.name]" v-for="p in products" :value="p.id" :key="p.id">
                                        {{ p.name }}
                                    </option>
                                </select>

                                <div
                                    class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2 tw-text-gray-700">
                                    <svg class="tw-fill-current tw-h-4 tw-w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <label v-if="form.errors.product_id"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">
                                {{ form.errors.product_id }}
                            </label>
                        </div>

                        <div v-if="product_variations.length > 1">
                            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Variation <span class="tw-text-xs tw-text-gray-400" v-if="!productsFetched"> loading...</span></label>
                            <div class="tw-relative">
                                <select 
                                :disabled="(!productsFetched || form.request.product_id == 'no-value-selected') || true"
                                @change="form.errors.product_variation_id = null"
                                v-model="form.request.product_variation_id" :class="[form.errors.product_variation_id && '!tw-border-red-400']"
                                    class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 tw-pr-7">
                                    <option disabled value="no-value-selected">
                                        Select a variation
                                    </option>
                                    <option :class="[p.name]" v-for="p in product_variations" :value="p.id" :key="p.id">
                                        {{ p.size }} {{ (!!p.size && !!p.color) ? '|' : '' }} {{ p.color }}
                                    </option>
                                </select>

                                <div
                                    class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2 tw-text-gray-700">
                                    <svg class="tw-fill-current tw-h-4 tw-w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <label v-if="form.errors.product_variation_id"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">
                                {{ form.errors.product_variation_id }}
                            </label>
                        </div>

                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Quantity</label>
                            <input :disabled="form.request.status == 'accepted'" v-model="form.request.quantity" @input="form.errors.quantity = null" type="number" min="0" max="10000"
                                :class="[form.errors.quantity && '!tw-border-red-400']"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Enter a quantity for your request" required />
                            <label v-if="form.request.status == 'accepted'"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-gray-400 dark:tw-text-white">{{
                                    'cannot edit, request has already been accepted' }}</label>
                            <label v-if="form.errors.quantity"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                                    form.errors.quantity }}</label>
                        </div>


                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Seller's Message</label>
                            <textarea disabled v-model="form.request.note" @input="form.errors.note = null" type="number" min="0" max="10000"
                                :class="[form.errors.note && '!tw-border-red-400']"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Seller's note here" rows="2" required ></textarea>
                            <label v-if="form.errors.note"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                                    form.errors.note }}</label>
                        </div>

                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Leave note for seller</label>
                            <textarea v-model="form.request.admin_note" @input="form.errors.admin_note = null" type="number" min="0" max="10000"
                                :class="[form.errors.admin_note && '!tw-border-red-400']"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Enter a note for the seller" rows="2" required ></textarea>
                            <label v-if="form.errors.admin_note"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                                    form.errors.admin_note }}</label>
                        </div>
                    </div>

                    <div
                        class="tw-flex tw-justify-end tw-items-center tw-p-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-100 tw-border-t tw-border-solid">
                        <button @click="hide"
                            class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                            Cancel
                        </button>
                        <button @click="update" :disabled="loading"
                            class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
                            <v-icon size="small"
                                class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                                :class="[loading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                            <span>Save</span>
                        </button>
                    </div>
                </div>
        </div>
    </popup-new>
</template>

<script setup>
import SupplyRequest from '@/api/SupplyRequest';
import { useAlert } from '@/composables/useAlert';
import { defineEmits, defineProps, ref, computed, reactive, watch } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(['update:visible']);
const props = defineProps(['visible', 'item']);
const store = useStore();

const loading = ref(false);
const form = reactive({
    request: JSON.parse(JSON.stringify(props.item)),
    errors: {}
});

// computeds
const products = computed(() => store.getters['product/products']);
const productsFetched = computed(() => store.getters['product/fetched']);
const product_variations = computed(() => {
    if(form.request.product_id == 'no-value-selected') return [];
    return products.value.find(p => p.id == form.request.product_id).variations;
});

// warchers
watch(() => form.request.product_id, () => {
    if(product_variations.value.length == 1) {
        form.request.product_variation_id = product_variations.value[0].id;
        return;
    }

    form.request.product_variation_id = 'no-value-selected';
});

// functions
const hide = () => {
    emit('update:visible', false)
}

const update = async () => {
    loading.value = true;
    await SupplyRequest.update(props.item.id, form.request)
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                useAlert('Request has been updated');
                store.dispatch('supply-request/updateSupplyRequest', res.data.supply_request);
                hide();
            }
        },
        err => {
            if(err.response?.status == 422) {
                for (let e in err.response.data.errors) {
                    form.errors[e] = err.response.data.errors[e][0]
                }
            }

            if(err.response?.status == 500) {
                useAlert('Something went wrong', 'error');
            }
        }
    );
    loading.value = false;
}


</script>

<style>

</style>