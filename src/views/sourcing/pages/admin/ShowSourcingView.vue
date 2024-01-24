<template>
  <div class="tw-relative">
    <div class="py-5 px-2 tw-border tw-bg-white tw-w-full tw-rounded-md tw-mb-5">
      <section class="tw-px-3">
        <div class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
          <div>
            <div class="tw-flex tw-items-center tw-gap-x-5">
              <h2 class="tw-text-xl tw-font-bold tw-text-gray-800 darkx:tw-text-white">
                Quotation: #{{ route.params.id }}
              </h2>
              <div class="tw-flex tw-items-center tw-gap-2">
                <div :class="quotation_status.class" class="tw-rounded tw-px-4 tw-py-1 tw-text-sm tw-text-center">
                  {{ quotation_status.name }}
                </div>
                <div :class="request_status.class" class="tw-rounded tw-px-4 tw-py-1 tw-text-sm tw-text-center">
                  {{ request_status.name }}
                </div>
              </div>
            </div>

            <p class="tw-mt-2 tw-text-sm tw-text-gray-500 darkx:tw-text-gray-300">
              {{ moment('2023-09-08T17:45:06.000000Z').format("MMMM D, YYYY hh:mm A") }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="tw-grid lg:tw-grid-cols-12 tw-grid-cols-1 tw-gap-4 tw-mt-4">
      <div class="tw-space-y-4 lg:tw-col-span-8">
        <div class="tw-p-4 tw-border tw-bg-white tw-w-full tw-rounded-md">
          <SourcingRequestProductDetails />
        </div>

        <div class="tw-border tw-bg-white tw-w-full tw-rounded-md">
          <SourcingRequestProcess />
        </div>

        <div class="tw-border tw-bg-white tw-w-full tw-rounded-md">
          <SourcingRequestDetails />
        </div>

        

      </div>

      <div class="lg:tw-col-span-4">
        <div class="tw-border tw-bg-white tw-w-full tw-rounded-md">
          <SourcingRequestPricingBox />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import moment from 'moment'
import { useRoute } from "vue-router";
import { quotation_statuses } from '@/config/sourcing';
import SourcingRequestProcess from '@/views/sourcing/partials/common/show/SourcingRequestProcess';
import SourcingRequestPricingBox from '@/views/sourcing/partials/admin/SourcingRequestPricingBox';
import SourcingRequestDetails from '@/views/sourcing/partials/admin/SourcingRequestDetails';
import SourcingRequestProductDetails from '@/views/sourcing/partials/common/show/SourcingRequestProductDetails';

const route = useRoute();
const quotation_status = quotation_statuses[1]
const request_status = quotation_statuses[0]

</script>

<style></style>