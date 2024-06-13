import Api from './Api'
import Csrf from './Csrf'

class Affiliate {

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/affiliate/products' + url, { params: options });
    }

    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/affiliate/products/' + id);
    }
    
    async create(product) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/products', product)
    }

}



export default new Affiliate();