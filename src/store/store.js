import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 10,
    companyResult: null
  },
  
  getters: {

  },
  
  mutations: {

    // Store company in state
    storeCompany (state, payload) {
      console.log("Received in store", state, payload)
      this.state.companyResult = payload;
    },

    // Clear company state
    clearCompany () {
      this.state.companyResult = null;
    }
  },
  
  actions: {}

});