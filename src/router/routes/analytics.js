// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import SellerAnalyticsView from '@/views/analytics/SellersAnalyticsView'



export default 
    {
        name: 'analytics.admin',
        path: '/admin/analytics',
        component: DefaultLayout,
        meta: {
            module: 'analytics'
        },

        children: [

            // Adss routes
            { 
                name: 'analytics.admin.sellers',
                path: 'sellers',
                component: SellerAnalyticsView,
                meta: {
                    module: 'analytics',
                    subModule: 'analytics.admin.sellers',
                    title: 'Analytics',
                    role: ['admin']
                }
            },
        ]
    }
