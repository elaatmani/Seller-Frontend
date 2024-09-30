// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import CronJobs from '@/views/settings/cronjobs/CronJobs'
import AccountView from '@/views/settings/AccountView'
import CreditsSeller from '@/views/settings/credits/CreditsSeller'
import WithdrawalMethodsView from '@/views/settings/WithdrawalMethodsView'


export default {

        path: '/settings',
        name: 'settings',
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
            name: 'settings/credit',
            path: '/settings/credit',
            component: CreditsSeller,
            meta: {
                module: 'settings',
                subModule: 'settings/credit',
                title: 'Crédits',
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
          },
          {
            path: 'withdrawal-methods',
            name: 'settings.seller.withdrawal-methods',
            component: WithdrawalMethodsView,
            meta: {
              module: 'settings',
              title: 'Settings',
              role: ['seller']
            }
          }
        ]
}
