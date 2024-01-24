import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
import AccountView from '@/views/settings/AccountView'
import GeneralView from '@/views/settings/GeneralView'


export default {

        path: '/settings',
        name: 'home',
        component: DefaultLayout,
        meta: {
          module: 'settings'
        },
        children: [
          {
            path: '',
            name: 'settings.general',
            component: GeneralView,
            meta: {
              module: 'settings',
              title: 'General',
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