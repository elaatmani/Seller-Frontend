// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import CronJobs from '@/views/settings/cronjobs/CronJobs'
import AccountView from '@/views/settings/AccountView'


export default {

        path: '/settings',
        name: 'home',
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
                role: 'admin'
            }
        },
          {
            path: 'account',
            name: 'settings.account',
            component: AccountView,
            meta: {
              module: 'settings',
              title: 'Settings',
              role: 'admin'
            }
          }
        ]
}
