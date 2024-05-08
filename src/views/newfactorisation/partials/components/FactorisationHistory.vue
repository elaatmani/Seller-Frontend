<template>
    <popup-new :visible="visible" @cancel="emit('update:visible', false)">
      <div
          class="tw-mx-auto tw-w-[95%] md:tw-max-w-[800px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
        >
          <div
            class="tw-p-4 tw-text-lg tw-relative tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50"
          >
            <span>History</span>
  
              <button @click="emit('update:visible', false)" class="tw-absolute tw-right-3 tw-top-1/2 tw-p-2 tw-rounded-md hover:tw-bg-black/10 tw-duration-200 -tw-translate-y-1/2">
                  <icon icon="ic:round-close" class="tw-text-xl tw-text-neutral-700" />
              </button>
          </div>
  
          <div v-if="fetching" class="tw-h-[250px] tw-flex tw-items-center tw-justify-center  tw-bg-white">
              <loading />
          </div>
  
          <div v-if="!fetching" class="tw-bg-white tw-p-5 tw-pl-8 tw-py-10">
  
              
          <p v-if="!history.length" class="tw-text-neutral-500 tw-text-lg tw-font-semibold tw-text-center">There is no history for this invoice yet.</p>
  
          <ol v-if="history.length" class="tw-relative tw-border-l tw-border-neutral-200 dark:tw-border-gray-700">                  
              <li v-for="h in history" :key="h.id" class="tw-mb-10 tw-mx-6">            
                  <FactorisationHistoryForFee v-if="h.fields.some(f => f.field.includes('factorisation_fee:'))" :history="h" />
                <div v-else>
                    <span class="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-3 tw-h-3 tw-bg-neutral-100 tw-rounded-full -tw-left-1.5 tw-translate-y-1.5 tw-ring-8 tw-ring-white dark:tw-ring-gray-900 dark:tw-bg-blue-900">
                    </span>
    
                    <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
                        <p class="tw-text-gray-500">
                            
                            <span class="tw-text-black tw-font-semibold tw-capitalize tw-mb-2">{{ h.action_by }}</span>
    
                        </p>
    
                        <time class="tw-mb-1 tw-text-xs tw-font-normal tw-text-gray-400 sm:tw-order-last sm:tw-mb-0 tw-whitespace-nowrap" @mouseenter="h.isHovering = true" @mouseleave="h.isHovering = false">{{ h.isHovering ? moment(h.created_at).format("YYYY-MM-DD HH:mm:ss") : moment(h.created_at).fromNow() }} </time>
                    </div>
                    <div class="tw-items-start tw-justify-between tw-p-4 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm sm:tw-flex dark:tw-bg-gray-700 dark:tw-border-gray-600 tw-w-full">
                        <div class="tw-flex tw-flex-col tw-gap-4 tw-w-full">
                            <template v-for="f in h.fields.filter(k => !to_ignore.includes(k.field))" :key="f.field">
                                <div v-if="!['attachement_image', 'withdrawal_method_details', 'orders', 'paid', 'close'].includes(f.field)" class="tw-text-sm tw-font-normal tw-text-gray-500 dark:tw-text-gray-300">Changed <span class="tw-font-semibold tw-text-blue-600 dark:tw-text-blue-500 hover:tw-underline">{{ field_names[f.field] ?? f.field }}</span> from <span class="tw-bg-gray-100 tw-text-gray-800 tw-text-xs tw-font-normal tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded dark:tw-bg-rose-100 dark:tw-text-rose-500">{{ f.field in field_values ? field_values[f.field][f.old_value] : f.old_value }}</span>to <span class="tw-bg-emerald-100 tw-text-emerald-800 tw-text-xs tw-font-normal tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded dark:tw-bg-green-100 dark:tw-text-green-500">{{ f.field in field_values ? field_values[f.field][f.new_value] : f.new_value }}</span></div>
                                
                                
                                <div v-if="f.field == 'attachement_image' && f.new_value" class="tw-w-full">
                                    <div class="tw-items-center tw-justify-between sm:tw-flex">
                                        <div class="tw-text-sm tw-font-normal tw-text-gray-500 lex dark:tw-text-gray-300 tw-mb-2">Uploaded:</div>
                                    </div>
                                    <div class=" tw-mx-auto tw-rounded tw-bg-gray-100 tw-overflow-hidden tw-flex tw-items-center tw-justify-center tw-border tw-border-solid tw-border-neutral-200 tw-relative">
                                        <img class="tw-w-full tw-h-auto tw-max-w-[300px] tw-max-h-[300px] tw-object-contain" :src="$backend(f.new_value.startsWith('/') ? f.new_value.substring(1) : f.new_value)" />
                                    
                                        <div class="tw-absolute tw-bottom-4 tw-right-4 tw-flex tw-items-center tw-gap-2">
                                            <a target="_blank" :href="$backend(f.new_value.startsWith('/') ? f.new_value.substring(1) : f.new_value)" class="tw-px-2 tw-py-1 tw-flex tw-items-center tw-gap-2 tw-rounded tw-bg-green-500 tw-text-white">
                                                <icon icon="carbon:view-filled" class=" tw-text-white tw-text-2xl" />
                                                <span>View</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="f.field == 'paid'" class="tw-w-full">
                                    <div class="tw-items-center tw-justify-between sm:tw-flex">
                                        <div class="tw-text-sm tw-font-normal tw-text-gray-500 lex dark:tw-text-gray-300">Marked this invoice as <span :class="[f.new_value ? 'tw-text-green-600 tw-bg-green-50' : 'tw-text-amber-600 tw-bg-amber-50']" class="tw-px-2 tw-py-0.5">{{ f.new_value ? 'PAID' : 'UNPAID' }}</span></div>
                                    </div>
                                </div>

                                <div v-if="f.field == 'close'" class="tw-w-full">
                                    <div class="tw-items-center tw-justify-between sm:tw-flex">
                                        <div class="tw-text-sm tw-font-normal tw-text-gray-500 lex dark:tw-text-gray-300">Marked this invoice as <span :class="[f.new_value ? 'tw-text-rose-600 tw-bg-rose-50' : 'tw-text-green-600 tw-bg-green-50']" class="tw-px-2 tw-py-0.5">{{ f.new_value ? 'CLOSED' : 'OPEN' }}</span></div>
                                    </div>
                                </div>

                                <div v-if="f.field == 'orders'" class="tw-w-full tw-order-[10]">
                                    <div class="tw-items-center tw-justify-between sm:tw-flex">
                                        <div class="tw-text-sm tw-font-normal tw-text-gray-500 tw-mb-3 dark:tw-text-gray-300">Orders: ({{ f.new_value.length }})</div>
                                        <p v-if="false" class=" tw-font-medium tw-font-[cairo]"> TOTAL: <span class="tw-text-emerald-500">{{ h.fields.find(l => l.field == 'amount_paid')?.new_value ?? 0 }} {{ currency }}</span></p>
                                    </div>
                                    <div class="tw-flex tw-flex-col">
                                        <div class="tw-border-b-0 tw-border tw-border-solid tw-border-neutral-200 tw-bg-neutral-800 tw-text-white tw-grid tw-grid-cols-12 tw-divide-x">
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-text-xs">ID</div>
                                            <div class="tw-col-span-3 tw-py-0.5 tw-px-2 tw-text-xs">CONFIRMATION</div>
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-text-xs">DELIVERY</div>
                                            <div class="tw-col-span-3 tw-py-0.5 tw-px-2 tw-text-xs">DELIVERED AT</div>
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-text-xs">PRICE ({{ currency }})</div>
                                        </div>
                                        <div v-for="o in f.new_value" :key="o.id" class="">
                                            <div class="tw-border tw-border-solid tw-border-neutral-200 tw-grid tw-grid-cols-12 tw-divide-x">
                                                <div class="tw-col-span-2 tw-py-1 tw-px-2 tw-font-bold">{{ o.id }}</div>
                                                <div class="tw-col-span-3 tw-py-1 tw-px-2 ">{{ confirmationsValues[o.confirmation] ?? null }}</div>
                                                <div class="tw-col-span-2 tw-py-1 tw-px-2 ">{{ deliveryValues[o.delivery] }}</div>
                                                <div class="tw-col-span-3 tw-py-1 tw-px-2 tw-text-center">{{ o.delivery_date.split('T')[0] }}</div>
                                                <div class="tw-col-span-2 tw-py-1 tw-px-2  tw-font-medium tw-text-end">{{ o.price }}</div>
                                            </div>
                                        </div>
                                        <div class="tw-text-black tw-grid tw-grid-cols-12">
                                            
                                            <div class="tw-col-span-7 tw-py-0.5 tw-px-2"></div>
                                            <div class="tw-col-span-3 tw-py-0.5 tw-px-2 tw-text-sm tw-text-end">SHIPPING FEES</div>
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-border tw-border-solid tw-border-t-0 tw-border-neutral-200 tw-text-end">{{ h.fields.find( m => m.field == 'total_shipping_fees')?.new_value ?? 0 }}</div>
                                        </div>
                                        <div class="tw-text-black tw-grid tw-grid-cols-12">
                                            
                                            <div class="tw-col-span-7 tw-py-0.5 tw-px-2"></div>
                                            <div class="tw-col-span-3 tw-py-0.5 tw-px-2 tw-text-sm tw-text-end">COD FEES</div>
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-border tw-border-solid tw-border-t-0 tw-border-neutral-200 tw-text-end">{{ h.fields.find( m => m.field == 'total_cod_fees')?.new_value ?? 0 }}</div>
                                        </div>

                                        <div class="tw-text-black tw-grid tw-grid-cols-12">
                                            
                                            <div class="tw-col-span-7 tw-py-0.5 tw-px-2"></div>
                                            <div class="tw-col-span-3 tw-py-0.5 tw-px-2 tw-text-sm tw-text-end">OTHER FEES</div>
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-border tw-border-solid tw-border-t-0 tw-border-neutral-200 tw-text-end">{{ h.fields.find( m => m.field == 'total_other_fees')?.new_value ?? 0 }}</div>
                                        </div>
                                        <div class="tw-text-black tw-grid tw-grid-cols-12">
                                            
                                            <div class="tw-col-span-7 tw-py-0.5 tw-px-2"></div>
                                            <div class="tw-col-span-3 tw-py-0.5 tw-px-2 tw-text-end tw-font-bold tw-text-lg tw-text-emerald-600 ">TOTAL</div>
                                            <div class="tw-col-span-2 tw-py-0.5 tw-px-2 tw-text-lg tw-font-bold tw-text-emerald-600 tw-text-end">{{ currency }}{{ h.fields.find( m => m.field == 'amount_paid')?.new_value ?? 0 }}</div>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="f.field == 'withdrawal_method_details'" class="tw-w-full">
                                    <div class="tw-items-center tw-justify-between sm:tw-flex">
                                        <div class="tw-text-sm tw-font-normal tw-text-gray-500 lex dark:tw-text-gray-300 tw-mb-3">Withdrawal Details:</div>

                                        <div v-if="f.new_value.type == 'bank_transfer'" class="tw-flex tw-items-center tw-gap-2">
                                            <icon icon="ph:bank-duotone" class="tw-text-xl tw-text-gray-600" />
                                            <h1 class="tw-text-sm tw-font-bold">Bank Transfer</h1>
                                        </div>
                        
                                        <div v-if="f.new_value.type == 'binance'" class="tw-flex tw-items-center tw-gap-2">
                                            <icon icon="simple-icons:binance" class="tw-text-xl tw-text-[#F3BA2F]"/>
                                            <h1 class="tw-text-sm tw-font-bold">Binance</h1>
                                        </div>
                                    </div>
                                    <div v-if="f.new_value.type == 'binance'" class="tw-p-3 tw-w-full tw-text-sm tw-italic tw-font-normal tw-text-gray-500 tw-border tw-border-gray-200 tw-rounded-lg tw-bg-gray-50 dark:tw-bg-gray-600 dark:tw-border-gray-500 dark:tw-text-gray-300">{{ f.new_value.metadata.binance_id }}</div>
                                </div>
                            </template>
                        </div>
                    </div>
                  </div>
              </li>
          </ol>
  
  
  
          </div>
  
      </div>
    </popup-new>
  </template>
  
  <script setup>
  import Factorisation from "@/api/Factorisation";
  import FactorisationHistoryForFee from './FactorisationHistoryForFee'
  import { defineProps, toRef, defineEmits, ref, computed } from "vue";
  import { confirmations, deliveryStatus } from '@/config/orders'
  import { currency } from '@/config/config'
  import moment from 'moment'

  const to_ignore = ['commands_number', 'type', 'price', 'paid_at', 'amount_paid', 'close_at', 'total_cod_fees', 'total_shipping_fees', 'total_other_fees'];
