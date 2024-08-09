// ---------------------------------------------------------------------------
// link structure
//   - id
//   - title
//   - hasChildren: has any sub links ? true/false
//   - module: should be same as meta.module in router
//   - icon: 
//     - type: icon/svg
//     - value: mdi icon name or svg path **it should be in public folder** 
// 
// Sublink structure
//   - id
//   - subModule: same as in meta.subModule in router children 
//   - title
//   - to
// 
// 
// ---------------------------------------------------------------------------

export const disabled_links = [4, 6, 7];

export const links = [

    {
        id: 1,
        title: 'Dashboard',
        module: 'dashboard',
        hasChildren: true,
        gate: 'all',
        icon: {
            type: 'icon',
            value: 'mdi-chart-box-outline'
        },
        children: [
            {
                id: 1,
                title: 'Overview',
                subModule: 'dashboard/dashboard',
                gate: 'all',
                to: '/'
            },
            {
                id: 2,
                title: 'Finance',
                subModule: 'dashboard/analytics',
                role: ['admin'],
                to: '/analytics'
            },
        ]
    },

    {
        id: 1,
        title: 'Analytics',
        module: 'analytics',
        hasChildren: true,
        role: ['admin'],
        icon: {
            type: 'icon',
            value: 'mdi-chart-arc'
        },
        children: [
            {
                id: 1,
                title: 'Sellers',
                subModule: 'analytics.admin.sellers',
                gate: 'all',
                to: '/admin/analytics/sellers'
            },
        ]
    },

    {
        id: 2,
        module: 'sourcing',
        title: 'Sourcing',
        hasChildren: true,
        role: ['admin', 'seller'], 
        icon: {
            type: 'icon',
            value: 'mdi-truck-outline'
        },
        children: [
            {
                id: 1,
                title: 'Request a new product',
                subModule: 'sourcing/new',
                role: ['seller'],
                to: '/sourcings/new'
            },
            {
                id: 2,
                title: 'All Requests',
                subModule: 'sourcing/index',
                role: ['seller', 'admin'],
                to: '/sourcings'
            },
        ]
    },
    {
        id: 2,
        module: 'product',
        title: 'Product',
        hasChildren: true,
        gate: 'access_to_products', 
        icon: {
            type: 'svg',
            value: 'assets/img/icons/product.svg'
        },
        children: [
            {
                id: 1,
                title: 'Products List',
                subModule: 'product/list',
                gate: 'show_all_products',
                to: '/products'
            },
            {
                id: 2,
                title: 'New Products List',
                subModule: 'product/newlist',
                gate: 'show_all_products',
                to: '/newproducts'
            },
            {
                id: 3,
                title: 'Add Product',
                subModule: 'product/add',
                gate: 'create_product',
                to: '/products/add'
            },
            {
                id: 4,
                title: 'Supply Requests',
                subModule: 'product/seller/request',
                gate: 'access_to_seller_sales',
                to: '/products/seller/request'
            },
            {
                id: 5,
                title: 'Supply Requests',
                subModule: 'product/admin/request',
                gate: 'access_to_sales',
                to: '/products/admin/request'
            },
        ]
    },

    {
        id: 3,
        module: 'track',
        title: 'Tracking',
        hasChildren: true,
        gate: 'none', 
        icon: {
            type: 'icon',
            value: 'mdi-radar'
        },
        children: [
            {
                id: 1,
                title: 'Deliveries',
                subModule: 'track/delivery',
                gate: 'none',
                to: '/tracking/delivery'
            },
        ]
    },

    {
        id: 4,
        module: 'sale',
        title: 'Sales',
        hasChildren: true,
        gate: 'access_to_sales', 
        icon: {
            type: 'icon',
            value: 'mdi-sale'
        },
        children: [
            {
                id: 1,
                title: 'Sales list',
                subModule: 'sale/list',
                gate: 'show_all_sales',
                to: '/sales'
            },
            {
                id: 2,
                title: 'Expidation',
                subModule: 'sale/expidation',
                gate: 'show_all_expidations',
                to: '/sales/expidation'
            },
            {
                id: 3,
                title: 'Shipping',
                subModule: 'sale/shipping',
                gate: 'show_all_expidations',
                to: '/sales/shipping'
            },
            {
                id: 4,
                title: 'Follow Up',
                subModule: 'sale/followup',
                gate: 'show_all_expidations',
                to: '/sales/followup'
            }
        ]
    },

    {
        id: 10,
        module: 'sellersale',
        title: 'Seller Sales',
        hasChildren: true,
        gate: 'access_to_seller_sales', 
        icon: {
            type: 'icon',
            value: 'mdi-sale'
        },
        children: [
            {
                id: 1,
                title: 'Seller Sales',
                subModule: 'seller/list',
                gate: 'show_seller_sales',
                to: '/seller/list'
            },
        ]
    },

    {
        id: 5,
        module: 'factorisation',
        title: 'Factorisation',
        hasChildren: true,
        gate: 'access_to_factorisations', 
        icon: {
            type: 'icon',
            value: 'mdi-note-multiple'
        },
        children: [
            // {
            //     id: 1,
            //     title: 'Factorisation list',
            //     subModule: 'factorisation/list',
            //     gate: 'show_all_factorisations',
            //     to: '/factorisations'
            // },
            {
                id: 1,
                title: 'Factorisation list',
                subModule: 'factorisation/list',
                gate: 'show_all_factorisations',
                to: '/factorisations'
            }
        ]
    },

    {
        id: 20,
        module: 'ads',
        title: 'Ads',
        hasChildren: true,
        gate: 'access_to_ads', 
        icon: {
            type: 'icon',
            value: 'mdi-google-ads'
        },
        children: [
            {
                id: 1,
                title: 'Ads list',
                subModule: 'ads/list',
                gate: 'show_all_factorisations',
                to: '/ads'
            },
        ]
    },

    {
        id: 10,
        module: 'affiliate',
        title: 'Affiliate',
        hasChildren: true,
        gate: 'manage_affiliate_products', 
        role: ['admin', 'seller', 'affiliate-manager'], 
        icon: {
            type: 'icon',
            value: 'mdi-bookshelf'
        },
        children: [
            {
                id: 1,
                title: 'All Products',
                subModule: 'affiliate.admin.list',
                // role: ['admin'],
                // gate: 'manage_affiliate_product',
                to: { name: 'affiliate.admin.list' }
            },
            {
                id: 2,
                title: 'Create new product',
                subModule: 'affiliate.admin.create',
                role: ['admin', 'affiliate-manager'],
                gate: 'manage_affiliate_products',
                to: { name: 'affiliate.admin.create' }
            },
            {
                id: 3,
                title: 'Winning Products',
                subModule: 'affiliate.index',
                role: ['admin', 'seller', 'affiliate-manager'],
                gate: 'access_to_affiliate',
                to: { name: 'affiliate.index' }
            },
            {
                id: 4,
                title: 'Import list',
                subModule: 'affiliate.import',
                role: ['admin', 'seller'],
                gate: 'access_to_affiliate',
                to: { name: 'affiliate.import' }
            },
            {
                id: 5,
                title: 'My wishlist',
                subModule: 'affiliate.wishlist',
                role: ['admin', 'seller'],
                gate: 'access_to_affiliate',
                to: { name: 'affiliate.wishlist' }
            },
        ]
    },


    {
        id: 6,
        module: 'order',
        title: 'Orders',
        hasChildren: true,
        gate: 'access_to_orders', 
        icon: {
            type: 'icon',
            value: 'mdi-barcode-scan'
        },
        children: [
            {
                id: 1,
                title: 'Order',
                subModule: 'order/show',
                gate: 'show_all_orders',
                to: '/order'
            },
            {
                id: 2,
                title: 'My Orders',
                subModule: 'order/list',
                gate: 'show_all_orders',
                to: '/orders'
            },
            {
                id: 3,
                title: 'Confirmed Orders',
                subModule: 'order/confirmed',
                gate: 'show_all_orders',
                to: '/orders/confirmed'
            },
        ]
    },

    {
        id: 7,
        module: 'delivery',
        title: 'Orders',
        hasChildren: true,
        gate: 'access_to_delivery', 
        icon: {
            type: 'icon',
            value: 'mdi-bike'
        },
        children: [
            {
                id: 1,
                title: 'Orders List',
                subModule: 'delivery/list',
                gate: 'show_all_deliveries',
                to: '/deliveries'
            },
            {
                id: 2,
                title: 'Orders Delivered',
                subModule: 'delivery/delivered',
                gate: 'show_all_deliveries',
                to: '/delivered'
            },
        ]
    },

    {
        id: 8,
        module: 'inventory',
        title: 'Inventory',
        hasChildren: true,
        gate: 'access_to_inventory x', 
        icon: {
            type: 'icon',
            value: 'mdi-warehouse'
        },
        children: [
            {
                id: 1,
                title: 'Inventory State',
                gate: 'show_all_inventory_states',
                subModule: 'inventory/state',
                to: '/inventories'
            },
            {
                id: 2,
                title: 'Inventory Movements',
                gate: 'show_all_inventory_movements',
                subModule: 'inventory/movements',
                to: '/inventories/movements'
            },
            {
                id: 4,
                title: 'Add Movement',
                gate: 'create_inventory_movement',
                subModule: 'inventory/add',
                to: '/inventories/add'
            }
        ]
    },

    {
        id: 9,
        module: 'shop',
        title: 'Shop',
        hasChildren: true,
        gate: 'access_to_shop', 
        icon: {
            type: 'icon',
            value: 'mdi-store'
        },
        children: [
            {
                id: 1,
                title: 'Shop List',
                gate: 'show_all_shops',
                subModule: 'shop/list',
                to: '/shops'
            },
            {
                id: 2,
                title: 'Add Shop',
                gate: 'create_shop',
                subModule: 'shop/add',
                to: '/shops/add'
            }
        ]
    },
    {
        id: 10,
        module: 'warehouse',
        title: 'Warehouses',
        hasChildren: true,
        gate: 'access_to_warehouse', 
        icon: {
            type: 'icon',
            value: 'mdi-home-group'
        },
        children: [
            {
                id: 1,
                title: 'Warehouses list',
                subModule: 'warehouse/list',
                gate: 'show_all_warehouses',
                to: '/warehouses'
            },
        ]
    },
    {
        id: 11,
        title: 'Users',
        module: 'user',
        gate: 'access_to_users',
        hasChildren: true,
        icon: {
            type: 'svg',
            value: 'assets/img/icons/users1.svg'
        },
        children: [
            {
                id: 1,
                title: 'Users List',
                subModule: 'user/list',
                gate: 'show_all_users',
                to: '/users'
            },
            {
                id: 2,
                title: 'Add User',
                subModule: 'user/add',
                gate: 'create_user',
                to: '/users/add'
            },
            {
                id: 3,
                title: 'Roles List',
                subModule: 'user/roles',
                gate: 'show_all_roles',
                to: '/users/roles'
            },
            {
                id: 4,
                title: 'Add Role',
                subModule: 'user/addRole',
                gate: 'create_role',
                to: '/users/addRole'
            }
        ]
    },

    {
        id: 15,
        title: 'Sheets',
        module: 'sheets',
        to: '/sheets',
        gate: 'access_to_sheets',
        hasChildren: false,
        icon: {
            type: 'icon',
            value: 'mdi-note-text-outline'
        }
    },

    {
        id: 15,
        title: 'Alerts',
        module: 'alert',
        role: ['admin'],
        to: "/alerts",
        icon: {
            type: 'icon',
            value: 'mdi-bell-alert-outline'
        }
    },
    {
        id: 16,
        title: 'Scanner',
        module: 'scanner',
        to: '/scanner',
        role: 'admin',
        gate: 'stock_management',
        hasChildren: false,
        icon: {
            type: 'icon',
            value: 'mdi-qrcode'
        }
    },

    {
        id: 12,
        title: 'Settings',
        module: 'settings',
        role: ['admin', 'seller'],
        hasChildren: true,
        icon: {
            type: 'svg',
            value: 'assets/img/icons/settings.svg'
        },
        children: [
            {
                id: 1,
                title: 'Cron Jobs',
                subModule: 'settings/cronJobs',
                role: 'admin',
                to: '/settings/cronJobs'
            },
            {
                id: 2,
                title: 'Account',
                subModule: 'settings/account',
                role: 'admin',
                to: '/settings/account'
            },
            {
                id: 3,
                title: 'Withdrawal methods',
                subModule: 'settings/account',
                role: ['admin', 'seller'],
                to: { name: 'settings.seller.withdrawal-methods' }
            },
        ]
    },

    {
        id: 13,
        title: 'Orders',
        module: 'followup',
        to: '/followup',
        hasChildren: false,
        gate: 'follow_up_orders',
        icon: {
            type: 'icon',
            value: 'mdi-package-variant-closed'
        }
    },

    // {
    //     id: 10,
    //     title: 'Test',
    //     module: 'test',
    //     to: '/test',
    //     hasChildren: false,
    //     gate: 'all',
    //     icon: {
    //         type: 'icon',
    //         value: 'mdi-hammer-wrench'
    //     }
    // }
]