import Api from './Api'
import Csrf from './Csrf'

class Affiliate {

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.post('api/v1/products' + url, options);
    }
    
    async create(product) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/products', product)
    }


}



export default new Affiliate();