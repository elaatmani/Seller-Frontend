import Api from './Api'
import Csrf from './Csrf'

class Dashboard {

    async delivery() {
        await Csrf.getCookie();
        return Api.get('api/dashboard/delivery');
    }


    async agente() {
        await Csrf.getCookie();
        return Api.get('api/dashboard/agente');
    }
    // ------------- Kpi Agent ----------------
    
    async getAllAgenteKpis(filters){
        await Csrf.getCookie();
        return Api.get('api/agentekpi/all', {params: filters});
    }

    async treatedOrHandledOrders(filters){
        await Csrf.getCookie();
        return Api.get('api/agentekpi/treated_or_handled', {params: filters});
    }

    async DroppedOrders(filters){
        await Csrf.getCookie();
        return Api.get('api/agentekpi/dropped_orders', {params: filters});
    }

    async ConfirmedOrders(filters){
        await Csrf.getCookie();
        return Api.get('api/agentekpi/confirmed_orders', {params: filters});
    }

    async DeliveredOrders(filters){
        await Csrf.getCookie();
        return Api.get('api/agentekpi/delivered_orders', {params: filters});
    }

    async TopAgentes(filters){
        await Csrf.getCookie();
        return Api.get('api/agentekpi/top_agentes', {params: filters});
    }


}



export default new Dashboard();