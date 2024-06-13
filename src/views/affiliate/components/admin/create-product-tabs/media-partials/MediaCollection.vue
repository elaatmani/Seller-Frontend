<template>
    <Teleport to="body">
      <div class="tw-fixed tw-bottom-4 tw-right-3 tw-z-[1000]">
        <input
          ref="imageFilePicker"
          type="file"
          name="image-input"
          @change="handleImageUpload"
          :multiple="props.multiple"
          class="tw-invisible tw-absolute tw-pointer-events-none"
        />
      </div>
    </Teleport>

    <media-preview
      :files="files"
      v-model:visible="filePreviewVisible"
      v-model:index="currentIndex"
    />

  <div
    class="tw-px-5 tw-mt-5 tw-flex tw-items-center tw-gap-5 tw-justify-between"
  >
    <h1
      class="tw-text-lg tw-font-medium tw-pl-5 tw-py-1 tw-border-l-2 tw-border-solid tw-border-orange-400"
    >
      {{ props.label }}
    </h1>

    <button
      v-if="props.multiple || (!props.multiple && !files.length)"
      @click="imageFilePicker.click()"
      class="tw-bg-gray-200 tw-flex tw-items-center tw-gap-2 tw-pr-6 tw-pl-4 tw-py-1 tw-rounded tw-text-gray-700 tw-border tw-border-solid tw-duration-200 hover:tw-border-gray-700"
    >
      <icon icon="mynaui:upload" class="tw-text-xl" />
      <span>Upload</span>
    </button>
  </div>

  <div class="tw-p-5">
    <div
      v-if="!files.length"
      class="tw-p-4 tw-bg-gray-100 tw-rounded tw-text-center tw-border tw-border-solid"
    >
      <p class="tw-font-medium tw-text-lg tw-text-gray-600">
        No media has been added yet
      </p>
    </div>

    <div v-else class="tw-grid md:tw-grid-cols-4 lg:tw-grid-cols-4 xl:tw-grid-cols-6 tw-grid-cols-1 tw-gap-4 ">
      <template  v-for="(f, index) in files" :key="f.id" >
        <ImageCard :file="f" @update="handleFileUpdate" v-if="f.category == 'image'" @show-preview="showFile(index)" />
        <VideoCard :file="f" @update="handleFileUpdate" v-if="f.category == 'video'" @show-preview="showFile(index)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import ImageCard from './ImageCard'
import VideoCard from './VideoCard'
import MediaPreview from "@/components/MediaPreview.vue";
import { useAlert } from "@/composables/useAlert";
import { ref, inject, computed, defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: 'Media'
  },
  collection: {
    type: String,
    default: 'normal'
  },
  multiple: {
    type: Boolean,
    default: true
  }
});
const product = inject('product');
const imageFilePicker = ref(null);
const filePreviewVisible = ref(false);  
const currentIndex = ref(0);

const files = computed(() => product.value.media.filter(m => m.collection_name == props.collection));

const handleImageUpload = (event) => {
  const fs = event.target.files;
  for (const file of fs) {
    const fileType = file.type.startsWith('image/') ? 'image' : (file.type.startsWith('video/') ? 'video' : 'other');

    if(fileType == 'other') {
      useAlert('Only images and videos are supported', 'warning')
      return false;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      product.value.media.push({
        id: Date.now(),
        name: file.name,
        url: reader.result,
        file: file,
        type: file.type,
        category: fileType,
        is_new: true,
        collection_name: props.collection
      });
    };
    reader.readAsDataURL(file);
  }
};

const showFile = (index) => {
  currentIndex.value = index;
  filePreviewVisible.value = true;
};

const handleFileUpdate = (oldfile, newfile) => {
  const index = product.value.media.indexOf(oldfile);
  product.value.media[index] = newfile;
};

</script>

<style></style>
