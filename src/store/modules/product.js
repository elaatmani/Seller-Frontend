// import {abilities} from "@/config/ability"

let initialState = {
    products: [],
    fetched: false
}

export default {
    name: 'product',
    namespaced: true,

    state: initialState,

    getters: {
        products: (state) => state.products,
        fetched: (state) => state.fetched
    },

    mutations: {
        SET_PRODUCTS: (state, payload) => {
            state.products = payload
        },

        SET_PRODUCT: (state, payload) => {
            state.products = state.products.map(
                item => {
                    if(item.id === payload.id) {
                        return payload
                    }
                    return item
                }
            )
        },

        ADD_PRODUCT: (state, payload) => {
            state.products.push(payload)
        },

        SET_FETCHED: (state, payload) => {
            state.fetched = payload
        },
    },

    actions: {
        setProducts: ({ commit }, payload) => {
            commit('SET_PRODUCTS', payload)
        },

        setProduct: ({ commit }, payload) => {
            commit('SET_PRODUCT', payload)
        },

        addProduct: ({ commit }, payload) => {
            commit('ADD_PRODUCT', payload)
        },

        setFetched: ({ commit }, payload) => {
            commit('SET_FETCHED', payload)
        },
    }
}