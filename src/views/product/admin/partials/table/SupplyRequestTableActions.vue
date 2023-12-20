<template>
    <div class="tw-w-full tw-flex tw-justify-center tw-gap-2">
        <div>
            <button @click="visible.edit = true"
                class="tw-bg-whites tw-shadow-sm tw-px-2 tw-py-1 tw-w-[30px] tw-h-[30px] tw-border tw-border-solid tw-border-amber-500/20 hover:tw-bg-amber-600 tw-bg-amber-500 hover:tw-border-amber-500/70 tw-duration-300 tw-text-white tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <v-icon size="x-small">mdi-pencil</v-icon>
            </button>
            <SupplyRequestTableActionsEdit v-if="visible.edit" :item="props.item" v-model:visible="visible.edit" />
        </div>

        <div>
            <button @click="visible.show = true"
                class="tw-bg-whites tw-shadow-sm tw-px-2 tw-py-1 tw-w-[30px] tw-h-[30px] tw-border tw-border-solid tw-border-blue-500/20 hover:tw-bg-blue-600 tw-bg-blue-500 hover:tw-border-blue-500/70 tw-duration-300 tw-text-white tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <v-icon size="x-small">mdi-eye</v-icon>
            </button>
            <SupplyRequestTableActionsShow v-if="visible.show" :item="props.item" v-model:visible="visible.show" />
        </div>

        <div>
            <button @click="visible.delete = true"
                class="tw-bg-whites tw-shadow-sm tw-px-2 tw-py-1 tw-w-[30px] tw-h-[30px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-600 tw-bg-red-500 hover:tw-border-red-500/70 tw-duration-300 tw-text-white tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <v-icon size="x-small">mdi-trash-can</v-icon>
            </button>
            <SupplyRequestTableActionsDelete v-if="visible.delete" :item="props.item" v-model:visible="visible.delete" />
        </div>



    </div>
</template>

<script setup>
import SupplyRequestTableActionsDelete from "./SupplyRequestTableActionsDelete";
import SupplyRequestTableActionsShow from "./SupplyRequestTableActionsShow";
import SupplyRequestTableActionsEdit from "./SupplyRequestTableActionsEdit";
import { reactive, defineProps } from 'vue';

const props = defineProps(['item'])

const visible = reactive({
    delete: false,
    show: false,
    edit: false,
})
</script>

<style></style>