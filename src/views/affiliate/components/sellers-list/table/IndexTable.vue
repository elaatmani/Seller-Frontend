<template>
    <div>
        <div class="tw-flex tw-flex-col tw-mt-5">
            <div class="tw-overflow-x-auto">
                <div class="tw-inline-block tw-min-w-full tw-align-middle">
                    <div
                        class="tw-overflow-hidden tw-border tw-border-gray-200 darkx:tw-border-gray-700 md:tw-rounded-lg">
                        <table class="tw-min-w-full tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700">
                            <thead class="tw-bg-gray-50 darkx:tw-bg-gray-800 tw-whitespace-nowrap">
                                <tr>
                                    <th v-for="col in columns" :key="col" :class="[col.class]" scope="col"
                                        class="tw-px-4 tw-w-fit tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                        {{ col.name }}
                                    </th>

                                </tr>
                            </thead>

                            <tbody v-if="!loading && items.length > 0"
                                class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">

                            </tbody>

                            <tbody v-if="!loading && items.length == 0"
                                class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                                <tr>
                                    <td colspan="11">
                                        <div class="tw-p-5 tw-text-center tw-text-gray-600 tw-font-medium">
                                            No seller has imported this product !
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                            <tbody v-if="loading"
                                class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                                <tr>
                                    <td colspan="11">

                                        <div role="status"
                                            class="tw-w-full tw-p-4 tw-space-y-4  tw-border-gray-200 tw-divide-y tw-divide-gray-200 tw-rounded tw-shadow tw-animate-pulse dark:tw-divide-gray-700 md:tw-p-6 dark:tw-border-gray-700">
                                            <div class="tw-flex tw-items-center tw-justify-between">
                                                <div>
                                                    <div
                                                        class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-600 tw-w-24 tw-mb-2.5">
                                                    </div>
                                                    <div
                                                        class="tw-w-32 tw-h-2 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-700">
                                                    </div>
                                                </div>
                                                <div
                                                    class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-700 tw-w-12">
                                                </div>
                                            </div>
                                            <div v-for="i in (config.per_page - 1)" :key="i"
                                                class="tw-flex tw-items-center tw-justify-between tw-pt-4">
                                                <div>
                                                    <div
                                                        class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-600 tw-w-24 tw-mb-2.5">
                                                    </div>
                                                    <div
                                                        class="tw-w-32 tw-h-2 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-700">
                                                    </div>
                                                </div>
                                                <div
                                                    class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-700 tw-w-12">
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="tw-mt-6">
            <TablePaginationNoNums :from="config.from" :to="config.to" :last-page="config.last_page" :per-page="config.per_page" :total="config.total"
                :current-page="config.current_page" @page-change="(n) => $emit('pageChange', n)" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TablePaginationNoNums from '@/views/newfactorisation/partials/table/TablePaginationNoNums'; 

const config = {
    per_page: 10,
    current_page: 1,
    from: 1,
    to: 10,
    last_page: 1,
    total: 1,
}

const columns = ref([
    { name: 'Username', key: 'username', class: [ '' ] },
    { name: 'Orders', key: 'orders', class: [ 'tw-w-[200px]' ] },
    { name: 'Added', key: 'added', class: [ 'tw-w-[200px]' ] },
])

const loading = ref(false)
const items = ref([])
</script>

<style></style>