import Api from './Api'
import Csrf from './Csrf'

class Credit {

   
    async create(credit) {
        await Csrf.getCookie();
        return Api.post('api/credit/new', credit);
    }

    async update(id, credit) {
        await Csrf.getCookie();
        return Api.post('api/credit/update/' + id , credit);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/credit/delete/' + id)
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.post('api/credit' + url, options);
    }
}



export default new Credit();