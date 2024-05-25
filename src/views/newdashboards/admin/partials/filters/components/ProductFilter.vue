<template>
    <div class="md:tw-col-span-3 tw-col-span-12 tw-rounded">
        <label
          for="countries"
          class="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900"
          >Product</label
        >
        <vue-select :reduce="(o) => o.id" @option:selected="updateSelectedProduct" :clearable="false" class="tw-bg-gray-50 tw-border-solid tw-outline-none  tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full"
          placeholder="All" :options="allProducts" label="name">
        </vue-select>
        <select
           v-if="false"
          @change="e=> $emit('update', {...filters, product_id: e.target.value})"
          :value="filters.product_id"
          class="tw-bg-gray-50 tw-border-solid tw-outline-none tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-orange-500 focus:tw-border-orange-500 tw-block tw-w-full tw-p-2.5"
        >
          <option value="all" >All</option>
          <option :value="p.id" class="tw-capitalize" v-for="p in products" :key="p.id">
            {{ p.name }}
          </option>
        </select>
      </div>
</template>

<script>
  import vueSelect from 'vue-select';

export default {
  components: {
      'vue-select': vueSelect
    },
    props: {
        filters: {
            required: true,
        },
        selectedSeller: {
          required: false,
          default: 'all'
        }

    },

    data() {
        return {
          localSelectedProduct: null,

        }
    },

    computed: {
        products() {
            let allProducts = this.$store.getters['product/products'];
            let selectedSellerNumber = Number(this.selectedSeller);

            let products;
            if (this.selectedSeller === 'all') {
              products = allProducts;
            } else {
              products = allProducts.filter(p => p.user_id === selectedSellerNumber);
            }
            return products;
        },
        fetched() {
            return this.$store.getters['product/fetched']
        },
        allProducts() {
        return [{ id: 'all', name: 'All' }, ...this.products]
      },
    },
    watch: {
      selectedSeller(newSeller, oldSeller) {
        if (newSeller !== oldSeller) {
          this.localSelectedProduct = null;
        }
    },
  },
    methods: {
        updateSelectedProduct(selectedOption) {
          this.localSelectedProduct = selectedOption;
          this.$emit('update', {...this.filters, product_id: selectedOption.id});
        }
      }
  }
</script>

<style>

</style>