<template>
  <div class="tw-h-full">
    <div class="tw-flex tw-items-center tw-gap-2">
    <button v-if="$user.role == 'admin'" @click="CommentPopup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-blue-500/20 hover:tw-bg-blue-500/10 hover:tw-border-blue-500/70 tw-duration-300 tw-text-blue-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-comment-text</v-icon>
    </button>
    <button v-if="$user.role == 'admin'" @click="popup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-orange-500/20 hover:tw-bg-orange-500/10 hover:tw-border-orange-500/70 tw-duration-300 tw-text-orange-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-pencil-outline</v-icon>
    </button>
    <button  v-if="$user.role == 'admin'" @click="DeletePopup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-delete-outline</v-icon>
    </button>
    <button v-if="$user.role == 'admin' && item.type =='seller'" @click="FeesPopup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-green-500/20 hover:tw-bg-green-500/10 hover:tw-border-green-500/70 tw-duration-300 tw-text-green-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-format-list-text</v-icon>
    </button>
    </div>

    <div v-if="CommentPopup">
        <CommentFactorisation @update="newItem => $emit('update', newItem)" v-model:visible="CommentPopup" :key="item.id" :item="item" />
    </div>
    <div v-if="popup">
        <UpdateFactorisation @update="newItem => $emit('update', newItem)" v-model:visible="popup" :key="item.id" :item="item" />
    </div>
    <!-- <div v-if="DeletePopup">
        <CommentFactorisation @update="newItem => $emit('update', newItem)" v-model:visible="DeletePopup" :key="item.id" :item="item" />
    </div> -->
    <div v-if="FeesPopup">
        <UpdateFees @update="newItem => $emit('update', newItem)" v-model:visible="FeesPopup" :key="item.id" :item="item" />
    </div>
    

  </div>
</template>

<script>
// import UpdatePopup from '@/views/newfactorisation/partials/components/UpdatePopup'
import CommentFactorisation from './../components/CommentFactorisation';
import UpdateFactorisation from './../components/UpdateFactorisation';
import UpdateFees from './../components/UpdateFees';
 
export default {
    components: { CommentFactorisation, UpdateFactorisation , UpdateFees },

    props: {
        item: {
            required: true
        }
    },

    data() {
        return {
            CommentPopup:false,
            popup:false,
            DeletePopup: false,
            FeesPopup:false,
            isLoading: false,

        }
    },
    computed:{
    },
    methods: {
    }
}
</script>

<style>

</style>