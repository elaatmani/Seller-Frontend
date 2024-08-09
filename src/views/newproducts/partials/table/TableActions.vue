<template>
    <div v-if="item.type == 'normal'" class="tw-h-full">
        <div class="tw-flex tw-items-center tw-gap-2">
            <v-btn v-if="false" :to="'/products/update/' + item.id"
                class="tw-bg-white tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-orange-500/20 hover:tw-bg-orange-500/10 hover:tw-border-orange-500/70 tw-duration-300 tw-text-orange-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <v-icon size="x-small">mdi-pencil-outline</v-icon>
            </v-btn>

            <button v-if="$can(`update_product`) && $user.role=='admin'" @click="visible.status = true"
                class="tw-bg-white tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-emerald-500/20 hover:tw-bg-emerald-500/10 hover:tw-border-emerald-500/70 tw-duration-300 tw-text-emerald-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <icon icon="ci:check-big" class="tw-text-base tw-text-emerald-500" />
            </button>

            <router-link :to="'/products/' + item.id"  v-if="$can(`view_product`) && $user.role != 'affiliate-manager'"
                class="tw-bg-white tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-sky-500/20 hover:tw-bg-sky-500/10 hover:tw-border-sky-500/70 tw-duration-300 tw-text-sky-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <icon icon="solar:eye-bold-duotone" class="tw-text-base tw-text-sky-500" />
            </router-link>

            <router-link title="Edit" v-if="$user.role != 'affiliate-manager'" :to="'/products/update/' + item.id"
                class="!tw-bg-white tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-amber-100 hover:tw-border-amber-400  hover:!tw-bg-amber-100 tw-duration-200">
                <icon icon="lets-icons:edit-duotone" class="tw-text-xl tw-text-amber-500" />
            </router-link>

            <button v-if="$can(`delete_product`) && $user.role != 'affiliate-manager'" @click="visible.delete = true"
                class="tw-bg-white tw-px-2 tw-py-1 tw-aspect-square  tw-border tw-border-solid tw-border-rose-500/20 hover:tw-bg-rose-500/10 hover:tw-border-rose-500/70 tw-duration-300 tw-text-rose-500/80 tw-rounded-md tw-flex tw-items-center tw-justify-center">
                <v-icon size="x-small">mdi-delete</v-icon>
            </button>

            <popup type="warning" title="Warning"
                body="<p>Are you sure you want to delete this product?</p> You won't be able to revert this!"
                :loading="loading.delete" :visible="visible.delete" @resolved="handleResolved" />

            <div v-if="visible.status">
                <ProductStatusPopup v-model:visible="visible.status" @cancel="visible.status = false" @updated="handleUpdated" :product="item"  />
            </div>
        </div>
    </div>

    <div v-if="item.type == 'affiliate' && ['admin', 'affiliate-manager'].includes($user.role)" class="tw-h-full">
        <div class="tw-flex tw-items-center tw-gap-2">
            <router-link v-if="['admin'].includes($user.role)" title="Show" :to="{ name: 'affiliate.admin.show', params: { id: item.id } }"
                class="!tw-bg-white tw-aspect-square tw-cursor-pointer tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-blue-100 hover:tw-border-blue-400  hover:!tw-bg-blue-100 tw-duration-200">
                <icon icon="solar:eye-bold-duotone" class="tw-text-xl tw-text-blue-500" />
            </router-link>

            <router-link v-if="['admin', 'affiliate-manager'].includes($user.role)" title="Edit" :to="{ name: 'affiliate.admin.edit', params: { id: item.id } }"
                class="!tw-bg-white tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-amber-100 hover:tw-border-amber-400  hover:!tw-bg-amber-100 tw-duration-200">
                <icon icon="lets-icons:edit-duotone" class="tw-text-xl tw-text-amber-500" />
            </router-link>
        </div>
    </div>

</template>

<script setup>
import { useAlert } from '@/composables/useAlert';
import { defineProps, defineEmits, toRef, ref, inject } from 'vue';
import Product from '@/api/Product';
import ProductStatusPopup from "@/views/product/partials/ProductStatusPopup";

const props = defineProps(['item']);
const emit = defineEmits(['update']); emit
const item = toRef(props, 'item');
const refresh = inject('refresh');
const update = inject('update');

const visible = ref({ delete: false, status: false });
const loading = ref({ delete: false, status: false });


const handleResolved = async (response) => {
    if (!response) {
        visible.value.delete = false;
        return false;
    }

    loading.value.delete = true

    await Product.delete(item.value.id)
        .then((res) => {
            if (res.data.code == 'PRODUCT_DELETED') {
                useAlert('Product Deleted Successfully')
                refresh()
            }
        })
        .catch(error => {
            console.log(error)
            useAlert('Something wrong happened', 'danger')
        })

    loading.value.delete = false
    visible.value.delete = false
}

const handleUpdated = product => {
    update({
        ...item.value,
        status: product.status
    })
}

</script>

<style></style>