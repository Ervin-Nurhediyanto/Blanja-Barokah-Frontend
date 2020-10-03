import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/User'
import Product from './modules/Product'
import History from './modules/History'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    User,
    Product,
    History
  }
})
