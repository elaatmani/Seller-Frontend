<template>
    <div :key="key" class="py-5 px-2 tw-border tw-bg-white tw-min-h-[calc(100dvh-85px)] tw-w-full tw-rounded-md tw-mb-5">
        <section class="tw-px-3">
            <div class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
                <div class="tw-flex tw-items-center tw-gap-x-3">
                    <h2 class="tw-text-lg tw-font-medium tw-text-gray-800 darkx:tw-text-white">
                        Withdrawal Methods
                    </h2>
                </div>
            </div>

            <div class="tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5 tw-mt-5">

                <template v-if="loading">
                    <div v-for="i in 2" :key="i" class="tw-h-[155px] tw-w-full tw-rounded tw-bg-gray-50 tw-border tw-border-solid tw-border-gray-100 tw-animate-pulse tw-shadow-sm">

                    </div>
                </template>

                <template v-if="!loading">
                    <BankTransferMethod :withdrawal-methods="withdrawalMethods" @update="handleUpdate" />
                    <BinanceMethod :withdrawal-methods="withdrawalMethods" @update="handleUpdate" />
                </template>

            </div>
        </section>
    </div>
</template>

<script setup>
import BankTransferMethod from './withdrawal/BankTransferMethod';
import BinanceMethod from './withdrawal/BinanceMethod';
import WithdrawalMethods from '@/api/WithdrawalMethod';
import { ref } from 'vue';

const loading = ref(false);
const withdrawalMethods = ref({})
const key = ref(0)

const getMethods = async () => {
    loading.value = true;
    
    await WithdrawalMethods.all()
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                withdrawalMethods.value = res.data.withdrawal_methods
            }
            console.log(res);
        },
        err => {
            console.log(err)
        }
    );
    loading.value = false
}

getMethods();

const handleUpdate = (wms) => {
    withdrawalMethods.value = wms;
    key.value++
}

</script>

<style></style>