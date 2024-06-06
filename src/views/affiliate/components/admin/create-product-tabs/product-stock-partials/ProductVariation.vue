<template>
  <div
    
    :key="v"
    class="tw-grid tw-grid-cols-4 tw-divide-x tw-text-center"
  >
    <div
      class="tw-p-2 tw-bg-white tw-border-y tw-border-solid tw-border-gray-100"
    >
      {{ variation.quantity }}
    </div>
    <div
      class="tw-p-2 tw-bg-white tw-border-y tw-border-solid tw-border-gray-100"
    >
      {{ variation.color }}
    </div>
    <div
      class="tw-p-2 tw-bg-white tw-border-y tw-border-solid tw-border-gray-100"
    >
      {{ variation.size }}
    </div>
    <div
      class="tw-p-1 tw-bg-white tw-border-y tw-border-solid tw-border-gray-100 tw-flex tw-items-center tw-justify-center tw-gap-2"
    >
    <button title="Delete variation"  class="tw-aspect-square tw-scale-90 tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-amber-100 hover:tw-border-amber-400 tw-bg-amber-50/10 hover:tw-bg-amber-100 tw-duration-200">
        <icon icon="lets-icons:edit-duotone" class="tw-text-xl tw-text-amber-500" />
    </button>

    <button title="Delete variation"  class="tw-aspect-square tw-scale-90 tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-rose-100 hover:tw-border-rose-400 tw-bg-rose-50/10 hover:tw-bg-rose-100 tw-duration-200">
        <icon icon="solar:trash-bin-trash-bold-duotone" class="tw-text-xl tw-text-rose-500" />
    </button>

    </div>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue'

const props = defineProps(['variation']);

const variation = toRef(props, 'variation')

</script>

<style></style>
