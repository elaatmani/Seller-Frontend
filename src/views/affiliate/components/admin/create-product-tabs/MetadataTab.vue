<template>
  <div class="tw-grid tw-grid-cols-12 tw-gap-5">
    <div
      class="md:tw-col-span-7 tw-col-span-12 tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md"
    >
      <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
        <h1 class="tw-font-semibold tw-text-white">Landing pages</h1>
      </div>

      <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
        <div class="tw-col-span-2 tw-flex tw-items-center tw-gap-2">
          <div class="tw-flex-1">
            <label
              class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
              >Add Landing Page Link</label
            >
            <div class="tw-flex tw-items-center tw-h-[42px] tw-gap-2">
              <input
                v-model="landing_page"
                type="text"
                class="tw-bg-gray-50 tw-border tw-flex-1 tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                placeholder="https://www..."
                required
              />

              <button
                @click="handleLandingPageAdd"
                class="tw-bg-gray-800 tw-text-white tw-p-1 tw-h-full tw-flex tw-items-center tw-justify-center tw-aspect-square tw-rounded-lg"
              >
                <icon
                  icon="pepicons-pop:plus"
                  class="tw-text-white tw-text-xl"
                />
              </button>
            </div>
            <label
              v-if="false"
              class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
              >{{ "" }}</label
            >
          </div>
        </div>
      </div>

      <div class="tw-p-5">
        <div v-if="!landing_pages.length" class="tw-bg-gray-100 tw-p-5 tw-rounded tw-text-center">
          No landing pages has been added
        </div>
        <div v-else class="tw-flex tw-items-center tw-gap-2 tw-flex-wrap">
          <div v-for="(v, index) in landing_pages" :key="v"  class="tw-border tw-border-solid tw-border-gray-200 tw-rounded tw-px-4 tw-py-1 tw-flex tw-items-center tw-gap-4">
            <a :href="v.meta_value" target="_blank" class=" tw-uppercase ">
                <span class="tw-text-sm">LP Link {{ index + 1 }}</span>
              </a>
              <div class="tw-flex tw-items-center tw-gap-2">
                <a :href="v.meta_value" target="_blank" class="tw-flex tw-items-center tw-p-1">
                  <icon icon="quill:link-out" class="tw-text-xl tw-text-gray-500" />
                </a>
                <button @click="deleteLandingPageLink(v.meta_value)" class="tw-flex tw-items-center tw-p-1">
                  <icon icon="flowbite:close-outline" class="tw-text-xl tw-text-gray-500" />
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:tw-col-span-5"></div>
    <div
      class="md:tw-col-span-7 tw-col-span-12 tw-border tw-border-gray-400 tw-bg-white tw-w-full tw-overflow-hidden tw-rounded-md"
    >
      <div class="tw-bg-gray-700 tw-border-b tw-border-solid tw-p-2">
        <h1 class="tw-font-semibold tw-text-white">Video links</h1>
      </div>

      <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-p-5">
        <div class="tw-col-span-2 tw-flex tw-items-center tw-gap-2">
          <div class="tw-flex-1">
            <label
              class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
              >Add Video Link</label
            >
            <div class="tw-flex tw-items-center tw-h-[42px] tw-gap-2">
              <input
                type="text"
                v-model="video"
                class="tw-bg-gray-50 tw-border tw-flex-1 tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                placeholder="https://www..."
                required
              />

              <button
                @click="handleVideoAdd"
                class="tw-bg-gray-800 tw-text-white tw-p-1 tw-h-full tw-flex tw-items-center tw-justify-center tw-aspect-square tw-rounded-lg"
              >
                <icon
                  icon="pepicons-pop:plus"
                  class="tw-text-white tw-text-xl"
                />
              </button>
            </div>
            <label
              v-if="false"
              class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
              >{{ "" }}</label
            >
          </div>
        </div>
      </div>

      <div class="tw-p-5">
        <div v-if="!videos.length" class="tw-bg-gray-100 tw-p-5 tw-rounded tw-text-center">
          No videos has been added
        </div>
        <div v-else class="tw-flex tw-items-center tw-gap-2 tw-flex-wrap">
          <div v-for="(v, index) in videos" :key="v"  class="tw-border tw-border-solid tw-border-gray-200 tw-rounded tw-px-4 tw-py-1 tw-flex tw-items-center tw-gap-4">
            <a :href="v.meta_value" target="_blank" class=" tw-uppercase ">
                <span class="tw-text-sm">Video Link {{ index + 1 }}</span>
              </a>
              <div class="tw-flex tw-items-center tw-gap-2">
                <a :href="v.meta_value" target="_blank" class="tw-flex tw-items-center tw-p-1">
                  <icon icon="quill:link-out" class="tw-text-xl tw-text-gray-500" />
                </a>
                <button @click="deleteVideoLink(v.meta_value)" class="tw-flex tw-items-center tw-p-1">
                  <icon icon="flowbite:close-outline" class="tw-text-xl tw-text-gray-500" />
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';

const product = inject('product');
const errors = inject('errors');
errors

const video = ref('')
const videos = computed(() => product.value.metadata.filter(m => m.meta_key == 'video_link'))

const landing_page = ref('')
const landing_pages = computed(() => product.value.metadata.filter(m => m.meta_key == 'landing_page_link'))

const handleVideoAdd = () => {
  const metadata = {
    meta_key: "video_link",
    meta_value: video.value
  }

  product.value.metadata.push(metadata);
  video.value = "";
}

const deleteLandingPageLink = link => {
  product.value.metadata = product.value.metadata.filter(m => !(m.meta_key == 'landing_page_link' && m.meta_value == link));
}

const deleteVideoLink = link => {
  product.value.metadata = product.value.metadata.filter(m => !(m.meta_key == 'video_link' && m.meta_value == link));
}


const handleLandingPageAdd = () => {
  const metadata = {
    meta_key: "landing_page_link",
    meta_value: landing_page.value
  }

  product.value.metadata.push(metadata);
  landing_page.value = "";
}
</script>

<style></style>
