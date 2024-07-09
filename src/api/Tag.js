import Api from './Api'
import Csrf from './Csrf'

class Tag {

    
    async create(tag) {
        await Csrf.getCookie();
        return Api.post('api/tags', tag)
    }
    
    async all() {
        await Csrf.getCookie();
        return Api.get('api/tags')
    }


}



export default new Tag();