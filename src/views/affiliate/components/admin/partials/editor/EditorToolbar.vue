<template>
  <div
    class="tw-flex tw-items-center tw-gap-2 tw-p-1 tw-border tw-border-solid tw-border-gray-200 tw-rounded-t tw-border-b-0 tw-bg-gray-100 tw-overflow-auto"
  >
    <!-- <button class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200">B</button> -->

    <button
      @click="editor?.chain().focus().toggleBold().run()"
      :class="[editor?.isActive('bold') && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="solar:text-bold-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleItalic().run()"
      :class="[editor?.isActive('italic') && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="solar:text-italic-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleUnderline().run()"
      :class="[editor?.isActive('underline') && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon
        icon="solar:text-underline-bold"
        class="tw-text-sm "
      />
    </button>
    <button
      @click="editor?.chain().focus().toggleStrike().run()"
      :class="[editor?.isActive('strike') && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="solar:text-cross-bold" class="tw-text-sm " />
    </button>

    <div class="tw-border-l tw-h-4 tw-border-solid tw-border-gray-400"></div>

    <button
      @click="editor?.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="[editor?.isActive('heading', { level: 1 }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:text-h-one-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="[editor?.isActive('heading', { level: 2 }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:text-h-two-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="[editor?.isActive('heading', { level: 3 }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:text-h-three-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 4 }).run()"
      :class="[editor?.isActive('heading', { level: 4 }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:text-h-four-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 5 }).run()"
      :class="[editor?.isActive('heading', { level: 5 }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:text-h-five-bold" class="tw-text-sm " />
    </button>
    <button
      @click="editor?.chain().focus().toggleHeading({ level: 6 }).run()"
      :class="[editor?.isActive('heading', { level: 6 }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:text-h-six-bold" class="tw-text-sm " />
    </button>

    <div class="tw-border-l tw-h-4 tw-border-solid tw-border-gray-400"></div>

    <button
    @click="editor?.chain().focus().setTextAlign('left').run()"
      :class="[editor?.isActive({ textAlign: 'left' }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon
        icon="ph:text-align-left-bold"
        class=" "
      />
    </button>

    <button
      @click="editor?.chain().focus().setTextAlign('center').run()"
      :class="[editor?.isActive({ textAlign: 'center' }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon
        icon="ph:text-align-center-bold"
        class=" "
      />
    </button>

    <button
    @click="editor?.chain().focus().setTextAlign('right').run()"
      :class="[editor?.isActive({ textAlign: 'right' }) && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon
        icon="ph:text-align-right-bold"
        class=" "
      />
    </button>

    <div class="tw-border-l tw-h-4 tw-border-solid tw-border-gray-400"></div>

    <button
    @click="editor?.chain().focus().setImage({ src: 'https://i.ytimg.com/vi/Q2Drpzkqvtc/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIGQoJTAP&rs=AOn4CLAxAb440uL5NioexSLJFaR2mssENA' }).run()"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="hugeicons:image-01" class="tw-text-sm tw-text-gray-500" />
    </button>
    <button
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon
        icon="solar:video-frame-linear"
        class="tw-text-sm tw-text-gray-500"
      />
    </button>
    <button
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:link-bold" class="tw-text-sm tw-text-gray-500" />
    </button>

    <div class="tw-border-l tw-h-4 tw-border-solid tw-border-gray-400"></div>

    <button
      @click="editor?.chain().focus().toggleBulletList().run()"
      :class="[editor?.isActive('bulletList') && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="fluent:text-bullet-list-ltr-20-filled" class="" />
    </button>

    <button
      @click="editor?.chain().focus().toggleOrderedList().run()"
      :class="[editor?.isActive('orderedList') && 'tw-bg-orange-500 tw-border-orange-200 !tw-text-white']"
      class="tw-rounded tw-w-8 tw-h-8 tw-bg-white tw-border tw-border-solid tw-border-gray-200 tw-text-gray-500 tw-flex tw-items-center tw-justify-center"
    >
      <icon icon="ph:list-numbers-light" class="" />
    </button>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue';

const props = defineProps(['editor']);
const editor = toRef(props, 'editor');


</script>

<style></style>
