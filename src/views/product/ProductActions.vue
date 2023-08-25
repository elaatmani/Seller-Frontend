<template>
  <div class="tw-flex tw-items-center tw-gap-1">
    <v-btn @click="showStatusPopup=true" v-if="$can(`update_product`) && this.user.role=='admin'"  class="mr-2 !tw-px-0 !tw-py-0" min-height="25px" min-width="30" color="green" variant="flat" density="comfortable" :ripple="false" size="small">
      <v-icon ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 2C11.8 2 11.6 2.1 11.4 2.2L3.5 6.6C3.2 6.8 3 7.1 3 7.5V16.5C3 16.9 3.2 17.2 3.5 17.4L11.4 21.8C11.6 21.9 11.8 22 12 22S12.4 21.9 12.6 21.8L13.5 21.3C13.2 20.7 13.1 20 13 19.3V12.6L19 9.2V13C19.7 13 20.4 13.1 21 13.3V7.5C21 7.1 20.8 6.8 20.5 6.6L12.6 2.2C12.4 2.1 12.2 2 12 2M12 4.2L18 7.5L16 8.6L10.1 5.2L12 4.2M8.1 6.3L14 9.8L12 10.9L6 7.5L8.1 6.3M5 9.2L11 12.6V19.3L5 15.9V9.2M21.3 15.8L17.7 19.4L16.1 17.8L15 19L17.8 22L22.6 17.2L21.3 15.8Z" fill="white"/></svg></v-icon>
      <!-- <span class="text-white text-capitalize">Edit</span> -->
    </v-btn>
    <v-btn :to="'/products/update/' + product.id" v-if="$can(`update_product`)" class="mr-2 !tw-px-0 !tw-py-0" min-height="25px" min-width="30" color="orange" variant="flat" density="comfortable" :ripple="false" size="small">
      <v-icon color="white">mdi-pencil-outline</v-icon>
      <!-- <span class="text-white text-capitalize">Edit</span> -->
    </v-btn>
    <v-btn :to="'/products/' + product.id"  v-if="$can(`view_product`)" class="mr-2 !tw-px-0 !tw-py-0" min-height="25px" min-width="30" color="blue" variant="flat" density="comfortable" :ripple="false" size="small">
      <v-icon color="white">mdi-eye-outline</v-icon>
      <!-- <span class="text-white text-capitalize">View</span> -->
    </v-btn>
    <v-btn @click="showPopup = true" v-if="$can(`delete_product`)" class="mr-2 !tw-px-0 !tw-py-0" min-height="25px" min-width="30" color="red" variant="flat" density="comfortable" :ripple="false" size="small">
      <v-icon color="white">mdi-delete-outline</v-icon>
      <!-- <span class="text-white text-capitalize">Delete</span> -->
    </v-btn>

    <popup type="warning" title="Warning" body="<p>Are you sure you want to delete this product?</p> You won't be able to revert this!" :loading="isLoading" :visible="showPopup" @resolved="handleResolved" />


      <div v-if="showStatusPopup">
        <ProductStatusPopup v-model:visible="showStatusPopup" @cancel="showStatusPopup = false" :product="product"  />
    </div>
  </div>
</template>
<script>
import Product from '@/api/Product';
import ProductStatusPopup from "@/views/product/partials/ProductStatusPopup";
// myVue.vue

// your vue component
export default {
  // access any cell properties here
  components:{ProductStatusPopup},
  props: ["rowIndex", "product"],
  name: "productActions",
  data() {
    return {
      showStatusPopup:false,
      showPopup: false,
      isLoading: false
    };
  },
  computed: {

    user() {
            return this.$store.getters['user/user']
        },
  },
  methods: {
    handleResolved(response) {
      if(response) {
        this.isLoading = true
        Product.delete(this.product.id)
        .then((res) => {
          if (res.data.code == 'PRODUCT_DELETED') {
            this.isLoading = false
            this.$alert({
              type: 'success',
              title: 'Product Deleted Successfully'
            })
          }
          Product.all().then(res => {
            if(res.data.code == 'SUCCESS') {
              this.$store.dispatch('product/setProducts', res.data.data.products)
            }
          }).catch(this.$handleApiError)

        })
        .catch(this.$handleApiError)
        .finally(() => {
          this.isLoading = false
          this.showPopup = false
        });
      } else {
        this.showPopup = false
      }
    }
  }
};
</script>