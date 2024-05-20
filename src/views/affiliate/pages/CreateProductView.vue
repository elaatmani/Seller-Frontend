<template>
  <div class="tw-pt-2">

      <div class="tw-flex tw-items-center tw-gap-1 tw-w-fit tw-h-fit tw-p-1 tw-bg-gray-100 tw-rounded-md tw-border tw-border-solid tw-border-gray-200/80  tw-relative  tw-z-10 ">

        <div 
            @click="active = 0"
            :class="[active == 0 && ' tw-border-neutral-200 tw-bg-white',
                    active != 0 && 'tw-border-transparent hover:tw-bg-white tw-cursor-pointer hover:tw-border-neutral-200'
                ]"
          class="tw-flex tw-items-center tw-relative tw-gap-2 tw-px-8 tw-py-2 tw-rounded tw-duration-200 tw-border tw-border-solid">
            <icon icon="clarity:help-info-solid" class="tw-text-2xl tw-text-gray-500" />
            <span>Informations</span>
        </div>

        <div 
            @click="active = 1"
            :class="[active == 1 && ' tw-border-neutral-200 tw-bg-white',
                    active != 1 && 'tw-border-transparent hover:tw-bg-white tw-cursor-pointer hover:tw-border-neutral-200'
                ]"
          class="tw-flex tw-items-center tw-relative tw-gap-2 tw-px-8 tw-py-2 tw-rounded tw-duration-200 tw-border tw-border-solid">
            <icon icon="mdi:cards" class="tw-text-2xl tw-text-gray-500" />
            <span>Variations</span>
          </div>


        <div 
            @click="active = 2"
            :class="[active == 2 && ' tw-border-neutral-200 tw-bg-white',
                    active != 2 && 'tw-border-transparent hover:tw-bg-white tw-cursor-pointer hover:tw-border-neutral-200'
                ]"
          class="tw-flex tw-items-center tw-relative tw-gap-2 tw-px-8 tw-py-2 tw-rounded tw-duration-200 tw-border tw-border-solid">
            <icon icon="mdi:folder-media" class="tw-text-2xl tw-text-gray-500" />
            <span>Media</span>
          </div>


        <div 
            @click="active = 3"
            :class="[active == 3 && ' tw-border-neutral-200 tw-bg-white',
                    active != 3 && 'tw-border-transparent hover:tw-bg-white tw-cursor-pointer hover:tw-border-neutral-200'
                ]"
          class="tw-flex tw-items-center tw-relative tw-gap-2 tw-px-8 tw-py-2 tw-rounded tw-duration-200 tw-border tw-border-solid">
            <icon icon="dashicons:admin-links" class="tw-text-2xl tw-text-gray-500" />
            <span>Links</span>
          </div>

          <!-- <div class="tw-flex tw-items-center tw-gap-2 tw-px-8 tw-py-2 tw-border-b tw-border-transparent tw-border-solid">
              <icon icon="mdi:folder-media" class="tw-text-2xl tw-text-gray-500" />
              <span>Media</span>
          </div>

          <div class="tw-flex tw-items-center tw-gap-2 tw-px-8 tw-py-2 tw-border-b tw-border-transparent tw-border-solid">
              <icon icon="dashicons:admin-links" class="tw-text-2xl tw-text-gray-500" />
              <span>Links</span>
          </div> -->
      </div>
    
      <main-details-tab />
  </div>
</template>

<script setup>
import MainDetailsTab from '@/views/affiliate/components/admin/create-product-tabs/MainDetailsTab'
import { ref } from 'vue';

const active = ref(0);

</script>

<style>

</style>