<template>
    <div>
        <div class="tw-flex tw-items-center tw-gap-2">
            <button
                v-for="t in tabs" :key="t.key"
                @click="tab = t"
                :class="[t == tab && 'tw-bg-orange-400 !tw-text-white']"
                class="tw-bg-white tw-text-gray-600 tw-flex tw-items-center tw-duration-200 tw-gap-2 tw-px-4 tw-py-2 tw-rounded-t tw-border tw-border-b-0 tw-border-solid tw-border-gray-200">
                <icon :icon="t.icon" class="tw-text-xl" />
                <span>{{ t.name }}</span>
            </button>
        </div>

        <div class="tw-bg-white tw-w-full tw-border tw-border-solid tw-border-gray-200">
            <div class="tw-mt-4 tw-overflow-hidden">
                <keep-alive>
                    <transition class="tw-duration-200" enter-from-class="tw-opacity-0 tw-translate-x-[10px]"
                        leave-to-class="tw-opacity-0 -tw-translate-x-[10px]" mode="out-in">
                        <component :is="tab.component" v-model:product="product" />
                    </transition>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script setup>
import { shallowRef, inject } from 'vue';
import AdvertisingTab from './AdvertisingTab';
import OverviewTab from './OverviewTab';
import LandingPageTab from './LandingPageTab';

const tabs = [
  { key: 'overview-tab', 'component': OverviewTab, name: 'Overview', icon: 'clarity:help-info-solid'},
  { key: 'advertising-tab', 'component': AdvertisingTab, name: 'Advertising Data', icon: 'ic:sharp-ads-click'},
  { key: 'landing-page-tab', 'component': LandingPageTab, name: 'Landing Pages', icon: 'iconoir:multiple-pages-empty'},
] 
const product = inject('product');
const tab = shallowRef(tabs[0])


</script>

<style></style>