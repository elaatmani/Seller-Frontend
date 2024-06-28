import Api from './Api'
import Csrf from './Csrf'

class Affiliate {

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/affiliate/products' + url, { params: options });
    }

    async imported(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/affiliate/products/imported' + url, { params: options });
    }

    async wishlisted(url = '/', options) {
        await Csrf.getCookie();
        return Api.get('api/affiliate/products/wishlisted' + url, { params: options });
    }

    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/affiliate/products/' + id);
    }
    
    async create(product) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/products', product)
    }

    async addImport(id) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/import', { product_id: id })
    }

    async removeImport(id) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/unimport', { product_id: id })
    }

    async addWishlist(id) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/wishlist', { product_id: id })
    }
    async removeWishlist(id) {
        await Csrf.getCookie();
        return Api.post('api/affiliate/unwishlist', { product_id: id })
    }

}



export default new Affiliate();