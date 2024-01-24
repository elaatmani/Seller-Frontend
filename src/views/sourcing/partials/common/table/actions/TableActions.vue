<template>
  <div>
    <div class="tw-flex tw-items-center tw-justify-end tw-px-4">
      <router-link v-if="$user.role == 'seller'" :to="{ name: 'sourcings.show', params: { id: item.id } }" class="tw-text-xl tw-p-1 tw-rounded tw-border tw-border-solid tw-border-blue-500 tw-text-blue-500 tw-duration-200 hover:tw-bg-blue-500 hover:tw-text-white">
        <icon icon="solar:eye-bold" />
      </router-link>

      <router-link v-if="$user.role == 'admin'" :to="{ name: 'sourcings.show', params: { id: item.id } }" class="tw-text-xl tw-p-1 tw-rounded tw-border tw-border-solid tw-border-emerald-500 tw-text-emerald-500 tw-duration-200 hover:tw-bg-emerald-500 hover:tw-text-white">
        <icon icon="clarity:edit-solid" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRef } from 'vue';

const props = defineProps({ item: { type: Object, required: true } });
const item = toRef(props, 'item');
</script>

<style>

</style>