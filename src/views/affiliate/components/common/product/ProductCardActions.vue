<template>
    <div class="tw-flex tw-justify-end tw-gap-2 tw-p-2">
        <button @click="onImportClick"
            class="tw-px-2 tw-aspect-square tw-bg-emerald-500 tw-rounded tw-flex tw-items-center tw-gap-2 tw-justify-between tw-h-[40px]">
            <icon v-if="!loading.import" icon="charm:plus" class="tw-text-2xl tw-text-white" />
            <icon v-else icon="line-md:loading-twotone-loop" class="tw-text-2xl tw-text-white" />
        </button>

        <button @click="onWishlistClick"
            class="tw-px-2 tw-aspect-square tw-bg-rose-500 tw-rounded tw-flex tw-items-center tw-gap-2 tw-justify-between tw-h-[40px]">
            <icon v-if="!loading.wishlist" :icon="wishlisted ? 'ph:heart-fill' : 'ph:heart-light'"
                class="tw-text-2xl tw-text-white" />
            <icon v-else icon="line-md:loading-twotone-loop" class="tw-text-2xl tw-text-white" />
        </button>
    </div>

    <popup-new :visible="visible.import" :closeable="!loading.import" @cancel="visible.import = false">
        <div
            class="tw-mx-auto tw-w-[95%] md:tw-max-w-[500px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg">
            <div
                class="tw-p-4 tw-text-lg tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50">
                Import
            </div>
            <div class="tw-p-4 tw-bg-white">
                <p class="tw-text-lg tw-font-medium">
                    Are you sure you want to import with this product ?
                </p>
            </div>
            <div
                class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-50 tw-border-t tw-border-solid">
                <button :disabled="loading.import" @click="visible.import = false"
                    class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                    Cancel
                </button>
                <button @click="onConfirmImport" :disabled="loading.import"
                    class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-emerald-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-emerald-600 dark:tw-border-neutral-900 dark:hover:tw-border-emerald-500 hover:tw-bg-emerald-500/80 dark:hover:tw-bg-emerald-400 tw-duration-300 tw-text-white">
                    <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                        :class="[loading.import && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                    <span>Confirm</span>
                </button>
            </div>
        </div>
    </popup-new>
</template>

<script setup>
import Affiliate from '@/api/Affiliate';
import { ref, defineProps, toRef } from 'vue';

const props = defineProps(['product'])
const product = toRef(props, 'product')

const wishlisted = ref(false)
const loading = ref({
    wishlist: false,
    import: false,
})
const visible = ref({
    wishlist: false,
    import: false,
})

const onWishlistClick = () => {
    loading.value.wishlist = true
    setTimeout(() => {
        loading.value.wishlist = false
        wishlisted.value = !wishlisted.value
    }, 2000)
}

const onImportClick = () => {
    visible.value.import = true
}

const onConfirmImport = async () => {
    loading.value.import = true;
    await Affiliate.addToImport(product.value.id)
        .then(
            r => {
                console.log(r)
            },
            e => {
                console.log(e)
            }
        )

    loading.value.import = false;
}

</script>

<style></style>