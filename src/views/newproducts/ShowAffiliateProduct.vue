<template>
    <div>

    </div>
</template>

<script setup>
import Affiliate from "@/api/Affiliate";
import { useRoute } from "vue-router";

const route = useRoute();

Affiliate.details(route.params.id)

</script>

<style>

</style>