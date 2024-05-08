<template>
  <div class="tw-h-full">
    <div class="tw-flex tw-items-center tw-gap-2 tw-justify-end tw-relative">
    
        <transition
      class="tw-duration-200"
      enter-from-class="tw-translate-x-[10px]  tw-opacity-0"
      leave-to-class="tw-translate-x-[10px]  tw-opacity-0"
    >
        <div v-if="visible" v-click-outside="() => visible = false" class="tw-absolute tw-right-0 tw-z-10">
            <div class="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-10 tw-bg-white tw-border tw-border-solid  tw-p-2 tw-rounded tw-flex tw-items-center tw-gap-2">
                
                <button v-if="$user.role == 'admin'" @click="HistoryPopup = true" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-teal-100 hover:tw-border-teal-400 tw-bg-teal-50/10 hover:tw-bg-teal-100 tw-duration-200">
                    <icon icon="uim:history" class="tw-text-xl tw-text-teal-500" />
                </button>
                
                <a v-if="$user.role == 'admin'" target="_blank" :href="serverUrl + 'api/export/factorisations/' + item.factorisation_id" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-green-100 hover:tw-border-green-400 tw-bg-green-50/10 hover:tw-bg-green-200 tw-duration-200">
                    <icon icon="vscode-icons:file-type-excel" class="tw-text-xl" />
                </a>

                <button v-if="$user.role == 'admin'" @click="CommentPopup = true" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-blue-100 hover:tw-border-blue-400 tw-bg-blue-50/10 hover:tw-bg-blue-100 tw-duration-200">
                    <icon icon="solar:notes-bold-duotone" class="tw-text-xl tw-text-blue-500" />
                </button>

                <button v-if="$user.role == 'admin' && false" @click="popup = true" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-amber-100 hover:tw-border-amber-400 tw-bg-amber-50/10 hover:tw-bg-amber-100 tw-duration-200">
                    <icon icon="lets-icons:edit-duotone" class="tw-text-xl tw-text-amber-500" />
                </button>
                <button v-if="$user.role == 'admin'" @click="DeletePopup = true" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-rose-100 hover:tw-border-rose-400 tw-bg-rose-50/10 hover:tw-bg-rose-100 tw-duration-200">
                    <icon icon="solar:trash-bin-trash-bold-duotone" class="tw-text-xl tw-text-rose-500" />
                </button>

            </div>
        </div>
    </transition>

    <button v-if="$user.role == 'admin'" @click="FeesPopup = true" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-emerald-100 hover:tw-border-emerald-400 tw-bg-emerald-50/10 hover:tw-bg-emerald-100 tw-duration-200">
        <icon icon="solar:bill-list-bold-duotone" class="tw-text-xl tw-text-emerald-500" />
    </button>

    <TableActionsUploadImage v-if="$user.role == 'admin'" @update="newItem => $emit('update', newItem)" :key="item.id" :item="item" />

    <button @click="visible = !visible" v-if="$user.role == 'admin'" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-gray-100 hover:tw-border-gray-400 tw-bg-gray-50/10 hover:tw-bg-gray-100 tw-duration-200">
        <icon :icon="visible ? 'iconamoon:close-duotone' : 'solar:menu-dots-bold'" class="tw-text-xl tw-text-gray-500" />
    </button>


<template v-if="false">


    <v-btn v-if="$user.role == 'admin'" target="_blank" :href="serverUrl + 'api/export/factorisations/' + item.factorisation_id" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-green-500/20 hover:tw-bg-green-500/10 hover:tw-border-green-500/70 tw-duration-300 tw-text-green-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-microsoft-excel</v-icon>
    </v-btn>
    
    <v-btn v-if="$user.role == 'admin'" @click="CommentPopup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-blue-500/20 hover:tw-bg-blue-500/10 hover:tw-border-blue-500/70 tw-duration-300 tw-text-blue-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-comment-text</v-icon>
    </v-btn>
    <v-btn v-if="$user.role == 'admin'" @click="popup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-orange-500/20 hover:tw-bg-orange-500/10 hover:tw-border-orange-500/70 tw-duration-300 tw-text-orange-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-pencil-outline</v-icon>
    </v-btn>
    <v-btn  v-if="$user.role == 'admin'" @click="DeletePopup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-red-500/20 hover:tw-bg-red-500/10 hover:tw-border-red-500/70 tw-duration-300 tw-text-red-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-delete-outline</v-icon>
    </v-btn>
    <v-btn v-if="$user.role == 'admin' && item.type =='seller'" @click="FeesPopup = true" class="tw-px-2 tw-py-1 tw-w-[25px] tw-h-[25px] tw-border tw-border-solid tw-border-green-500/20 hover:tw-bg-green-500/10 hover:tw-border-green-500/70 tw-duration-300 tw-text-green-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-format-list-text</v-icon>
    </v-btn>
</template>
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
    <div v-if="HistoryPopup">
        <FactorisationHistory v-model:visible="HistoryPopup" :factorisation="item" />
    </div>
  </div>
</template>

<script>
// import UpdatePopup from '@/views/newfactorisation/partials/components/UpdatePopup'
import CommentFactorisation from './../components/CommentFactorisation';
import UpdateFactorisation from './../components/UpdateFactorisation';
import UpdateFees from './../components/UpdateFees';
import FactorisationHistory from './../components/FactorisationHistory';
import TableActionsUploadImage from './TableActionsUploadImage'
import { serverUrl } from '@/config/config';
 
export default {
    components: { CommentFactorisation, UpdateFactorisation , UpdateFees, TableActionsUploadImage, FactorisationHistory },

    props: {
        item: {
            required: true
        }
    },

    data() {
        return {
            CommentPopup:false,
            HistoryPopup:false,
            popup:false,
            DeletePopup: false,
            FeesPopup:false,
            isLoading: false,
            visible: false,
            serverUrl
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