import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt: {
      token: '',
      received: 0
    },
    user: {
      account: '',
      role: 0,
      email: '',
      avatar: '',
      userId: '',
      _id: ''
    }
  },
  mutations: {
    login (state, data) {
      state.jwt.token = data.token
      state.jwt.received = new Date().getTime()
      state.user.account = data.account
      state.user.role = data.role
      state.user.email = data.email
      if (data.imagefiles.length === 0) {
        state.user.avatar = `${process.env.VUE_APP_API}/files/${data.avatar}`
      } else {
        state.user.avatar = `${process.env.VUE_APP_API}/files/${data.imagefiles}`
      }
      state.user.userId = data.userId
      state.user._id = data._id
    },
    logout (state) {
      state.jwt = {
        token: '',
        received: 0
      }
      state.user = {
        account: '',
        role: 0,
        email: '',
        avatar: '',
        userId: '',
        _id: ''
      }
    },
    extend (state, data) {
      state.jwt.token = data
      state.jwt.received = new Date().getTime()
    },
    getinfo (state, data) {
      state.user.account = data.account
      state.user.role = data.role
      state.user.email = data.email
      state.user.avatar = data.avatar
      state.user.userId = data.userId
      state.user._id = data._id
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    user (state) {
      return { islogin: state.user.account.length > 0, isAdmin: state.user.role === 1, ...state.user }
    }
  },
  plugins: [createPersistedState()]
})
