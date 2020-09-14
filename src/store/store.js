import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companyResult: null,
    companyWasFetched: false
  },

  getters: {

  },

  mutations: {

    // Store company in state
    storeCompany (state, payload) {
      console.log('Received in store', state, payload)
      this.state.companyResult = payload
    },

    // Clear company state
    clearCompany () {
      this.state.companyResult = null
    },

    // Update if result was fetched successfully
    storeResultSuccess (state, payload) {
      console.log('storeResultSuccess', state, payload)
      this.state.companyWasFetched = payload
    }

  },

  actions: {}

})
