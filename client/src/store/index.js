import Vue from 'vue'
import Vuex from 'vuex'
import api from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, api)
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
      api.get(URL).then((response) => {
        // console.log(response.data, this)
        commit('updateGoods', response.data)
        commit('changeLoadingState', false)
      })
    },
    loadGoods ({ commit }) {
      api.get(URL + '/goods').then((response) => {
        const goods = response.data
        console.log(URL + '/goods')
        console.log(goods)
        commit('SET_GOODS', goods)
      }
      )
    },
    async loadUser ({ commit }) {
      const response = await api().get(URL + '/goods')
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
        console.log('test')
        const response = await api.post(URL + '/users/login', loginInfo)
        console.log(response)
        const user = response.data
        console.log(user)
        commit('SET_CURRENT_USER', user)
        return user
      } catch {
        return { error: 'Email/password combination was incorrect.  Please try again.' }
      }
    },
    async register ({ commit }, registrationInfo) {
      try {
        const response = await api().post('/users', registrationInfo)
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
