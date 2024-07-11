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
}

export default new Analytics();