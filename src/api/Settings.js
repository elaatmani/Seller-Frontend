import Api from './Api'
import Csrf from './Csrf'

class Settings {

    async create(data) {
        await Csrf.getCookie();
        return Api.post('api/settings/create', data);
    }

}

export default new Settings();