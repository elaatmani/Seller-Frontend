// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import CronJobs from '@/views/settings/cronjobs/CronJobs'


export default 
    {
        name: 'settings',
        path: '/settings',
        component: DefaultLayout,
        meta: {
            module: 'settings'
        },

        children: [
            { 
                name: 'settings/cronJobs',
                path: '/settings/cronJobs',
                component: CronJobs,
                meta: {
                    module: 'settings',
                    subModule: 'settings/cronJobs',
                    title: 'Cron Jobs',
                    gate: 'access_to_account'
                }
            },

        ]
    }
