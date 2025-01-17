import Api, { ApiForm } from './Api'
import Csrf from './Csrf'

class Factorisation {

    async update(id, factorisation) {
        await Csrf.getCookie();
        
        return Api.post('api/factorisations/update/' + id, {
            factorisation_id: factorisation.factorisation_id,
            delivery_id: factorisation.delivery_id ,
            price: factorisation.price,
            commands_number: factorisation.commands_number,
        });
    }

    async updateComment(id , factorisation) {
        await Csrf.getCookie();
        return Api.post('api/factorisations/update/comment/' + id, {
            comment: factorisation.comment
        });
    }

    async updateMethod(id , withdrawal_method_id) {
        await Csrf.getCookie();
        return Api.post('api/v1/factorisation/update/' + id + '/method', {
            withdrawal_method_id
        });
    }

    async updatePaid(id , paid) {
        await Csrf.getCookie();
        return Api.post('api/factorisations/update/payment/' + id, {
            paid: paid
        });
    }

    async updateClose(id , close) {
        await Csrf.getCookie();
        return Api.post('api/factorisations/update/closing/' + id, {
            close: close
        });
    }

    async updateFees(id , fees) {
        await Csrf.getCookie();
        return Api.post('api/factorisations/update/fees/' + id, {
            fees: fees
        });
    }

    async uploadImage(id, data) {
        await Csrf.getCookie();

        return ApiForm.post('api/factorisations/update/' + id + '/attachement', data)
    }

    // async all() {
    //     await Csrf.getCookie();
    //     return Api.get('api/factorisations');
    // }
    
    // async getFactorisation(id) {
        //     await Csrf.getCookie();
        //     return Api.get('api/factorisations/' + id);
        // }
        
        // async delete(id) {
            //     await Csrf.getCookie();
            //     return Api.delete('api/factorisations/delete/' + id)
            // }
            
    // async create(ads) {
        //     await Csrf.getCookie();
        //     return Api.post('api/v1/factorisation/new', ads);
        // }
        
        // async update(id, ads) {
            //     await Csrf.getCookie();
            //     return Api.post('api/v1/factorisation/update/' + id , ads);
            // }
                    
    async sumToBePaid() {
            await Csrf.getCookie()
            return Api.get('api/v1/factorisation/sum')
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/v1/factorisation/delete/' + id)
    }

    async paginate(url = '/', options) {
        await Csrf.getCookie();
        return Api.post('api/v1/factorisation' + url, options);
    }

    async history(id) {
        await Csrf.getCookie();
        return Api.get('api/v1/factorisation/' + id + '/history');
    }
}



export default new Factorisation();