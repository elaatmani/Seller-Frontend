<template>
    <div v-if="isLoaded" class="tw-text-emerald-600 tw-text-sm tw-font-semibold tw-rounded ">
        {{ currency }}{{ parseFloat(paidtobe.tobepaid).toFixed(2) }} 
    </div>
    <div v-else >
        <v-icon size="medium" class="tw-animate-spin" color="green"
            >mdi-loading</v-icon
        >
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Factorisation from "@/api/Factorisation";
import {currency} from "@/config/config";

const store = useStore();
const isLoaded = ref(false);



const gettobepaid = () => {
Factorisation.sumToBePaid()
    .then((res) => {
    if (res.data.code == "SUCCESS") {
        store.dispatch("app/settobepaid", res.data.data.totalPrice);
        console.log( parseFloat(res.data.data.totalPrice).toFixed(2) );
    }
    })
    .catch((error) => {
    // Assuming you have a method to handle API errors
    console.error("API Error", error);
    })
    .finally(() => {
    isLoaded.value = true;
    });
};
onMounted(() => {
gettobepaid();
});

const paidtobe = computed(() => store.getters["app/factorisations"]);
</script>

<style></style>
