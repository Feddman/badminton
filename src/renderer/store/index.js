import Vue from 'vue'
import Vuex from 'vuex'
import VueElectron from 'vue-electron'
import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTransgender, faVenus, faMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faUserSecret, faVenus, faMars, faTransgender])

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
