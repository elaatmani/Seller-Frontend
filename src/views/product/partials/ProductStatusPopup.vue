<template>
    <div>
      <popup-full @cancel="$emit('cancel')" :visible="visible">
        <div
          class="md:tw-w-[80%] tw-w-[95%] tw-px-5 tw-max-w-[750px] tw-mx-auto tw-my-3 tw-min-h-fit tw-bg-white tw-rounded-lg tw-shadow-lg tw-py-5"
        >
          <h1 class="tw-text-lg">Update Product Status</h1>
  
          <div class="tw-grid tw-grid-cols-12 tw-gap-y-1 tw-gap-x-3 mt-5">
            <div class="tw-w-full tw-col-span-6">
              <!-- <div class="mb-1 text-body-2 tw-text-zinc-700">Status</div> -->
              <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-w-fit tw-scale-75">
                <input :disabled="isLoadingStatus" v-model="currentStatus" type="checkbox" class="tw-sr-only tw-peer" />
                <div
                    class="tw-flex tw-items-center peer-checked:tw-bg-emerald-500 tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600">
                </div>
            </label>
            <v-icon v-if="isLoadingStatus" color="green" size="small" class="tw-animate-spin">mdi-loading</v-icon>
              
            </div>
  
 
  
            <div class="tw-w-full tw-col-span-12">
              <div class="mb-1 text-body-2 tw-text-zinc-700">Note</div>
  
              <textarea
                :hide-details="true"
                clearable
                clear-icon="mdi-close"
                v-model="note"
                variant="outlined"
                density="compact"
                cols="30"
                rows="5"
                color="primary-color"
                class="tw-rounded-lg tw-px-3 tw-py-1 tw-outline-none tw-w-full tw-border tw-border-solid tw-border-neutral-400 focus:tw-border-orange-500"
              >
              </textarea>
            </div>
          </div>
  
          <div class="tw-flex tw-gap-2 mt-3 mb-2 tw-justify-end">
            <v-btn
              @click="$emit('cancel')"
              color="grey-darken-2"
              variant="flat"
              class="text-capitalize"
            >
              <span class="text-white"> Cancel </span>
            </v-btn>
            <v-btn
              :loading="isLoading"
              @click="update"
              color="primary-color"
              variant="flat"
              class="text-capitalize"
            >
              <span class="text-white"> Update </span>
            </v-btn>
          </div>
        </div>
      </popup-full>
    </div>
  </template>
  
  <script>
  import Product from "@/api/Product";
  
  export default {
    components: {},
    props: ["product", "visible"],
    data() {
      return {
        isLoading: false,
        isLoadingStatus: false,
        
        currentStatus:false,
        note:''
       
      };
    },
  
    computed: {
    },
  
    methods: {
      update() {
        this.isLoading = true;
        const product = {status:this.currentStatus , note:this.note};
        Product.updateStatus(this.product.id, product)
          .then((res) => {
            if (res.data.code == "PRODUCT_UPDATED") {
              this.$alert({
                type: "success",
                title: res.data.message,
              });
              this.$store.dispatch("product/setProduct", res.data.data.product);
              this.$emit("cancel");
            }
  
            if (res.data.code == "PRODUCT_NOT_UPDATED") {
              this.$alert({
                type: "warning",
                title: res.data.message,
              });
            }
          })
          .catch((err) => {
            this.$handleApiError(err);
          })
          .finally(() => (this.isLoading = false));
      },
    },
  
    mounted() {
      this.Product = { ...this.product };
      this.currentStatus = this.product.status == 1 ? true : false;
      this.note = this.product.note;
    },
  };
  </script>
  
  <style></style>
  