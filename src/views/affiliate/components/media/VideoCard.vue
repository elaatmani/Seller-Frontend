<template>
    <div>
        <div
            class="tw-aspect-square tw-group tw-border tw-border-solid tw-border-gray-500 tw-cursor-pointer tw-flex tw-items-center tw-justify-between tw-relative tw-overflow-hidden tw-group">
            <div class="tw-w-full tw-h-full tw-bg-gray-50">
                <div v-if="uploading" :style="{ width: progress + '%' }"
                    class="tw-absolute tw-top-0 tw-h-[5px] tw-w-full tw-bg-orange-500 tw-duration-200"></div>

                <video ref="video" :controls="isVideoPlaying" preload="false" :src="file.url"
                    class="tw-w-full tw-h-full tw-object-contain tw-duration-200"></video>

                <button @click="handlePlayVideo" v-if="!isVideoPlaying"
                    class="tw-absolute tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center group-hover:tw-scale-110 tw-duration-200 tw-bottom-1/2 tw-right-1/2 tw-translate-x-1/2 tw-translate-y-1/2 tw-p-5">
                    <icon icon="solar:play-circle-bold" class="tw-text-7xl tw-drop-shadow-md tw-text-white"></icon>
                </button>

                <a target="_blank" :download="product.name + '-' + file.id + '.' + getFileExtension(file.url)" :href="file.url"
                            class="hover:tw-bg-black/50 tw-rounded tw-duration-200 tw-p-1 tw-absolute tw-bottom-4 tw-right-4 tw-bg-black/20 tw-backdrop-blur">
                            <icon icon="octicon:download-16" class="tw-text-3xl tw-text-white" />
                        </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, toRef, ref, inject } from "vue";
import TemporaryMedia from "@/api/TemporaryMedia";

const props = defineProps(["file"]);
const emit = defineEmits(["show-preview", "update"]);

const file = toRef(props, "file");

const video = ref(null);
const product = inject('product');
const progress = ref(0);
const uploading = ref(false);
const isVideoPlaying = ref(null);

const handlePlayVideo = () => {
    emit("show-preview");
};

const config = {
    onUploadProgress: progressEvent => {
        progress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        if (progress.value >= 100) {
            uploading.value = false;
        }
    }
}

const storeFile = async () => {
    uploading.value = true;
    return TemporaryMedia.store(file.value.file, file.value.collection_name, config)
        .then(
            r => {
                if (r.data.uuid) {
                    const newfile = { ...file.value, uuid: r.data.uuid };
                    emit("update", file.value, newfile);
                    console.log(newfile)
                }
            },
            e => {
                console.log(e)
            }
        )
}
if (!file.value.uuid && file.value.is_new && !uploading.value) {
    storeFile()
}

function getFileExtension(url) {
  // Use URL constructor to parse the URL
  const parsedUrl = new URL(url);
  // Get the pathname from the parsed URL
  const pathname = parsedUrl.pathname;
  // Extract the file extension using a regular expression
  const extension = pathname.split('.').pop();
  
  // If the last part of the pathname contains a slash, there's no extension
  if (extension.includes('/')) {
    return '';
  }
  
  return extension;
}
</script>

<style></style>