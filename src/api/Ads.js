import Api from './Api'
import Csrf from './Csrf'

class Ads {

    async create(ads) {
        await Csrf.getCookie();
        
        return Api.post('api/ads/new', {
            source : ads.source,
            amount : ads.amount,
            ads_at: ads.ads_at
        });
    }

    async update(id, ads) {
        await Csrf.getCookie();
        
        return Api.post('api/ads/update/' + id, {
            source : ads.source,
            amount : ads.amount,
            ads_at: ads.ads_at
        });
    }

    async all() {
        await Csrf.getCookie();
        return Api.get('api/ads');
    }

    async getShop(id) {
        await Csrf.getCookie();
        return Api.get('api/ads/' + id);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/ads/delete/' + id)
    }
}



export default new Ads();