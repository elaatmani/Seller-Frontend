import Api from './Api'
import Csrf from './Csrf'

class SupplyRequest {

    async paginate(url = '', options) {
        await Csrf.getCookie();
        return Api.post('api/supply-requests' + url, options);
    }

    async create(supply) {
        await Csrf.getCookie();
        return Api.post('api/supply-requests/new', supply);
    }

    async update(id, supply) {
        await Csrf.getCookie();
        return Api.post('api/supply-requests/' + id, supply);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/supply-requests/' + id);
    }
}

export default new SupplyRequest();