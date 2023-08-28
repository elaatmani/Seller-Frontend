// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

import DashboardView from '@/views/newdashboards/admin/DashboardView'
import SellerDashboardView from '@/views/newdashboards/seller/DashboardView'
import DashboardAnalytics from '@/views/dashboardanalytics/DashboardAnalytics'

export default 
    {
        name: 'dashboards',
        path: '/dashboards',
        component: DefaultLayout,
        meta: {
            module: 'dashboards',
            gate: 'all'
        },

        children: [

            // Product routes
            { 
                name: 'dashboards/admin',
                path: 'admin',
                component: DashboardView,
                meta: {
                    module: 'dashboards',
                    subModule: 'dashboards/admin',
                    title: 'Dashboard',
                    gate: 'all'
                }
            },
            { 
                name: 'dashboards/seller',
                path: 'seller',
                component: SellerDashboardView,
                meta: {
                    module: 'dashboards',
                    subModule: 'dashboards/seller',
                    title: 'Dashboard',
                    gate: 'all'
                }
            },
            { 
                name: 'dashboards/analytics',
                path: '/analytics',
                component: DashboardAnalytics,
                meta: {
                    module: 'dashboards',
                    subModule: 'dashboards/analytics',
                    title: 'Dashboard Analytics',
                    gate: 'all'
                }
            }

        ]
    }