//   attachement_image, withdrawal_method_id
  const confirmationsValues = computed(() => confirmations.reduce((obj, item) => {
  obj[item.value] = item.name;
  return obj;
}, {}))

  const deliveryValues = computed(() => deliveryStatus.reduce((obj, item) => {
  obj[item.value] = item.name;
  return obj;
}, {}))
  
  const field_names = {
        'user_id': 'Seller ID',
        'factorisation_id': 'ID',
        'delivery_id': 'Delivery ID',
        'close': 'Close',
        'paid': 'Paid',
        'commands_number': 'Order\'s number',
        'type': 'Type',
        'price': 'Amount',
        'close_at': 'Closed at',
        'paid_at': 'Paid at',
        'comment': 'Comment',
        'note': 'Note',
        'withdrawal_method_id': 'Withdrawal Method ID',
        'attachement_image': 'Attachement',
        'orders': 'Orders',
        'withdrawal_method_details': 'Withdrawal Details'
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
  
  const props = defineProps(['visible', 'factorisation']);
  const emit = defineEmits(['update:visible'])
  const visible = toRef(props, 'visible');
  const factorisation = toRef(props, 'factorisation');
  const fetching = ref(true);
  const history = ref([true]);
  
  const getHistory = async () => {
      fetching.value = true;
      await Factorisation.history(factorisation.value.id)
      .then(
          res => {
              if(res.data.code == 'SUCCESS') {
                  history.value = res.data.data.history;
                  history.value.reverse();
              }
          }
      )
      fetching.value = false;
  }
  
  getHistory();
  </script>
  
  <style>
  
  </style>