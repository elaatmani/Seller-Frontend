<template>
  <div class="tw-border tw-border-solid tw-shadow-sm tw-rounded tw-p-5">
        <div class="tw-flex tw-items-center tw-gap-2">
            <div class="tw-flex tw-items-center tw-gap-2">
                <icon icon="ph:bank-duotone" class="tw-text-3xl tw-text-gray-600" />
                <h1 class="tw-text-xl tw-font-bold">Bank Transfer</h1>
            </div>
            <div v-if="data && data.is_preferred == 1" class="tw-flex tw-items-center tw-gap-1 tw-bg-teal-100 tw-rounded tw-pr-2 tw-pl-1 tw-py-0.5">
                <icon icon="uil:check" class="tw-text-xl tw-text-teal-500" />
                <span class="tw-text-teal-500 tw-text-sm tw-capitalize">Preferred</span>
            </div>
        </div>
        <p class="tw-text-gray-500 tw-mt-2">Withdraw funds directly to your bank account.</p>
        <div class="tw-flex tw-justify-end tw-gap-2 tw-mt-2">

            <button
                v-if="exists && false"
                class="tw-py-2 tw-px-4 tw-flex tw-items-center tw-gap-2 tw-border-rose-200  tw-rounded tw-text-sm tw-bg-rose-100 tw-border tw-border-solid tw-border-tansparent hover:tw-border-rose-300 dark:tw-border-neutral-900 dark:hover:tw-border-rose-300 hover:tw-bg-rose-200/50 dark:hover:tw-bg-rose-200/50 tw-duration-300 tw-text-rose-800"
            >
                <icon icon="solar:trash-bin-trash-bold-duotone" class="tw-text-rose-500 tw-text-2xl" />
                <span class="tw-text-rose-800 tw-font-semibold">Remove</span>
            </button>

            <button
            @click="visible = true"
                class="tw-py-2 tw-px-4 tw-flex tw-items-center tw-gap-2  tw-rounded tw-text-sm tw-bg-gray-100 tw-border tw-border-solid tw-border-tansparent hover:tw-border-gray-300 dark:tw-border-neutral-900 dark:hover:tw-border-gray-300 hover:tw-bg-gray-200/50 dark:hover:tw-bg-gray-200/50 tw-duration-300 tw-text-gray-800"
            >
            <template v-if="!exists">
                <icon icon="ph:gear-six-duotone" class="tw-text-gray-500 tw-text-2xl" />
                <span class="tw-text-gray-800 tw-font-semibold">Setup</span>
            </template>
            <template v-else>
                <icon icon="lets-icons:edit-duotone-line" class="tw-text-gray-500 tw-text-2xl" />
                <span class="tw-text-gray-800 tw-font-semibold">Modify</span>
            </template>
            </button>
        </div>

        <popup-new :visible="visible" @cancel="visible = false" :closeable="false">
            <div class="tw-w-full tw-max-w-[700px] tw-mx-auto tw-p-2">
                <div
                    class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                    <h1
                        class="tw-text-lg tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-4">
                        Bank Details
                    </h1>


                    <div class="tw-p-5 tw-space-y-4">
                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Bank Name</label>
                            <input v-model="form.bank_name" @input="errors.bank_name = null" type="text"
                                :class="[errors.bank_name && '!tw-border-red-400']"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Enter bank name" required />
                            <label v-if="errors.bank_name"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                                    errors.bank_name }}</label>
                        </div>

                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Account Holder Name</label>
                            <input v-model="form.account_holder_name" @input="errors.account_holder_name = null" type="text"
                                :class="[errors.account_holder_name && '!tw-border-red-400']"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Enter account holder's name" required />
                            <label v-if="errors.account_holder_name"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                                    errors.account_holder_name }}</label>
                        </div>

                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">RIB</label>
                            <input v-model="form.rib" @input="errors.rib = null" type="text"
                                :class="[errors.rib && '!tw-border-red-400']"
                                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                                placeholder="Enter your bank account RIB" required />
                            <label v-if="errors.rib"
                                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{
                                    errors.rib }}</label>
                        </div>

                        <div>
                            <label
                                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Set as Preferred</label>

                            <button @click="isPreferred = !isPreferred" :disabled="loading" class="tw-w-[56px] tw-rounded-md tw-bg-gray-100 tw-p-[3px]">
                                <span :class="[isPreferred && 'tw-translate-x-full']" class="tw-h-[25px] tw-w-[25px] tw-duration-200 tw-bg-white tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-flex tw-items-center tw-justify-center tw-relative">
                                    <icon v-if="!isPreferred" class="tw-absolute tw-duration-200 tw-text-lg tw-text-yellow-500" icon="iconamoon:close-duotone" />
                                    <icon v-if="isPreferred" class="tw-absolute tw-duration-200 tw-text-lg tw-text-emerald-500" icon="mingcute:check-2-fill" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        class="tw-flex tw-justify-end tw-items-center tw-p-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-100 tw-border-t tw-border-solid">
                        <button @click="visible = false" :disabled="loading"
                            class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                            Close
                        </button>

                        <button
                            :disabled="loading"
                            @click="() => exists ? update() : setup()"
                            class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
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
import { ref, defineProps, defineEmits } from 'vue';
import WithdrawalMethods from '@/api/WithdrawalMethod';
import { useAlert } from '@/composables/useAlert';

const visible = ref(false);
const loading = ref(false);
const exists = ref(false);
const props = defineProps(['withdrawalMethods']);
const emit = defineEmits(['update'])
const form = ref({ rib: '', account_holder_name: '', bank_name: '' });
const errors = ref({});
const isPreferred = ref(false);
const data = ref({});

const getFormData = () => {
    data.value = props.withdrawalMethods.find(w => w.type == 'bank_transfer');
    if(data.value) {
        exists.value = true;
        isPreferred.value = data.value.is_preferred == 1; 
        console.log(isPreferred.value)
        console.log(data.value.is_preferred == 1)
        form.value = {...data.value.metadata}
    }
}
getFormData();


const update = async () => {
    if(!isFormValid()) {
        return false;
    }

    const payload = {
        type: 'bank_transfer',
        metadata: form.value,
        is_preferred: isPreferred.value
    }
    loading.value = true;
    await WithdrawalMethods.update(data.value.id, payload)
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                emit('update', res.data.withdrawal_methods)
                useAlert('Method updated successfully!')
                visible.value = false;
            }
        },
        err => {
            console.log(err)
            useAlert('Something went wrong', 'danger')
        }
    )
    loading.value = false;
}

const setup = async () => {
    if(!isFormValid()) {
        return false;
    }

    const payload = {
        type: 'bank_transfer',
        metadata: form.value,
        is_preferred: isPreferred.value
    }

    loading.value = true;
    await WithdrawalMethods.setup(payload)
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                emit('update', res.data.withdrawal_methods)
                useAlert('Method updated successfully!')
                visible.value = false;
            }
        },
        err => {
            console.log(err)
            useAlert('Something went wrong', 'danger')
        }
    )
    loading.value = false
}

const isFormValid = () => {
    let isValid = true;

    if(!form.value.rib) {
        isValid = false;
        errors.value.rib = 'RIB is required';
    }

    if(!form.value.account_holder_name) {
        isValid = false;
        errors.value.account_holder_name = 'Account holder\'s name is required';
    }

    if(!form.value.bank_name) {
        isValid = false;
        errors.value.bank_name = 'Bank\'s name is required';
    }

    return isValid;
}


</script>

<style>

</style>