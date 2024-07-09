<template>
    <div class="tw-flex tw-flex-col tw-gap-4">
        <div class="tw-h-[550px] tw-w-full  tw-bg-gray-50 tw-border tw-border-solid tw-rounded tw-overflow-hidden">
            <img class="tw-h-full tw-w-full tw-object-contain tw-drop-shadow" :src="active.url">
        </div>
        <div class="tw-relative">
            <swiper-container
            ref="swiper-container"
            :slides-per-view="5.5"
            :space-between="8"
        >
            <swiper-slide v-for="img in product.media.filter(m => ['thumbnail', 'normal'].includes(m.collection_name))" :key="img" :navigation="true">
                <button @click="active = img" :class="[active.url == img.url && '!tw-border-orange-500']" class="tw-aspect-square tw-border-2 tw-border-solid tw-border-transparent tw-rounded tw-overflow-hidden tw-cursor-pointer">
                    <img :src="img.url" class="tw-w-full tw-h-full tw-object-cover">
                </button>
            </swiper-slide>
            </swiper-container>
        <div v-if="false" class="tw-absolute tw-bottom-1/2 tw-z-10 tw-translate-y-1/2 tw-right-0 tw-h-full tw-w-[100px] tw-bg-gradient-to-r tw-from-transparent tw-flex tw-items-center tw-justify-end tw-p-0 tw-via-white/80 tw-to-white">
            <button>
                <icon icon="solar:alt-arrow-right-linear" class="tw-text-5xl tw-text-orange-400" />
            </button>
        </div>
        <div v-if="false" class="tw-absolute tw-bottom-1/2 tw-z-10 tw-translate-y-1/2 tw-left-0 tw-h-full tw-w-[100px] tw-bg-gradient-to-r tw-from-white tw-flex tw-items-center tw-p-0 tw-via-white/80 tw-to-transparent">
            <button>
                <icon icon="solar:alt-arrow-left-linear" class="tw-text-5xl tw-text-orange-400" />
            </button>
        </div>
        </div>

    </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { register } from 'swiper/element/bundle';
register();

const product = inject('product');
const active = ref(product.value.thumbnail);
</script>

<style></style>