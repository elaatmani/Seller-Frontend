<template>
  <tr>
    <td v-if="false" class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white">
          {{ item.id }}
        </h2>
      </div>
    </td>
    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap tw-w-fit">
      <div>
        <PdfFactorisation :item="item"/>
      </div>
    </td>

    <td v-if="$user.role=='admin'"  class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div v-if="item.type == 'delivery'" class="tw-flex tw-items-center tw-gap-2">
        <div title="Delivery" class="tw-text-sm tw-w-[24px] tw-rounded tw-aspect-square tw-bg-cyan-100 tw-text-cyan-500 tw-flex tw-items-center tw-justify-center">
          D
        </div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-font-[cairo]"
        >
        {{ item.delivery.firstname }} {{ item.delivery.lastname }}
        </h2>
      </div>

      <div v-if="item.type == 'seller'" class="tw-flex tw-items-center tw-gap-2">
        <div title="Seller" class="tw-text-sm tw-w-[24px] tw-rounded tw-aspect-square tw-bg-orange-100 tw-text-orange-500 tw-flex tw-items-center tw-justify-center">
          S
        </div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-font-[cairo]"
        >
        {{ item.seller.firstname }} {{ item.seller.lastname }}
        </h2>
      </div>

    </td>

    <!-- <td v-if="$user.role=='admin'"  class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap" >
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-font-[cairo]"
        >
          <span v-if="item.type == 'seller'" 
            >{{ item.seller.firstname }} {{ item.seller.lastname }}</span
          >
          <span v-else>-</span>
        </h2>
      </div>
    </td> -->


    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-text-center tw-font-[cairo]"
        >
          <span v-if="item.type == 'seller'">
            {{ item.seller_order_count }}
          </span>
          <span v-else>
            {{ item.delivery_order_count }}
          </span>
        </h2>
      </div>
    </td>
    <td class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class=" tw-text-emerald-500 tw-text-end tw-font-semibold darkx:tw-text-white tw-font-[cairo]"
        >
          {{currency}}
          <span v-if="item.type == 'seller'">
            {{ item.seller_order_price }}
          </span>
          <span v-else>
            {{ item.delivery_order_price }} 
          </span>

          
        </h2>
      </div>
    </td>

    <td  class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div v-if="item.type == 'seller'">
        <div v-if="$user.role=='seller'">
          <WithdrawalMethodSeller @update="(newItem) => $emit('update', newItem)" :factorisation="item" :withdrawal-methods="withdrawalMethods" :is-withdrawal-methods-fetched="isWithdrawalMethodsFetched" />
        </div>
        <div v-if="$user.role=='admin'">
          <WithdrawalMethodAdmin :factorisation="item" @update="(newItem) => $emit('update', newItem)" />
        </div>
      </div>
    </td>

    <td v-if="$user.role=='seller'" class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <div v-if="!item.close && !item.paid" class="tw-px-4 tw-py-1 tw-rounded tw-bg-blue-100 tw-text-neutral-800 tw-text-sm tw-w-fit">
          Active
        </div>
        <div v-if="item.close && !item.paid" class="tw-px-4 tw-py-1 tw-rounded tw-bg-yellow-100 tw-text-neutral-800 tw-text-sm tw-w-fit">
          Prending
        </div>
        <div v-if="item.close && item.paid" class="tw-px-4 tw-py-1 tw-rounded tw-bg-emerald-100 tw-text-neutral-800 tw-text-sm tw-w-fit">
          Paid
        </div>
      </div>
    </td>

    <td class="tw-px-8 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2"
        >
          <!-- {{ getDate(item.created_at) }} -->
          <span v-if="!!item.close_at">
            <p>{{ moment(item.close_at).format("DD[/]MM[/]YY") }}</p>
            <p v-if="true">
              {{ moment(item.close_at).format("HH[:]mm[:]ss") }}
            </p>
          </span>
          <span v-else> - </span>
        </h2>
      </div>
    </td>
    <td class="tw-px-8 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2"
        >
          <!-- {{ getDate(item.created_at) }} -->
          <span v-if="!!item.paid_at">
            <p>{{ moment(item.paid_at).format("DD[/]MM[/]YY") }}</p>
            <p v-if="true">
              {{ moment(item.paid_at).format("HH[:]mm[:]ss") }}
            </p>
          </span>
          <span v-else> - </span>
        </h2>
      </div>
    </td>
    <td v-if="$user.role=='admin'"  class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <CloseFactorisation :item="item" :key="item.id" @update="f => $emit('update', f)" />
      </div>
    </td>
    <td v-if="$user.role=='admin'"  class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div v-if="item.close">
        <PaidFactorisation :item="item" :key="item.id" @update="f => $emit('update', f)" />
      </div>
    </td>

    <td v-if="false" class="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">
      <div>
        <h2
          class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2"
        >
          <!-- {{ getDate(item.created_at) }} -->
          <p>{{ moment(item.created_at).format("DD[/]MM[/]YY") }}</p>
          <p v-if="false">
            {{ moment(item.created_at).format("HH[:]mm[:]ss") }}
          </p>
        </h2>
      </div>
    </td>
    <td v-if="$user.role=='admin'" class="tw-px-4 tw-py-2 tw-text-sm tw-whitespace-nowrap">
      <div>
        <TableActions
          @update="(newItem) => $emit('update', newItem)"
          :item="item"
        />
      </div>
    </td>
  </tr>
</template>

<script>
import moment from "moment";
import TableActions from "@/views/newfactorisation/partials/table/TableActions";
import CloseFactorisation from "./../components/CloseFactorisation";
import PaidFactorisation from "./../components/PaidFactorisation";
import PdfFactorisation from "./../components/PdfFactorisation";
import WithdrawalMethodSeller from "./../components/WithdrawalMethodSeller";
import WithdrawalMethodAdmin from "./../components/WithdrawalMethodAdmin";
import { currency } from '@/config/config'

export default {
  components: { TableActions, CloseFactorisation, PaidFactorisation , PdfFactorisation, WithdrawalMethodSeller, WithdrawalMethodAdmin },

  props: {
    item: {
      required: true,
    },
    withdrawalMethods: {
      required: true
    },
    isWithdrawalMethodsFetched: {
      required: true
    },
  },

  data() {
    return {
      moment: moment,
      currency: currency
    };
  },

  computed: {},

  methods: {
   
  },
};
</script>

<style></style>
