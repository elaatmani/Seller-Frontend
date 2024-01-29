<template>
    <div>
        <div class="tw-p-3 tw-border-b tw-border-solid tw-border-neutral-200 tw-text-sm">
            <p><span class="tw-font-bold">Request No:</span> {{ route.params.id }}</p>
            <p><span class="tw-font-bold">Requested at:</span> {{ moment(sourcing.created_at).format("YYYY-MM-DD HH:mm:ss") }}</p>
        </div>
        <div class="tw-p-5">
            <div class="tw-grid tw-grid-cols-5">
                <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-[100px]">
                    <div 
                    :class="[true ? 'tw-bg-orange-500' : 'tw-bg-neutral-200']"
                    class="tw-h-1 tw-w-full "></div>
                    <div 
                    :class="[true ? 'tw-bg-orange-500 tw-text-white' : 'tw-bg-neutral-200 tw-text-neutral-700']"
                    class="lg:tw-h-[50px] lg:tw-w-[50px] md:tw-h-[30px] md:tw-w-[30px] tw-h-[40px] tw-w-[40px] tw-rounded-full tw-z-10 tw-aspect-square tw-absolute  tw-flex tw-items-center tw-justify-center">
                        <icon icon="solar:document-add-bold" class="lg:tw-text-2xl tw-text-xl"/>
                    </div>
                </div>

                <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-[100px]">
                    <div 
                    :class="[false ? 'tw-bg-orange-500' : 'tw-bg-neutral-200']"
                    class="tw-h-1 tw-w-full "></div>
                    <div 
                    :class="[false ? 'tw-bg-orange-500 tw-text-white' : 'tw-bg-neutral-200 tw-text-neutral-700']"
                    class="lg:tw-h-[50px] lg:tw-w-[50px] md:tw-h-[30px] md:tw-w-[30px] tw-h-[40px] tw-w-[40px] tw-rounded-full tw-z-10 tw-aspect-square tw-absolute  tw-flex tw-items-center tw-justify-center">
                        <icon icon="solar:settings-bold" class="lg:tw-text-2xl tw-text-xl"/>
                    </div>
                </div>

                <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-[100px]">
                    <div 
                    :class="[false ? 'tw-bg-orange-500' : 'tw-bg-neutral-200']"
                    class="tw-h-1 tw-w-full "></div>
                    <div 
                    :class="[false ? 'tw-bg-orange-500 tw-text-white' : 'tw-bg-neutral-200 tw-text-neutral-700']"
                    class="lg:tw-h-[50px] lg:tw-w-[50px] md:tw-h-[30px] md:tw-w-[30px] tw-h-[40px] tw-w-[40px] tw-rounded-full tw-z-10 tw-aspect-square tw-absolute  tw-flex tw-items-center tw-justify-center">
                        <icon icon="solar:box-minimalistic-bold" class="lg:tw-text-2xl tw-text-xl"/>
                    </div>
                </div>

                <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-[100px]">
                    <div
                    :class="[false ? 'tw-bg-orange-500' : 'tw-bg-neutral-200']"
                    class="tw-h-1 tw-w-full "></div>
                    <div 
                    :class="[false ? 'tw-bg-orange-500 tw-text-white' : 'tw-bg-neutral-200 tw-text-neutral-700']"
                    class="lg:tw-h-[50px] lg:tw-w-[50px] md:tw-h-[30px] md:tw-w-[30px] tw-h-[40px] tw-w-[40px] tw-rounded-full tw-z-10 tw-aspect-square tw-absolute  tw-flex tw-items-center tw-justify-center">
                        <icon icon="solar:routing-2-bold" class="lg:tw-text-2xl tw-text-xl"/>
                    </div>
                </div>

                <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-[100px]">
                    <div 
                    :class="[false ? 'tw-bg-orange-500' : 'tw-bg-neutral-200']"
                    class="tw-h-1 tw-w-full "></div>
                    <div 
                    :class="[false ? 'tw-bg-orange-500 tw-text-white' : 'tw-bg-neutral-200 tw-text-neutral-700']"
                    class="lg:tw-h-[50px] lg:tw-w-[50px] md:tw-h-[30px] md:tw-w-[30px] tw-h-[40px] tw-w-[40px] tw-rounded-full tw-z-10 tw-aspect-square tw-absolute  tw-flex tw-items-center tw-justify-center">
                        <icon icon="solar:garage-bold" class="lg:tw-text-2xl tw-text-xl"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { defineProps, toRef } from 'vue';
import moment from 'moment'

const route = useRoute();
const props = defineProps(['sourcing']);
const sourcing = toRef(props, 'sourcing');

</script>

<style>

</style>