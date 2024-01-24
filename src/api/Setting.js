import Api from './Api'
import Csrf from './Csrf'

class Setting {

    async get(keys) {
        await Csrf.getCookie();
        return Api.get('api/settings', { params: { keys } });
    }

}

export default new Setting();