<template>
  <div class="tw-grid tw-grid-cols-12 tw-gap-5">
    <div class="md:tw-col-span-7 tw-col-span-12  tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md">
      <div class="tw-bg-gray-700 tw-border-b  tw-border-solid tw-p-2">
        <h1 class="tw-font-semibold tw-text-white">Files</h1>
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
        <div class="tw-col-span-2 tw-flex tw-items-center tw-justify-between">
          <p>Does the product have variations ?</p>
          
          <button @click="hasVariations = !hasVariations" class="tw-p-1 tw-h-[35px] tw-w-[90px] tw-bg-gray-50 tw-border tw-border-solid tw-border-gray-200 tw-rounded">
            
            <div :class="[hasVariations ? 'tw-translate-x-full' : '']" class="tw-w-[40px] tw-duration-200 tw-h-full tw-bg-white tw-border tw-border-solid tw-border-gray-300 tw-rounded-sm tw-uppercase tw-text-center tw-font-medium tw-text-sm tw-flex tw-items-center tw-justify-center">
              {{ hasVariations ? "Yes" : "No" }}
            </div>
          </button>
        </div>

      </div>
    </div>



  </div>
</template>

<script setup>
import { ref } from 'vue'; 

const hasVariations = ref(false)
</script>
<style>
</style>
