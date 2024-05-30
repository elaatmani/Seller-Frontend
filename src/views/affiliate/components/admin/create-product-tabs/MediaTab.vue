<template>
  <div>
    <Teleport to="body">
      <div class="tw-fixed tw-bottom-4 tw-right-3  tw-z-[1000]">
        <button @click="imageFilePicker.click()" class="tw-bg-gray-800 tw-text-white tw-flex tw-items-center tw-gap-2 tw-pr-8 tw-pl-6 tw-py-3 tw-rounded">
          <icon icon="mynaui:upload" class="tw-text-2xl" />
          <span>Upload</span>
        </button>
        <input ref="imageFilePicker" type="file" name="image-input" @change="handleImageUpload" multiple  class="tw-invisible tw-absolute tw-pointer-events-none">
    </div>
    </Teleport>

    <media-preview :files="images" v-model:visible="filePreviewVisible" v-model:index="currentIndex" />

    <div class="tw-grid md:tw-grid-cols-4 lg:tw-grid-cols-4 xl:tw-grid-cols-6 tw-grid-cols-1 tw-gap-4 tw-p-5">
  
  <div v-for="(i, idx) in images" :key="i.name"  class="tw-aspect-square tw-border tw-border-solid tw-border-gray-500  tw-cursor-pointer tw-flex tw-items-center tw-justify-between tw-relative tw-overflow-hidden  tw-group">
    <div class="tw-w-full tw-bg-gray-50 ">
    
      <img @click="showFile(idx)" :src="i.url" class="tw-w-full tw-h-full tw-object-contain group-hover:tw-scale-105 tw-duration-200">
      
      <div :class="[i.showOptions && '!tw-hidden']"  class="tw-p-2 tw-flex tw-items-center tw-justify-between group-hover:tw-translate-y-0 tw-absolute tw-bottom-0 tw-translate-y-full tw-duration-200 tw-w-full tw-h-fit tw-backdrop-blur-sm  tw-bg-black/50 tw-left-0 ">
        <p class="tw-text-sm tw-text-white">{{ i.name }}</p>
        <div class="tw-relative">
          <button @click="i.showOptions = !i.showOptions" class="hover:tw-bg-black/10 tw-rounded tw-duration-200 tw-p-1">
            <icon icon="tabler:dots" class="tw-text-3xl tw-text-white" />
          </button> 
        </div>
      </div>
    </div>
    <transition
        class="tw-duration-200"
        enter-from-class="tw-opacity-0"
        leave-to-class="tw-opacity-0"
        mode="out-in"
    >
      <div v-if="i.showOptions" class="tw-absolute tw-h-full tw-flex tw-items-center tw-justify-center tw-w-full tw-bg-neutral-900/80 tw-backdrop-blur  tw-border tw-border-gray-700  tw-border-solid tw-roundedx tw-top-0 tw-right-0 ">
        <div class="tw-max-w-2/3 tw-p-5 tw-flex tw-flex-col tw-gap-4">
          <button @click="showFile(idx)" class="tw-flex tw-items-center tw-gap-2 tw-text-white hover:tw-text-white tw-duration-200">
            <icon icon="lets-icons:view-fill" class="tw-text-2xl" />
            <span class="tw-text-lg">View</span>
          </button>
  
          <button class="tw-flex tw-items-center tw-gap-2 tw-text-red-300 hover:tw-text-red-500 tw-duration-200">
            <icon icon="mdi:trash-can-empty" class="tw-text-2xl" />
            <span class="tw-text-lg">Delete</span>
          </button>
        </div>
  
        <button @click="i.showOptions = !i.showOptions" class="hover:tw-bg-black/10 tw-rounded tw-absolute tw-top-2 tw-right-2 tw-duration-200 tw-p-1">
          <icon icon="jam:close" class="tw-text-3xl tw-text-white" />
        </button> 
      </div>
    </transition>
  </div>
  
  </div>
  </div>
</template>

<script setup>
import MediaPreview from '@/components/MediaPreview.vue';
import { ref } from 'vue';

const imageFilePicker = ref(null)
const filePreviewVisible = ref(false)
const currentIndex = ref(0);

const images = ref([
  {
    name: "image1.png",
    type: "image/",
    url: "https://cdn.codpartner.com/storage/images/products/thumbnail_1638207761WhatsApp20Image202021101220at20124810203.webp"
  },
  {
    name: "image2.png",
    type: "image/",
    url: "https://s.alicdn.com/@sc04/kf/H24d921361b5f477b8d927775da5a0d53S.jpg"
  },
  {
    name: "image3.png",
    type: "image/",
    url: "https://s.alicdn.com/@sc04/kf/H3201ff74ee354b7a93d6ed5d8ebc1bd3z.jpg"
  },
])


const handleImageUpload = (event) => {
  const files = event.target.files;
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = () => {
      images.value.push({
        name: file.name,
        url: reader.result,
        file: file,
        type: file.type,
      });
    };
    reader.readAsDataURL(file);
  }
};

const showFile = index => {
  currentIndex.value = index;
  filePreviewVisible.value = true;
}
</script>
<style>
</style>
