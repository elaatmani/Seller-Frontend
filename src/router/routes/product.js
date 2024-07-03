// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import ProductListView from '@/views/product/ProductListView'
import IndexProducts from '@/views/newproducts/IndexProducts'
import ShowAffiliateProduct from '@/views/newproducts/ShowAffiliateProduct'
import AddProductView from '@/views/product/AddProductView'
import UpdateProductView from '@/views/product/UpdateProductView'
import ShowProductView from '@/views/product/ShowProductView'

import SellerSupplyRequestView from '@/views/product/seller/SupplyRequestView'
import AdminSupplyRequestView from '@/views/product/admin/SupplyRequestView'

export default 
    {
        name: 'products',
        path: '/products',
        component: DefaultLayout,
        meta: {
            module: 'product'
        },

        children: [

            // Product routes
            { 
                name: 'product/list',
                path: '',
                component: ProductListView,
                meta: {
                    module: 'product',
                    subModule: 'product/list',
                    title: 'Products List',
                    gate: 'show_all_products'
                }
            },
            { 
                name: 'product/newlist',
                path: '/newproducts',
                component: IndexProducts,
                meta: {
                    module: 'product',
                    subModule: 'product/newlist',
                    title: 'Products List',
                    gate: 'show_all_products'
                }
            },
            { 
                name: 'product/newlist/show',
                path: '/newproducts/:id',
                component: ShowAffiliateProduct,
                meta: {
                    module: 'product',
                    subModule: 'product/newlist/show',
                    title: 'Affiliate Product',
                    gate: 'show_all_products'
                }
            },
            { 
                name: 'product/add',
                path: 'add',
                component: AddProductView,
                meta: {
                    module: 'product',
                    subModule: 'product/add',
                    title: 'Add Product',
                    gate: 'create_product'
                }
            },

            { 
                name: 'product/seller/request',
                path: 'seller/request',
                component: SellerSupplyRequestView,
                meta: {
                    module: 'product',
                    subModule: 'product/seller/request',
                    title: 'Supply Request',
                    gate: 'access_to_seller_sales'
                }
            },
            { 
                name: 'product/admin/request',
                path: 'admin/request',
                component: AdminSupplyRequestView,
                meta: {
                    module: 'product',
                    subModule: 'product/admin/request',
                    title: 'Supply Request',
                    gate: 'access_to_sales'
                }
            },

            { 
                name: 'product/update',
                path: 'update/:id',
                component: UpdateProductView,
                meta: {
                    module: 'product',
                    subModule: 'product/update',
                    title: 'Update Product',
                    gate: 'update_product'
                }
            },

            { 
                name: 'product/show',
                path: ':id',
                component: ShowProductView,
                meta: {
                    module: 'product',
                    subModule: 'product/show',
                    title: 'Product Informations',
                    gate: 'view_product'
                }
            },

        ]
    }
