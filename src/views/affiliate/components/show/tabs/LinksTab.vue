<template>
  <div class="tw-min-h-[400px] tw-px-4">
    <div class="">
        <h1 class="tw-text-lg tw-font-semibold">Landing pages</h1>
        <div v-if="landings.length" class="tw-flex tw-flex-col tw-gap-2 tw-mt-4">
          <a target="_blank" :href="link.meta_value" v-for="(link, index) in landings" :key="link" class="tw-w-full tw-p-2 tw-flex tw-items-center tw-justify-between tw-border tw-border-solid tw-border-gray-200">
            <span>Landing Page link {{ index + 1 }}</span>
            <icon icon="quill:link-out" class="tw-text-xl tw-text-gray-500" />
          </a>
        </div>
        <div v-else class="tw-mt-4 tw-p-4 tw-bg-gray-100 tw-text-center">
          <p>No landing pages available</p>
        </div>
    </div>

    <div class="tw-mt-5">
        <h1 class="tw-text-lg tw-font-semibold">Videos</h1>
        <div v-if="videos.length" class="tw-flex tw-flex-col tw-gap-2 tw-mt-4">
          <a target="_blank" :href="link.meta_value" v-for="(link, index) in videos" :key="link" class="tw-w-full tw-p-2 tw-flex tw-items-center tw-justify-between tw-border tw-border-solid tw-border-gray-200">
            <span>Video link {{ index + 1 }}</span>
            <icon icon="quill:link-out" class="tw-text-xl tw-text-gray-500" />
          </a>
        </div>
        <div v-else class="tw-mt-4 tw-p-4 tw-bg-gray-100 tw-text-center">
          <p>No videos available</p>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const product = inject('product');

const landings = computed(() => product.value.metadata.filter(i => i.meta_key == 'landing_page_link'));
const videos = computed(() => product.value.metadata.filter(i => i.meta_key == 'video_link'));

</script>

<style>

</style>