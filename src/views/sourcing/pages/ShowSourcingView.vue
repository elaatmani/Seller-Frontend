<template>
  <SellerShowSourcingView v-if="user.role == 'seller'" />
  <AdminShowSourcingView v-if="user.role == 'admin'" />
</template>


<script setup>
import { useStore } from "vuex";
import SellerShowSourcingView from './seller/ShowSourcingView';
import AdminShowSourcingView from './admin/ShowSourcingView';
// import { useRoute } from "vue-router";
// import Sourcing from "@/api/Sourcing";

const store = useStore();
const user = store.getters['user/user'];
// const route = useRoute();

// Sourcing.get()

</script>