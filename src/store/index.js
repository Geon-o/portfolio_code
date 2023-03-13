import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/state"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[
      createPersistedState({
        paths: [
            'views'
        ]
      })
  ],
  state,
  actions,
  mutations,
  getters
})
