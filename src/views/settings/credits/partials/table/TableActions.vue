<template>
  <div class="tw-h-full">
    <div class="tw-flex tw-items-center tw-gap-2">
    <button @click="popup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-orange-500/20 hover:tw-bg-orange-500/10 hover:tw-border-orange-500/70 tw-duration-300 tw-text-orange-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-pencil-outline</v-icon>
    </button>
      
    <button @click="handleDelete"
        class="tw-bg-white tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-rose-500/20 hover:tw-bg-rose-500/10 hover:tw-border-rose-500/70 tw-duration-300 tw-text-rose-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small">mdi-delete</v-icon>
    </button>

    </div>

    <div v-if="popup">
        <UpdatePopup @update="newItem => $emit('update', newItem)" v-model:visible="popup" :item="item" />
    </div>
  
  </div>
</template>

<script>
import UpdatePopup from '@/views/settings/credits/partials/components/UpdatePopup'
import Credit from '@/api/Credit';
import { useAlert } from '@/composables/useAlert';

export default {
    components: { UpdatePopup },

    props: {
        item: {
            required: true
        }
    },

    data() {
        return {
        popup: false,
        isLoading: false,

        }
    },

    methods: {
        async handleDelete() {
            if (this.item && this.item.id) {
                await Credit.delete(this.item.id)
                .then((res) => {
                    if (res.data.code == 'Credit_DELETED') {
                    useAlert('Credit Deleted Successfully')
                    this.$emit('delete', this.item)
                    }
                })
                .catch(error => {
                    console.log(error)
                    useAlert('Something wrong happened', 'danger')
                })
            } else {
                console.log('Item or item id is not defined')
            }
        }
    }
}
</script>

<style>

</style>