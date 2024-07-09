<template>
  <div>
    <div
      class="tw-aspect-square tw-group tw-border tw-border-solid tw-border-gray-500 tw-cursor-pointer tw-flex tw-items-center tw-justify-between tw-relative tw-overflow-hidden tw-group"
    >
      <div class="tw-w-full tw-h-full tw-bg-gray-50">
        <div v-if="uploading" :style="{width: progress + '%'}" class="tw-absolute tw-top-0 tw-h-[5px] tw-w-full tw-bg-orange-500 tw-duration-200"></div>

        <video
          ref="video"
          :controls="isVideoPlaying"
          preload="false"
          :src="file.url"
          class="tw-w-full tw-h-full tw-object-contain tw-duration-200"
        ></video>

        <button
          @click="handlePlayVideo"
          v-if="!isVideoPlaying"
          class="tw-absolute tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center group-hover:tw-scale-110 tw-duration-200 tw-bottom-1/2 tw-right-1/2 tw-translate-x-1/2 tw-translate-y-1/2 tw-p-5"
        >
          <icon
            icon="solar:play-circle-bold"
            class="tw-text-7xl tw-drop-shadow-md tw-text-white"
          ></icon>
        </button>

        <div
          :class="[file.showOptions && '!tw-hidden']"
          class="tw-p-2 tw-flex tw-items-center tw-justify-between group-hover:tw-translate-y-0 tw-absolute tw-bottom-0 tw-translate-y-full tw-duration-200 tw-w-full tw-h-fit tw-backdrop-blur-sm tw-bg-black/50 tw-left-0"
        >
          <p class="tw-text-sm tw-text-white tw-truncate">{{ file.name }}</p>
          <div class="tw-relative">
            <button
              @click="file.showOptions = !file.showOptions"
              class="hover:tw-bg-black/10 tw-rounded tw-duration-200 tw-p-1"
            >
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
        <div
          v-if="file.showOptions"
          class="tw-absolute tw-h-full tw-flex tw-items-center tw-justify-center tw-w-full tw-bg-neutral-900/80 tw-backdrop-blur tw-border tw-border-gray-700 tw-border-solid tw-roundedx tw-top-0 tw-right-0"
        >
          <div class="tw-max-w-2/3 tw-p-5 tw-flex tw-flex-col tw-gap-4">
            
            <button
            @click="emit('delete')"
              class="tw-flex tw-items-center tw-gap-2 tw-text-red-300 hover:tw-text-red-500 tw-duration-200"
            >
              <icon icon="mdi:trash-can-empty" class="tw-text-xl" />
              <span class="tw-text-lg">Delete</span>
            </button>
          </div>

          <button
            @click="file.showOptions = !file.showOptions"
            class="hover:tw-bg-black/10 tw-rounded tw-absolute tw-top-2 tw-right-2 tw-duration-200 tw-p-1"
          >
            <icon icon="jam:close" class="tw-text-3xl tw-text-white" />
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRef, ref } from "vue";
import TemporaryMedia from "@/api/TemporaryMedia";

const props = defineProps(["file"]);
const emit = defineEmits(["show-preview", "update", "delete"]);

const file = toRef(props, "file");

const video = ref(null);
const progress = ref(0);
const uploading = ref(false);
const isVideoPlaying = ref(null);

const handlePlayVideo = () => {
    emit("show-preview");
};

const config = {
    onUploadProgress: progressEvent => {
        progress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        if(progress.value >= 100) {
            uploading.value = false;
        }
    } 
}

const storeFile = async () => {
    uploading.value = true;
    return TemporaryMedia.store(file.value.file, file.value.collection_name, config)
    .then(
        r => {
            if(r.data.uuid) {
                const newfile = {...file.value, uuid: r.data.uuid};
                emit("update", file.value, newfile);
                console.log(newfile)
            }
        },
        e => {
            console.log(e)
        }
    )
}
if(!file.value.uuid && file.value.is_new && !uploading.value) {
  storeFile()
}
</script>

<style></style>
