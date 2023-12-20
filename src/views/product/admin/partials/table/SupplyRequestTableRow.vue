<template>
    <tr>
        <td class="tw-px-4 tw-py-2">
            {{ item.id }}
        </td>
        <td class="tw-px-4 tw-py-2 tw-truncate">
            <p class="tw-max-w-[200px] tw-truncate">{{ item.seller.firstname }} {{ item.seller.lastname }}</p>
        </td>
        <td class="tw-px-4 tw-py-2 tw-truncate">
            <p class="tw-max-w-[200px] tw-truncate">{{ item.product.name }}</p>
        </td>
        <td class="tw-px-4 tw-py-2 tw-uppercase tw-font-semibold">
            <div class="tw-flex tw-items-center tw-gap-2 tw-text-sm">
                <div v-if="!!item.product_variation.color" class="tw-px-1 tw-rounded-md tw-bg-orange-500 tw-text-white">{{ item.product_variation.color }}</div>
                <div v-if="!!item.product_variation.size" class="tw-px-1 tw-rounded-md tw-bg-green-500 tw-text-white">{{ item.product_variation.size  }}</div>
            </div>
        </td>
        <td class="tw-px-4 tw-py-2 tw-truncate">
            <p class="tw-max-w-[200px] tw-truncate">{{ item.quantity }}</p>
        </td>
        <td class="tw-px-4 tw-py-2 tw-truncate">
            <div>
                <SupplyRequestStatus :item="item" />
            </div>
            <!-- <p class="tw-max-w-[200px] tw-w-fit tw-truncate tw-px-2 tw-py-1 tw-rounded tw-font-semibold tw-text-xs tw-uppercase" :class="[status.style]">{{ item.status }}</p> -->
        </td>
        <td class="tw-px-4 tw-py-2">
            <p class="tw-text-sm tw-whitespace-nowrap">{{ moment(item.created_at).format("DD[-]MM[-]YYYY") }}</p>
        </td>
        <td>
            <SupplyRequestTableActions :item="item" />
        </td>
    </tr>
</template>
<script setup>
import SupplyRequestTableActions from './SupplyRequestTableActions';
import SupplyRequestStatus from './SupplyRequestStatus';
import moment from 'moment';
import { defineProps, toRef } from 'vue'

const props = defineProps(['item']);
const item = toRef(props, 'item');

// const status = computed(() => statuses.find(s => s.value == item.value.status));

</script>