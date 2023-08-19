<template>
  <div class="tw-pb-40">
    <div class="tw-space-y-3">

        <IndexFilters @update="f => filters= f" @filter="handleFilter" />

        <IndexRevenue :statistics="statistics" :fetching="fetching" />
        
        <IndexStatistics :statistics="statistics" :fetching="fetching" />        

    </div>
  </div>
</template>

<script>
import IndexStatistics from '@/views/newdashboards/seller/partials/statistics/IndexStatistics'
import IndexFilters from '@/views/newdashboards/seller/partials/filters/IndexFilters'
import IndexRevenue from '@/views/newdashboards/seller/partials/statistics/IndexRevenue'

import Seller from '@/api/Seller';

export default {
    components: {IndexStatistics, IndexFilters, IndexRevenue },

    data() {
        return {
            filters: null,
            statistics: null,
            fetching: true,
        }
    },

    computed: {
        user() {
            return this.$store.getters['user/user'];
        }
    },

    methods: {
        handleFilter() {
            this.fetching = true;
            Seller.statistics(this.filters)
            .then(res => {
                if(res.data.code == 'SUCCESS') {
                    this.statistics = res.data.data.statistics;
                    this.fetching = false;
                }
            })
            .catch(this.$handleApiError);
        }
    },

    mounted() {
        if(this.user.role != 'seller') this.$router.push({name: '404'});
    }
}
</script>

<style>

</style>