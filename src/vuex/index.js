import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate'

const state = {
    headermes:'',
    historypath:'',
    userinfo:null
}
const mutations = {
      'CHANGEHEADERMES'(state,upload){
          state.headermes = upload
      },
      'CHANGEHHISTORY'(state,upload){
        state.historypath = upload
      },
      'CHANGEUSERINFO'(state,upload){
        state.userinfo = upload
      }
}
const store = new Vuex.Store({
      state,
      mutations, 
    plugins: [
        createPersistedState({
          storage: {
            getItem: key => localStorage.getItem(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
              localStorage.setItem(key, value),
            removeItem: key => localStorage.removeItem(key),
          },
        }),
      ]
  })

  export default store