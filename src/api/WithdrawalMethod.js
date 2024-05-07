import Api from './Api'
import Csrf from './Csrf'

class WithdrawalMethod {

    async all() {
        await Csrf.getCookie();
        return Api.get('api/withdrawal-methods');
    }

    async update(id, data) {
        await Csrf.getCookie();
        return Api.post('api/withdrawal-methods/' + id, data);
    }

    async setup(data) {
        await Csrf.getCookie();
        return Api.post('api/withdrawal-methods/setup', data);
    }
}



export default new WithdrawalMethod();