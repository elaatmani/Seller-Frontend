export default {
    name: "app",
    namespaced: true,
  
    state: {
      notifications: {
        fetched: false,
        all: [],
        data: [],
        count: 0,
        highlighted: null,
      },
      factorisations: {
        fetched: false,
        tobepaid: 0
      },
      alerts: {
        fetched: false,
        data: []
      }
    },
  
    getters: {
      notifications: (state) => state.notifications,
      factorisations: (state) => state.factorisations,
      alerts: (state) => state.alerts,
    },
  
    mutations: {
      SET_DATA: (state, payload) => {
        state.notifications.data = payload;
      },
      SET_ALERTS_FETCHED: (state, payload) => {
        state.alerts.fetched = payload;
      },
      SET_ALERTS_DATA: (state, payload) => {
        state.alerts.data = payload;
      },
      SET_TO_BE_PAID: (state, payload) => {
        state.factorisations.tobepaid = payload;
      },
      SET_ALL_NOTIFICATIONS: (state, payload) => {
        state.notifications.all = payload;
      },
      SET_COUNT:(state, payload) => {
          state.notifications.count = payload
      },
      SET_HIGHLIGHTED: (state, payload) => {
        state.notifications.highlighted = payload;
      },
      TRIGGER_HIGHLIGHTED: (state, payload) => {
        state.notifications.highlighted = payload;
        state.notifications.count++;
        state.notifications.data.unshift(payload);
      },
      CHANGE_STATUS:(state) => {
        state.notifications.data = state.notifications.data.map(
          item => {
            item.status = "read"
              return item
          },
          state.notifications.count =  0
      )
      }
    },
  
    actions: {
      setData({ commit }, payload) {
        commit("SET_DATA", payload);
      },
      setAlertsFetched({ commit }, payload) {
        commit("SET_ALERTS_FETCHED", payload);
      },
      setAlertsData({ commit }, payload) {
        commit("SET_ALERTS_DATA", payload);
      },
      settobepaid({ commit }, payload) {
        commit("SET_TO_BE_PAID", payload);
      },
      setAllNotifications({ commit }, payload) {
        commit("SET_ALL_NOTIFICATIONS", payload);
      },
      sethighlighted({ commit }, payload) {
        commit("SET_HIGHLIGHTED", payload);
      },
      triggerhighlighted({ commit }, payload) {
        commit("TRIGGER_HIGHLIGHTED", payload);
      },
      setCount({ commit }, payload){
          commit("SET_COUNT", payload);
  
      },
      updatestatus({ commit},payload) {
        commit("CHANGE_STATUS", payload);
      }
    },
  };
  