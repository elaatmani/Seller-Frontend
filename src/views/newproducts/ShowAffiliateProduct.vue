<template>
    <div v-if="!loading" class="tw-p-2">
        <div class="tw-p-2 tw-text-lg tw-font-bold">
            {{ product.name }}
        </div>
        
        <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-mt-2">
            <div class="tw-min-h-[100px] tw-grid tw-grid-cols-4 tw-col-span-12 tw-gap-2">
                <div class="tw-p-4 tw-bg-white tw-border tw-boder-solid tw-border-gray-300 tw-rounded">
                    <div class="tw-flex tw-items-center tw-gap-4">
                        <icon icon="heroicons:user-group-20-solid" class="tw-text-4xl tw-text-sky-400" />
                        <p class="tw-text-xl tw-font-semibold ">Sellers</p>
                    </div>
                    <div class="tw-mt-2 tw-w-full tw-flex tw-justify-end tw-pr-5">
                        <p class="tw-text-2xl tw-font-bold tw-ml-auto ">{{ product.sellers.length }}</p>
                    </div>
                </div>

                <div class="tw-p-4 tw-bg-white tw-border tw-boder-solid tw-border-gray-300 tw-rounded">
                    <div class="tw-flex tw-items-center tw-gap-4">
                        <icon icon="fa-solid:boxes" class="tw-text-4xl tw-text-amber-400" />
                        <p class="tw-text-xl tw-font-semibold ">Orders</p>
                    </div>
                    <div class="tw-mt-2 tw-w-full tw-flex tw-justify-end tw-pr-5">
                        <p class="tw-text-2xl tw-font-bold tw-ml-auto ">{{ product.orders_count }}</p>
                    </div>
                </div>

                <div class="tw-p-4 tw-bg-white tw-border tw-boder-solid tw-border-gray-300 tw-rounded">
                    <div class="tw-flex tw-items-center tw-gap-4">
                        <icon icon="lets-icons:import-fill" class="tw-text-4xl tw-text-green-400" />
                        <p class="tw-text-xl tw-font-semibold ">Imported</p>
                    </div>
                    <div class="tw-mt-2 tw-w-full tw-flex tw-justify-end tw-pr-5">
                        <p class="tw-text-2xl tw-font-bold tw-ml-auto ">{{ product.import_count }}</p>
                    </div>
                </div>

                <div class="tw-p-4 tw-bg-white tw-border tw-boder-solid tw-border-gray-300 tw-rounded">
                    <div class="tw-flex tw-items-center tw-gap-4">
                        <icon icon="mdi:heart" class="tw-text-4xl tw-text-rose-400" />
                        <p class="tw-text-xl tw-font-semibold ">Wishlisted</p>
                    </div>
                    <div class="tw-mt-2 tw-w-full tw-flex tw-justify-end tw-pr-5">
                        <p class="tw-text-2xl tw-font-bold tw-ml-auto ">{{ product.wishlist_count }}</p>
                    </div>
                </div>

            </div>

        </div>

        <div class="tw-mt-2 tw-overflow-hidden tw-bg-white tw-border tw-border-solid tw-border-gray-300 tw-rounded">
            <ProductSellerTable />
        </div>
    </div>
</template>

<script setup>
import Affiliate from "@/api/Affiliate";
import ProductSellerTable from './affiliate/ProductSellerTable'
import { ref, provide } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const loading = ref(true);
const product = ref(null);
provide('product', product);

const getDetails = async id => {
    loading.value = true
    await Affiliate.details(id)
        .then(res => {
            if(res.data.code == 'SUCCESS') {
                product.value = res.data.product
            }
        })
        .catch(error => {
            console.log(error)
        })
    loading.value = false;
}

getDetails(route.params.id)

</script>

<style></style>