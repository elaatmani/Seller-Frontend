<template>
    <div class="tw-px-4">
        

            <button @click="!factorisation.paid ? visible = !visible : ''" :disabled="factorisation.paid" class=" tw-rounded tw-flex tw-justify-between tw-items-center tw-gap-2 tw-overflow-hidden">

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

                <div v-if="!factorisation.paid" class="tw-h-full tw-w-[28px] tw-aspect-square tw-border tw-border-solid tw-shadow tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-7 tw-duration-200 tw-justify-center hover:tw-bg-gray-100 tw-rounded tw-p-0.5">
                    <icon icon="uil:exchange" class="tw-text-xl " />
                </div>
            </button>

            <popup-new :visible="visible" :closeable="false" @cancel="visible = false">
                <div class="tw-w-full tw-max-w-[700px] tw-mx-auto tw-p-2">
                    <div
                    class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                        <h1
                            class="tw-text-lg tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-4">
                            Switch payment method
                        </h1>

                        <div v-if="isWithdrawalMethodsFetched && withdrawalMethods.length" class="tw-p-5 tw-grid md:tw-grid-cols-2 tw-grid-cols-1  tw-gap-5">
                            <button @click="handleChange(wm)" v-for="wm in withdrawalMethods" :key="wm.id" :class="selected == wm.id && ['!tw-border-orange-300 tw-ring tw-ring-orange-300']" class="tw-border tw-flex tw-items-center tw-justify-center tw-border-solid tw-rounded tw-shadow tw-bg-white tw-p-5">
                                <div v-if="wm.type == 'bank_transfer'" class="tw-">
                                    <div class="tw-flex tw-items-center tw-gap-3">
                                        <icon icon="ph:bank-duotone" class="tw-text-3xl tw-text-gray-600" />
                                        <h1 class="tw-text-lg tw-font-bold">Bank Transfer</h1>
                                    </div>
                                </div>

                                <div v-if="wm.type == 'binance'">
                                    <div class="tw-flex tw-items-center tw-gap-3">
                                        <icon icon="simple-icons:binance" class="tw-text-3xl tw-text-[#F3BA2F]"/>
                                        <h1 class="tw-text-lg tw-font-bold">Binance</h1>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div v-else class="tw-p-5 tw-text-center">
                            <p>You haven't added any withdrawal method yet. Click <router-link :to="{name: 'settings.seller.withdrawal-methods'}" class="tw-text-orange-500 hover:tw-underline">here</router-link> to add a withdrawal method and manage your funds</p>
                        </div>


                        <div
                            class="tw-flex tw-justify-end tw-items-center tw-p-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-100 tw-border-t tw-border-solid">
                            <button @click="visible = false" :disabled="loading"
                                class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                                Close
                            </button>

                            <button
                                :disabled="loading"
                                @click="handleSwitchMethod" class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
                                <v-icon size="small"
                                    class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                                    :class="[loading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </popup-new>
    </div>
</template>

<script setup>

import { ref, defineProps, defineEmits, toRef } from 'vue'
import Factorisation from '@/api/Factorisation'
import { useAlert } from '@/composables/useAlert';

const loading = ref(false);
const visible = ref(false);
const emit = defineEmits(['update'])
const props = defineProps(['factorisation', 'withdrawalMethods', 'isWithdrawalMethodsFetched']);
const selected = ref(null)
const factorisation = toRef(props, 'factorisation')
const withdrawalMethods = toRef(props, 'withdrawalMethods')
const isWithdrawalMethodsFetched = toRef(props, 'isWithdrawalMethodsFetched')
isWithdrawalMethodsFetched

selected.value = factorisation.value.withdrawal_method_id

const handleSwitchMethod = async () => {
    if(factorisation.value.withdrawal_method_id == selected.value) return;

    loading.value = true;
    await Factorisation.updateMethod(factorisation.value.id, selected.value)
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                const newFactorisation = res.data.data.factorisation
                emit('update', newFactorisation)
                useAlert('Withdrawal method has been updated')
                visible.value = false;
            }
        },
        err => {
            if(err?.response?.data?.code == 'NOT_ALLOWED') {
                useAlert(err?.response?.data?.message, 'error')
            } else {
                useAlert('Something went wrong!', 'error')
            }
        }
    );
    loading.value = false;
}

const handleChange = (method) => {
    selected.value = method.id
}

</script>

<style>

</style>