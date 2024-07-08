<template>
  <div class="tw-px-5 tw-py-2">
    <div>
      <button class="tw-py-2 tw-border-b-2 tw-border-solid tw-border-orange-500">All Products</button>
    </div>
  </div>

  <div class="py-5 px-2x tw-borderx tw-bg-whitex tw-w-full tw-rounded-mdx tw-mb-5">
    <section class="tw-px-3">
      <div v-if="false" class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
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

      <div class="tw-mt-5x tw-flexx tw-items-centerx">
        <div v-if="!loading">
          <div v-if="products.length"
            class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-4 tw-w-full">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>
          <div v-else class="tw-h-[calc(100vh-150px)] tw-flex tw-w-full tw-items-center tw-justify-center tw-bg-white">
            <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-w-full">
              <img :src="$frontend('images/no-data.png')" alt="" class="tw-w-1/2 tw-max-w-[400px] tw-object-contain">
              <p class="tw-text-3xl tw-font-semibold">No Data</p>
            </div>
          </div>
        </div>
        <div v-if="loading"
          class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-4 tw-w-full">
          <div v-for="k in 8" :key="k"
            class="tw-rounded tw-relative tw-border tw-border-solid tw-border-gray-200 tw-overflow-hidden tw-animate-pulse">
            <div class="tw-h-[400px] tw-bg-gray-300 tw-relative">
              <div
                class="tw-w-[95px] tw-h-[40px]  tw-bg-gray-200 tw-rounded tw-shadown tw-shadow-white tw-absolute tw-right-2 tw-bottom-2">
              </div>
            </div>
            <div vi class="tw-h-[100px] tw-flex tw-items-end tw-p-2">
              <div v-if="false" class="tw-bg-gray-100 tw-w-full tw-h-[40px]"></div>
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

<style></style>