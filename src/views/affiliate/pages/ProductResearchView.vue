<template>
  <div class="py-5 px-2 tw-border tw-bg-white tw-w-full tw-rounded-md tw-mb-5">
    <section class="tw-px-3">
      <div class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
        <div>
          <div class="tw-flex tw-items-center tw-gap-x-3">
            <h2 class="tw-text-lg tw-font-medium tw-text-gray-800 darkx:tw-text-white">
              Product Research
            </h2>

          </div>

          <p class="tw-mt-1 tw-text-sm tw-text-gray-500 darkx:tw-text-gray-300">
            List of all affiliate products.
          </p>
        </div>
      </div>

      <div class="tw-mt-5 tw-flex tw-items-center">
        <div v-if="!loading" class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-4 tw-w-full">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div v-if="loading" class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-4 tw-w-full">
          <div v-for="k in 8" :key="k" class="tw-rounded tw-relative tw-border tw-border-solid tw-border-gray-100 tw-overflow-hidden tw-animate-pulse">
            <div class="tw-h-[300px] tw-bg-gray-300 tw-relative">
              <div class="tw-w-[95px] tw-h-[40px]  tw-bg-gray-200 tw-rounded tw-shadown tw-shadow-white tw-absolute tw-right-2 tw-bottom-2"></div>
            </div>
            <div class="tw-h-[100px] tw-flex tw-items-end tw-p-2">
              <div class="tw-bg-gray-100 tw-w-full tw-h-[40px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </template>

<script setup>
import Affiliate from '@/api/Affiliate';
import ProductCard from '@/views/affiliate/components/common/product/ProductCard';
import { ref } from 'vue';

const loading = ref(false);
const products = ref([]);



const getProducts = async () => {
  loading.value = true;

  await Affiliate.paginate('/')
  .then(
    r => {
      products.value = r.data.products.data
    },
    e => {
      console.log(e)
    }
  )

  loading.value = false;
}

getProducts()



</script>

<style>

</style>