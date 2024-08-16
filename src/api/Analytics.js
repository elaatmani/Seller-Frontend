import Api from './Api'
import Csrf from './Csrf'

class Analytics {

    async getOrdersCountByDays(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/orders-count-by-days', {
            params
        });
    }
    
    async getChartConfirmation(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/chart-confirmation', {
            params
        });
    }
    async getRevenue(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/revenue', {
            params
        });
    }

    async getProfit(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/profit', {
            params
        });
    }

    async getConfirmationsCount(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/confirmations-count', {
            params
        });
    }

    async getDeliveriesCount(params) {
        await Csrf.getCookie();
        return Api.get('api/analytics/deliveries-count', {
            params
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