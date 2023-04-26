export const state = () => ({
  isLoggedIn: false,
  token: null,
  error: '',
})

export const mutations = {
  setLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },
  setToken(state, token) {
    state.token = token
  },
  setLoginError(state, error) {
    state.error = error
  }
}

export const actions = {
  login({ commit, redirect }, { email, password }) {
    return this.$axios
      .post('/auth/login', { email, password })
      .then((response) => {
        const { token } = response.data
        commit('setToken', token)
        commit('setLoggedIn', true)
        commit('setLoginError', '')
        this.$cookies.set('token', token)
        this.$router.push('/');
      }).catch(function (error) {
        if (error.response) {
          commit('setLoginError', error.response.data.first_errors.email)
        }
      })
  },
  logout({ commit }) {
    commit('setToken', null)
    commit('setLoggedIn', false)
    this.$cookies.remove('token')
  }
}

export const getters = {
  token: (state) => state.token,
  error: (state) => state.error
}
