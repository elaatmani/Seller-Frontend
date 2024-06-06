<template>
  <div class="tw-grid tw-grid-cols-12 tw-gap-5">
    <div class="md:tw-col-span-7 tw-col-span-12  tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md">
      <div class="tw-bg-gray-700 tw-border-b  tw-border-solid tw-p-2">
        <h1 class="tw-font-semibold tw-text-white">Variations</h1>
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
        <div class="tw-col-span-2 tw-flex tw-items-center tw-justify-between tw-mb-2">
            <p>Does the product have variations ?</p>
            
            <button @click="hasVariations = !hasVariations" class="tw-p-1 tw-h-[35px] tw-w-[90px] tw-bg-gray-50 tw-border tw-border-solid tw-border-gray-200 tw-rounded">
              
              <div :class="[hasVariations ? 'tw-translate-x-full' : '']" class="tw-w-[40px] tw-duration-200 tw-h-full tw-bg-white tw-border tw-border-solid tw-border-gray-300 tw-rounded-sm tw-uppercase tw-text-center tw-font-medium tw-text-sm tw-flex tw-items-center tw-justify-center">
                {{ hasVariations ? "Yes" : "No" }}
              </div>
            </button>
          </div>

        <!-- <div class="tw-col-span-1">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Initial quantity</label>
          <input type="text"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="0" required />
          <label v-if="false" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            "" }}</label>
        </div> -->
        <div class="tw-col-span-1">
            <label class="tw-block tw-text-sm tw-mb-2 tw-font-medium tw-text-gray-900 dark:tw-text-white">
              Warehouse</label>
            <div class="tw-relative">
                  <select
                    value="lebanon"
                    class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 tw-pr-7"
                  >
                    <option value="a" disabled>Choose warehouse</option>
                    <option value="lebanon" >Lebanon</option>
                  </select>
            </div>
          </div>


          <transition class="tw-duration-200" enter-from-class="tw-opacity-0 tw-translate-x-[10px]"
            leave-to-class="tw-opacity-0 -tw-translate-x-[10px]">
              <div v-if="hasVariations" class="tw-col-span-2 tw-mt-5">
                <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
                  <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Variations list</label>
                  <ProductVariationAdd @create="handleVariationCreate" />
                </div>

                <div v-if="!variations.length" class="tw-p-5 tw-bg-gray-100 tw-text-center">
                  <p>No variations added yet</p>
                </div>

                <div v-else class="tw-p-2 tw-bg-gray-100 tw-">
                  <div :key="v" class="tw-grid tw-grid-cols-4 tw-mb-1 tw-text-center">
                    <div class="tw-p-2 tw-bg-gray-800 tw-text-white tw-rounded tw-border tw-border-dashed">Quantity</div>
                    <div class="tw-p-2 tw-bg-gray-800 tw-text-white tw-rounded tw-border tw-border-dashed">Color</div>
                    <div class="tw-p-2 tw-bg-gray-800 tw-text-white tw-rounded tw-border tw-border-dashed">Size</div>
                    <div class="tw-p-2 tw-bg-gray-800 tw-text-white tw-rounded tw-border tw-border-dashed">Actions</div>
                  </div>
                  <product-variation v-for="v in variations" :key="v" :variation="v" />
                </div>
                
              </div>
          </transition>
      </div>
    </div>


    <div class="md:tw-col-span-5 tw-col-span-12  tw-h-fit ">

      <div class="tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md">
        <div class="tw-bg-gray-700 tw-border-b  tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Deliveries</h1>
        </div>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
          <div class="tw-col-span-2">
            <label class="tw-block tw-text-sm tw-mb-2 tw-font-medium tw-text-gray-900 dark:tw-text-white">
              Can be delivered by</label>
            <div class="tw-relative">
                  <select
                    value="road-runner"
                    class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 tw-pr-7"
                  >
                    <option value="a" disabled>Choose deliveries</option>
                    <option value="road-runner" >Road Runner</option>
                  </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; 
import ProductVariationAdd from './product-stock-partials/ProductVariationAdd';
import ProductVariation from './product-stock-partials/ProductVariation';

const hasVariations = ref(false)
const variations = ref([]);


const handleVariationCreate = v => {
  variations.value.unshift(v);
}
</script>
<style>
</style>
