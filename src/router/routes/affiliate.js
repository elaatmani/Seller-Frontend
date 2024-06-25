// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import ProductResearchView from '@/views/affiliate/pages/ProductResearchView'
import ProductListView from '@/views/affiliate/pages/ProductListView'
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
                name: 'affiliate.admin.list',
                path: 'admin/products',
                component: ProductListView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.admin.list',
                    title: 'Affiliate Products',
                    role: ['admin']
                }
            },
            { 
                name: 'affiliate.admin.create',
                path: 'admin/products/create',
                component: CreateProductView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.create',
                    title: 'Create Affiliate Product',
                    role: ['admin']
                }
            },
            
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

            { 
                name: 'affiliate.wishlist',
                path: 'products/wishlist',
                component: ImportListView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.wishlist',
                    title: 'My wishlist',
                    role: ['admin', 'seller']
                }
            },
        ]
    }
