import { createRouter, createWebHistory } from 'vue-router'
import beforeEach from './beforeEach'

// Routes
import auth from './routes/auth'
import main from './routes/main'
import product from './routes/product'
import user from './routes/user'
import sale from './routes/sale'
// import order from './routes/order'
import agent from './routes/agent'
import delivery from './routes/delivery'
import inventory from './routes/inventory'
import scanner from './routes/scanner'

import shop from './routes/shop'
import warehouse from './routes/warehouse'
import factorisation from './routes/factorisation'
import sheet from './routes/sheet'
import ads from './routes/ads'
import seller from './routes/seller'
import followup from './routes/followup'
import dashboard from './routes/dashboard'
import sourcing from './routes/sourcing'
import settings from './routes/settings'
import alert from './routes/alert'
import affiliate from './routes/affiliate'
import analytics from './routes/analytics'

import DefaultLayout from '@/layouts/default/DefaultLayout.vue'
import NotFound from '@/views/NotFound'
import TestView from '@/views/TestView'

const routes = [
  auth,
  ads,
  dashboard,
  product,
  user,
  sale,
  // order,
  agent,
  delivery,
  inventory,
  shop,
  warehouse,
  factorisation,
  sheet,
  followup,
  seller,
  sourcing,
  main,
  settings,
  alert,
  scanner,
  affiliate,
  analytics,


  {
    name: 'default',
    path: '/test',
    component: DefaultLayout,
    children: [
      {
        name: 'test',
        path: '',
        component: TestView,
        meta: {
          title: 'Test abro m3a rasek',
          module: 'test',
          gate: 'all'
        }
      }
    ]
  },

  {
    name: 'not-found',
    path: '/404',
    component: DefaultLayout,
    meta: {
      title: 'Not Found',
    },
    children: [
      {
        name: '404',
        path: '',
        component: NotFound
      }
    ]
  },
  {
    name: 'catch-all',
    path: '/:pathMatch(.*)',
    beforeEnter: (to, from, next) => {
      return next({ name: '404' })
    },
    meta: {
      title: 'Not Found'
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from) => beforeEach(to, from, router));

export default router
