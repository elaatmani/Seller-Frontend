// Layoout
import DefaultLayout from '@/layouts/default/DefaultLayout.vue'

// Views
import ProductResearchView from '@/views/affiliate/pages/ProductResearchView'
import ProductListView from '@/views/affiliate/pages/ProductListView'
import CreateProductView from '@/views/affiliate/pages/CreateProductView'
import EditProductView from '@/views/affiliate/pages/EditProductView'
import ImportListView from '@/views/affiliate/pages/ImportListView'
import WishlistView from '@/views/affiliate/pages/WishlistView'
import ShowProductView from '@/views/affiliate/pages/ShowProductView'
import ShowAffiliateProduct from '@/views/newproducts/ShowAffiliateProduct'
import ProductSellerListView from '@/views/affiliate/pages/ProductSellerListView'



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
                    role: ['admin', 'affiliate-manager']
                }
            },
            { 
                name: 'affiliate.admin.show',
                path: 'admin/products/:id',
                component: ShowAffiliateProduct,
                meta: {
                    module: 'product',
                    subModule: 'affiliate.admin.show',
                    title: 'Affiliate Product',
                    role: ['admin', 'affiliate-manager']
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
                    role: ['admin', 'affiliate-manager']
                }
            },

            { 
                name: 'affiliate.admin.edit',
                path: 'admin/products/:id/edit',
                component: EditProductView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.edit',
                    title: 'Edit Affiliate Product',
                    role: ['admin', 'affiliate-manager']
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
                    role: ['admin', 'seller', 'affiliate-manager']
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
                    role: ['admin', 'seller', 'affiliate-manager']
                }
            },
            { 
                name: 'affiliate.show.sellers',
                path: 'products/:id/sellers',
                component: ProductSellerListView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.show.sellers',
                    title: 'Product Sellers',
                    role: ['admin', ]
                }
            },
            { 
                name: 'affiliate.import',
                path: 'products/imported',
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
                path: 'products/wishlisted',
                component: WishlistView,
                meta: {
                    module: 'affiliate',
                    subModule: 'affiliate.wishlist',
                    title: 'My wishlist',
                    role: ['admin', 'seller']
                }
            },
        ]
    }
