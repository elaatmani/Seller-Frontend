import Api from './Api'
import Csrf from './Csrf'

class Analytics {

    async getOrdersCountByDays(from = null, to = null) {
        await Csrf.getCookie();
        return Api.get('api/analytics/orders-count-by-days', {
            params: {
                from: from,
                to: to
            }
        });
    }

    async getRevenue(from = null, to = null) {
        await Csrf.getCookie();
        return Api.get('api/analytics/revenue', {
            params: {
                from: from,
                to: to
            }
        });
    }

    async getConfirmationsCount(from = null, to = null) {
        await Csrf.getCookie();
        return Api.get('api/analytics/confirmations-count', {
            params: {
                from: from,
                to: to
            }
        });
    }

    async getDeliveriesCount(from = null, to = null) {
        await Csrf.getCookie();
        return Api.get('api/analytics/deliveries-count', {
            params: {
                from: from,
                to: to
            }
        });
    }

    async getOrdersBySellers(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/orders-by-sellers', {
            params
        });
    }

    async getProductsPerformance(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/products-by-performance', {
            params
        });
    }
}

export default new Analytics();