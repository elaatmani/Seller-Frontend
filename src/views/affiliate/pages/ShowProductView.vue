<template>
    <div class="tw-p-2">
        <button @click="$router.go(-1)" class="tw-text-gray-600 tw-flex tw-items-center tw-gap-1 tw-duration-200 hover:tw-text-gray-700">
            <icon icon="iconamoon:arrow-left-2" class="tw-text-3xl tw-text-gray-400" />
            <span>Go Back</span>
        </button>
    </div>
    <div class="tw-p-2 ">
        <LoadingProductSkeleton v-if="loading" />

        <div v-else class="tw-min-h-fit tw-w-full tw-bg-white tw-rounded tw-overflow-hidden tw-p-5 tw-border tw-border-solid tw-border-gray-200">
            <div class="tw-grid tw-grid-cols-12 tw-gap-5 ">
                <div class="tw-col-span-full lg:tw-col-span-6">
                    <product-image-slider />
                </div>

                <div class="tw-col-span-full lg:tw-col-span-6 lg:tw-p-5">
                    <product-details />
                </div>
            </div>
        </div>

        <div v-if="!loading" class="tw-mt-5">
            <tab-container />
        </div>
    </div>

</template>

<script setup>
import Affiliate from "@/api/Affiliate";
import LoadingProductSkeleton from "@/views/affiliate/components/show/LoadingProductSkeleton";
import ProductImageSlider from "@/views/affiliate/components/show/ProductImageSlider";
import ProductDetails from "@/views/affiliate/components/show/ProductDetails";
import { ref, provide } from "vue";
import { useRoute } from "vue-router";
import TabContainer from "@/views/affiliate/components/show/tabs/TabContainer";

const route = useRoute();
const loading = ref(false);
const product = ref({});
provide('product', product);
provide('loading', loading);

const getProduct = async id => {
    loading.value = true;
    await Affiliate.get(id)
        .then(
            r => {
                if(r.data.code == 'SUCCESS') {
                    product.value = r.data.product
                }
                console.log(r)
            },
            e => {
                console.log(e)
            }
        )
    loading.value = false;
}

getProduct(route.params.id)
</script>

<style></style>