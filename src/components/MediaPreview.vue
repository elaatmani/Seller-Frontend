<template>
  <popup-new
    z-index="100000"
    :visible="props.visible"
    :closeable="true"
    @cancel="closePreview"
  >
    <button
      @click="closePreview"
      class="hover:tw-bg-black/10 tw-rounded tw-absolute tw-top-2 tw-right-2 tw-duration-200 tw-p-1"
    >
      <icon icon="jam:close" class="tw-text-3xl tw-text-white" />
    </button>
    <div class="tw-p-4">
      <div v-if="props.files.length > 0" class="tw-mb-4">
        <div class="tw-flex tw-justify-between tw-items-center">
          <button
            @click="prevFile"
            :disabled="props.index === 0"
            class="tw-px-2 tw-py-1 tw-rounded tw-bg-gray-200 tw-text-gray-700 tw-disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-6 tw-w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div>
            <img
              v-if="props.files[props.index].type.startsWith('image/')"
              :src="props.files[props.index].url"
              :alt="props.files[props.index].name"
              class="tw-max-w-full tw-h-auto tw-max-h-[calc(100vh-200px)]"
            />
            <video
              v-else-if="props.files[props.index].type.startsWith('video/')"
              :src="props.files[props.index].url"
              controls
              class="tw-max-w-full tw-h-auto"
            ></video>
            <div v-else>
              {{ props.files[props.index].name }} ({{
                props.files[props.index].type
              }})
            </div>
          </div>
          <button
            @click="nextFile"
            :disabled="props.index === props.files.length - 1"
            class="tw-px-2 tw-py-1 tw-rounded tw-bg-gray-200 tw-text-gray-700 tw-disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-6 tw-w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </popup-new>
</template>

<script setup>
import {  defineProps, defineEmits } from "vue";
import PopupNew from "@/components/PopupNew.vue";

const props = defineProps({
  files: {
    type: Array,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:visible", "update:index"]);


const prevFile = () => {
  if (props.index > 0) {
    emit("update:index", props.index - 1);
  }
};

const nextFile = () => {
  if (props.index < props.files.length - 1) {
    emit("update:index", props.index + 1);
  }
};


const closePreview = () => {
  emit("update:visible", false);
};
</script>
