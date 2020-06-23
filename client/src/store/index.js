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
    }
  },
  modules: {
  }
})
