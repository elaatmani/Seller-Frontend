// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import ProductListView from '@/views/affiliate/pages/ProductListView'
import CreateProductView from '@/views/affiliate/pages/CreateProductView'



export default 
    {
        name: 'affiliate',
        path: '/affiliate',
        component: DefaultLayout,
        meta: {
            module: 'affiliate'
        },

        children: [

            // Adss routes
            { 
                name: 'affiliate.index',
                path: 'products',
                component: ProductListView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.index',
                    title: 'Affiliate Products',
                    role: ['admin', 'seller']
                }
            },
            { 
                name: 'affiliate.create',
                path: 'products/create',
                component: CreateProductView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.create',
                    title: 'Create Affiliate Product',
                    role: ['admin']
                }
            },
        ]
    }
