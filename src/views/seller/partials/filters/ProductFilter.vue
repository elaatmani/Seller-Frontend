<template>
  <div class="md:tw-col-span-3 tw-col-span-12 tw-rounded">
    <label for="countries" class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900">Product</label>
    <vue-select append-to-body :reduce="(o) => o.id" @option:selected="e => $emit('update', { ...filters, product_id: e.id })"
      :clearable="false"
      class="tw-bg-gray-50 tw-border-solid tw-outline-none  tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full custom-vue-select"
      placeholder="All" :v-model="products" :options="allProducts" label="name">
    </vue-select>
  </div>
</template>

<script>
import Product from '@/api/Product'

import vueSelect from 'vue-select';

export default {
  components: {
    'vue-select': vueSelect
  },

  props: {
    filters: {
      required: true,
    }
  },

  data() {
    return {
    }
  },

  computed: {
    products() {
      return this.$store.getters['product/products']
    },
    fetched() {
      return this.$store.getters['product/fetched']
    },
    allProducts() {
      return [{ id: 'all', name: 'All' }, ...this.products]
    },
  },

  methods: {
    getProducts() {
      return Product.all().then(
        (res) => {
          if (res.data.code == "SUCCESS") {
            this.$store.dispatch("product/setProducts", res.data.data.products);
            this.$store.dispatch("product/setFetched", true);
          }
        },
        (err) => {
          this.$handleApiError(err);
        }
      );
    }
  }
}
</script>

<style>
.custom-vue-select .vs__dropdown-menu {
  max-height: 150px;
  overflow-y: auto;
}</style>