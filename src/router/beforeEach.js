import store from '@/store'
import User from '@/api/User';
import app from '@/main.js'

/* eslint-disable*/
export default function (to, from, router) {

    // Changing page title
    document.title = to.meta?.title + ' | COD Squad'
    // return true

    // const user = store.getters['user/user']
    
    // handle if user is not logged
    if (!store.getters['user/isLoggedIn']) {
        if (to.path == '/login') {
            return true
        }

        return { name: 'login' }
    }


    // Update user's last action
    User.online()
    .then(
        res => {
            if(res.data.code == 'USER_SHOWED') {
                if(res.data.data.user.email != store.getters['user/user']?.email) {
                    store.dispatch('user/logout');
                    router.push({ name: 'login' })
                }
            }
        }
    )
    .catch(app.$handleApiError);


    // handle if user is logged and want to show login
    if (to.path == '/login') {
        return { name: '404' }
    }

    const { gate: permission } = to.meta;
    const permissions = store.getters['user/permissions'];

    // if(to.name.startsWith('dashboards/')) {
    //     return true;
    // }

    if(permission === 'all') {
        return true
    }

    if(to.meta.role?.includes(store.getters['user/user'].role)) {
        return true;
    }

    if (!permission && to.path !== '/404') {
        return { name: '404' }
    }

    // Check permission
    if (!permissions.includes(permission) && to.path !== '/404') {
        return { name: '404' };
    }


    return true

    // check if route doesn't have a gate (permission)
    if (!permission || to.path === '/404') {
        if (store.getters['user/isLoggedIn'] && to.path !== '/login') {
            // return fallback path
            return { name: '404' }
        }

        if (!store.getters['user/isLoggedIn'] && to.path !== '/login') {
            return { name: 'login' };
        }

        return true
    } 


    

    

    return true;
}