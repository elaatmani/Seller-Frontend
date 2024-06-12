import { ApiForm } from './Api'
import Csrf from './Csrf'

class TemporaryMedia {

    async store(file, collection_name, config) {
        // const formdata = new FormData();

        // formdata.append('file', file);

        await Csrf.getCookie();
        return ApiForm.post('api/temporary-file', { file, collection_name }, config)
    }


}



export default new TemporaryMedia();