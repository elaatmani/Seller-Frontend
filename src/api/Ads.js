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

    async getShop(id) {
        await Csrf.getCookie();
        return Api.get('api/ads/' + id);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/ads/delete/' + id)
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.post('api/ads' + url, options);
    }
}



export default new Ads();