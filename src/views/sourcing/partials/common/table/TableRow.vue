<template>
  <tr>
    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ item.id }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ moment(item.created_at).format('YYYY-MM-DD HH:mm:ss') }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ item.product_name }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
        {{ item.estimated_quantity }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-capitalize">
        {{ item.destination_country }}
    </td>

    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-capitalize">
        <div class="tw-px-4">
            <div :class="status.class" class="tw-rounded tw-px-4 tw-py-1 tw-text-center">
                {{ status.name }}
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
import { quotation_statuses } from '@/config/sourcing'
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
const status = ref(quotation_statuses.find((s) => s.value == item.value.quotation_status));


</script>

<style>

</style>