<template>
    <popup-new :visible="props.visible" :closeable="!loading" @cancel="emit('update:visible', false)">
        <div
            class="tw-mx-auto tw-w-[95%] md:tw-max-w-[800px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg">
            <div
                class="tw-p-4 tw-text-lg tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50">
                Manage Offers
            </div>

            <div v-if="!fetching" class="tw-p-2 tw-bg-white">
                <div class="tw-bg-gray-50 tw-border tw-border-solid tw-border-gray-200 tw-p-2 tw-grid tw-grid-cols-2 tw-gap-2">
                    <div class="tw-col-span-2 ">
                        <label
                            class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Store URL</label>
                        <input type="text" v-model="store_url"
                            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                            placeholder="Store URL" required />
                    </div>
                    <div class="tw-col-span-2 ">
                        <label
                            class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Video URL</label>
                        <input type="text" v-model="video_url"
                            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                            placeholder="Video URL" required />
                    </div>
                </div>
            </div>

            <div v-if="fetching" class="tw-p-2 tw-bg-white">
                <div v-if="!offers.length"
                    class="tw-bg-gray-50 tw-border tw-border-solid tw-border-gray-200 tw-p-5 tw-text-center">
                    <p class="tw-text-gray-500 tw-text-lg">Loading...</p>
                </div>
            </div>

            <div v-if="!fetching" class="tw-p-2 tw-bg-white">

                <div v-if="!offers.length"
                    class="tw-bg-gray-50 tw-border tw-border-solid tw-border-gray-200 tw-p-5 tw-text-center">
                    <p class="tw-text-gray-500 tw-text-lg">No offers yet</p>
                </div>

                <div v-if="offers.length" class="tw-flex tw-flex-col tw-gap-2">
                    <h1 class="tw-mb-2 tw-text-base tw-font-semibold tw-px-2">Offers</h1>
                    <div class="tw-grid tw-grid-cols-2 tw-gap-2 tw-border tw-border-solid tw-p-2 tw-rounded-xlx tw-shadow-sm tw-bg-white tw-border-gray-200"
                        v-for="offer in offers" :key="offer">
                        <div class="tw-col-span-2 md:tw-col-span-1">
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Quantity</label>
                            <input type="number" v-model="offer.quantity"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="0" required />
                        </div>

                        <div class="tw-col-span-2 md:tw-col-span-1">
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Price</label>
                            <input type="number" v-model="offer.price"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="0" required />
                        </div>

                        <div class="tw-col-span-2">
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Note</label>
                            <input type="text" v-model="offer.note"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Note" required />
                        </div>

                        <div class="tw-col-span-2 tw-flex tw-items-center tw-justify-end">
                            <button @click="onDelete(offer.id)" :disabled="loading"
                                class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-rose-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-rose-600 dark:tw-border-neutral-900 dark:hover:tw-border-rose-500 hover:tw-bg-rose-500/80 dark:hover:tw-bg-rose-400 tw-duration-300 tw-text-white">
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="tw-flex tw-items-center tw-justify-center tw-mt-4">
                    <button @click="addOffer"
                        class="tw-flex tw-items-center tw-bg-orange-400 tw-text-white tw-gap-2 tw-px-4 tw-py-2 hover:tw-bg-orange-600 tw-duration-200 tw-rounded tw-border tw-border-transparent tw-border-solid hover:tw-border-orange-200">
                        <icon icon="uil:plus" class="tw-text-sm" />
                        <p class="">Add offer</p>
                    </button>
                </div>
            </div>
            <div
                class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-50 tw-border-t tw-border-solid">
                <button @click="emit('update:visible', false)"
                    class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                    Cancel
                </button>
                <button @click="onSave" :disabled="loading"
                    class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
                    <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                        :class="[loading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                    <span>Save</span>
                </button>
            </div>
        </div>
    </popup-new>
</template>

<script setup>
import Affiliate from '@/api/Affiliate';
import { useAlert } from '@/composables/useAlert';
import { defineEmits, defineProps, ref } from 'vue';

const props = defineProps(['product', 'visible'])
const emit = defineEmits(['update:visible'])
const offers = ref([]);
const store_url = ref(null);
const video_url = ref(null);

const loading = ref(false);
const fetching = ref(false);


const addOffer = () => {
    const offer = { id: Date.now(), product_id: props.product.id, quantity: '', price: '', note: '' };

    offers.value.push(offer);
}

const onSave = async () => {
    let isValid = true;

    offers.value.forEach(i => {
        if (!i.price || !i.quantity) {
            isValid = false;
        }
    })

    if (!isValid) {
        useAlert('The offers are not valid. check price and quantity', 'warning');
        return false;
    }

    loading.value = true;
    await Affiliate.setOffers(props.product.id, {offers: offers.value, store_url: store_url.value, video_url: video_url.value})
        .then(
            res => {
                if (res.data.code == 'SUCCESS') {
                    // offers.value = res.data.offers
                    useAlert('Offers has been updated')
                    emit('update:visible', false)
                }
            }
        )
    loading.value = false;
}

const onDelete = (id) => {
    console.log('deleting...', id);
    offers.value = offers.value.filter(i => i.id != id)
}

const getOffers = async () => {
    fetching.value = true;
    await Affiliate.getOffers(props.product.id)
        .then(
            res => {
                if (res.data.code == 'SUCCESS') {
                    offers.value = res.data.offers
                    video_url.value = res.data.video_url
                    store_url.value = res.data.store_url
                }
            }
        )
    fetching.value = false;
}

getOffers()

</script>

<style></style>