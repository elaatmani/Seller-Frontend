<template>
  <div>
    <popup-new :visible="visible" :closeable="false" @cancel="cancel">
      <div
        class="tw-mx-auto tw-w-[95%] md:tw-max-w-[800px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg">
        <div
          class="tw-p-4 tw-text-lg tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50">
          Create Credit
        </div>

        <div class="tw-bg-white tw-p-4">
          <div class="tw-grid tw-gap-6 tw-gap-y-5 tw-grid-cols-1 md:tw-grid-cols-2">
            <div class="tw-col-span-2 md:tw-col-span-1">
              <label
                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">seller</label>
                <select
                  @change="e => items.seller_id = e.target.value"
                  :value="items.seller_id"
                  class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5"
                >
                  <option :value="d.id" class="tw-capitalize" v-for="d in sellers" :key="d.id">
                    {{ d.firstname }} {{ d.lastname }}
                  </option>
                </select>
              <label v-if="errors.seller_id"
                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{ errors.seller
                }}</label>
            </div>

            <div class="tw-col-span-2 md:tw-col-span-1">
              <label
                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Amount</label>
              <input v-model="items.amount" @input="errors.amount = null"
                :class="[errors.amount && '!tw-border-red-400']" type="text"
                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                required />

              <label v-if="errors.amount"
                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{ errors.amount
                }}</label>
            </div>

            <div class="tw-col-span-2 md:tw-col-span-1">
              <label
                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">credited_at</label>
              <input v-model="items.credited_at" @input="errors.credited_at = null"
                :class="[errors.credited_at && '!tw-border-red-400']" type="date"
                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                required />

              <label v-if="errors.credited_at"
                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{ errors.credited_at
                }}</label>
            </div>
            <div class="tw-col-span-2 md:tw-col-span-1">
              <label
                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">paid_at</label>
              <input v-model="items.paid_at" @input="errors.paid_at = null"
                :class="[errors.paid_at && '!tw-border-red-400']" type="date"
                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                required />

              <label v-if="errors.paid_at"
                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white">{{ errors.paid_at
                }}</label>
            </div>
        
          </div>
        </div>

        <div
          class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-50 tw-border-t tw-border-solid">
          <button @click="cancel"
            class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
            Cancel
          </button>
          <button @click="handleCreate" :disabled="isLoading"
            class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
            <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
              :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
            <span>Create</span>
          </button>
        </div>
      </div>
    </popup-new>
  </div>
</template>

<script>
  import { validate } from "../lib/validate";
  import { create } from "../lib/create";

export default {
    props: {
      filters: {
            required: true,
        },
      visible: {
        required: true,
      },
    },

    data() {
      return {
        isLoading: false,

        items: {
          seller_id: null,
          amount: null,
          credited_at:null,
          paid_at:null,
        },

        errors: {
          seller_id: null,
          credited_at:null,
          paid_at:null,
          amount: null,
        },
      };
    },

    computed: {
      users() {
        return this.$store.getters['user/users']
      },
      sellers() {
            return this.fetched ? this.users.filter(u => u.role.name == 'seller') : []
        },
      fetched() {
        return this.$store.getters['user/fetched']
      },
    },

    methods: {
      handleCreate() {
        const validated = validate(this, this.items);
        if (!validated) return false;

        create(this, this.items);        
      },

      cancel() {
        if (this.isLoading) return false;
        this.$emit("update:visible", false);
      },
    },
  };
</script>

<style></style>