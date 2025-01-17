import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
import DashboardView from '@/views/dashboard/DashboardView.vue'
import NotificationView from '@/views/NotificationView.vue'



export default {

        path: '/',
        name: 'home',
        component: DefaultLayout,
        meta: {
          module: 'dashboard'
        },
        children: [
          {
            path: '',
            name: 'dashboard',
            component: DashboardView,
            meta: {
              module: 'dashboard',
              title: 'Dashboard',
              gate: 'all'
            }
          },
          {
            path: '/notifications',
            name: 'notifications',
            component: NotificationView,
            meta: {
              module: 'notification',
              title: 'Notifications',
              gate: 'all'
            }
          },
        ]
}