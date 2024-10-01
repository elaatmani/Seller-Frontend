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
            {{ seller ? seller.firstname + ' ' + seller.lastname : 'Loading...' }}
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
          <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2">
            <p>{{ moment(item.credited_at).format("DD[/]MM[/]YY") }}</p>
            <p v-if="false">{{ moment(item.credited_at).format("HH[:]mm[:]ss") }}</p>
          </h2>
        </div>
      </td>
      <td
        class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap"
      >
        <div>
          <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2">
            <p v-if="item.paid_at">{{ moment(item.paid_at).format("DD[/]MM[/]YY") }}</p>
            <p v-if="false">{{ moment(item.paid_at).format("HH[:]mm[:]ss") }}</p>
          </h2>
        </div>
      </td>
    
     
      <td class="tw-px-4 tw-py-2 tw-text-sm tw-whitespace-nowrap">
        <div>
          <TableActions @update=" newItem => $emit('update', newItem)"  @delete="handleDelete" :item="item" />
        </div>
      </td>
    </tr>
</template>

<script>
import moment from 'moment';
import TableActions from '@/views/settings/credits/partials/table/TableActions'

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
    
    users() {
      return this.$store.getters['user/users'];
    },
    seller() {
      return this.users.find(u => u.id === this.item.seller_id);
    },
  },
  methods: {
    handleDelete() {
      this.$emit('delete', this.item);
    }
  }
};
</script>

<style>
</style>