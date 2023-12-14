<template>
    <div class="tw-px-2 tw-py-2 tw-text-sm tw-whitespace-nowrap">
    <div v-click-outside="handleClickOutside" class="tw-relative tw-inline-block tw-text-left ">
        <div>
            <button 
                @click="visible = !visible" type="button" 
                :class="[selected.style]"
                class="tw-inline-flex tw-w-[120px] tw-truncate tw-relative tw-items-center tw-gap-x-1.5 tw-rounded-md  tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-900 tw-shadow-none hover:tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <p class="tw-w-full tw-mx-auto tw-text-center tw-truncate tw-text-gray-500 tw-px-2" :class="[selected.style]">{{ selected.name }}</p>
                <div>
                    
                    <!-- <svg v-if="!isLoading" class="-tw-mr-1 tw-h-5 tw-w-5 tw-text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg> -->

                    <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="#4ade80" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg>
                </div>
            </button>
            <p v-if="!!errors.status" class="tw-text-xs tw-mt-2 tw-max-w-[150px] tw-text-red-400 tw-whitespace-normal">
                {{ errors.status }}
            </p>
        </div>

        <popup-new :visible="visible" @cancel="visible = false">
            <div class="tw-w-full tw-max-w-[200px] tw-mx-auto tw-p-2">
                <div class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                    <h1
                        class="tw-text-sm tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-2">
                        Select a status
                    </h1>
                    <div class="tw-bg-white tw-divide-y">
                        <button @click="setStatus(s)" v-for="s in statuses" :key="s.value" :class="[s.text]" class="hover:tw-bg-gray-100 tw-border-solid tw-justify-start tw-items-center tw-w-full tw-text-start tw-flex tw-gap-2 tw-px-4 tw-py-2 tw-text-sm" role="menuitem">
                            <span>
                                {{ s.name }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </popup-new>

        <!-- <v-slide-y-transition>

            <div 
                v-if="visible"
                class="tw-absolute tw-left-0 tw-z-10 tw-mt-2 tw-w-[120px] tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="tw-py-1" role="none">
                    <button v-for="s in statuses" :key="s.value" :class="[s.text]" class="hover:tw-bg-gray-100 tw-justify-center tw-items-center tw-w-full tw-text-start tw-flex tw-gap-2 tw-px-4 tw-py-2 tw-text-sm" role="menuitem">
                        <span>
                            {{ s.name }}
                        </span>
                    </button>
                </div>
            </div>
        </v-slide-y-transition> -->
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue';
import { statuses } from '@/config/supply-requests'

const props = defineProps(['item'])
const visible = ref(true);
const loading = ref(false);
const errors = reactive({})
const selected = ref(statuses[0]);

const handleClickOutside = () => {
    if(visible.value) {
        visible.value = false;
    }
}

const setStatus = (s) => {
    selected.value = s
}

selected.value = statuses.find(s => s.value == props.item.status);
</script>

<style></style>