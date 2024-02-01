<template>
  <div class="py-5 px-2 tw-border tw-bg-white tw-w-full tw-rounded-md tw-mb-5">
    <section class="tw-px-3">
      <div class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
        <div>
          <h2
            class="tw-text-lg tw-font-medium tw-text-gray-800 darkx:tw-text-white"
          >
            Settings
          </h2>

          <p class="tw-mt-1 tw-text-sm tw-text-gray-500 darkx:tw-text-gray-300">
            Cron jobs for invoices.
          </p>
        </div>
      </div>
      <div class="tw-mt-5">
        <div
          class="tw-grid tw-gap-6 tw-gap-y-5 tw-grid-cols-1 md:tw-grid-cols-2"
        >
          <div class="tw-col-span-2 md:tw-col-span-1">
            <label
              class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
              >Interval Time</label
            >
            <div class="tw-relative">
              <select
                v-model="interval_date"
                class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5"
              >
                <option value="" disabled>Select an Interval</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <div
                class="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-px-2 tw-text-gray-700"
              >
                <svg
                  class="tw-fill-current tw-h-4 tw-w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="tw-col-span-2 md:tw-col-span-1">
            <label
              class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
            >
              Cancellation Date Begins</label
            >
            <input
              v-model="cancel_date"
              type="datetime-local"
              class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
              placeholder="123-45-678"
              required
            />
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-end tw-items-center tw-p-4">
        <button
          @click="handleCronJobs"
          :disabled="isLoading"
          class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white"
        >
          <v-icon
            size="small"
            class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
            :class="[isLoading && '!tw-max-w-[50px] !tw-mr-3']"
            >mdi-loading</v-icon
          >
          <span>Save</span>
        </button>
      </div>
    </section>
  </div>
</template>
<script setup>
    import Settings from '@/api/Settings'
    import {ref} from 'vue';

    const isLoading = ref(false);
    const cancel_date = ref(null);
    const interval_date = ref('');


    const handleCronJobs = async () => {
      isLoading.value = true;
      await Settings.create([{name:'e', value:cancel_date.value }, {name:'factorisation_interval_date', value:interval_date.value}]).then(
        res => {
            console.log(res)
        },
        err => {
            console.log(err)
        }
      )
      isLoading.value = false;
    };
</script>
