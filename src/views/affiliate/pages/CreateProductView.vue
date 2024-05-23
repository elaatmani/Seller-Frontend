<template>
  <div class="tw-pt-2">

      <div class="tw-flex tw-items-center tw-gap-1 tw-w-fit tw-h-fit tw-p-1 tw-bg-gray-100 tw-rounded-md tw-border tw-border-solid tw-border-gray-200/80  tw-relative  tw-z-10 ">

        <div v-for="t in tabs" :key="t.key"
            @click="tab = t"
            :class="[tab.key == t.key && ' tw-border-neutral-200 tw-bg-white',
                    tab.key != t.key && 'tw-border-transparent hover:tw-bg-white tw-cursor-pointer hover:tw-border-neutral-200'
                ]"
          class="tw-flex tw-items-center tw-relative tw-gap-2 tw-px-8 tw-py-2 tw-rounded tw-duration-200 tw-border tw-border-solid">
            <icon :icon="t.icon" class="tw-text-2xl tw-text-gray-500" />
            <span>{{ t.name }}</span>
        </div>
      </div>

      <div class="tw-mt-4">
        <transition
            class="tw-duration-200"
            enter-from-class="tw-opacity-0 tw-translate-y-[10px]"
            leave-to-class="tw-opacity-0 tw-translate-y-[10px]"
            mode="out-in"
          >
            <component :is="tab.component" />
        </transition>
      </div>
  </div>
</template>

<script setup>
import MainDetailsTab from '@/views/affiliate/components/admin/create-product-tabs/MainDetailsTab'
import ProductStockTab from '@/views/affiliate/components/admin/create-product-tabs/ProductStockTab'
import MediaTab from '@/views/affiliate/components/admin/create-product-tabs/MediaTab'
import MetadataTab from '@/views/affiliate/components/admin/create-product-tabs/MetadataTab'
import { shallowRef } from 'vue';

const tabs = [
  { key: 'main-details-tab', 'component': MainDetailsTab, name: 'Informations', icon: 'clarity:help-info-solid' },
  { key: 'product-stock-tab', 'component': ProductStockTab, name: 'Stock', icon: 'mdi:cards' },
  { key: 'media-tab', 'component': MediaTab, name: 'Media', icon: 'mdi:folder-media' },
  { key: 'metadata-tab', 'component': MetadataTab, name: 'Metadata', icon: 'dashicons:admin-links' },
] 
  


const tab = shallowRef(tabs[0])

</script>

<style>

</style>