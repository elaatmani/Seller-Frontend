<template>
  <div class="tw-h-full">
    <div class="tw-flex tw-items-center tw-gap-2">
    <v-btn v-if="false" :to="'/products/update/' + item.id" class="tw-bg-white tw-shadow-sm tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-orange-500/20 hover:tw-bg-orange-500/10 hover:tw-border-orange-500/70 tw-duration-300 tw-text-orange-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-pencil-outline</v-icon>
    </v-btn>

    <router-link title="Edit" :to="'/products/update/' + item.id" class="!tw-bg-white tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-amber-100 hover:tw-border-amber-400  hover:!tw-bg-amber-100 tw-duration-200">
        <icon icon="lets-icons:edit-duotone" class="tw-text-xl tw-text-amber-500" />
    </router-link>

    <button v-if="false" @click="history = true" class="tw-bg-whites tw-shadow-sm tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-rose-500/20 hover:tw-bg-rose-500/10 hover:tw-border-rose-500/70 tw-duration-300 tw-text-rose-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
        <v-icon size="x-small" >mdi-delete</v-icon>
    </button>
    </div>



  </div>
</template>

<script>

export default {
    components: {  },

    props: {
        item: {
            required: true
        }
    },

    data() {
        return {
        update: false,
        history: false,
        isLoading: false,

        }
    },

    methods: {
        handle() {
        }
    }
}
</script>

<style>

</style>