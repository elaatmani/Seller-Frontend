<template>
  <div class="tw-grid tw-grid-cols-12 tw-gap-5">
    <div class="md:tw-col-span-7 tw-col-span-12  tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md">
      <div class="tw-bg-gray-700 tw-border-b  tw-border-solid tw-p-2">
        <h1 class="tw-font-semibold tw-text-white">Basic Informations</h1>
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Product
            Name</label>
          <input type="text"
            v-model="product.name"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Enter product name..." required />
          <label v-if="errors.name" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            errors.name }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">SKU</label>
          <input type="text" v-model="product.sku"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Enter product SKU..." required />
          <label class="tw-block tw-mb-1 tw-mt-1 tw-text-xs tw-font-medium tw-text-gray-400 dark:tw-text-white">SKU should be unique for all products</label>
          <label v-if="errors.sku" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            errors.sku }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Buying Price</label>
          <input type="number" v-model="product.buying_price"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Buying price..." required />
          <label v-if="errors.buying_price" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            errors.buying_price }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Selling Price</label>
          <input type="number" v-model="product.selling_price"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Selling price..." required />
          <label v-if="errors.selling_price" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            errors.selling_price }}</label>
        </div>
        
        <div class="tw-col-span-2">
          <label
            class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Description</label>
          
            <tiptap-editor />
          <label v-if="errors.description" class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
            errors.description }}</label>
        </div>

      </div>
    </div>


    <div class="md:tw-col-span-5 tw-col-span-12 tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-5 tw-h-fit">
      <div class=" tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-overflow-hidden tw-h-fit">
        <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Visibility</h1>
        </div>
        <div class="tw-p-5">
          <div class="tw-flex tw-items-center tw-gap-5">
            <button @click="product.status = !product.status" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[product.status && 'tw-bg-gray-700']" class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-gray-600 tw-duration-200"></div>
              <span>Visible</span>
            </button>
            
            <button @click="product.status = !product.status" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[!product.status && 'tw-bg-gray-700']" class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-gray-600 tw-duration-200"></div>
              <span>Hidden</span>
            </button>
          </div>
        </div>
      </div>


      <div class="tw-col-span-5  tw-border tw-border-gray-400  tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-h-fit tw-overflow-hidden">
        <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Category & Tags</h1>
        </div>
        <div class="tw-p-5 tw-space-y-4">
          <category-field />

          <tags-field />

          
        </div>
      </div>
    </div>


    <div class="md:tw-col-span-7 tw-col-span-12  tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-2 tw-overflow-hidden tw-h-fit">
      <div>
        <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Offers</h1>
        </div>


        <div class="text-editor tw-p-5 tw-flex tw-justify-between">
          <p class="tw-text-gray-700">Add offers for sellers</p>
          <button
            @click="false"
            :disabled="false"
            class="tw-py-2 tw-px-7 tw-pl-5 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-gray-700 tw-border tw-border-solid tw-border-tansparent hover:tw-border-gray-800 dark:tw-border-neutral-800 dark:hover:tw-border-gray-500 hover:tw-bg-gray-500 dark:hover:tw-bg-gray-400 tw-duration-300 tw-text-white"
          >
          <icon icon="jam:plus" class="tw-text-xl tw-mr-1" />
            <v-icon
              size="small"
              class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
              :class="[false && '!tw-max-w-[50px] !tw-mr-3']"
              >mdi-loading</v-icon
            >
            <span>Create</span>
          </button>
        </div>

        <div class=" tw-p-4">

          <div class="tw-w-full tw-p-5 tw-rounded tw-bg-gray-100 tw-border tw-border-solid tw-border-gray-200 tw-text-center">
              <p class="tw-text-gray-500">No offers has been added</p>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import TiptapEditor from '../partials/editor/TiptapEditor.vue';
import TagsField from './main-details-partials/TagsField.vue';
import CategoryField from './main-details-partials/CategoryField.vue';
import { inject }  from 'vue';

const product = inject('product');
const errors = inject('errors');


// const errors = ref({})


</script>
<style>
</style>
