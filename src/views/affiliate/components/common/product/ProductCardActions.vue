<template>
    <div v-if="!props.isCard" class="tw-w-full tw-mt-10 tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-2 ">
        <button @click="onImportClick" :disabled="loading.import"
            :class="[imported && '!tw-bg-gray-100 tw-text-emerald-500']"
            class="tw-px-2 tw-flex tw-items-center tw-justify-center tw-gap-4 tw-bg-emerald-500 tw-text-white tw-rounded tw-py-3 hover:tw-saturate-150x tw-duration-200 tw-border-2 tw-border-solid tw-border-white hover:tw-border-emerald-200 tw-text-lg">
            <icon v-if="loading.import" icon="line-md:loading-twotone-loop" class="tw-text-2xl tw-text-white" />
            <template v-else>
                <icon v-if="!imported" icon="charm:plus" class="tw-text-3xl" />
                <icon v-if="imported" icon="uis:check" class="tw-text-3xl tw-text-emerald-500" />
            </template>
            <span v-if="!imported">Add to import list</span>
            <span v-if="imported">Imported</span>
        </button>

        <button @click="onWishlistClick"
            class="tw-px-2 tw-flex tw-items-center tw-justify-center tw-gap-4 tw-bg-rose-500/10 tw-text-rose-500 tw-text-whitxe tw-rounded tw-py-3 hover:tw-saturate-150x tw-duration-200 tw-border-2 tw-border-solid tw-border-white hover:tw-border-rose-200 tw-text-lg">
            <icon v-if="loading.wishlist" icon="line-md:loading-twotone-loop" class="tw-text-2xl tw-text-rose-500" />
            <template v-else>
                <icon v-if="!wishlisted" icon="ph:heart-light" class="tw-text-3xl tw-text-rose-500" />
                <icon v-if="wishlisted" icon="ph:heart-fill" class="tw-text-3xl tw-text-rose-500" />
            </template>
            <span v-if="!wishlisted">Add to wishlist</span>
            <span v-if="wishlisted">Wishlisted</span>
        </button>
    </div>

    <div v-if="props.isCard" :class="[(loading.import || loading.wishlist) && '!tw-translate-y-0']"
        class="tw-absolute tw-top-0 tw-left-0 tw-z-20 tw-w-full tw-h-[60px] tw-bg-gradient-to-b tw-from-black/40 tw-to-transparent -tw-translate-y-full group-hover:tw-translate-y-0 tw-duration-200">
        <div class="tw-flex tw-justify-end tw-gap-2 tw-p-2">
            <button @click="onImportClick"
                class="tw-px-2 tw-aspect-square tw-bg-emerald-500 tw-rounded tw-flex tw-items-center tw-gap-2 tw-justify-between tw-h-[40px]">
                <icon v-if="!loading.import && imported" icon="gravity-ui:check" class="tw-text-2xl tw-text-white" />
                <icon v-if="!loading.import && !imported" icon="charm:plus" class="tw-text-2xl tw-text-white" />
                <icon v-if="loading.import" icon="line-md:loading-twotone-loop" class="tw-text-2xl tw-text-white" />
            </button>

            <button @click="onWishlistClick"
                class="tw-px-2 tw-aspect-square tw-bg-rose-500 tw-rounded tw-flex tw-items-center tw-gap-2 tw-justify-between tw-h-[40px]">
                <icon v-if="!loading.wishlist" :icon="wishlisted ? 'ph:heart-fill' : 'ph:heart-light'"
                    class="tw-text-2xl tw-text-white" />
                <icon v-else icon="line-md:loading-twotone-loop" class="tw-text-2xl tw-text-white" />
            </button>

            <button v-if="imported" @click="onOffersClick"
                class="tw-px-2 tw-aspect-square tw-bg-amber-500 tw-rounded tw-flex tw-items-center tw-gap-2 tw-justify-between tw-h-[40px]">
                <icon  icon="ic:outline-local-offer"
                    class="tw-text-2xl tw-text-white" />
            </button>
        </div>

    </div>

    <popup-new :visible="visible.import" :closeable="!loading.import" @cancel="visible.import = false">
        <div
            class="tw-mx-auto tw-w-[95%] md:tw-max-w-[500px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg">
            <div
                class="tw-p-4 tw-text-lg tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-neutral-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50">
                Import
            </div>
            <div class="tw-p-4 tw-bg-white">
                <p v-if="!imported" class="tw-text-lg tw-font-medium">
                    Are you sure you want to import with this product ?
                </p>
                <p v-else class="tw-text-lg tw-font-medium">
                    Are you sure you want to remove from import list ?
                </p>
            </div>
            <div
                class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-50 tw-border-t tw-border-solid">
                <button :disabled="loading.import" @click="visible.import = false"
                    class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                    Cancel
                </button>
                <button v-if="!imported" @click="onConfirmImport" :disabled="loading.import"
                    class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-emerald-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-emerald-600 tw-border-neutral-900 dark:hover:tw-border-emerald-500 hover:tw-bg-emerald-500/80 tw-duration-300 tw-text-white">
                    <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                        :class="[loading.import && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                    <span>Confirm</span>
                </button>
                <button v-else @click="onConfirmImport" :disabled="loading.import"
                    class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-rose-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-rose-600 tw-border-rose-800 dark:hover:tw-border-rose-500 hover:tw-bg-rose-500/80 tw-duration-300 tw-text-white">
                    <v-icon size="small" class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                        :class="[loading.import && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                    <span>Remove</span>
                </button>
            </div>
        </div>
    </popup-new>
    <ProductOffers v-if="visible.offers" v-model:visible="visible.offers" :product="props.product" />
