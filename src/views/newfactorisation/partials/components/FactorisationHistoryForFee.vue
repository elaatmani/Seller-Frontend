<template>
    <div>
        <span
            class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-3 tw-h-3 tw-bg-neutral-100 tw-rounded-full -tw-left-1.5 tw-translate-y-1.5 tw-ring-8 tw-ring-white dark:tw-ring-gray-900 dark:tw-bg-blue-900">
        </span>

        <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
            <p class="tw-text-gray-500 tw-flex tw-items-center tw-gap-2 tw-mb-2">

                <span class="tw-text-black tw-font-semibold tw-capitalize ">{{ history.action_by }}</span>
                <span class="tw-uppercase tw-text-xs">*{{ event.new_value }} FEE*</span>
            </p>

            <time
                class="tw-mb-1 tw-text-xs tw-font-normal tw-text-gray-400 sm:tw-order-last sm:tw-mb-0 tw-whitespace-nowrap"
                @mouseenter="history.isHovering = true" @mouseleave="history.isHovering = false">{{ history.isHovering ?
                    moment(history.created_at).format("YYYY-MM-DD HH:mm:ss") : moment(history.created_at).fromNow() }} </time>
        </div>
        <div
            class="tw-items-start tw-justify-between tw-p-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm sm:tw-flex dark:tw-bg-gray-700 dark:tw-border-gray-600 tw-w-full">
            <div v-if="event.new_value == 'updated'" class="tw-flex tw-flex-col tw-gap-4 tw-w-full">
                <template v-for="f in history.fields.filter(k => !to_ignore.includes(k.field))" :key="f.field">
                    <div v-if="![].includes(f.field)"
                        class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-300">Changed <span
                            class="tw-font-semibold tw-text-blue-600 dark:tw-text-blue-500 hover:tw-underline">{{
                            field_names[f.field] ?? f.field }}</span> from <span
                            class="tw-bg-gray-100 tw-text-gray-800 tw-text-xs tw-font-normal tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded dark:tw-bg-rose-100 dark:tw-text-rose-500">{{
                                f.field in field_values ? field_values[f.field][f.old_value] : f.old_value }}</span>to <span
                            class="tw-bg-emerald-100 tw-text-emerald-800 tw-text-xs tw-font-normal tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded dark:tw-bg-green-100 dark:tw-text-green-500">{{
                                f.field in field_values ? field_values[f.field][f.new_value] : f.new_value }}</span></div>

                </template>
            </div>

            <div v-if="event.new_value == 'created'" class="tw-flex tw-flex-col tw-gap-4 tw-w-full">
                    <div
                        class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-300">Added <span
                            class="tw-font-semibold tw-text-emerald-600 dark:tw-text-emerald-500 hover:tw-underline">{{ history.fields.find(f => f.field == 'factorisation_fee:feeprice')?.new_value }}{{ currency }}</span> fee for <span
                            class="tw-bg-gray-100 tw-text-gray-800 tw-text-xs tw-font-normal tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded dark:tw-bg-cyan-100 dark:tw-text-cyan-500">{{
                              history.fields.find(f => f.field == 'factorisation_fee:feename')?.new_value   }}</span></div>
            </div>

            <div v-if="event.new_value == 'deleted'" class="tw-flex tw-flex-col tw-gap-4 tw-w-full">
                    <div
                        class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-300">Deleted <span
                            class="tw-font-semibold tw-text-emerald-600 dark:tw-text-emerald-500 hover:tw-underline">{{ fee.new_value.feeprice }}{{ currency }}</span> fee for <span
                            class="tw-bg-gray-100 tw-text-gray-800 tw-text-xs tw-font-normal tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded dark:tw-bg-cyan-100 dark:tw-text-cyan-500">{{
                              fee.new_value.feename   }}</span></div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRef, ref } from 'vue';
import moment from 'moment'
import { currency } from '@/config/config'

const to_ignore = [ 'event', 'factorisation_fee:factorisation_id', 'factorisation_fee:id' ];

const props = defineProps(['history']);
const history = toRef(props, 'history');
const event = ref(history.value.fields.find(h => h.field == 'event'))
const fee = ref(history.value.fields.find(f => f.field == 'factorisation_fee:fee'));
console.log(history.value)
console.log(fee.value)
const field_names = {
    'factorisation_fee:feeprice': 'Amount'
  }
  
  const field_values = {
      shipping_method: {
          'air-freight': 'Air Freight',
          'ocean-freight': 'Ocean Freight'
      },
      is_paid: {
          1: 'YES',
          0: 'NO'
      }
  }

</script>

<style></style>