// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

import DashboardView from '@/views/newdashboards/admin/DashboardView'
import SellerDashboardView from '@/views/newdashboards/seller/DashboardView'
import DashboardAnalytics from '@/views/dashboardanalytics/DashboardAnalytics'
import AgentDashboard from '@/views/newdashboards/agent/AgentDashboard'
import DashboardKpiAgente from '@/views/newdashboards/admin/kpiagente/DashboardKpiAgente'

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
                    gate: 'show_all_ads'
                }
            },
            { 
                name: 'dashboards/agent',
                path: 'agent',
                component: AgentDashboard,
                meta: {
                    module: 'dashboards',
                    subModule: 'dashboards/agent',
                    title: 'Dashboard',
                    gate: 'all'
                }
            },
            { 
                name: 'dashboards/admin/agentes',
                path: 'admin/agentes',
                component: DashboardKpiAgente,
                meta: {
                    module: 'dashboards',
                    subModule: 'admin/agentes',
                    title: 'Agentes',
                    role: 'admin'
                }
            },

        ]
    }