</template>

<script setup>
import ProductOffers from './ProductOffers.vue';
import Affiliate from '@/api/Affiliate';
import { useAlert } from '@/composables/useAlert';
import { ref, defineProps, toRef } from 'vue';


const props = defineProps({
    product: {
        required: false
    },
    isCard: {
        type: Boolean,
        default: true
    }
})
const product = toRef(props, 'product')

const wishlisted = ref(product.value.wishlisted)
const imported = ref(product.value.imported)
const loading = ref({
    wishlist: false,
    import: false,
})
const visible = ref({
    wishlist: false,
    import: false,
    offers: false
})

const onWishlistClick = async () => {
    loading.value.wishlist = true;

    if (wishlisted.value) {
        await Affiliate.removeWishlist(product.value.id)
            .then(
                r => {
                    if (r.data.code == 'SUCCESS') {
                        useAlert('Removed from wishlist')
                        visible.value.wishlist = false;
                        wishlisted.value = false;
                    }
                },
                e => {
                    console.log(e)
                    useAlert('Something wrong happend', 'danger')
                }
            )
    } else {

        await Affiliate.addWishlist(product.value.id)
            .then(
                r => {
                    if (r.data.code == 'SUCCESS') {
                        useAlert('Added to wishlist')
                        visible.value.wishlist = false;
                        wishlisted.value = true;
                    }

                    if (r.data.code == 'ALREADY_WISHLISTED') {
                        useAlert('Already in wishlist')
                        visible.value.wishlist = false;
                        wishlisted.value = true;
                    }
                },
                e => {
                    console.log(e)
                    useAlert('Something wrong happend', 'danger')
                }
            )
    }
    loading.value.wishlist = false;
}

const onImportClick = () => {
    visible.value.import = true
}

const onOffersClick = () => {
    visible.value.offers = true
}

const onConfirmImport = async () => {

    loading.value.import = true;

    if (!imported.value) {

        await Affiliate.addImport(product.value.id)
            .then(
                r => {
                    if (r.data.code == 'SUCCESS') {
                        useAlert('Imported successfully')
                        visible.value.import = false;
                        imported.value = true;
                    }

                    if (r.data.code == 'ORDERS_EXISTS') {
                        useAlert('Product cannot be removed from import list because it has orders', 'info')
                        visible.value.import = false;
                    }                    

                    if (r.data.code == 'ALREADY_IMPORTED') {
                        useAlert('Already imported')
                        visible.value.import = false;
                        imported.value = true;
                    }
                },
                e => {
                    console.log(e)
                    useAlert('Something wrong happend', 'danger')
                }
            )
    } else {
        await Affiliate.removeImport(product.value.id)
            .then(
                r => {
                    if (r.data.code == 'SUCCESS') {
                        useAlert('Removed from imported')
                        visible.value.import = false;
                        imported.value = false;
                    }

                    if (r.data.code == 'ORDERS_EXISTS') {
                        useAlert('Product cannot be removed from import list because it has orders', 'info')
                        visible.value.import = false;
                    }
                },
                e => {
                    console.log(e)
                    useAlert('Something wrong happend', 'danger')
                }
            )
    }
    loading.value.import = false;

}

</script>

<style></style>