<template>
    <div>
        <div class="tw-flex tw-items-center tw-justify-between tw-p-2 tw-border-b tw-border-solid tw-border-gray-200">
            <span>Paid</span>
            <button :disabled="loading" @click="update" class="tw-w-[56px] tw-rounded-md tw-bg-gray-100 tw-p-[3px]">
                <span :class="[paid && 'tw-translate-x-full']" class="tw-h-[25px] tw-w-[25px] tw-duration-200 tw-bg-white tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-flex tw-items-center tw-justify-center tw-relative">
                    <icon :class="[(!paid && !loading) && '!tw-opacity-100']" class="tw-absolute tw-opacity-0 tw-duration-200 tw-text-lg tw-text-yellow-500" icon="mdi:clock-time-two-outline" />
                    <icon :class="[(paid && !loading) && '!tw-opacity-100']" class="tw-absolute tw-opacity-0 tw-duration-200 tw-text-lg tw-text-emerald-500" icon="mingcute:check-2-fill" />
                    <icon :class="[loading && '!tw-opacity-100']" class="tw-absolute tw-opacity-0 tw-duration-200 tw-text-lg tw-text-orange-500" icon="eos-icons:three-dots-loading" />
                </span>
            </button>
        </div>
        <div class="tw-p-5">
            <ul class="tw-space-y-4">
                <li class="tw-flex tw-items-center tw-justify-between">
                    <span>Destination Country:</span>
                    <span class="tw-font-black tw-text-neutral-800 tw-capitalize">{{ sourcing.destination_country }}</span>
                </li>

                <li class="tw-flex tw-items-center tw-justify-between">
                    <span>Shipping Method:</span>
                    <span v-if="sourcing.shipping_method == 'air-freight'" class="tw-font-black tw-text-neutral-800">Air freight</span>
                    <span v-if="sourcing.shipping_method == 'ocean-freight'" class="tw-font-black tw-text-neutral-800">Ocean freight</span>
                </li>

                <li class="tw-flex tw-items-center tw-justify-between">
                    <span>Quantity:</span>
                    <span class="tw-font-black tw-text-neutral-800">{{ sourcing.estimated_quantity }}</span>
                </li>

                <li class="tw-flex tw-items-center tw-justify-between">
                    <span>Unit Price:</span>
                    <span class="tw-font-black tw-text-neutral-800">{{ sourcing.cost_per_unit }} {{ currency }}</span>
                </li>

                <li class="tw-flex tw-items-center tw-justify-between tw-">
                    <span>Additional Fees:</span>
                    <span class="tw-font-black tw-text-neutral-800">{{ sourcing.additional_fees }} {{ currency }}</span>
                </li>

                <li class="tw-border-b tw-border-solid tw-border-neutral-200">
                </li>

                <li class="tw-flex tw-items-center tw-justify-between">
                    <span>Total:</span>
                    <span class="tw-font-black tw-text-neutral-800">{{ sourcing.total_cost }} {{ currency }}</span>
                </li>
            </ul>
        </div>
        <div class="tw-space-y-2 tw-px-5 tw-pb-5">
            <button :disabled="false" @click="visible = true"
                class="tw-py-2 tw-px-7 tw-gap-2 tw-w-full justify-center tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
                <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                    :class="[false && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                    <icon icon="clarity:edit-solid" class="tw-text-lg tw-text-white" />
                <span>Edit</span>
            </button>
            <SourcingRequestCancel v-if="false" />
        </div>

        <SourcingRequestPricingEdit :sourcing="sourcing" v-model:visible="visible" />
    </div>
</template>

<script setup>
// import { useAlert } from '@/composables/useAlert';
import { currency } from '@/config/config';
import SourcingRequestPricingEdit from './SourcingRequestPricingEdit';
import SourcingRequestCancel from './../common/show/SourcingRequestCancel';
import { ref, defineProps, toRef, inject } from 'vue';
import Sourcing from '@/api/Sourcing';

const props = defineProps(['sourcing']);
const sourcing = toRef(props, 'sourcing');
const sourcingOptions = inject('sourcing')
const paid = ref(false);
const visible = ref(false);
const loading = ref(false);


paid.value = props.sourcing.is_paid == 1;

const update = async () => {
    loading.value = true;
    paid.value = !paid.value;
    const now = (new Date()).toISOString().slice(0, 19).replace('T', ' ')
    await Sourcing.update(sourcing.value.id, {...props.sourcing, is_paid: paid.value ? 1 : 0, paid_at: paid.value ? now : null })
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                sourcingOptions.updateSourcing(res.data.sourcing);
                paid.value = res.data.sourcing.is_paid;
            }
        },
        err => {
            console.log(err)
            paid.value = props.sourcing.is_paid == 1;
        }
    );
    loading.value = false;
}
</script>

<style></style>