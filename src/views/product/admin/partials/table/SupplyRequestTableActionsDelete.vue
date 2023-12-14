<template>
    <div>

        <popup-new :visible="props.visible" @cancel="hide" :closeable="!loading">
            <div class="tw-relative tw-max-w-[450px] tw-w-full tw-bg-white tw-overflow-hidden tw-rounded-md tw-mx-auto tw-border tw-border-solid tw-border-gray-400">
                <h1 class="tw-text-lg tw-font-semibold tw-p-5 tw-bg-gray-100">Are you sure you want to delete request ?</h1>

                <div class="tw-flex tw-justify-end tw-items-center tw-col-span-12 tw-gap-2 tw-p-5 ">
                    <button
                    @click="hide"
                    :disabled="loading"
                    type="button"
                    class="tw-border-solid tw-duration-200 tw-text-gray-900 tw-bg-white tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-8 w-fit h-fit tw-py-2.5 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700"
                    >
                    Annuler
                    </button>
                    <button
                    @click="deleteItem"
                    :disabled="loading"
                    type="button"
                    :class="[loading && '!bg-red-400 tw-cursor-not-allowed']"
                    class="tw-relative tw-flex tw-gap-2 tw-items-center tw-justify-center dura tw-text-white tw-bg-red-500 hover:tw-bg-red-600 tw-shadow-md hover:tw-shadow-lg tw-duration-200 focus:tw-ring-4 focus:tw-ring-red-300 tw-font-medium tw-rounded-md tw-text-sm tw-px-8 w-fit tw-py-2.5 dark:tw-bg-red-600 dark:hover:tw-bg-red-700 focus:tw-outline-none dark:focus:tw-ring-red-800"
                    >

                    <v-icon v-if="loading" class="tw-absolute tw-animate-spin " name="loading" >mdi-loading</v-icon>
                    <span :class="[loading && '!tw-invisible']">Supprimer</span>
                    </button>
                </div>
            </div>
        </popup-new>
    </div>
</template>
<script setup>
import SupplyRequest from '@/api/SupplyRequest';
import { useAlert } from '@/composables/useAlert';
import { ref, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex'

const emit = defineEmits(['update:visible']);

const loading = ref(false);
const props = defineProps(['item', 'visible']);
const store = useStore();

const deleteItem = async () => {
    loading.value = true;
    await SupplyRequest.delete(props.item.id)
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                store.dispatch('supply-request/deleteSupplyRequest', props.item.id);
                useAlert('Deleted Successfully');
                hide()
            }
        },
        (err) => {
            let message = 'Something wrong happend';
            if(err.response?.status == 500) {
                message = err?.response?.data?.message;
            } 
            useAlert(message, 'error');
            hide();
        }
    )
    loading.value = false;
}
const hide = () => {
    emit('update:visible', false);
}

</script>