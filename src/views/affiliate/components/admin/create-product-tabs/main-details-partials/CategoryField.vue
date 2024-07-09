<template>
  <div>
      <label
        class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
      >
        Category</label
      >
    <div class="tw-flex tw-items-center tw-h-[42px] tw-gap-1">
      <div class="tw-flex-1">
        <div class="tw-relative">
          <select
            :disabled="!fetched"
            v-model="product.category_id"
            class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 tw-pr-7"
          >
            <option value="" selected>Choose category</option>
            <option :value="c.id" v-for="c in categories" :key="c">{{ c.name }}</option>
          </select>
        </div>
      </div>

      <button
        @click="visible = !visible"
        class="tw-bg-gray-800 tw-text-white tw-p-1 tw-h-full tw-flex tw-items-center tw-justify-center tw-aspect-square tw-rounded-lg"
      >
        <icon icon="pepicons-pop:plus" class="tw-text-white tw-text-xl" />
      </button>
    </div>

    <popup-new :visible="visible" :closeable="true" @cancel="visible = false">
      <div
        class="tw-mx-auto tw-w-[95%] md:tw-max-w-[500px] tw-overflow-hidden tw-h-fit dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg"
      >
        <div
          class="tw-p-4 tw-text-lg tw-border-b tw-border-solid tw-font-medium tw-flex dark:tw-text-neutral-400 tw-text-gray-500 tw-items-center tw-gap-4 dark:tw-bg-neutral-800 tw-bg-gray-50"
        >
          Add category
        </div>

        <div class="tw-p-5 tw-bg-white">
          <div
            class="tw-grid tw-gap-6 tw-gap-y-5 tw-grid-cols-1 md:tw-grid-cols-2"
          >
            <div class="tw-col-span-2 md:tw-col-span-2">
              <label
                class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white"
                >Name</label
              >
              <input
                v-model="category.name"
                @input="errors.name = null"
                type="text"
                :class="[errors.name && '!tw-border-red-400']"
                class="tw-bg-gray-50 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-orange-500 dark:focus:tw-border-orange-500"
                placeholder="Name"
                required
              />
              <label
                v-if="errors.name"
                class="tw-block tw-mb-2 tw-text-xs tw-font-medium tw-text-red-400 dark:tw-text-white"
                >{{ errors.name }}</label
              >
            </div>

          </div>
        </div>

        <div
          class="tw-flex tw-justify-end tw-items-center tw-p-4 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-50 tw-border-t tw-border-solid"
        >
          <button
            @click="cancel"
            class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300"
          >
            Cancel
          </button>
          <button
            @click="handleCreate"
            :disabled="loading"
            class="tw-py-2 tw-px-7 tw-flex tw-items-center tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white"
          >
            <v-icon
              size="small"
              class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
              :class="[loading && '!tw-max-w-[50px] !tw-mr-3']"
              >mdi-loading</v-icon
            >
            <span>Create</span>
          </button>
        </div>
      </div>
    </popup-new>
  </div>
</template>

<script setup>
import Category from "@/api/Category";
import { useAlert } from "@/composables/useAlert";
import { ref, inject } from "vue";

const product = inject("product");

const visible = ref(false);
const loading = ref(false);
const fetched = ref(false);
const category = ref({ type: 'products' });
const categories = ref([]);
const errors = ref({});

const handleCreate = async () => {
    errors.value = {};

  if(!category.value.name) {
    errors.value.name = "Name is required";
    return false;
  }
  loading.value = true
  await Category.create(category.value).then(
    r => {
      if(r.data.code == 'SUCCESS') {
        categories.value.unshift(r.data.category)
        useAlert('New category has been added');
        cancel();
      }
      },
    e => {
      console.log(e)
    })

    loading.value = false;
};

const cancel = () => {
  category.value = { type: 'products' };
  visible.value = false;
};

const getCategories = async () => {
  fetched.value = false;
  await Category.all().then(
    r => {
      if(r.data.code == 'SUCCESS') {
        categories.value = r.data.categories;
        fetched.value = true;
      }
    },
    e => {
      console.log(e)
    });
}

if(!fetched.value) {
  getCategories();
}
</script>

<style></style>
