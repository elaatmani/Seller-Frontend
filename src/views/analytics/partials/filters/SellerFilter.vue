<template>
    <div class="tw-absolute tw-top-full tw-z-10 tw-pt-2">
        <div
            class="tw-flex tw-flex-col tw-w-[400px] tw-h-[380px]x tw-bg-white tw-rounded tw-border tw-border-solid tw-border-gray-200 tw-shadow tw-overflow-hidden">
            <div class="tw-grid tw-grid-cols-12 tw-h-full">
                <div class="tw-col-span-12 tw-grid tw-grid-cols-2 tw-p-2 tw-gap-2 tw-h-fit tw-max-h-[200px] tw-overflow-auto">
                    <div v-for="s in sellers" :key="s.id" 
                    :title="s.firstname + ' ' + s.lastname"
                    @click="onClick(s.id)"
                    :class="[filters.sellers.includes(s.id) && '!tw-bg-orange-500 tw-text-white']"
                    class="tw-cursor-pointer tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-rounded tw-h-fit hover:tw-bg-gray-50 tw-duration-200">{{ s.username }}</div>
                </div>
                <div class="tw-col-span-12 tw-bg-white tw-h-[50px] tw-border-t tw-border-solid tw-border-gray-200">
                    <div class="tw-flex tw-items-center tw-justify-end tw-gap-2 tw-h-full tw-px-2">
                        <button @click="emit('close')"
                            class="tw-px-4 tw-py-0.5 tw-rounded tw-bg-gray-50 tw-text-gray-500">Close</button>
                        <button @click="onFilter"
                            class="tw-px-4 tw-py-0.5 tw-rounded tw-bg-orange-400 tw-text-white">Filter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, defineEmits, inject } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(['close']);
const filters = inject('filters');
const filter = inject('filter');
const store = useStore();
const sellers = computed(() => store.getters['user/users'].filter(u => u.role_name == 'seller'))
// const sellers = computed(() => store.getters['user/users']);

const onClick = id => {
    if(filters.value.sellers.includes(id)) {
        filters.value.sellers = filters.value.sellers.filter(s => s != id)
    } else {
        filters.value.sellers.push(id)
    }

}

const onFilter = () => {
    emit('close')
    filter();
}
</script>

<style></style>