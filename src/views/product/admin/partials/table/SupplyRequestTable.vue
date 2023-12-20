<template>
    <div class="">
        <div class="tw-overflow-x-auto tw-bg-white">
            <div class="tw-inline-block tw-min-w-full tw-align-middle">
                <div class="tw-border tw-overflow-auto tw-border-gray-200 darkx:tw-border-gray-700 md:tw-rounded-lg">
                    <table class="tw-min-w-full tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700">
                        <thead class="tw-bg-gray-50 darkx:tw-bg-gray-800">
                            <tr>

                                <th scope="col"
                                class="tw-w-[50px] tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    ID
                                </th>

                                <th scope="col"
                                    class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Seller
                                </th>

                                <th scope="col"
                                    class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Product
                                </th>

                                <th scope="col"
                                    class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Variation
                                </th>

                                <th scope="col"
                                    class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Qauntity
                                </th>

                                <th scope="col"
                                    class="tw-px-3 tw-py-3.5 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                    Status
                                </th>

                                <th scope="col"
                                    class="tw-w-[120px] tw-py-3.5 tw-px-4 tw-text-sm tw-font-normal tw-text-left rtl:tw-text-right tw-text-gray-500 darkx:tw-text-gray-400">
                                        <span>Created</span>
                                </th>

                                <th scope="col" class="tw-relative">
                                    <span class="tw-sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody v-if="!loading && items.length > 0"
                            class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                            <SupplyRequestTableRow v-for="(item) in items" :key="item.id" :item="item" />
                        </tbody>

                        <tbody v-if="!loading && items.length == 0"
                            class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                            <tr>
                                <td colspan="8">
                                    <div class="tw-p-5 tw-text-center tw-text-gray-600 tw-font-medium">
                                        No data available
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                        <tbody v-if="loading"
                            class="tw-bg-white tw-divide-y tw-divide-gray-200 darkx:tw-divide-gray-700 darkx:tw-bg-gray-900">
                            <tr>
                                <td v-if="false" colspan="11"
                                    class="tw-px-4 tw-py-4 tw-text-sm tw-font-medium tw-whitespace-nowrap">
                                    <loading />
                                </td>
                                <td colspan="11">
                                    <div role="status"
                                        class="tw-w-full tw-p-4 tw-space-y-4 tw-border-gray-200 tw-divide-y tw-divide-gray-200 tw-rounded tw-shadow tw-animate-pulse dark:tw-divide-gray-300 md:tw-p-6 dark:tw-border-gray-300">
                                        <div class="tw-flex tw-items-center tw-justify-between">
                                            <div>
                                                <!-- <div class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-600 tw-w-24 tw-mb-2.5"></div> -->
                                                <div
                                                    class="tw-w-32 tw-h-2 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-200">
                                                </div>
                                            </div>
                                            <div
                                                class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-200 tw-w-12">
                                            </div>
                                        </div>
                                        <div v-for="i in 10" :key="i"
                                            class="tw-flex tw-items-center tw-justify-between tw-pt-4">
                                            <div>
                                                <!-- <div class="tw-h-2.5 tw-bg-gray-300 tw-rounded-full dark:tw-bg-gray-600 tw-w-24 tw-mb-2.5"></div> -->
                                                <div
                                                    class="tw-w-32 tw-h-2 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-200">
                                                </div>
                                            </div>
                                            <div
                                                class="tw-h-2.5 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-200 tw-w-12">
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

        <div class="tw-mt-6">
            <TablePaginationNoNums :from="options.from" :to="options.to" :last-page="options.last_page"
                :per-page="options.per_page" :total="options.total" :current-page="options.current_page"
                @page-change="handlePageChange" />
        </div>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, toRef } from "vue";
import TablePaginationNoNums from "@/components/TablePaginationNoNums";
import SupplyRequestTableRow from './SupplyRequestTableRow'

const emit = defineEmits(["pageChange"]);
const props = defineProps({
    options: Object,
    data: Array,
    loading: Boolean
});

const options = toRef(props, "options");
const items = toRef(props, "data");
const loading = toRef(props, "loading");

const handlePageChange = (n) => {
    emit("pageChange", n);
};
</script>