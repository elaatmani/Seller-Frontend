<template>

<div class="py-5 px-2 tw-border tw-bg-white tw-w-full tw-rounded-md tw-mb-5 ">

<section class="tw-px-3">
<div class="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
    <div>
        <div class="tw-flex tw-items-center tw-gap-x-3">
            <h2 class="tw-text-lg tw-font-medium tw-text-gray-800 darkx:tw-text-white">Product Sellers</h2>
        </div>
        <p class="tw-mt-1 tw-text-sm tw-text-gray-500 darkx:tw-text-gray-300">
            List of sellers working on this product.
          </p>
    </div>

</div>
<div>
    <IndexTable />
</div>
</section>
</div>


  
</template>

<script setup>
import IndexTable from '@/views/affiliate/components/sellers-list/table/IndexTable.vue';
</script>

<style>

</style>