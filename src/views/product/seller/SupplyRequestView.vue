<template>
    <div class="tw-bg-white tw-p-5 tw-border tw-border-solid tw-rounded-md">
        <div class="mb-5 tw-flex tw-w-full tw-justify-between">
            <h1 class="tw-text-gray-700 font-weight-medium tw-text-md md:tw-text-lg">
                Supply Requests
            </h1>
            <div>
                <button @click="visible.create = true"
                    class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-orange-100 tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
                    <span>Create</span>
                </button>

                <SupplyRequestAdd v-model:visible="visible.create" v-if="visible.create" />
            </div>
        </div>

        <div class="tw-mt-5"></div>

        <SupplyRequestTable @page-change="handlePageChange" :data="data" :loading="loading" :options="options" />

    </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue';
import SupplyRequestTable from './partials/table/SupplyRequestTable';
import SupplyRequestAdd from './partials/SupplyRequestAdd';
import SupplyRequest from '@/api/SupplyRequest';
import { useStore } from 'vuex'

const store = useStore();
const visible = reactive({ create: false })
const options = reactive({});
const data = computed(() => store.getters['supply-request/supply_requests']);
const loading = ref(true);

const getData = async () => {
    loading.value = true;
    await SupplyRequest.paginate()
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                store.dispatch('supply-request/setSupplyRequests', res.data.data.supply_requests.data);
                Object.assign(options, res.data.data.supply_requests)
            }
        }
    );
    loading.value = false;
}

const handlePageChange = n => {
    console.log(n);
}

getData();

</script>