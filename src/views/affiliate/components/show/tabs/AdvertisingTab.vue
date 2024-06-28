<template>
    <div class="tw-min-h-[300px] tw-p-2x">
        <div class="">
            <MediaCollection collection="facebook_ads" label="Facebook" />
            <MediaCollection collection="tiktok_ads" label="TikTok" />
        </div>
    </div>
</template>

<script setup>
import MediaCollection from '@/views/affiliate/components/media/MediaCollection'
import { inject } from 'vue';

const product = inject('product');product
</script>

<style>

</style>