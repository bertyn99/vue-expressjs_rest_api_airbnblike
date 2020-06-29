import Vue from 'vue'
import Vuex from 'vuex'
import Api from 'axios'

Vue.use(Vuex)
const URL = 'http://151.80.57.11:3000/api'
export default new Vuex.Store({
  state: {
    goods: [],
    user: [],
    currentUser: { name: 'user' },
    reservation: [],
    loading: true
  },
  mutations: {
    updatePosts (state, goods) {
      state.goods = goods
    },
    changeLoadingState (state, loading) {
      state.loading = loading
    },
    SET_USER (state, user) {
      state.user = user
    },
    ADD_GOOD (state, good) {
      const goods = state.goods.concat(good)
      state.goods = goods
    },
    SET_GOODS (state, goods) {
      state.goods = goods
    },
    LOGOUT_USER (state) {
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({})
    },
    SET_CURRENT_USER (state, user) {
      state.currentUser = user
      window.localStorage.currentUser = JSON.stringify(user)
    }
  },
  actions: {
    loadData ({
      commit
    }) {
      Api.get(URL).then((response) => {
        // console.log(response.data, this)
        commit('updateGoods', response.data)
        commit('changeLoadingState', false)
      })
    },
    async loadGoods ({ commit }) {
      const response = await Api.get(URL + '/goods')
      const goods = response.data
      console.log(URL + '/goods')
      console.log(goods)
      commit('SET_GOODS', goods)
    },
    async loadUser ({ commit }) {
      const response = await Api.get(URL + '/goods')
      const goods = response.data
      console.log(URL + '/goods')
      console.log(goods)
      commit('SET_USER', goods)
    },
    logoutUser ({ commit }) {
      commit('LOGOUT_USER')
    },
    loginUser ({ commit }, user) {
      commit('SET_CURRENT_USER', user)
    },
    async login ({ commit }, loginInfo) {
      try {
        const response = await Api().post(URL + '/users/login', loginInfo)
        const user = response.data.data.attributes

        commit('SET_CURRENT_USER', user)
        return user
      } catch {
        return { error: 'Email/password combination was incorrect.  Please try again.' }
      }
    },
    async register ({ commit }, registrationInfo) {
      try {
        const response = await Api().post('/users', registrationInfo)
        const user = response.data.data.attributes

        commit('SET_CURRENT_USER', user)
        return user
      } catch {
        return { error: 'There was an error.  Please try again.' }
      }
    }
  },
  modules: {
  }
})
