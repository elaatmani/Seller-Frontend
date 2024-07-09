<template>
    <div v-if="loading" class="tw-p-2">
        <div class="tw-w-2/5 tw-h-[60px] tw-bg-gray-200 tw-rounded tw-animate-pulse"></div>

        <div class="tw-grid tw-grid-cols-12 tw-mt-5 tw-gap-5">
            <div class="tw-col-span-8 tw-min-h-[500px] tw-bg-gray-200 tw-animate-pulse tw-rounded"></div>
            <div class="tw-col-span-4 tw-min-h-[500px] tw-bg-gray-200 tw-animate-pulse tw-rounded"></div>
            <div class="tw-col-span-8 tw-min-h-[200px] tw-bg-gray-200 tw-animate-pulse tw-rounded"></div>

        </div>
    </div>
    <div v-if="!loading" class="tw-pt-2 tw-pb-20x tw-overflow-hidden">

        <div class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
            <div
                class="tw-flex tw-items-center tw-gap-1 tw-w-fit tw-h-fit tw-p-1 tw-bg-gray-100 tw-rounded-md tw-border tw-border-solid tw-border-gray-200/80  tw-relative  tw-z-10 ">

                <div v-for="t in tabs" :key="t.key" @click="tab = t" :class="[
                    tab.key == t.key && ' tw-border-neutral-200 tw-bg-white',
                    tab.key != t.key && 'tw-border-transparent hover:tw-bg-white tw-cursor-pointer hover:tw-border-neutral-200',
                    Object.keys(errors).find(e => t.fields.includes(e)) && '!tw-border-red-500 !tw-text-red-400',
                ]"
                    class="tw-flex tw-items-center tw-relative tw-gap-2 tw-px-8 tw-py-2 tw-rounded tw-duration-200 tw-border tw-border-solid">
                    <icon :icon="t.icon" class="tw-text-2xl" />
                    <span>{{ t.name }}</span>
                </div>
            </div>

            <div>
                <button :disabled="updating"
                    :class="[updating && '!tw-bg-gray-300 !tw-text-gray-600 tw-cursor-not-allowed']" @click="update"
                    class="tw-bg-gray-800 hover:tw-bg-gray-900   tw-text-white tw-flex tw-items-center tw-gap-2 tw-pr-8 tw-pl-6 tw-py-3 tw-rounded">
                    <icon v-if="updating" icon="eos-icons:three-dots-loading" class="tw-text-2xl" />
                    <span>Update</span>
                </button>
            </div>
        </div>

        <div class="tw-mt-4">
            <keep-alive>
                <transition class="tw-duration-200" enter-from-class="tw-opacity-0 tw-translate-x-[10px]"
                    leave-to-class="tw-opacity-0 -tw-translate-x-[10px]" mode="out-in">
                    <component :is="tab.component" v-model:product="product" />
                </transition>
            </keep-alive>
        </div>

    </div>
</template>

<script setup>
import MainDetailsTab from '@/views/affiliate/components/admin/create-product-tabs/MainDetailsTab'
import ProductStockTab from '@/views/affiliate/components/admin/create-product-tabs/ProductStockTab'
import MediaTab from '@/views/affiliate/components/admin/create-product-tabs/MediaTab'
import MetadataTab from '@/views/affiliate/components/admin/create-product-tabs/MetadataTab'
import { shallowRef, ref, provide } from 'vue';
import Affiliate from '@/api/Affiliate';
import { useAlert } from '@/composables/useAlert';
import { useRoute } from 'vue-router';

const tabs = [
    { key: 'main-details-tab', 'component': MainDetailsTab, name: 'Informations', icon: 'clarity:help-info-solid', fields: ['name', 'description', 'buying_price', 'selling_price', 'sku', 'status', 'offers', 'categories', 'tags'] },
    { key: 'product-stock-tab', 'component': ProductStockTab, name: 'Inventory', icon: 'ic:round-warehouse', fields: ['product_variations', 'warehouse', 'product_deliveries', 'has_variations', 'initial_quantity'] },
    { key: 'media-tab', 'component': MediaTab, name: 'Media', icon: 'mdi:folder-media', fields: ['media'] },
    { key: 'metadata-tab', 'component': MetadataTab, name: 'Metadata', icon: 'dashicons:admin-links', fields: ['metadata'] },
]

const route = useRoute()
const loading = ref(true);
const updating = ref(false);
const tab = shallowRef(tabs[0])
const errors = ref({});
const product = ref({
    status: true,
    tags: [],
    categories: [],
    variations: [],
    has_variations: false,
    media: [],
    metadata: [],
    category_id: '',
    initial_quantity: 0,
    description: '',
})

provide('product', product)
provide('isUpdate', true)
provide('errors', errors)

const getProduct = async id => {
    loading.value = true;

    await Affiliate.edit(id)
        .then(
            res => {
                if (res.data.code == 'SUCCESS') {
                    product.value = res.data.product
                }
            }
        )

    loading.value = false;
}

const update = async () => {
    const formattedProduct = { ...product.value, media: product.value.media.map(m => ({ uuid: m.uuid, id: m.id, collection_name: m.collection_name })) }
    updating.value = true
    await Affiliate.update(route.params.id, formattedProduct)
        .then(
            r => {
                if (r.data.code == 'SUCCESS') {
                    useAlert('Product updated successfully', 'success')
                    // product.value = {
                    //     status: true,
                    //     tags: [],
                    //     categories: [],
                    //     variations: [],
                    //     metadata: [],
                    //     has_variations: false,
                    //     media: [],
                    //     category_id: '',
                    //     initial_quantity: 0,
                    //     description: 'Hello'
                    // }
                }
            },
            e => {
                if (e?.response?.data?.errors && e?.response.status == 422) {
                    for (const field in e.response.data.errors) {
                        if (field.startsWith('variations.')) {
                            errors.value[field] = e?.response?.data?.errors[field]
                        } else {
                            errors.value[field] = e?.response?.data?.errors[field][0]
                        }
                    }
                }
            }
        )
    updating.value = false
}

getProduct(route.params.id);

</script>

<style></style>