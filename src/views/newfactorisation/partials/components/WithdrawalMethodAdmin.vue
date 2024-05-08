<template>
    <div class="tw-px-4 tw-mx-auto">

            <button @click="visible = !visible" class="tw-mx-auto tw-rounded tw-flex tw-justify-between tw-items-center tw-gap-2 tw-overflow-hidden tw-border tw-border-solid tw-p-2 tw-py-1 tw-duration-200 hover:tw-shadow-sm tw-shadow-black/10">

                <div v-if="!factorisation.withdrawal_method" class="tw-flex tw-items-center tw-gap-2">
                    <!-- <icon icon="material-symbols:unknown-med-sharp" class="tw-text-xl tw-text-gray-500"/> -->
                    <h1 class="tw-text-sm tw-font-bold">Not Specified</h1>
                </div>
                
                <template v-else>
                    <div v-if="factorisation.withdrawal_method.type == 'bank_transfer'" class="tw-flex tw-items-center tw-gap-2">
                        <icon icon="ph:bank-duotone" class="tw-text-xl tw-text-gray-600" />
                        <h1 class="tw-text-sm tw-font-bold">Bank Transfer</h1>
                    </div>
    
                    <div v-if="factorisation.withdrawal_method.type == 'binance'" class="tw-flex tw-items-center tw-gap-2">
                        <icon icon="simple-icons:binance" class="tw-text-xl tw-text-[#F3BA2F]"/>
                        <h1 class="tw-text-sm tw-font-bold">Binance</h1>
                    </div>
                </template>

            </button>

            <popup-new v-if="factorisation.withdrawal_method" :visible="visible" :closeable="false" @cancel="visible = false">
                <div class="tw-w-full tw-max-w-[700px] tw-mx-auto tw-p-2">
                    <div
                    class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                        <h1
                            class="tw-text-lg tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-4">
                            Withdrawal method details
                        </h1>
                        <div v-if="factorisation.withdrawal_method.type == 'bank_transfer'" class="tw-p-5 tw-space-y-4">
                            <div>
                                <label
                                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Bank Name</label>
                                <input :value="factorisation.withdrawal_method.metadata.bank_name" type="text" readonly
                                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                    required />
                            </div>
    
                            <div>
                                <label
                                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Account Holder Name</label>
                                <input :value="factorisation.withdrawal_method.metadata.account_holder_name" type="text" readonly
                                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                    required />
                            </div>
    
                            <div>
                                <label
                                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">RIB</label>
                                <input :value="factorisation.withdrawal_method.metadata.rib" type="text" readonly
                                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                    required />
                            </div>
    
                        </div>

                        <div v-if="factorisation.withdrawal_method.type == 'binance'" class="tw-p-5 tw-space-y-4">
                            <div>
                                <label
                                    class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Binance ID</label>
                                <input :value="factorisation.withdrawal_method.metadata.binance_id" type="text" readonly
                                    class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                    required />
                            </div>
    
                        </div>
    
                        <div
                            class="tw-flex tw-justify-end tw-items-center tw-p-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-100 tw-border-t tw-border-solid">
                            <button @click="visible = false"
                                class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                                Close
                            </button>
    
                        </div>
                    </div>

                </div>
            </popup-new>
    </div>
</template>

<script setup>

import { inject, ref, defineProps, toRef } from 'vue'

// const isLoading = ref(false);
const visible = ref(false);
const props = defineProps(['factorisation']);
const factorisation = toRef(props, 'factorisation');

const withdrawal_methods = inject('withdrawal_methods');
const is_withdrawal_methods_fetched = inject('is_withdrawal_methods_fetched');
withdrawal_methods
is_withdrawal_methods_fetched

</script>

<style>

</style>