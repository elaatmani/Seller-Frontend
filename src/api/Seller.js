import Api from './Api'
import Csrf from './Csrf'

class Seller {

    async statistics(filters) {
        await Csrf.getCookie();
        return Api.post('api/v1/seller/statistics', filters);
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.post('api/v1/seller/orders' + url, options);
    }

    async update(id, order) {
        await Csrf.getCookie();
        return Api.post('api/v1/seller/orders/' + id + '/update', order);
    }

    async export(options = {}) {
        await Csrf.getCookie();
        return Api.post('api/v1/seller/orders/export', options);
    }
}



export default new Seller();