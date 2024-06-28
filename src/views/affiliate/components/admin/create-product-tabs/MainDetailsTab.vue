<template>
  <div class="tw-grid tw-grid-cols-12 tw-gap-5 tw-pb-10">
    <div
      class="md:tw-col-span-7 tw-col-span-12  tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md">
      <div class="tw-bg-gray-700 tw-border-b  tw-border-solid tw-p-2">
        <h1 class="tw-font-semibold tw-text-white">Basic Informations</h1>
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Product
            Name</label>
          <input type="text" v-model="product.name"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Enter product name..." required />
          <label v-if="errors.name"
            class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
              errors.name }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">SKU</label>
          <input type="text" v-model="product.sku"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Enter product SKU..." required />
          <label class="tw-block tw-mb-1 tw-mt-1 tw-text-xs tw-font-medium tw-text-gray-400 dark:tw-text-white">SKU
            should be unique for all products</label>
          <label v-if="errors.sku"
            class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
              errors.sku }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Buying
            Price</label>
          <input type="number" v-model="product.buying_price"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Buying price..." required />
          <label v-if="errors.buying_price"
            class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
              errors.buying_price }}</label>
        </div>

        <div class="tw-col-span-2">
          <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Selling
            Price</label>
          <input type="number" v-model="product.selling_price"
            class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
            placeholder="Selling price..." required />
          <label v-if="errors.selling_price"
            class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
              errors.selling_price }}</label>
        </div>

        <div class="tw-col-span-2">
          <label
            class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Description</label>

          <tiptap-editor v-model="product.description" />
          <label v-if="errors.description"
            class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
              errors.description }}</label>
        </div>

      </div>
    </div>


    <div class="md:tw-col-span-5 tw-col-span-12 tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-5 tw-h-fit">
      <div
        class=" tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-overflow-hidden tw-h-fit">
        <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Visibility</h1>
        </div>
        <div class="tw-p-5">
          <div class="tw-flex tw-items-center tw-gap-5">
            <button @click="product.status = !product.status" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[product.status && 'tw-bg-gray-700']"
                class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-gray-600 tw-duration-200">
              </div>
              <span>Visible</span>
            </button>

            <button @click="product.status = !product.status" class="tw-flex tw-items-center tw-gap-2">
              <div :class="[!product.status && 'tw-bg-gray-700']"
                class="tw-w-5 tw-h-5 tw-rounded-md tw-order tw-border-2 tw-border-solid tw-border-gray-600 tw-duration-200">
              </div>
              <span>Hidden</span>
            </button>
          </div>
        </div>
      </div>


      <div class="md:tw-col-span-5 tw-col-span-12">
        <div
        class="tw-border tw-border-gray-400  tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-h-fit tw-overflow-hidden">
        <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Category</h1>
        </div>
        <div class="tw-p-5 tw-space-y-4">
          <category-field />

          <tags-field v-if="false" />
        </div>
      </div>

      </div>

      <div
      class="md:tw-col-span-7 tw-col-span-12  tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-rounded-md tw-flex tw-flex-col tw-gap-2 tw-overflow-hidden tw-h-fit">
      <div>
        <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
          <h1 class="tw-font-semibold tw-text-white">Rates</h1>
        </div>

        <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
          <div class="tw-col-span-2 md:tw-col-span-1">
            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Confirmation</label>
            <input type="number" v-model="product.confirmation_rate"
              class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
              placeholder="Confirmation rate %" required />
            <label v-if="errors.confirmation_rate"
              class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                errors.confirmation_rate }}</label>
          </div>

          <div class="tw-col-span-2 md:tw-col-span-1">
            <label class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Delivery</label>
            <input type="number" v-model="product.delivery_rate"
              class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
              placeholder="Delivery rate %" required />
            <label v-if="errors.delivery_rate"
              class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                errors.delivery_rate }}</label>
          </div>
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
import { inject } from 'vue';

const product = inject('product');
const errors = inject('errors');


// const errors = ref({})


</script>
<style></style>
