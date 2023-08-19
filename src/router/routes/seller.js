// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views

import SellerSales from '@/views/seller/SellerSales'



export default 
    {
        name: 'seller',
        path: '/seller/list',
        component: DefaultLayout,
        meta: {
            module: 'seller'
        },

        children: [

            // Product routes
            { 
                name: 'seller/list',
                path: '',
                component: SellerSales,
                meta: {
                    module: 'sellersale',
                    subModule: 'seller/list',
                    title: 'Seller List',
                    gate: 'show_seller_sales'
                }
            },

        ]
    }
