<template>
    <div>
        <table class="tw-min-w-full tw-leading-normal">
            <thead class="">
                <tr>
                    <th v-for="c in columns" :key="c.name" :class="c.classes"
                        class="tw-px-5 last:tw-border-e-0 tw-whitespace-nowrap tw-border-e tw-py-3 tw-border-b tw-borderx tw-border-gray-100 tw-bg-gray-50 tw-text-start tw-text-[12px] tw-font-semibold tw-text-gray-600 tw-uppercase tw-tracking-wider">
                        {{ c.label }}
                    </th>
                </tr>
            </thead>
            <tbody v-if="loading">
                <tr class="tw-border-b tw-border-solid tw-border-gray-100 last:tw-border-b-0 tw-group even:tw-bg-gray-50/50"
                    v-for="i in 10" :key="i">
                    <td v-for="c in columns" :key="c.name" class="tw-px-2 tw-py-3">
                        <div
                            class="tw-w-full tw-py-3 tw-bg-gray-50 group-even:tw-bg-white  tw-rounded tw-min-w-[30px] tw-animate-pulse">

                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <template v-if="items.length > 0">
                    <tr v-for="item in items" :key="item"
                        class="tw-border-b tw-border-solid tw-border-gray-100 last:tw-border-b-0 tw-group even:tw-bg-gray-50/50 hover:tw-bg-primary-50/60 tw-duration-100">
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p>{{ item.username }}</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p>{{ item.orders_count }}</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p>{{ item.total_quantity }}</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p>{{ item.confirmation_rate }}%</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p>{{ item.delivery_rate }}%</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p class="tw-text-green-500">{{ currency }} {{ item.revenue }}</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p class="tw-text-green-500">{{ currency }} {{ item.product_expenses }}</p>
                        </td>
                        <td class="tw-px-5 tw-py-3 tw-text-sm">
                            <p class="tw-text-green-500">{{ currency }} {{ item.product_profit }}</p>
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td :colspan="columns.length">
                            <div
                                class="tw-p-5 tw-bg-white tw-min-h-[250px]  tw-text-gray-600 tw-flex tw-items-center tw-justify-center tw-text-lg">
                                <p>No results was found</p>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { currency } from "@/config/config";
import { ref, inject, computed } from "vue";

const loading = ref(false);
const product = inject('product', {});
const items = computed(() => product.value.sellers);

const columns = ref([
    { name: 'seller', label: 'Seller', classes: ['tw-w-[220px]x'] },
    { name: 'orders', label: 'Orders', classes: ['tw-w-[150px]'] },
    { name: 'quantity', label: 'Quantity', classes: ['tw-w-[150px]'] },
    { name: 'confirmation', label: 'Confirmation', classes: ['tw-w-[220px]'] },
    { name: 'delivery', label: 'Delivery', classes: ['tw-w-[220px]'] },
    { name: 'revenue', label: 'Seller Revenue', classes: ['tw-w-[200px]'] },
    { name: 'expenses', label: 'Expenses', classes: ['tw-w-[200px]'] },
    { name: 'profit', label: 'Estimated Profit', classes: ['tw-w-[200px]'] },
])

</script>

<style></style>