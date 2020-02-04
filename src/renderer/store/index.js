import Vue from 'vue'
import Vuex from 'vuex'
import VueElectron from 'vue-electron'
import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)
Vue.use(VueElectron)

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
