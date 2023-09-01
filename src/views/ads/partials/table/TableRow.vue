<template>
    <tr>
      <td
        class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap"
      >
        <div>
          <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white">{{ item.id }}</h2>
        </div>
      </td>
      <td
        class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap"
      >
        <div>
          <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2">
            <!-- {{ getDate(item.created_at) }} -->
            <p>{{ moment(item.created_at).format("DD[/]MM[/]YY") }}</p>
            <p v-if="false">{{ moment(item.created_at).format("HH[:]mm[:]ss") }}</p>
          </h2>
        </div>
      </td>
      <td
        class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap"
      >
        <div>
          <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-font-[cairo]">
            {{ item.source }}
          </h2>
        </div>
      </td>
      <td
        class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap"
      >
        <div>
          <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-font-[cairo]">
            {{ item.amount }}
          </h2>
        </div>
      </td>
 
      <td
      class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap"
    >
      <div>
        <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-font-[cairo]">
          {{ item.product_id }}
        </h2>
      </div>
    </td>
      <td class="tw-px-4 tw-py-2 tw-text-sm tw-whitespace-nowrap">
        <div>
          <TableActions @update="newItem => $emit('update', newItem)" :item="item" />
        </div>
      </td>
    </tr>
</template>

<script>
import moment from 'moment';
// import { confirmationsFollowup as confirmations, deliveryStatus } from '@/config/orders';
import TableActions from '@/views/followup/partials/table/TableActions'

export default {
  components: {TableActions},

  props: {
    item: {
      required: true,
    }
  },

  data() {
    return {
      moment: moment
    }
  },

  computed: {
  

  },

  methods: {

  }
};
</script>

<style>
</style>