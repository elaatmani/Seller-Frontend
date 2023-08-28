<template>
    <div class="tw-pb-40">
      <div class="tw-space-y-3">


          <IndexFilters @update="f => filters= f" @filter="handleFilter" />

          <IndexAnalytics :analytics="analytics" :fetching="fetching"/>
          
    
  
      </div>
    </div>
  </template>

  <script>
    import IndexAnalytics from '@/views/dashboardanalytics/partials/analytics/IndexAnalytics'
    import IndexFilters from '@/views/newdashboards/admin/partials/filters/IndexFilters'

    
    import Admin from '@/api/Admin';
    
    export default {
        components: { IndexAnalytics, IndexFilters},
    
        data() {
            return {
                filters: null,
                analytics: null,
                fetching: true,

                // analytics:[
                //    
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Confirmed',
                //         percentage : 100,
                //         icon : 'mdi-phone-check'
                //     },
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Delivered',
                //         percentage : 100,
                //         icon : 'mdi-truck-check'
                //     },
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Total Spend',
                //         percentage : 100,
                //         icon : 'mdi-cash-multiple'
                //     },
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Cost per lead',
                //         percentage : 100,
                //         icon : 'mdi-account'
                //     },
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Cost per delivered',
                //         percentage : 100,
                //         icon : 'mdi-truck-delivery-outline'
                //     },
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Profit per order',
                //         percentage : 100,
                //         icon : 'mdi-package-variant-closed'
                //     }
                //     ,
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'Aov',
                //         percentage : 100,
                //         icon : 'mdi-currency-usd-off'
                //     }
                //     ,
                //     {
                //         color : 'rgb(16, 185, 129)',
                //         title : 'turnover',
                //         percentage : 100,
                //         icon : 'mdi-cash-marker'
                //     }
                // ]
                
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
               
                Admin.analytics(this.filters)
                .then(res => {
                    if(res.data.code == 'SUCCESS') {
             
                        this.analytics = res.data.data.analytics.analytics;
          
                        
                        this.fetching = false;
                    }
                 
                })
                .catch(this.$handleApiError);
            }
        },
    
        mounted() {
            if(this.user.role != 'admin') this.$router.push({name: '404'});
           
        }
    }
    </script>
    
    <style>
    
    </style>