<template>
    <div class="tw-relative tw-rounded tw-overflow-hidden tw-group tw-border tw-border-solid tw-shadow-sm tw-bg-white">

        <ProductCardActions :product="product" />


        <router-link :to="{ name: 'affiliate.show', params: { id: product.id } }"
            class="tw-h-[400px] tw-block tw-aspect-square tw-w-full tw-overflow-hidden tw-relative tw-border-b tw-border-solid tw-border-gray-200">
            <img :src="product.thumbnail"
                class="tw-w-full tw-h-full tw-aspect-square tw-object-cover group-hover:tw-scale-105 tw-duration-200 tw-relative tw-z-10">
                <div class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-gray-200 tw-animate-pulse"></div>
            <div
                class="tw-absolute tw-bottom-2 tw-right-2 tw-min-w-[80px] tw-min-h-[40px] tw-p-2 tw-gap-2 tw-rounded tw-py-0 tw-flex tw-items-center tw-justify-center tw-bg-white tw-shadow tw-shadow-orange-400 tw-z-10">
                <icon icon="hugeicons:sale-tag-02" class="tw-text-2xl tw-text-orange-500" />
                <span class="tw-text-lg tw-font-semibold">{{ currency }}{{ product.selling_price }}</span>
            </div>

            <div class="tw-flex tw-items-center tw-gap-2 tw-absolute tw-bottom-2 tw-left-2 tw-z-20">
                <div v-if="product.media.tiktok_ads" title="TikTok videos exists" class="tw-border tw-border-solid tw-bg-white tw-border-gray-200 tw-p-1 tw-rounded tw-flex tw-items-center tw-gap-2">
                    <icon icon="logos:tiktok-icon" class="tw-text-lg" />
                </div>

                <div v-if="product.media.facebook_ads" title="Facebook videos exists" class="tw-border tw-border-solid tw-bg-white tw-border-gray-200 tw-p-1 tw-rounded tw-flex tw-items-center tw-gap-2">
                    <icon icon="basil:facebook-solid" class="tw-text-lg tw-text-sky-600" />
                </div>
            </div>
        </router-link>

        <div class="tw-p-4 tw-pb-2  tw-min-h-[20px]">
            <div class="tw-relative">
                <router-link :to="{ name: 'affiliate.show', params: { id: product.id } }" class="tw-text-lg tw-font-medium tw-max-w-full tw-truncate tw-block">{{ product.name }}</router-link>
                <div class="tw-flex tw-items-center tw-justify-between">
                    <p :key="product.category" class="tw-text-sm  tw-text-orange-500 tw-rounded tw-w-fit tw-my-1">{{
                    product.category }}</p>

                    
                </div>
                
                <div v-if="false">
                    <div v-if="product.tags.length" class="tw-flex tw-gap-2 tw-flex-wrap">
                        <p v-for="tag in product.tags" :key="tag"
                            class="tw-px-1 tw-text-xs tw-bg-gray-100 tw-rounded tw-w-fit tw-my-1">{{
                                tag }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="false" class=" tw-p-2 tw-flex">

            <router-link :to="{ name: 'affiliate.show', params: { id: product.id } }"
                class="tw-px-4 tw-rounded tw-bg-orange-50 tw-flex tw-items-center tw-gap-2 tw-justify-center tw-h-[40px] tw-flex-1 tw-border tw-border-solid tw-border-orange-400">
                <span class="tw-text-orange-500">View</span>
                <icon icon="solar:arrow-right-outline" class="tw-text-2xl tw-text-orange-500" />
            </router-link>
            
        </div>

    </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue';
import { currency } from '@/config/config';
import ProductCardActions from './ProductCardActions';

const props = defineProps(['product']);
const product = toRef(props, 'product');
product
</script>

<style></style>