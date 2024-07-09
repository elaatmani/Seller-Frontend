import Api from './Api'
import Csrf from './Csrf'

class Category {

    
    async create(category) {
        await Csrf.getCookie();
        return Api.post('api/categories', category)
    }
    
    async all() {
        await Csrf.getCookie();
        return Api.get('api/categories')
    }


}



export default new Category();