import store  from '@/store'; // import your Vuex store

export const newNotificationHandler = async (event) => {
    console.log('New notification received:', event);
    if (store) {
        try {
            await store.dispatch('app/sethighlighted', event);
        } catch (error) {
            console.error('Error dispatching action:', error);
        }
    } else {
        console.log('Store is not initialized');
    }
}