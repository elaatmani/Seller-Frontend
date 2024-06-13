// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import ProductResearchView from '@/views/affiliate/pages/ProductResearchView'
import CreateProductView from '@/views/affiliate/pages/CreateProductView'
import ImportListView from '@/views/affiliate/pages/ImportListView'
import ShowProductView from '@/views/affiliate/pages/ShowProductView'



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
                component: ProductResearchView,
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
            { 
                name: 'affiliate.show',
                path: 'products/:id',
                component: ShowProductView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.show',
                    title: 'Product Details',
                    role: ['admin', 'seller']
                }
            },
            { 
                name: 'affiliate.import',
                path: 'products/import',
                component: ImportListView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.import',
                    title: 'Import List',
                    role: ['admin', 'seller']
                }
            },
        ]
    }
