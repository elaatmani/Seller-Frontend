<template>
  <div class="tw-p-2 tw-flex tw-items-center tw-gap-2x tw-mb-2">
    <button
      @click="active = 'normal'"
      :class="active == 'normal'? '!tw-border-orange-500' : 'tw-border-gray-200'"
      class="tw-py-1 tw-px-4 tw-border-b-2 tw-border-solid tw-border-gray-200 hover:tw-border-orange-200">Normal</button>
    
      <button
        @click="active = 'affiliate'"
        :class="active == 'affiliate'? '!tw-border-orange-500' : 'tw-border-gray-200'"
        class="tw-py-1 tw-px-4 tw-border-b-2 tw-border-solid tw-border-gray-200 hover:tw-border-orange-200">Affiliate</button>
  </div>

  <div>
    <NormalProductList v-if="active == 'normal'" />
    <AffiliateProductList v-if="active == 'affiliate'" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NormalProductList from "./NormalProductList";
import AffiliateProductList from "./AffiliateProductList";

const active = ref('normal')
</script>

<style></style>