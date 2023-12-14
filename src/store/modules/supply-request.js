// import {abilities} from "@/config/ability"

let initialState = {
    supply_requests: []
}

export default {
    name: 'supply-request',
    namespaced: true,

    state: initialState,

    getters: {
        supply_requests: (state) => state.supply_requests
    },

    mutations: {
        SET_SUPPLY_REQUESTS: (state, payload) => {
            state.supply_requests = payload
        },
        ADD_SUPPLY_REQUEST: (state, payload) => {
            state.supply_requests.unshift(payload)
        },
        DELETE_SUPPLY_REQUEST: (state, payload) => {
            state.supply_requests = state.supply_requests.filter(i => i.id != payload)
        },
        UPDATE_SUPPLY_REQUEST: (state, payload) => {
            state.supply_requests = state.supply_requests.map(i => i.id == payload.id ? payload : i)
        },
        
    },

    actions: {
        setSupplyRequests: ({ commit }, payload) => {
            commit('SET_SUPPLY_REQUESTS', payload)
        },
        addSupplyRequest: ({ commit }, payload) => {
            commit('ADD_SUPPLY_REQUEST', payload)
        },
        deleteSupplyRequest: ({ commit }, payload) => {
            commit('DELETE_SUPPLY_REQUEST', payload)
        },
        updateSupplyRequest: ({ commit }, payload) => {
            commit('UPDATE_SUPPLY_REQUEST', payload)
        },
    }
}