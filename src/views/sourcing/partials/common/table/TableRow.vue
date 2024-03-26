<template>
  <tr>
    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ item.id }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ moment(item.created_at).format('YYYY-MM-DD HH:mm:ss') }}
    </td>

    <td v-if="user.role == 'admin'" class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        <p class="tw-w-[100px] tw-truncate">
            {{ item.seller_name }}
        </p>
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        <p class="tw-w-[200px] tw-truncate">
            {{ item.product_name }}
        </p>
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ item.estimated_quantity }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-capitalize">
        {{ item.destination_country }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-capitalize">
        <div>
            <div v-if="item.is_paid" class="tw-flex tw-items-center tw-justify-center tw-gap-2">
                <icon icon="mingcute:check-2-fill" class="tw-text-xl tw-text-emerald-500" />
            </div>
            <div v-else class="tw-flex tw-items-center tw-justify-center tw-gap-2">
                <icon icon="mdi:clock-time-two-outline" class="tw-text-xl tw-text-yellow-500" />
            </div>
        </div>
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-capitalize">
            <div class="tw-px-4">
                <div :class="quotation_status.class" class="tw-rounded tw-px-4 tw-py-1 tw-text-center">
                    {{ quotation_status.name }}
                </div>
            </div>
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-capitalize">
            <div class="tw-px-4">
                <div :class="sourcing_status.class" class="tw-rounded tw-px-4 tw-py-1 tw-text-center">
                    {{ sourcing_status.name }}
                </div>
            </div>
    </td>


    <td :admin="user">
        <div>
            <TableActions :item="item" />
        </div>
    </td>
  </tr>
</template>

<script setup>
import { computed, ref, defineProps, toRef } from 'vue';
import moment from 'moment';
import { useStore } from 'vuex';
import { quotation_statuses, sourcing_statuses } from '@/config/sourcing'
import TableActions from './actions/TableActions';

const store = useStore();
const user = computed(() => store.getters['user/user']);
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});
const item = toRef(props, 'item');
const quotation_status = ref(quotation_statuses.find((s) => s.value == item.value.quotation_status));
const sourcing_status = ref(sourcing_statuses.find((s) => s.value == item.value.sourcing_status));


</script>

<style>

</style>