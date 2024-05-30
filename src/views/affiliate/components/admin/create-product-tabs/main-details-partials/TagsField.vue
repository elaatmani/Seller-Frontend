<template>
  <div>
    <div>
      <label
        class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
      >
        Tags</label
      >
      <div class="tw-flex tw-items-center tw-h-[42px]">
        <input
        @keyup.enter="handleAddTag"
          type="text"
          v-model="tag"
          class="tw-bg-gray-50 tw-border tw-border-solid tw-flex-1 tw-rounded-r-none focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
          placeholder="Gadgets..."
          required
        />

        <button
            @click="handleAddTag"
          class="tw-h-full tw-aspect-square tw-bg-gray-800 tw-rounded-lg tw-rounded-l-none tw-flex tw-items-center tw-justify-center"
        >
          <icon icon="pepicons-pop:plus" class="tw-text-white tw-text-xl" />
        </button>
      </div>
      <label
        v-if="false"
        class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
        >{{ "" }}</label
      >
    </div>

    <div
      v-if="!tags.length"
      class="tw-w-full tw-mt-5 tw-p-3 tw-rounded tw-bg-gray-100 tw-border tw-border-solid tw-border-gray-200 tw-text-center"
    >
      <p class="tw-text-gray-500">No tags has been seleted</p>
    </div>

    <div
      v-if="tags.length"
      class="tw-flex tw-gap-2 tw-flex-wrap tw-w-full tw-mt-5 tw-p-2 tw-rounded tw-bg-gray-100 tw-border tw-border-solid tw-border-gray-200 tw-text-center"
    >
      <transition-group
            enter-from-class="tw-opacity-0"
            leave-to-class="tw-opacity-0 "
      >
        <button @click="handleDeleteTag(t)" v-for="t in tags" :key="t" class="tw-duration-200 tw-group tw-flex tw-items-center tw-justify-center tw-relative tw-overflow-hidden tw-py-1 tw-px-2 tw-border-solid tw-bg-gray-800 tw-text-gray-100 tw-rounded tw-border tw-border-gray-500">
            <span>{{ t }}</span>
            <div class="tw-opacity-0 group-hover:tw-opacity-100 tw-absolute tw-backdrop-blur-md tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-duration-200">
                <icon icon="mdi:trash-can-empty" class="tw-text-xl tw-text-white" />
            </div>
        </button>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([]);
const tag = ref('');

const handleAddTag = () => {
    if(!tag.value || tags.value.includes(tag.value)) return false;
    tags.value.push(tag.value)
    tag.value = '';
}

const handleDeleteTag = (tag) => {
    tags.value = tags.value.filter(t => t != tag)
}
</script>

<style></style>
