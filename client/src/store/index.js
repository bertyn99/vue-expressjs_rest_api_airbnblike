import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const URL = 'http://151.80.57.11:3000/api/users'
export default new Vuex.Store({
  state: {
    goods: [],
    loading: true
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    },
    changeLoadingState (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    loadData ({
      commit
    }) {
      axios.get(URL).then((response) => {
        // console.log(response.data, this)
        commit('updateGoods', response.data)
        commit('changeLoadingState', false)
      })
    }
  },
  modules: {
  }
})
