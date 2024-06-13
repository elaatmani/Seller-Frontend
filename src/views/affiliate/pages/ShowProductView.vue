<template>
    <div class="tw-p-2 ">
        <LoadingProductSkeleton v-if="loading" />

        <div v-else class="tw-min-h-[calc(100dvh-98px)] tw-w-full tw-bg-white tw-rounded tw-overflow-hidden tw-p-5">
            <div class="tw-grid tw-grid-cols-12 tw-gap-5 ">
                <div class="tw-col-span-full lg:tw-col-span-5">
                    <product-image-slider />
                </div>

                <div class="tw-col-span-full lg:tw-col-span-7 lg:tw-p-5">
                    <div class="tw-w-full tw-h-[50px] md:tw-text-4xl tw-text-3xl tw-font-bold tw-rounded tw-truncate tw-font-[cairo]">{{ product.name }}</div>
                    <div class="tw-w-full tw-h-[30px] md:tw-text-xl tw-text-lg tw-font-bold tw-rounded tw-truncate tw-text-orange-500 tw-font-[cairo]">{{ product.category }}</div>
                    <div class="tw-w-full tw-h-[300px] tw-bg-gray-50 tw-mt-10 tw-rounded"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Affiliate from "@/api/Affiliate";
import LoadingProductSkeleton from "@/views/affiliate/components/show/LoadingProductSkeleton";
import ProductImageSlider from "@/views/affiliate/components/show/ProductImageSlider";
import { ref, provide } from "vue";
import { useRoute } from "vue-router";

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