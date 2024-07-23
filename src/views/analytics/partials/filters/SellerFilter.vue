<template>
    <div class="tw-absolute tw-top-full tw-z-10 tw-pt-2">
        <div
            class="tw-flex tw-flex-col tw-w-[400px] tw-h-[380px] tw-bg-white tw-rounded tw-border tw-border-solid tw-border-gray-200 tw-shadow tw-overflow-hidden">
            <div class="tw-grid tw-grid-cols-12 tw-h-full">
                <div class="tw-col-span-12">

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
</script>

<style></style>