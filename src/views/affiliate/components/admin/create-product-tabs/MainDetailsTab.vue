<template>
  <div class="tw-grid tw-grid-cols-12 tw-gap-5">
    <div class="md:tw-col-span-7 tw-col-span-12 tw-p-5 tw-border tw-bg-white tw-w-full tw-rounded-md">
      <h1 class="tw-font-semibold tw-text-black">Basic Informations</h1>
      <div class="tw-mt-5 tw-grid tw-grid-cols-2 tw-gap-4">
        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Product
            Name</label>
          <input type="text"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="John" required />
          <label v-if="false" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            "" }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">SKU</label>
          <input type="text"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="John" required />
          <label v-if="false" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            "" }}</label>
        </div>
        
        <div class="tw-col-span-2">
          <label
            class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Description</label>
          <textarea rows="3"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Enter a product description"></textarea>
          <label v-if="false" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            "" }}</label>
        </div>

      </div>
    </div>


    <div class="md:tw-col-span-5 tw-col-span-12 tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-5 tw-h-fit">
      <div class="tw-p-5 tw-border tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-2 tw-h-fit">
        <div>
          <h1 class="tw-font-semibold tw-text-black">Visibility</h1>
          <div class="tw-mt-5 tw-flex tw-items-center tw-gap-5">
            <button @click="visible = !visible" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[visible && 'tw-bg-orange-400']" class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-orange-400 tw-duration-200"></div>
              <span>Visible</span>
            </button>
            
            <button @click="visible = !visible" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[!visible && 'tw-bg-orange-400']" class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-orange-400 tw-duration-200"></div>
              <span>Hidden</span>
            </button>
          </div>
        </div>
      </div>
      <div class="tw-col-span-5 tw-p-5 tw-border tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-2 tw-h-fit">
        <div>
          <h1 class="tw-font-semibold tw-text-black">Category & Tags</h1>
          <div class="tw-mt-5 tw-flex tw-items-center tw-gap-5">
            <button @click="visible = !visible" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[visible && 'tw-bg-orange-400']" class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-orange-400 tw-duration-200"></div>
              <span>Visible</span>
            </button>
            
            <button @click="visible = !visible" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[!visible && 'tw-bg-orange-400']" class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-orange-400 tw-duration-200"></div>
              <span>Hidden</span>
            </button>
          </div>
        </div>
      </div>
    </div>


    <div class="md:tw-col-span-7 tw-col-span-12 tw-p-5 tw-border tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-2 tw-h-fit">
      <div>
        <h1 class="tw-font-semibold tw-text-black">Offers</h1>
        <div class="tw-mt-5 tw-flex tw-items-center tw-gap-5">
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref }  from 'vue';

const visible = ref(true)

</script>

<style></style>
