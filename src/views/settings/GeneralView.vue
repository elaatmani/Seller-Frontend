<template>
    <div>
        <div class="mb-5">
            <h1 class="tw-text-gray-700 font-weight-medium tw-text-md md:tw-text-lg">
                General
            </h1>
        </div>

        <div v-if="fetching" class="tw-h-[calc(100vh-170px)] tw-flex tw-items-center tw-justify-center tw-rounded-md tw-border tw-bg-white">
            <loading />
        </div>

        <div
            v-if="!fetching"
            class="py-5 px-5 tw-border bg-white tw-w-full tw-rounded-md"
            >
        </div>


    </div>
</template>

<script setup>
import Setting from '@/api/Setting';
import { ref } from 'vue';

const keys = [ 'is_affectation_required', 'auto_close_factorisation' ];
const fetching = ref(true);

const getData = async () => {
    fetching.value = true;
    await Setting.get(keys)
    .then(
        res => {
            console.log(res.data);
        }
    )
    fetching.value = false;
} 

getData();
</script>
