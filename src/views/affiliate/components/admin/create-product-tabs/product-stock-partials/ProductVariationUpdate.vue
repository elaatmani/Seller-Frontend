<template>
    <div>  
      <popup-new :visible="visible" :closeable="true" @cancel="visible = false">
        <div
          class="tw-mx-auto tw-w-[95%] md:tw-max-w-[500px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
          <div
            class="tw-p-4 tw-text-lg tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-gray-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50"
          >
            Update variation
          </div>
  
          <div class="tw-p-5 tw-bg-white">
            <div class="tw-grid tw-gap-6 tw-gap-y-5 tw-grid-cols-1 md:tw-grid-cols-2">
  
              <div class="tw-col-span-2 md:tw-col-span-2">
                <label
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Quantity</label>
                <input
                  v-model="variation.quantity"
                  @input="errors.quantity = null"
                  type="number"
                  :class="[errors.quantity && '!tw-border-red-400']"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                  placeholder="0"
                  required
                />
                <label
                  v-if="errors.quantity"
                  class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.quantity }}</label>
              </div>
  
              <div class="tw-col-span-2 md:tw-col-span-2">
                <label
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Color</label>
                <input
                  v-model="variation.color"
                  @input="errors.color = null"
                  type="text"
                  :class="[errors.color && '!tw-border-red-400']"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                  placeholder="White, Black..."
                  required
                />
                <label
                  v-if="errors.color"
                  class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.color }}</label>
              </div>
  
              <div class="tw-col-span-2 md:tw-col-span-2">
                <label
                  class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                  >Size</label>
                <input
                  v-model="variation.size"
                  @input="errors.size = null"
                  type="text"
                  :class="[errors.size && '!tw-border-red-400']"
                  class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                  placeholder="Small, Large..."
                  required
                />
                <label
                  v-if="errors.size"
                  class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                  >{{ errors.size }}</label>
              </div>
          </div>
        </div>
  
        <div
            class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-50 tw-border-t tw-border-solid"
          >
            <button
              @click="cancel"
              class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300"
            >
              Cancel
            </button>
            <button
              @click="handleUpdate"
              :disabled="loading"
              class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white"
            >
              <v-icon
                size="small"
                class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                :class="[loading && '!tw-max-w-[50px] !tw-mr-3']"
                >mdi-loading</v-icon
              >
              <span>Create</span>
            </button>
          </div>
        </div>
      </popup-new>
  
    </div>
  </template>
  
  <script setup>
  import { useAlert } from '@/composables/useAlert'
  import { ref, defineEmits, defineProps } from 'vue'
  
  const props = defineProps(['variation'])
  const emit = defineEmits(['update', 'cancel'])
  const visible = ref(true)
  const loading = ref(false)
  const variation = ref({...props.variation})
  const errors = ref({})
  
  const handleUpdate = () => {
    if(!variation.value.quantity) {
      useAlert('Quantity is required', 'error');
      return false;
    }
    
    emit('update', variation.value);
    cancel();
  }
  
  const cancel = () => {
    variation.value = props.variation;
    visible.value = false;
    emit('cancel')
  }
  </script>
  
  <style>
  
  </style>